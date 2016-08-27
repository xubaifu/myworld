package com.baifu.web;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.baifu.entity.Result;
import com.baifu.service.AllShareService;

@Controller
@RequestMapping("/findShareNote")
public class AllShareController {
	Logger logger=Logger.getLogger(MyWorldController.class);
	@Resource
	private AllShareService allShareService;
	@RequestMapping("/findShareNoteFunction.do")
	@ResponseBody
	public Result findNote(String noteType,int begin,int pageSize,String loadType){
		List<Object> list=allShareService.findAllShareNoe(noteType, begin, pageSize,loadType);
		return new Result(list);
	}
}
