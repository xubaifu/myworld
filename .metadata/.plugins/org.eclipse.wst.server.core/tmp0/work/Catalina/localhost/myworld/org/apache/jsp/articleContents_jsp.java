/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.57
 * Generated at: 2016-08-28 03:30:22 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class articleContents_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=utf-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("    <title>ShareOne-知识共享</title>\r\n");
      out.write("    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\r\n");
      out.write("    <link rel=\"stylesheet\" href=\"baifu/common/bootstrap-3.3.5-dist/css/bootstrap.min.css\"/>\r\n");
      out.write("\t<link rel=\"stylesheet\" href=\"baifu/css/index.css\"/>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"baifu/js/common/jquery-1.9.1.min.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"baifu/common/bootstrap-3.3.5-dist/js/bootstrap.min.js\"></script>\r\n");
      out.write("\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"baifu/js/common/basePath.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"baifu/js/common/cookie.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"baifu/js/common/common.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\">\r\n");
      out.write("\t\tvar loginName = \"");
      out.print(session.getAttribute("userName") );
      out.write("\";\r\n");
      out.write("\t\tvar userId = \"");
      out.print(session.getAttribute("userId") );
      out.write("\";\r\n");
      out.write("\t\t/* if(loginName == \"null\" || loginName == \"\" || loginName == null){\r\n");
      out.write("\t\t\tlocation.href=\"login.jsp\";\r\n");
      out.write("\t\t} */\r\n");
      out.write("\t</script>\r\n");
      out.write("\t<style type=\"text/css\" media=\"print, screen\">  \r\n");
      out.write("\t\tlabel {\r\n");
      out.write("\t\t    font-weight: bold;\r\n");
      out.write("\t\t}\r\n");
      out.write("\t\ta {\r\n");
      out.write("\t\t\tfont-family: Microsoft YaHei;\r\n");
      out.write("\t\t}\r\n");
      out.write("\t\t#articleComment {\r\n");
      out.write("\t\t\twidth: 830px;\r\n");
      out.write("\t\t\t/* height: 1500px; */\r\n");
      out.write("\t\t\t/* overflow: auto; */\r\n");
      out.write("\t\t}\r\n");
      out.write("</style> \r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "header.html", out, false);
      out.write("\r\n");
      out.write("<div class=\"jumbotron masthead\">\r\n");
      out.write("\r\n");
      out.write("\t\t<div class=\"content\">\r\n");
      out.write("\t\t\t<div class=\"tab-content\">\r\n");
      out.write("\t\t\t\t<div class=\"title\">\r\n");
      out.write("\t\t\t\t\t<span>\r\n");
      out.write("\t\t\t\t\t\t<span>文章类别:</span>\r\n");
      out.write("\t\t\t\t\t\t<span id=\"notebookType\"></span>\r\n");
      out.write("\t\t\t\t\t\t<a target=\"_blank\" href=\"\" id=\"articleType\"></a>\r\n");
      out.write("\t\t\t\t\t</span>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div class=\"tab-pane fade in active\">\r\n");
      out.write("\t\t\t\t\t<div class=\"kn_cloumn \">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"kn_left w830px whitebk\">\r\n");
      out.write("\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"title-author\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"collectBtn\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<a href=\"javascript:articleContentsObj.collectArticleFun();\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span id=\"collection\" class=\"glyphicon glyphicon-heart\" style=\"color: gray;\"> 收藏</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span id=\"myArticle\" class=\"glyphicon glyphicon-star\" style=\"display: none;color: red;\"> 我的文章</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</a>\r\n");
      out.write("\t\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t\t<br>\r\n");
      out.write("\t\t\t\t\t\t\t\t<span id=\"title\" class=\"title-span\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t\t</span>\r\n");
      out.write("\t\t\t\t\t\t\t\t<br>\r\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"title-author-span\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span style=\"float: left;\"><strong>作者：</strong><span id=\"author\">baifu</span></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span style=\"float: none;\"><strong>日期\t：</strong><span id=\"update\">2015-12-12</span></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<span style=\"float: right;\"><strong>浏览量：</strong><span id=\"times\">125</span></span>\r\n");
      out.write("\t\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div id=\"contents\" class=\"articleContents\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t<div id=\"articleComment\" style=\"margin-left: auto;margin-right: auto;width: 830px\">\r\n");
      out.write("\t\t\t<div style=\"margin-bottom: 20px;\" class=\"ui threaded comments\" id=\"commentItems\">\r\n");
      out.write("\t\t\t\t<div style=\"font-size: 2rem; padding-bottom: 10px; border-bottom: 1px solid #DFDFDF;\" class=\"text\">全部评论</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<div id=\"commentFrom\">\r\n");
      out.write("\t\t\t\t\t<form class=\"ui reply form\" id=\"replyBoxAri\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"ui large form \">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"contentField field\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<textarea id=\"commentContent\"></textarea>\r\n");
      out.write("\t\t\t\t\t\t\t\t<!-- <label for=\"commentContent\" class=\"commentContentLabel\">Content</label> -->\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\t<div >\r\n");
      out.write("\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" onclick=\"\">提交评论</button>\r\n");
      out.write("\t\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</form>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "fotter.html", out, false);
      out.write("\r\n");
      out.write("\t</div>\r\n");
      out.write("<script type=\"text/javascript\" src=\"baifu/js/articleContents.js\"></script>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
