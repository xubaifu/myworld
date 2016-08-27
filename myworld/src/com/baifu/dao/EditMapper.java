package com.baifu.dao;

import java.util.List;

import com.baifu.entity.Note;
import com.baifu.entity.NoteBook;

@MyBatisRepository
public interface EditMapper {
	/**
	 * 查询文章分类标题
	 * @return
	 */
	List<NoteBook> loadArticleType();
	/**
	 * 新增文章
	 * @param note
	 */
	void insertArticle(Note note);
	/**
	 * 新增分享文章
	 * @param note
	 */
	void insertShareArticle(Note note);
}
