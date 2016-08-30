package com.baifu.web.interceptor;

import java.io.Writer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.baifu.entity.User;

public class CheckLoginInterceptor implements HandlerInterceptor {
	//请求结束时调用
	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		// TODO Auto-generated method stub

	}
	//执行完controller方法调用
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2, ModelAndView arg3) throws Exception {
		// TODO Auto-generated method stub

	}
	//执行Controller方法之前调用
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object obj) throws Exception {
		//获取session中的登录信息
		User user=(User)request.getSession().getAttribute("user");
		if(user==null){
			//用户没有登录
			String result="{\"success\":false,\"message\":\"请先登录\"}";
			response.setCharacterEncoding("utf-8");
			response.setContentType("application/json");
			Writer writer=response.getWriter();
			writer.write(result);
			writer.close();
			return false;
		}else{
			//用户已经登录
			return true;
		}
		
	}

}
