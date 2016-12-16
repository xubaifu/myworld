package com.baifu.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.baifu.entity.NotebookType;
import com.baifu.entity.Result;
import com.baifu.entity.User;
import com.baifu.service.LoginService;
import com.baifu.util.SystemConstant;
/**
 * 登录模块
 * 
 * @author Administrator
 * 
 */
@Controller
@RequestMapping("/login")
public class LoginController {
	@Resource
	private LoginService loginService;

	/**
	 * 页面传入的参数，SpringMVC会自动接收， 接收的时机是在调用方法之前。 实际上SpringMVC仅仅是采用了傻瓜式的
	 * 处理方式进行判断，它会遍历该方法的 所有参数，然后判断页面传入的参数是否 与该参数匹配，若匹配则赋值，否则不做 任何处理。
	 *  匹配规则：
	 * 如果是实体或Map，SpringMVC会将参数 与实体属性或Map的可以匹配；
	 *  如果是基本类型，SpringMVC会直接按照 参数名匹配；
	 */
	/**
	 * 注册
	 * @param user
	 * @return
	 */
	@RequestMapping("/register.do")
	@ResponseBody
	public Result register(User user) {
		//System.out.println("into resister");
		boolean b = loginService.addUser(user);
		//System.out.println("out register");
		return new Result(b);
	}

	/**
	 * 登录
	 * @param userName
	 * @param password
	 * @param session
	 * @return
	 */
	@RequestMapping("/login.do")
	@ResponseBody
	public Result login(String userName, String password, HttpSession session) {
		Map<String, Object> map = loginService.checkUser(userName, password);
		int flag = Integer.valueOf(map.get("flag").toString());
		if (flag == SystemConstant.SUCCESS) {
			// 将登录信息存入session
			User user = (User) map.get("user");
			session.setAttribute("user", map.get("user"));
			session.setAttribute("userName", user.getCn_user_name());
			session.setAttribute("userId", user.getCn_user_id());
			//用户标识：1为管理员，0为普通用户，2为vip用户
			session.setAttribute("adminTab", user.getCn_user_token());
			Map<String, Object> m = new HashMap<String, Object>();
			m.put("flag", flag);
			m.put("userID", user.getCn_user_id());
			m.put("userName", user.getCn_user_name());
			return new Result(m);
		} else {
			Map<String, Object> m = new HashMap<String, Object>();
			m.put("flag", flag);
			return new Result(m);
		}
	}
	/**
	 * 退出
	 * @param session
	 * @return
	 */
	@RequestMapping("/logout.do")
	@ResponseBody
	public Result logout(HttpSession session){
		//注销session
		session.invalidate();
		return new Result();
	}
	/**
	 * 更新密码
	 * @return
	 */
	@RequestMapping("/update.do")
	@ResponseBody
	public Result update(String oldPassword,String newPassword,HttpSession session){
		User user=(User) session.getAttribute("user");
		if(user == null){
			Map<String, Object> m = new HashMap<String, Object>();
			m.put("flag", SystemConstant.USER_FLAG);
			return new Result(m);
		}
		//更新密码
		Map<String, Object> map = loginService.updatePassword(
				user.getCn_user_name(),
				oldPassword,
				newPassword
				);
		int flag = Integer.valueOf(map.get("flag").toString());
		if(flag == SystemConstant.SUCCESS){
			//更新成功
			Map<String, Object> m = new HashMap<String, Object>();
			m.put("flag", flag);
			return new Result(m);
		}else{
			Map<String, Object> m = new HashMap<String, Object>();
			m.put("flag", flag);
			return new Result(m);
		}
	}
	
	//查询文章分类标题
	@RequestMapping("/loadHeadTitleFun.do")
	@ResponseBody
	public Result loadHeadTitleFun(){
		List<NotebookType> list=loginService.findHeadTitle();
		return new Result(list);
	}
	
	//第三方登录
	@RequestMapping("/baidu.do")
	@ResponseBody
	public Result baidu(String code,HttpSession session){
		List<User> list = loginService.baidu(code,session);
		return new Result(list);
	}
	
	
	
	
}
