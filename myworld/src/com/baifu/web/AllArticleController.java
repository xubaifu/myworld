package com.baifu.web;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.baifu.entity.NoteBook;
import com.baifu.entity.Result;
import com.baifu.service.AllArticleService;

/**
 * 所有文章
 * @author xubaifu
 *
 */
@Controller
@RequestMapping("/allArticleObj")
public class AllArticleController {
	Logger logger=Logger.getLogger(MyWorldController.class);
	@Resource
	private AllArticleService allArticleService;
	/**
	 * 按条件查询所有文章
	 * @param noteType 文章类型
	 * @param begin 起始页
	 * @param pageSize 
	 * @param loadType 加载类型（按日期，按访问量）
	 * @param searchType 搜索类型（标题，标签，内容）
	 * @return
	 */
	@RequestMapping("/findAllArticle.do")
	@ResponseBody
	public Result findNote(String articleType,int begin,int pageSize,String loadType,String searchType,String searchContent){
		List<Object> list=allArticleService.findAllArticles(articleType, begin, pageSize,loadType,searchType,searchContent);
		return new Result(list);
	}
	
	/**
	 * 查询文章分类
	 * @return
	 */
	@RequestMapping("/loadArticleType.do")
	@ResponseBody
	public Result loadArticleType(){
		List<NoteBook> list=allArticleService.loadArticleType();
		return new Result(list);
	}
}
