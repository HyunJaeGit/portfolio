<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../header.jsp" %>
<style>
.team_main {
	display: flex;
	width: 1200px;
	flex-direction: row;
	margin: 0 auto;
	text-align: center;
	padding-top: 200px;
}
.thumnail {
	margin: 0 auto;
}
.thumnail img {
	width: 460px;
	height: 320px;
	box-sizing: border-box;
	padding: 3px;
}
.thumnail img:hover {
	border: 3px solid yellow;
	filter: contrast(150%);	
}
.thumnail a{
	color: white;
	text-decoration: none;
	font-size: 14px;
}
.thumnail span a:hover {
	color: yellow;
}
    /* 모달 스타일 */
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* 불투명한 배경색 설정 */
        z-index: 1000;
        justify-content: center;
        align-items: center;
    }

    #modal-content {
        background-color: white;
        padding: 20px;
        border: 1px solid #ccc;
        color: black;
    }
    #closeModal {
    	cursor: pointer;
    	color: black;
    	font-weight: bold;
    }
</style>
<section class="team_main">
	<div id="teamP1" class="thumnail">
		<div><a href="${cpath }/team/MZproject"><img alt="" src="${imgpath }/mz/MZ(맛집)프로젝트포트폴리오.pptx.jpg"></a></div>
		<span><a href="${cpath }/team/MZproject">1. MZ Project (team FourTrees) - 2023.07~2024.01</a></span>
	</div>
	
	<div id="teamP2" class="thumnail" onclick="showsession()">
		<div><a href="#"><img src="${imgpath }/team/준비중.jpg"></a></div>
		<span><a href="#">2. JavaEduSchool (team FourTrees) - 2023.02 예정</a></span>
	</div>
<!-- 모달 창 -->
<div id="myModal" class="modal" onclick="hideModal()">
    <!-- 모달 내용 -->
    <div id="modal-content">
        <!-- 세션 메시지 표시 -->
        <p id="sessionMessage"></p>
        <!-- 카운트다운 메시지 -->
        <p id="countdownMessage" style="color: gray;"></p>
        <span id="closeModal" onclick="hideModal()">&times;</span>
    </div>
</div>
</section>
<script>
    function showsession() {
        // 세션에 메시지 저장
        sessionStorage.setItem('underConstructionMessage', '이 섹션은 현재 개발 중입니다.');

        // 세션 메시지를 얻어오기
        var message = sessionStorage.getItem('underConstructionMessage');

        // 모달 내용 업데이트
        document.getElementById('sessionMessage').innerHTML = message;

        // 모달 창 표시
        document.getElementById('myModal').style.display = 'flex';

        // 카운트다운 시작
        var countdown = 3;
        var countdownInterval = setInterval(function () {
            document.getElementById('countdownMessage').innerHTML = countdown + '초 후 자동으로 닫힘';
            countdown--;
            if (countdown < 0) {
                clearInterval(countdownInterval);
                hideModal(); // 카운트다운이 끝나면 모달 닫기
            }
        }, 1000);
    }

    // 모달 닫기 함수
    function hideModal() {
        document.getElementById('myModal').style.display = 'none';
    }

    // 모달 창이 아닌 내용 클릭 시 모달 닫기
    document.getElementById('modal-content').onclick = function (event) {
        event.stopPropagation();
    };
</script>
</body>
</html>