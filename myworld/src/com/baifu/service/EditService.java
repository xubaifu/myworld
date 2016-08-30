package com.baifu.service;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.baifu.dao.EditMapper;
import com.baifu.entity.Note;
import com.baifu.entity.NoteBook;

@Service
public class EditService {
	@Resource
	private EditMapper editMapper;
	
	/**
	 * 查询文章分类
	 * @return
	 */
	public List<NoteBook> loadArticleType(){
		List<NoteBook> list = null;
		try {
			list = editMapper.loadArticleType();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	/**
	 * 分享发表文章
	 * @param note
	 */
	public boolean insertNewArticleForShare(Note note){
		try {
			String id = UUID.randomUUID().toString();
			note.setCn_note_id(id);
			note.setCn_note_type_code(1004);
			editMapper.insertArticle(note);
			editMapper.insertShareArticle(note);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
	/**
	 * 私密发表文章
	 * @param note
	 */
	public boolean insertNewArticleForPrivate(Note note){
		try {
			note.setCn_note_id(UUID.randomUUID().toString());
			note.setCn_note_type_code(1001);
			editMapper.insertArticle(note);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
}
