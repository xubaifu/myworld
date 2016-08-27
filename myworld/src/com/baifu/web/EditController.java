package com.baifu.web;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.baifu.entity.Note;
import com.baifu.entity.NoteBook;
import com.baifu.entity.Result;
import com.baifu.service.EditService;

@Controller
@RequestMapping("/edit")
public class EditController {
	
	@Resource
	private EditService editService;
	
	/**
	 * 查询文章分类
	 * @return
	 */
	@RequestMapping("/loadArticleType")
	@ResponseBody
	public Result loadArticleType(){
		List<NoteBook> list=editService.loadArticleType();
		return new Result(list);
	}
	/**
	 * 分享发表文章
	 * @param note
	 * @return
	 */
	@RequestMapping("/addArticleForShare")
	@ResponseBody
	public Result insertNewArticleForShare(Note note){
		boolean boo = editService.insertNewArticleForShare(note);
		return new Result(boo);
	}
	
	/**
	 * 私密发表文章
	 * @param note
	 * @return
	 */
	@RequestMapping("/addArticleForPrivate")
	@ResponseBody
	public Result insertNewArticleForPrivate(Note note){
		boolean boo = editService.insertNewArticleForPrivate(note);
		return new Result(boo);
	}
}
