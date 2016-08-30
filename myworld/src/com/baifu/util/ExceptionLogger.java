package com.baifu.util;

import java.util.Date;
import java.text.SimpleDateFormat;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import com.baifu.entity.Result;
import com.baifu.entity.User;


@Component
@Aspect
public class ExceptionLogger {
	@Resource
	public HttpServletRequest request;
	/**
	 * 记录日志
	 */
	@Around("within(com.baifu.web.*)")
	public Object log(ProceedingJoinPoint p){
		Object result=null;
		try {
			result=p.proceed();
		} catch (Throwable e) {
			//记录日志
			logException(p, e);
			//发生异常时，返回错误信息
			result = new Result(
				false,"系统发生异常,请联系管理员.",null);
			return result;
		}
		return result;
	}
	private void logException(ProceedingJoinPoint p, Throwable e) {
		Logger logger = 
			Logger.getLogger(ExceptionLogger.class);
		//获取用户名
		HttpSession session = request.getSession();
		String userName = "";
		try{
			User user = (User) session.getAttribute("user");
			userName = user.getCn_user_name();
		}catch(Exception e1){
			userName = "访客";
		}
		//获取ip
		String ip = request.getRemoteHost();
		//获取当前系统时间
		SimpleDateFormat sdf = 
			new SimpleDateFormat(
					"yyyy-MM-dd HH:mm:ss");
		String now = sdf.format(new Date());
		//获取目标组件类名
		String className = 
			p.getTarget().getClass().getName();
		//获取正在调用的目标组件方法名
		String methodName =
			p.getSignature().getName();
		//拼提示信息
		StringBuffer sb = new StringBuffer();
		sb.append("用户[").append(userName)
			.append("],IP[").append(ip)
			.append("],在[").append(now)
			.append("],调用[").append(className)
			.append(".").append(methodName)
			.append("]时，发生如下异常：");
		//拼错误信息头
		logger.error(sb.toString());
		//拼错误信息
		StackTraceElement[] elems = 
			e.getStackTrace();
		for(StackTraceElement elem : elems) {
			logger.error("\t" + elem.toString());
		}
	}
	
}
