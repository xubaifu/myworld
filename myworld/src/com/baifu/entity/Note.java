package com.baifu.entity;

import java.io.Serializable;

public class Note implements Serializable {
	
	private static final long serialVersionUID = -6270238838150135664L;
	
	private int cn_notebook_code;
	private String cn_user_id;
	private String cn_note_id;
	private int cn_note_type_code;
	private int cn_note_status_code;
	private String cn_note_title;
	private String cn_note_body;
	private String cn_note_create_time;
	private String cn_note_last_modify_time;
	private String cn_note_times;
	private String cn_notebook_name;
	private String cn_user_name;
	private String cn_note_tag;
	private String cn_share_id;
	private String cn_notebook_type_code;
	private String cn_notebook_type_name;

	public int getCn_notebook_code() {
		return cn_notebook_code;
	}

	public void setCn_notebook_code(int cn_notebook_code) {
		this.cn_notebook_code = cn_notebook_code;
	}

	public String getCn_user_id() {
		return cn_user_id;
	}

	public void setCn_user_id(String cn_user_id) {
		this.cn_user_id = cn_user_id;
	}

	public String getCn_note_id() {
		return cn_note_id;
	}

	public void setCn_note_id(String cn_note_id) {
		this.cn_note_id = cn_note_id;
	}

	public int getCn_note_type_code() {
		return cn_note_type_code;
	}

	public void setCn_note_type_code(int cn_note_type_code) {
		this.cn_note_type_code = cn_note_type_code;
	}

	public int getCn_note_status_code() {
		return cn_note_status_code;
	}

	public void setCn_note_status_code(int cn_note_status_code) {
		this.cn_note_status_code = cn_note_status_code;
	}

	public String getCn_note_title() {
		return cn_note_title;
	}

	public void setCn_note_title(String cn_note_title) {
		this.cn_note_title = cn_note_title;
	}

	public String getCn_note_body() {
		return cn_note_body;
	}

	public void setCn_note_body(String cn_note_body) {
		this.cn_note_body = cn_note_body;
	}

	public String getCn_note_create_time() {
		return cn_note_create_time;
	}

	public void setCn_note_create_time(String cn_note_create_time) {
		this.cn_note_create_time = cn_note_create_time;
	}

	public String getCn_note_last_modify_time() {
		return cn_note_last_modify_time;
	}

	public void setCn_note_last_modify_time(String cn_note_last_modify_time) {
		this.cn_note_last_modify_time = cn_note_last_modify_time;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getCn_note_times() {
		return cn_note_times;
	}

	public void setCn_note_times(String cn_note_times) {
		this.cn_note_times = cn_note_times;
	}

	public String getCn_notebook_name() {
		return cn_notebook_name;
	}

	public void setCn_notebook_name(String cn_notebook_name) {
		this.cn_notebook_name = cn_notebook_name;
	}

	public String getCn_user_name() {
		return cn_user_name;
	}

	public void setCn_user_name(String cn_user_name) {
		this.cn_user_name = cn_user_name;
	}

	public String getCn_note_tag() {
		return cn_note_tag;
	}

	public void setCn_note_tag(String cn_note_tag) {
		this.cn_note_tag = cn_note_tag;
	}

	public String getCn_share_id() {
		return cn_share_id;
	}

	public void setCn_share_id(String cn_share_id) {
		this.cn_share_id = cn_share_id;
	}

	public String getCn_notebook_type_code() {
		return cn_notebook_type_code;
	}

	public void setCn_notebook_type_code(String cn_notebook_type_code) {
		this.cn_notebook_type_code = cn_notebook_type_code;
	}

	public String getCn_notebook_type_name() {
		return cn_notebook_type_name;
	}

	public void setCn_notebook_type_name(String cn_notebook_type_name) {
		this.cn_notebook_type_name = cn_notebook_type_name;
	}
	

}
