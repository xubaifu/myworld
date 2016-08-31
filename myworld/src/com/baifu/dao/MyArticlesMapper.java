package com.baifu.dao;

import java.util.List;
import java.util.Map;

import com.baifu.entity.Note;
import com.baifu.entity.NoteBook;

@MyBatisRepository
public interface MyArticlesMapper {
	//查询文章（所有）
	List<Note> findMyAllArticles(Map<String,Object> map);
	//查询文章（分享）
	List<Note> findMyShare(Map<String,Object> map);
	//查询文章（收藏）
	List<Note> findMyCollection(Map<String,Object> map);
	/**
	 * 查询文章分类标题
	 * @return
	 */
	List<NoteBook> loadArticleType();
}
