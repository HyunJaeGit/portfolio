<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>
<link rel="stylesheet" href="${csspath }/home.css">

<section class="home">
	<div class="slider">
		<div id="imgholder" class="album">
			<div class="item">
				<div class="thumnail">
					<a href="${cpath }/portfolio"><img src="${imgpath }/home/p1.png"></a>
				</div>
				<div class="detail">
					<h4>1. Resume and Portfolio</h4>
					<ul>
						<li>안녕하세요.</li>
						<li>팀워크와 소통을 통해 발전하는<br> 백엔드 권현재입니다.</li><br>
						
						<li>테크리더로서의 비전을 가지고있는</li>
						<li>'인간' 권현재를 소개합니다.</li>
					</ul>
				</div>
			</div>
			<div class="item">
				<div class="thumnail">
					<a href="${cpath }/team/teamProject"><img src="${imgpath }/home/p2.png"></a>
				</div>
				<div class="detail">
					<h4>2. Team Project - MZ(맛집)</h4>
					<ul>
						<li>- 팀 프로젝트 상세정보<br><br></li>
						<li>- 2023.09~2024.01</li>
						<li>제작기간 약 3개월<br><br></li>
						<li>- 'Fourtrees 팀(4인)'</li>
						<li>외국인 관광객을 대상으로한<br> 전국 맛집정보 사이트</li>
					</ul>
				</div>
			</div>
			<div class="item">
				<div class="thumnail">
					<a href="${cpath }/gallery/gallery"><img src="${imgpath }/gallery/갤러리썸네일.png"></a>
				</div>
				<div class="detail">
					<h4>3. 개인 Gallery</h4>
					<ul>
						<li>개인 사진 저장소</li><br>
						<li>- 개인적인 성과, 경험</li>
						<li>- 이외의 여러 기록</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<button id="leftButton" class="slider-btn">Before</button>
    <button id="rightButton" class="slider-btn">Next</button>
</section>

<!-- 세션 창 -->
<div class="session-container" id="sessionContainer">
    <div class="session-content">
    	<div><img src="${imgpath }/home/guide.gif"></div>
        <h1>환영합니다!</h1>
        <p>이 페이지에서는 마우스 스윙 및 클릭 <br>키보드 화살표 ↔키 및 버튼을 사용할 수 있습니다.<br>모바일에서는 화면 양끝을 클릭할 수 있습니다.</p>
        <p>창이 10초 후 닫힙니다.</p>
        <div>
	        <input type="checkbox" class="sessioncookie" onclick="dontShowAgain()">더 이상 보지 않기
	        <button onclick="closeSession()">X</button>
        </div>
    </div>
</div>
<script src="${cpath }/resources/js/homejs.js">


</script>
</body>
</html>