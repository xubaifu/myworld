package com.baifu;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;




public class Test {  
	public static void main(String[] args) throws IOException, DocumentException {    
		Test a = new Test();
		a.aa();
		/*Map<Object,Object> map = new HashMap<Object,Object>();
		InputStream is = null;
		SAXReader reader = new SAXReader();
		String path = Test.class.getClassLoader().getResource("../config").getPath();
		
		System.out.println(path);
		is = new FileInputStream("C:/Users/xubaifu/Desktop/thirdPartLogin.xml");
		Document doc = reader.read(is);
		Element rootElement = doc.getRootElement();
		
		Element paramsElement = rootElement.element("params");
		List<Element> paramElements = paramsElement.elements();
		for(Element paramElement : paramElements){
			map.put(paramElement.attributeValue("name"), paramElement.attributeValue("value"));
		}
		System.out.println(map.get("SecretKey"));*/
	}
  
  public void aa() throws IOException, DocumentException {
	  	Map<Object,Object> map = new HashMap<Object,Object>();
		InputStream is = null;
		SAXReader reader = new SAXReader();
		String path = Test.class.getClassLoader().getResource("../config").getPath();
		
		System.out.println(path);
		is = new FileInputStream("C:/Users/xubaifu/Desktop/thirdPartLogin.xml");
		Document doc = reader.read(is);
		Element rootElement = doc.getRootElement();
		
		Element paramsElement = rootElement.element("params");
		List<Element> paramElements = paramsElement.elements();
		for(Element paramElement : paramElements){
			map.put(paramElement.attributeValue("name"), paramElement.attributeValue("value"));
		}
		System.out.println(map.get("SecretKey"));
  }
} 
