package com.baifu.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.baifu.dao.AllShareMapper;
import com.baifu.entity.Note;
import com.baifu.util.SystemConstant;

@Service
public class AllShareService  implements SystemConstant {
	@Resource
	private AllShareMapper allShareMapper;
	
	/**
	 * 查询分享的文章
	 * @param noteType 文章所属类型
	 * @param begin 起始条数
	 * @param pageSize 
	 * @return
	 */
	public List<Object> findAllShareNoe(String noteType,int begin,int pageSize,String loadType){
		Map<String,Object> param=new HashMap<String,Object>();
		param.put("noteType", noteType);
		param.put("begin", begin);
		param.put("pageSize", pageSize);
		List<Object> list = new ArrayList<Object>();
		//查询热门推荐
		try {
			//如果loadType为空，则默认加载最新推荐和最热推荐的前八条,//如果loadType不为空，则加载各自的数据	
			if("".equals(loadType)){
				List<Note> list1 =allShareMapper.findShareNoteByDate(param);
				List<Note> list2 =allShareMapper.findShareNoteByTimes(param);
				list.add(list1);
				list.add(list2);
			}else if("date".equals(loadType)){
				List<Note> list1 =allShareMapper.findShareNoteByDate(param);
				list.add(list1);
			}else if("times".equals(loadType)){
				List<Note> list1 =allShareMapper.findShareNoteByTimes(param);
				list.add(list1);
			}
			
		} catch (Exception e) {
			list.add("获取热门推荐信息失败");
			e.printStackTrace();
		}
		
		return list;
	}
}
