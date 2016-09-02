package com.baifu.service;

import com.baifu.dao.CommentMapper;
import com.baifu.entity.Comment;
import com.baifu.util.SystemConstant;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service
public class CommentService implements SystemConstant {

	@Resource
	private CommentMapper commentMapper;

	/**
	 * 添加评论信息
	 * @param comment
	 * @return
	 */
	public Map<String, Object> addComment(Comment comment) {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			this.commentMapper.addComment(comment);
			map.put("flag", Integer.valueOf(0));
		} catch (Exception e) {
			map.put("flag", Integer.valueOf(4));
			e.printStackTrace();
		}
		return map;
	}
	/**
	 * 查询评论信息
	 * @param noteId
	 * @return
	 */
	public List<Comment> getComment(String noteId) {
		List<Comment> list = new ArrayList<Comment>();
		try {
			list = this.commentMapper.getComment(noteId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}