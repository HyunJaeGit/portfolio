<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../header.jsp" %>
<link rel="stylesheet" href="${csspath }/team.css">

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