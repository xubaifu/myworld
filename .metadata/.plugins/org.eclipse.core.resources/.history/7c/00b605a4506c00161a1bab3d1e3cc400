package com.baifu.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.baifu.dao.CommentMapper;
import com.baifu.entity.Comment;
import com.baifu.util.SystemConstant;

@Service
public class CommentService implements SystemConstant {
	@Resource
	private CommentMapper commentMapper;
	/**
	 * 添加评论
	 * @param comment
	 * @return
	 */
	public Map<String,Object> addComment(Comment comment){
		Map<String,Object> map=new HashMap<String,Object>();
		try {
			commentMapper.addComment(comment);
			map.put("flag", SUCCESS);
		} catch (Exception e) {
			map.put("flag", OTHER_FALSE);
			e.printStackTrace();
		}
		return map;
	}
	/**
	 * 查询评论信息
	 * @param noteId
	 * @return
	 */
	public List<Comment> getComment(String noteId){
		List<Comment> list = new ArrayList<Comment>();
		try {
			list = commentMapper.getComment(noteId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}
