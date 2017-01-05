package com.baifu.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.baifu.dao.AdminMapper;
import com.baifu.entity.NoteBook;
import com.baifu.entity.NotebookType;
import com.baifu.entity.User;
import com.baifu.util.SystemConstant;
@Service
public class AdminService  implements SystemConstant {
	@Resource
	private AdminMapper adminMapper;
	/**
	 * 查询文章一级分类
	 * @return
	 */
	public List<NotebookType> getLibraryType(){
		Map<String,Object> param=new HashMap<String,Object>();
		List<NotebookType> list = new ArrayList<NotebookType>();
		try {
			list =adminMapper.getLibraryType(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	/**
	 * 查询文章二级分类
	 * @return
	 */
	public List<NoteBook> getArticleType(){
		Map<String,Object> param=new HashMap<String,Object>();
		List<NoteBook> list = new ArrayList<NoteBook>();
		try {
			list =adminMapper.getArticleType(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	/**
	 * 获取用户基本信息
	 * @return
	 */
	public List<User> getUser(){
		Map<String,Object> param=new HashMap<String,Object>();
		List<User> list = new ArrayList<User>();
		try {
			list =adminMapper.getUser(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	/**
	 *修改用户基本信息
	 * @return
	 */
	public Map<String,Object> updateUser(Map<String,Object> param){
		//Map<String,Object> param=new HashMap<String,Object>();
		try {
			adminMapper.updateUser(param);
			param.put("flag", SUCCESS);
		} catch (Exception e) {
			param.put("flag", OTHER_FALSE);
			e.printStackTrace();
		}
		return param;
	}
}
