package com.baifu.entity;

import java.io.Serializable;

public class Comment implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -417031099856131957L;
	
	private String cn_comment_id;
	private String cn_note_id;
	private String cn_user_id;
	private String cn_parent_comment_id;
	private String cn_content;
	private String cn_user_name;
	private String cn_comment_date;
	public String getCn_comment_id() {
		return cn_comment_id;
	}
	public void setCn_comment_id(String cn_comment_id) {
		this.cn_comment_id = cn_comment_id;
	}
	public String getCn_note_id() {
		return cn_note_id;
	}
	public void setCn_note_id(String cn_note_id) {
		this.cn_note_id = cn_note_id;
	}
	public String getCn_user_id() {
		return cn_user_id;
	}
	public void setCn_user_id(String cn_user_id) {
		this.cn_user_id = cn_user_id;
	}
	public String getCn_parent_comment_id() {
		return cn_parent_comment_id;
	}
	public void setCn_parent_comment_id(String cn_parent_comment_id) {
		this.cn_parent_comment_id = cn_parent_comment_id;
	}
	public String getCn_content() {
		return cn_content;
	}
	public void setCn_content(String cn_content) {
		this.cn_content = cn_content;
	}
	public String getCn_user_name() {
		return cn_user_name;
	}
	public void setCn_user_name(String cn_user_name) {
		this.cn_user_name = cn_user_name;
	}
	public String getCn_comment_date() {
		return cn_comment_date;
	}
	public void setCn_comment_date(String cn_comment_date) {
		this.cn_comment_date = cn_comment_date;
	}
	


}
