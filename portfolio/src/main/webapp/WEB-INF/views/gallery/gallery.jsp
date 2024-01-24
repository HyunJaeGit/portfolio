<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../header.jsp" %>
<link rel="stylesheet" href="${csspath }/gallery.css">

<section>
    <!-- 이미지 아이템들 -->
    <div class="album-item">
        <img src="${imgpath}/gallery/프사.png" alt="Image 1" title="프로필 사진">
        <div class="image-title">프로필 사진</div>
    </div>

    <!-- 이미지 아이템들 -->
    <div class="album-item">
        <img src="${imgpath}/gallery/기부러닝.jpg" alt="Image 1" title="기부러닝">
        <div class="image-title">어린이날 기부 마라톤</div>
    </div>
    <div class="album-item">
        <img src="${imgpath}/gallery/기부러닝 (2).jpg" alt="Image 2" title="기부러닝 (2)">
        <div class="image-title">어린이날 기부 마라톤</div>
    </div>

    <div class="album-item">
        <img src="${imgpath}/gallery/삼성생명.jpg" alt="Image 2" title="삼성생명">
        <div class="image-title">삼성생명 프리랜서 근무</div>
    </div>
    <div class="album-item">
        <img src="${imgpath}/gallery/gall2.png" alt="Image 2" title="Gall2">
        <div class="image-title">커뮤니티 운영</div>
    </div>
    <div class="album-item">
        <img src="${imgpath}/gallery/회의.png" alt="Image 2" title="회의">
        <div class="image-title">대학 생활</div>
    </div>
    <div class="album-item">
        <img src="${imgpath}/gallery/학교생활2.jpg" alt="Image 2" title="회의">
        <div class="image-title">대학 생활</div>
    </div>

    <!-- 추가 이미지 아이템들을 원하는 만큼 복사해서 붙여넣을 수 있습니다. -->
</section>
</body>
</html>
