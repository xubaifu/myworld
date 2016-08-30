package com.baifu.dao;

import java.util.List;

import com.baifu.entity.NotebookType;
import com.baifu.entity.User;

@MyBatisRepository
public interface UserMapper {
	/**
	 * 根据用户名查询
	 * @param userName
	 * @return
	 */
	User findByName(String userName);
	/**
	 * 插入新用户
	 * @param user
	 */
	void save(User user);
	/**
	 * 更新密码
	 */
	void update(User user);
	
	//查询文章分类标题
	List<NotebookType> loadHeadTitle();
}
