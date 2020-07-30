<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%
	request.setCharacterEncoding("utf-8");

	String nickname = (String)session.getAttribute("nickname");
	String content = request.getParameter("content");
	
	String driver = "oracle.jdbc.OracleDriver";
	String url = "jdbc:oracle:thin:@localhost:1521:orcl";
	String id = "scott";
	String pw = "1234";
			
	Class.forName(driver);
	Connection db = DriverManager.getConnection(url, id, pw);
	
	String sql = "insert into guestbook_table"
				+ "(guestbook_idk, guestbook_nickname, guestbook_content)"
				+ "values (guestbook_seq.nextval, ?, ?)";
	
	PreparedStatement pstmt = db.prepareStatement(sql);
	pstmt.setString(1, nickname);
	pstmt.setString(2, content);
	
	pstmt.execute();
	
%>
OK
