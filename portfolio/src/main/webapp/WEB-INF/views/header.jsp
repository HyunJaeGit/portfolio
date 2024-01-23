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
<link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-gothic-eco.css" rel="stylesheet">
<link rel="stylesheet" href="${csspath }/header.css">
</head>
<body>

<header>
	<div class="gohome" style="position: fixed;">
		<a class="logo" href="${cpath }/">
			<span>　권현재</span>
			<span class="neon-sign"></span>
		</a>
	</div>
	<nav class="menu">
		<ul>
			<li><a class="link" href="${cpath }/portfolio">이력서&포트폴리오</a></li>
			<li><a class="link" href="${cpath }/team/teamProject">팀 프로젝트</a></li>
			<li><a class="link" href="${cpath }/side/sideProject">개인 프로젝트</a></li>
			<li><a class="link" href="${cpath }/gallery/gallery">갤러리</a></li>
		</ul>
	</nav>
</header>
<script src="${cpath }/resources/js/header.js"></script>
