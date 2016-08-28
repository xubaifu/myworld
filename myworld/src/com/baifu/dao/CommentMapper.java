package com.baifu.dao;

import java.util.List;

import com.baifu.entity.Comment;

@MyBatisRepository
public interface CommentMapper {
	//添加评论
	void addComment(Comment comment);
	//查询评论信息
	List<Comment> getComment(String noteId);
}
