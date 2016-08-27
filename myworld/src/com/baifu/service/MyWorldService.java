package com.baifu.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.baifu.dao.MyWorldMapper;
import com.baifu.entity.Note;
import com.baifu.util.SystemConstant;

@Service
public class MyWorldService  implements SystemConstant {

	@Resource
	private MyWorldMapper myWorldMapper;
	
	/**
	 * 查询某用户下的所有文章
	 * @param userId
	 * @return
	 */
	public List<Object> findNoteByUser(String userId){
		Map<String,Object> param=new HashMap<String,Object>();
		param.put("userId", userId);
		List<Object> list = new ArrayList<Object>();
		//查询我的文章（正常）
		List<Note> list1 =myWorldMapper.findMyNoteByUser(param);
		//查询我的文章（收藏）
		List<Note> list2 =myWorldMapper.findMyCollectionByUser(param);
		//查询我的文章（分享）
		List<Note> list3 =myWorldMapper.findMyShareNoteByUser(param);
		//查询热门推荐
		List<Note> list4 =myWorldMapper.findShareNoteByDate(param);
		List<Note> list5 =myWorldMapper.findShareNoteByTimes(param);
		list.add(list1);
		list.add(list2);
		list.add(list3);
		list.add(list4);
		list.add(list5);
		return list;
	}
}
