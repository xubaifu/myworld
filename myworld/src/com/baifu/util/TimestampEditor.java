package com.baifu.util;

import java.beans.PropertyEditorSupport;

import java.sql.Timestamp;

/**
 *	日期类型转换器，可以将页面传入的日期
 *	字符串转换成java.sql.Timestamp类型。
 *	该日期类型转换器由SpringMVC自动调用，
 *	调用的时机是在Controller方法执行前，参数
 *	注入时发生的。
 *	需要将此类重新注册，SpringMVC才会调用它。
 */
public class TimestampEditor 
	extends PropertyEditorSupport {

	/* 
	 * 类型转换方法，参数text是页面传入的
	 * 日期字符串，我们需要将此字符串转换
	 * 成Timestamp类型并注入给Controller方法
	 * 中的参数。
	 */
	@Override
	public void setAsText(String text) 
		throws IllegalArgumentException {
		System.out.println("into setAsText");
		if(text == null) {
			//如果传入的数据为null，没必要转换，
			//直接将null注入
			setValue(null);
		} else {
			//如果传入的数据不是null，转型后注入
			Timestamp t = new Timestamp(
					Long.valueOf(text));
			setValue(t);
		}
	}
	
}
