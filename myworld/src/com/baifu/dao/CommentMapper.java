package com.baifu.dao;

import com.baifu.entity.Comment;
import java.util.List;

@MyBatisRepository
public abstract interface CommentMapper {
	//添加评论
	public abstract void addComment(Comment paramComment);
	//查询评论
	public abstract List<Comment> getComment(String paramString);
}