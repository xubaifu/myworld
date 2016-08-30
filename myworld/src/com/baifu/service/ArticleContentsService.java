package com.baifu.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.baifu.dao.ArticleContentsMapper;
import com.baifu.entity.Note;
import com.baifu.util.SystemConstant;

@Service
public class ArticleContentsService implements SystemConstant {

	@Resource
	private ArticleContentsMapper articleContentsMapper;
	/**
	 * 根据id查询文章详细信息
	 * @param noteId
	 * @return
	 */
	public List<Note> selectContentsById(String noteId){
		List<Note> list = new ArrayList<Note>();
		try {
			articleContentsMapper.updateTimes(noteId);
			list  = articleContentsMapper.selectContentsById(noteId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	/**
	 * 收藏文章
	 * @param userId
	 * @param noteId
	 * @return
	 */
	public Map<String,Object> collectArticle(String userId,String noteId){
		Map<String,Object> param=new HashMap<String,Object>();
		param.put("noteId", noteId);
		param.put("userId", userId);
		Map<String,Object> result=new HashMap<String,Object>();
		try {
			articleContentsMapper.collectArticle(param);
			result.put("flag", SUCCESS);
		} catch (Exception e) {
			result.put("flag", OTHER_FALSE);
		}
		
		return result;
	}
	
	/**
	 * 查看用户是否收藏某篇文章
	 * @param userId
	 * @param noteId
	 * @return
	 */
	public String checkCollection(String userId,String noteId){
		Map<String,Object> param=new HashMap<String,Object>();
		param.put("noteId", noteId);
		param.put("userId", userId);
		String count = articleContentsMapper.checkCollection(param);
		return count;
	}
	/**
	 * 取消收藏
	 * @param userId
	 * @param noteId
	 * @return
	 */
	public Map<String,Object> cancelCollectionFun(String userId,String noteId){
		Map<String,Object> param=new HashMap<String,Object>();
		param.put("noteId", noteId);
		param.put("userId", userId);
		Map<String,Object> result=new HashMap<String,Object>();
		try {
			articleContentsMapper.cancelCollectionFun(param);
			result.put("flag", SUCCESS);
		} catch (Exception e) {
			result.put("flag", OTHER_FALSE);
		}
		return result;
	}
}
