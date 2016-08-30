package com.baifu.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.baifu.entity.Note;
import com.baifu.entity.Result;
import com.baifu.service.ArticleContentsService;
import com.baifu.util.SystemConstant;

@Controller
@RequestMapping("/articleContent")
public class ArticleContentsController {
	@Resource
	private ArticleContentsService articleContentsService;
	
	/**
	 * 根据id查询文章信息
	 * @param noteId
	 * @return
	 */
	@RequestMapping("/selectContentsFun.do")
	@ResponseBody
	public Result selectContentsById(String noteId){
		List<Note> list=articleContentsService.selectContentsById(noteId);
		return new Result(list);
	}
	
	/**
	 * 收藏文章
	 * @param userId
	 * @return
	 */
	@RequestMapping("/collectArticleFun.do")
	@ResponseBody
	public Result collectArticle(String userId,String noteId){
		Map<String, Object> map = articleContentsService.collectArticle(userId,noteId);
		int flag = Integer.valueOf(map.get("flag").toString());
		Map<String, Object> m = new HashMap<String, Object>();
		if(flag == SystemConstant.SUCCESS){
			m.put("flag", flag);
		}else{
			m.put("flag", flag);
		}
		return new Result(m);
	}
	/**
	 * 判断是否收藏
	 * @param userId
	 * @param noteId
	 * @return
	 */
	@RequestMapping("/checkCollectionFun.do")
	@ResponseBody
	public Result checkCollection(String userId,String noteId){
		String count = articleContentsService.checkCollection(userId, noteId);
		return new Result(count);
	}
	/**
	 * 取消收藏
	 * @param userId
	 * @param noteId
	 * @return
	 */
	@RequestMapping("/cancelCollectionFun.do")
	@ResponseBody
	public Result cancelCollectionFun(String userId,String noteId){
		Map<String, Object> map = articleContentsService.cancelCollectionFun(userId, noteId);
		int flag = Integer.valueOf(map.get("flag").toString());
		Map<String, Object> m = new HashMap<String, Object>();
		if(flag == SystemConstant.SUCCESS){
			m.put("flag", flag);
		}else{
			m.put("flag", flag);
		}
		return new Result(m);
	}

}
