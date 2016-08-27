package com.baifu.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.baifu.dao.AllArticleMapper;
import com.baifu.entity.Note;
import com.baifu.entity.NoteBook;

@Service
public class AllArticleService {
	@Resource
	private AllArticleMapper allArticleMapper;
	
	/**
	 * 查询分享的文章
	 * @param noteType 文章所属类型
	 * @param begin 起始条数
	 * @param pageSize 
	 * @return
	 */
	public List<Object> findAllArticles(String noteType,int begin,int pageSize,String loadType,String searchType,String searchContent){
		Map<String,Object> param=new HashMap<String,Object>();
		param.put("noteType", noteType);
		param.put("searchType", searchType);
		param.put("searchContent", searchContent);
		param.put("begin", begin);
		param.put("pageSize", pageSize);
		List<Object> list = new ArrayList<Object>();
		//查询文章
		try {
			//如果loadType为空，则默认加载最新推荐和最热推荐的前十条,//如果loadType不为空，则加载各自的数据	
			if("".equals(loadType)){
				List<Note> list1 =allArticleMapper.findArticleByDate(param);
				List<Note> list2 =allArticleMapper.findArticleByTimes(param);
				list.add(list1);
				list.add(list2);
			}else if("date".equals(loadType)){
				List<Note> list1 =allArticleMapper.findArticleByDate(param);
				list.add(list1);
			}else if("times".equals(loadType)){
				List<Note> list1 =allArticleMapper.findArticleByTimes(param);
				list.add(list1);
			}
			
		} catch (Exception e) {
			list.add("获取文章信息失败");
			e.printStackTrace();
		}
		
		return list;
	}
	
	/**
	 * 查询文章分类
	 * @return
	 */
	public List<NoteBook> loadArticleType(){
		List<NoteBook> list = null;
		try {
			list = allArticleMapper.loadArticleType();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}
