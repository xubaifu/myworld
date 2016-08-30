package com.baifu.dao;

import java.util.List;
import java.util.Map;

import com.baifu.entity.Note;
import com.baifu.entity.NoteBook;
@MyBatisRepository
public interface AllArticleMapper {
	//查询文章（按日期）
	List<Note> findArticleByDate(Map<String,Object> map);
	//查询文章（按访问次数）
	List<Note> findArticleByTimes(Map<String,Object> map);
	/**
	 * 查询文章分类标题
	 * @return
	 */
	List<NoteBook> loadArticleType();
}
