package com.baifu.web;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.baifu.entity.Result;
import com.baifu.service.MyWorldService;

@Controller
@RequestMapping("/myworld")
public class MyWorldController {
	Logger logger=Logger.getLogger(MyWorldController.class);
	@Resource
	private MyWorldService MyWorldService;
	/**
	 * 查询某用户下的所有文章
	 * @param userId
	 * @return
	 */
	@RequestMapping("/findNoteByUser.do")
	@ResponseBody
	public Result findNote(String userId){
		List<Object> list=MyWorldService.findNoteByUser(userId);
		return new Result(list);
	}
}
