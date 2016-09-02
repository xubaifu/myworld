package com.baifu.web;

import com.baifu.entity.Comment;
import com.baifu.entity.Result;
import com.baifu.service.CommentService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping({ "/comment" })
public class CommentController {

	@Resource
	private CommentService commentService;

	/**
	 * 添加评论
	 * @param comment
	 * @return
	 */
	@RequestMapping({ "/addComment.do" })
	@ResponseBody
	public Result addComment(Comment comment) {
		Map<String, Object> map = this.commentService.addComment(comment);
		int flag = Integer.valueOf(map.get("flag").toString()).intValue();
		if (flag == 0) {
			Map<String, Object> m = new HashMap<String, Object>();
			m.put("flag", Integer.valueOf(flag));
			return new Result(m);
		}
		Map<String, Object> m = new HashMap<String, Object>();
		m.put("flag", Integer.valueOf(flag));
		return new Result(m);
	}
	/**
	 * 查询评论
	 * @param noteId
	 * @return
	 */
	@RequestMapping({ "/getComment.do" })
	@ResponseBody
	public Result getComment(String noteId) {
		List<Comment> list = this.commentService.getComment(noteId);
		return new Result(list);
	}
}