<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../header.jsp" %>
<link rel="stylesheet" href="${csspath }/mz.css">

<!-- 모달 HTML -->
<div id="myModal" class="modal">
    <div class="modal-content">
        <p>키보드 방향키로 페이지를 넘겨가며 이미지를 확인할 수 있습니다.</p><br>
        <p>space bar(스페이스바) 혹은 → (오른쪽 화살표): <span class="notice">다음 페이지</span></p>
        <p>← (왼쪽 화살표): <span class="notice">이전 페이지</span></p>
        <span class="close-btn" onclick="closeModal()">X</span>
    </div>
</div>
<script>
    // 모달 열기
    function openModal() {
        document.getElementById("myModal").style.display = "flex";
    }

    // 모달 닫기
    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    // 페이지 로드 시 모달 열기
    window.onload = function () {
        openModal();
    };
</script>

<section>
    <div id="image-container">
        <%-- 이미지 경로와 최대 페이지 수를 변수로 설정 --%>
        <%@ page import="java.util.ArrayList" %>
        <%@ page import="java.util.List" %>
        
        <%-- 이미지 경로와 최대 페이지 수를 변수로 설정 --%>
        <c:set var="imgPrefix" value="${imgpath}/mz/MZ(맛집)프로젝트포트폴리오.pptx" />
        <c:set var="maxPages" value="82" />

        <%-- 이미지를 동적으로 생성하여 페이지에 따라 표시 --%>
        <c:forEach var="pageNumber" begin="1" end="${maxPages}">
            <img src="<c:out value='${imgPrefix} (${pageNumber}).jpg'/>">
        </c:forEach>
    </div>
</section>


<script>
    window.onload = function() {
        const imageContainer = document.getElementById("image-container");
        const images = document.querySelectorAll("#image-container img");
        const totalPages = images.length;

        let currentPage = 1;

        function showPage(page) {
            images.forEach((img, index) => {
                img.style.display = index + 1 === page ? "block" : "none";
            });
        }

        function nextPage() {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        }

        function prevPage() {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        }

        showPage(currentPage);

        // 페이지 이동 버튼 이벤트 리스너 추가
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowRight" || event.key === " ") {
                nextPage();
            } else if (event.key === "ArrowLeft") {
                prevPage();
            }
        });
        
        
        // 모바일에서 터치 이벤트 추가
        document.getElementById("image-container").addEventListener("touchstart", handleTouchStart, false);
        document.getElementById("image-container").addEventListener("touchend", handleTouchEnd, false);

        function handleTouchStart(event) {
            touchStartX = event.touches[0].clientX;
        }

        function handleTouchEnd(event) {
            const touchEndX = event.changedTouches[0].clientX;
            const swipeDistance = touchStartX - touchEndX;

            // 적절한 기준으로 슬라이드 변경
            if (swipeDistance > 50) {
                nextPage();
            } else if (swipeDistance < -50) {
                // 이전 페이지로 이동할 경우 추가
            }
        }
    };
    
</script>

</body>
</html>
