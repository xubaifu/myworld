package com.baifu.dao;

import java.util.List;
import java.util.Map;

import com.baifu.entity.Note;

@MyBatisRepository
public interface MyWorldMapper {

	/**
	 * 查询某用户的所有文章
	 */
	//查询我的文章（默认状态）
	List<Note> findMyNoteByUser(Map<String,Object> map);
	//查询我的文章（分享）
	List<Note> findMyCollectionByUser(Map<String,Object> map);
	//查询我的文章（收藏）
	List<Note> findMyShareNoteByUser(Map<String,Object> map);
	//查询热门推荐（按日期）
	List<Note> findShareNoteByDate(Map<String,Object> map);
	//查询热门推荐（按访问次数）
	List<Note> findShareNoteByTimes(Map<String,Object> map);
	/**
	 * 模糊匹配搜索某用户的文章
	 */
	List<Note> searchNote(Map<String,Object> param);
}
