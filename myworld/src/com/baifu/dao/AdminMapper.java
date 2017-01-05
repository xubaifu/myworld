package com.baifu.dao;

import java.util.List;
import java.util.Map;

import com.baifu.entity.NoteBook;
import com.baifu.entity.NotebookType;
import com.baifu.entity.User;

@MyBatisRepository
public interface AdminMapper {
	//查询文章分类
	List<NotebookType> getLibraryType(Map<String,Object> map);
	
	List<NoteBook> getArticleType(Map<String,Object> map);
	
	List<User> getUser(Map<String,Object> map);
	//修改用户信息
	void updateUser(Map<String,Object> map);
}
