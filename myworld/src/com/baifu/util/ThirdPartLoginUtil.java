package com.baifu.util;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.json.JSONObject;

import com.baifu.Test;


public class ThirdPartLoginUtil {

	/**
	 * 根据code地址获取token
	 * @param code URL地址
	 * @return
	 * @throws IOException
	 */
	public static String getAccessToken(String code) throws IOException{
		String urlstr = "";
		//获取百度url接口
		Map<String, String> map = null;
		try {
			map = getXMLMessage("thirdPartLogin.xml");
		} catch (DocumentException e) {
			e.printStackTrace();
			return null;
		}
		if(map != null){
			urlstr = (String) map.get("accessTokenURL");
			urlstr = urlstr.replaceAll("(YOUR_CLIENT_ID)", map.get("APIKey"));
			urlstr = urlstr.replaceAll("(BAIDU_CODE)", code);
			urlstr = urlstr.replaceAll("(YOUR_CLIENT_SECRET)", map.get("SecretKey"));
			urlstr = urlstr.replaceAll("(YOUR_URI)", map.get("indexURL"));
		}
		
		//urlstr = 
		//String urlstr = "https://openapi.baidu.com/oauth/2.0/token?grant_type=authorization_code&code="+code+"&client_id=t4xi8kn1FGfgXxsgcD6q4uWi&client_secret=pYztg4BRaTpDSqGLK9NNwykgMXQ21vRc&redirect_uri=http://10.4.128.110:8080/myworld";
		String accessToken = "";
		//连接URL
		URL url = new URL(urlstr);
		URLConnection urlConnection = url.openConnection();
		HttpURLConnection connection = null;
		if (urlConnection instanceof HttpURLConnection) {
			connection = (HttpURLConnection) urlConnection;
		} else {
			return null;
		}
		BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		//url请求返回结果
		StringBuffer urlString = new StringBuffer("");
		String current;
		while ((current = in.readLine()) != null) {
			urlString.append(current);
			
		}
		JSONObject json = new JSONObject(urlString.toString());
		accessToken = (String) json.get("access_token");
		return accessToken;
	}
	
	/**
	 * 根据token和接口获取用户登录信息
	 * @param token 
	 * @return
	 * @throws IOException 
	 */
	public static Map<String,String> getUserMessage(String token) throws IOException{
		Map<String,String> map = new HashMap<String,String>();
		
		String urlstr = "";
		//获取百度url接口
		try {
			map = getXMLMessage("thirdPartLogin.xml");
		} catch (DocumentException e) {
			e.printStackTrace();
			return null;
		}
		if(map != null){
			urlstr = (String) map.get("getUserURL");
			urlstr = urlstr.replaceAll("(YOUR_CLIENT_ID)", map.get("APIKey"));
			urlstr = urlstr.replaceAll("(BAIDU_TOKEN)", token);
		}
		URL url = new URL(urlstr);
		URLConnection urlConnection = url.openConnection();
		HttpURLConnection connection = null;
		if (urlConnection instanceof HttpURLConnection) {
			connection = (HttpURLConnection) urlConnection;
		} else {
			return map;
		}
		BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		//url请求返回结果
		StringBuffer urlString = new StringBuffer("");
		String current;
		while ((current = in.readLine()) != null) {
			urlString.append(current);
		}
		JSONObject json = new JSONObject(urlString.toString());
		map.put("uid", (String) json.get("uid"));//用户id
		map.put("uname", (String) json.get("uname"));//用户名
		map.put("portrait", (String) json.get("portrait"));//用户头像
		return map;
	}
	/**
	 * 读取配置文件信息
	 * @param fileName 配置文件名称
	 * @return
	 * @throws FileNotFoundException
	 * @throws DocumentException
	 */
	public static Map<String,String> getXMLMessage(String fileName) throws FileNotFoundException, DocumentException{
		Map<String,String> map = new HashMap<String,String>();
		InputStream is = null;
		SAXReader reader = new SAXReader();
		System.out.println(Test.class.getClassLoader().toString());
		System.out.println(ThirdPartLoginUtil.class.getClassLoader().toString());
		String path = ThirdPartLoginUtil.class.getClassLoader().getResource("../conf/"+fileName).getPath();
		System.out.println(path);
		is = new FileInputStream(path);
		Document doc = reader.read(is);
		Element rootElement = doc.getRootElement();
		
		Element paramsElement = rootElement.element("params");
		List<Element> paramElements = paramsElement.elements();
		for(Element paramElement : paramElements){
			map.put(paramElement.attributeValue("name"), paramElement.attributeValue("value"));
		}
		return map;
	}
	
	
	/*private static void replace(String str) {
        //String str = "asfas5fsaf5s4fs6af.sdaf.asf.wqre.qwr.fdsf.asf.asf.asf";
        //将字符串中的.替换成_，因为.是特殊字符，所以要用\.表达，又因为\是特殊字符，所以要用\\.来表达.
        str = str.replaceAll("response_type", "_");
        System.out.println(str);        
    }
	
	public static void main(String[] args) {
		replace("http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&amp;client_id=YOUR_CLIENT_ID&amp;redirect_uri=YOUR_URI");
	}*/
	
	
}
