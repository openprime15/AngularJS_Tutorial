<%@ page language="java" contentType="text/plain; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");

	String nickname = request.getParameter("nickname");
	session.setAttribute("nickname", nickname);
	
/* 	String a1 = (String)session.getAttribute("nickname");
	System.out.printf("nickname : %s\n", nickname); */
	
%>
OK
