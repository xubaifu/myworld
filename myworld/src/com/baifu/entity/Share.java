package com.baifu.entity;

import java.io.Serializable;

public class Share implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -730610117172471755L;
	
	private String cn_share_id;
	private String cn_share_title;
	private String cn_share_tag;
	private String cn_note_id;
	public String getCn_share_id() {
		return cn_share_id;
	}
	public void setCn_share_id(String cn_share_id) {
		this.cn_share_id = cn_share_id;
	}
	public String getCn_share_title() {
		return cn_share_title;
	}
	public void setCn_share_title(String cn_share_title) {
		this.cn_share_title = cn_share_title;
	}
	public String getCn_share_tag() {
		return cn_share_tag;
	}
	public void setCn_share_tag(String cn_share_tag) {
		this.cn_share_tag = cn_share_tag;
	}
	public String getCn_note_id() {
		return cn_note_id;
	}
	public void setCn_note_id(String cn_note_id) {
		this.cn_note_id = cn_note_id;
	}
	

}
