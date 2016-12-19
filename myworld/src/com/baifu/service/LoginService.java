package com.baifu.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import com.baifu.dao.UserMapper;
import com.baifu.entity.NotebookType;
import com.baifu.entity.User;
import com.baifu.util.Md5Util;
import com.baifu.util.SystemConstant;
import com.baifu.util.ThirdPartLoginUtil;

/**
 * 登录模块业务组件2来管理该业务组件的事务，声明式事务很简单，只需要配置即可，但是要求这些业务方法 具有一定的规律，以便事务管理组件可以识别该方法的增删改查
 * 将来要使用Spring声明式
 */
@Service
public class LoginService implements SystemConstant {
	@Resource
	private UserMapper userMapper;
	/**
	 * 添加用户
	 * 
	 * @return
	 */
	public boolean addUser(User user) {
		if (user == null) {
			throw new RuntimeException("参数不能为空");
		}
		// 1 判断用户名是否存在
		User u = userMapper.findByName(user.getCn_user_name());
		if (u == null) {
			// 2 新增用户
			createUser(user);
		} else {
			// 用户名已存在
			return false;
		}
		return true;
	}

	
	// 新增用户
	public void createUser(User user) {
		//user.setCn_user_id(UUID.randomUUID().toString());
		String md5Password = Md5Util.md5(user.getCn_user_password());
		user.setCn_user_password(md5Password);
		try {
			userMapper.save(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	/**
	 * 校验帐号和密码是否正确
	 * @param userName
	 * @param password
	 * @return
	 */
	public Map<String,Object> checkUser(String userName,String password){
		
		if(userName==null){
			throw new RuntimeException("用户名不能为空");
		}
		if(password==null){
			throw new RuntimeException("密码不能为空");
		}
		Map<String,Object> map=new HashMap<String,Object>();
		//校验用户名是否正确
		User u=userMapper.findByName(userName);
		if(u==null){
			//用户名不存在
			map.put("flag", USER_NAME_ERROR);
			return map;
		}
		//需要对加密后的密码进行比较
		String m5dPassword=Md5Util.md5(password);
	
		if(!m5dPassword.equals(u.getCn_user_password())){
			map.put("flag", PASSWORD_ERROR);
			return map;
		}
		//校验成功
		map.put("flag", SUCCESS);
		map.put("user", u);
		return map;
	}
	/**
	 * 更新密码
	 * @param userName
	 * @param password
	 * @param newPassword
	 * @return
	 */
	public Map<String,Object> updatePassword(String userName,String password,String newPassword){
		Map<String,Object> map=new HashMap<String,Object>();
		User u=userMapper.findByName(userName);
		//获取原密码
		String oldPassword=u.getCn_user_password();
		//密码验证
		if(oldPassword.equals(Md5Util.md5(password))){
			//密码正确
			map.put("flag", SUCCESS);
			//更新密码
			u.setCn_user_password(Md5Util.md5(newPassword));
			userMapper.update(u);
			return map;
		}else{
			//密码错误
			map.put("flag", PASSWORD_ERROR);
			return map;
			
		}
		
		//return map;
	}
	
	//查询文章分类标题
	public List<NotebookType> findHeadTitle(){
		List<NotebookType> list = null;
		try {
			list = userMapper.loadHeadTitle();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return list;
	}
	
	//百度第三方登录
	public List<User> baidu(String code,HttpSession session){
		List<User> list = null;
		try {
			String token = ThirdPartLoginUtil.getAccessToken(code);
			if(token != null){
				Map<String,String> map = ThirdPartLoginUtil.getUserMessage(token);
				if(map != null){
					//判断用户id是否存在
					List<User> listUser = userMapper.findByUserId(map.get("uid"));
					if(listUser.size() != 0){
						// 将登录信息存入session
						User user = (User) listUser.get(0);
						session.setAttribute("user", user);
						session.setAttribute("userName", map.get("uname"));
						session.setAttribute("userId", user.getCn_user_id());
						//用户标识：1为管理员，0为普通用户，2为vip用户
						session.setAttribute("adminTab", user.getCn_user_token());
						//更新用户名
						user.setCn_user_name(map.get("uname"));
						user.setCn_user_third_id(map.get("uid"));
						userMapper.updateUsername(user);
					}else{
						/*User user = (User) listUser.get(0);
						userMapper.save(user);*/
						User user = new User();
						user.setCn_user_name(map.get("uname"));
						user.setCn_user_third_id(map.get("uid"));
						user.setCn_user_desc("第三方登录用户");
						userMapper.save(user);
						listUser = userMapper.findByUserId(map.get("uid"));
						user = (User) listUser.get(0);
						session.setAttribute("user", user);
						session.setAttribute("userName", map.get("uname"));
						session.setAttribute("userId", user.getCn_user_id());
						//用户标识：1为管理员，0为普通用户，2为vip用户
						session.setAttribute("adminTab", user.getCn_user_token());
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
}
