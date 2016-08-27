package com.baifu.entity;

import java.io.Serializable;

public class NoteBook implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2194304853820526849L;
	
	private String cn_notebook_id;
	private int cn_notebook_code;
	private String cn_notebook_name;
	private String cn_notebook_desc;
	private String cn_notebook_createtime;
	public String getCn_notebook_id() {
		return cn_notebook_id;
	}
	public void setCn_notebook_id(String cn_notebook_id) {
		this.cn_notebook_id = cn_notebook_id;
	}
	public int getCn_notebook_code() {
		return cn_notebook_code;
	}
	public void setCn_notebook_code(int cn_notebook_code) {
		this.cn_notebook_code = cn_notebook_code;
	}
	public String getCn_notebook_name() {
		return cn_notebook_name;
	}
	public void setCn_notebook_name(String cn_notebook_name) {
		this.cn_notebook_name = cn_notebook_name;
	}
	public String getCn_notebook_desc() {
		return cn_notebook_desc;
	}
	public void setCn_notebook_desc(String cn_notebook_desc) {
		this.cn_notebook_desc = cn_notebook_desc;
	}
	public String getCn_notebook_createtime() {
		return cn_notebook_createtime;
	}
	public void setCn_notebook_createtime(String cn_notebook_createtime) {
		this.cn_notebook_createtime = cn_notebook_createtime;
	}
 
	

}
