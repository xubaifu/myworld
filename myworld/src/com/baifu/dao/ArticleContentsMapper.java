package com.baifu.dao;

import java.util.List;
import java.util.Map;

import com.baifu.entity.Note;

@MyBatisRepository
public interface ArticleContentsMapper {
	//根据id查询文章详细信息
	List<Note> selectContentsById(String noteId);
	//根据id更新字段
	void updateTimes(String noteId);
	//收藏文章
	void collectArticle(Map<String,Object> map);
	//判断用户是否收藏该文章
	String checkCollection(Map<String,Object> map);
	//取消收藏
	void cancelCollectionFun(Map<String,Object> map);
}
