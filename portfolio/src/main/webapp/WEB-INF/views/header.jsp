<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="cpath" value="${pageContext.request.contextPath }"></c:set>
<c:set var="imgpath" value="${cpath }/resources/img"></c:set>
<c:set var="csspath" value="${cpath }/resources/css"></c:set>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>권현재 포트폴리오</title>
<link rel="stylesheet" href="${csspath }/header.css">
</head>
<body>

<header>
	<a class="logo" href="${cpath }/">
		<div>　권현재</div>
		<div class="neon-sign"></div>
	</a>
</header>