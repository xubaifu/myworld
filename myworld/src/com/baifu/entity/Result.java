package com.baifu.entity;

import java.io.Serializable;

/**
 * Controller方法向页面返回数据的实体 该实体对返回给页面的数据做了一个明确的规范和封装
 * 
 * 对于程序执行报错的判断，不需要在每一个Controller方法里做，这样比较麻烦，最后我们会使用 AOP老统一判断是否报错，
 * 届时才会给success赋值，给message赋值，暂时我们先不管这2个属性。
 */
public class Result implements Serializable {

	private static final long serialVersionUID = -37307741506878404L;

	public Result() {

	}

	public Result(Object data) {
		this.data = data;
	}

	public Result(boolean success, String massage, Object data) {
		super();
		this.success = success;
		this.massage = massage;
		this.data = data;
	}

	/**
	 * 程序之执行否成功，默认成功
	 */
	private boolean success = true;
	/**
	 * 提示信息，成功是一般不给提示，失败时一定要给提示
	 */
	private String massage;
	/**
	 * 用来封装返回给页面的业务数据
	 */
	private Object data;

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMassage() {
		return massage;
	}

	public void setMassage(String massage) {
		this.massage = massage;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}
}
