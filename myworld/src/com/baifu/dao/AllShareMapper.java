package com.baifu.dao;

import java.util.List;
import java.util.Map;

import com.baifu.entity.Note;
@MyBatisRepository
public interface AllShareMapper {
	//查询热门推荐（按日期）
	List<Note> findShareNoteByDate(Map<String,Object> map);
	//查询热门推荐（按访问次数）
	List<Note> findShareNoteByTimes(Map<String,Object> map);
}
