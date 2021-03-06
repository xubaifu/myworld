package com.baifu.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.baifu.entity.NoteBook;
import com.baifu.entity.NotebookType;
import com.baifu.entity.Result;
import com.baifu.entity.User;
import com.baifu.service.AdminService;

@Controller
@RequestMapping("/admin")
public class AdminController {
	Logger logger=Logger.getLogger(MyWorldController.class);
	@Resource
	private AdminService adminService;
	/**
	 * 查询文章一级分类
	 * @return
	 */
	@RequestMapping("/getLibraryType.do")
	@ResponseBody
	public Result getLibraryType(){
		List<NotebookType> list=adminService.getLibraryType();
		return new Result(list);
	}
	/**
	 * 查询文章二级分类
	 * @return
	 */
	@RequestMapping("/getArticleType.do")
	@ResponseBody
	public Result getArticleType(){
		List<NoteBook> list=adminService.getArticleType();
		return new Result(list);
	}
	
	/**
	 * 获取用户基本信息
	 * @return
	 */
	@RequestMapping("/getUserFunction.do")
	@ResponseBody
	public Result getUserFunction(){
		List<User> list=adminService.getUser();
		return new Result(list);
	}
	
	/**
	 * 修改用户基本信息
	 * @return
	 */
	@RequestMapping("/updateUser.do")
	@ResponseBody
	public Result updateUser(String cn_user_name,String cn_user_token,String cn_user_desc){
		Map<String, Object> m = new HashMap<String, Object>();
		m.put("cn_user_name", cn_user_name);
		m.put("cn_user_token", cn_user_token);
		m.put("cn_user_desc", cn_user_desc);
		m = adminService.updateUser(m);
		return new Result(m);
	}
}
