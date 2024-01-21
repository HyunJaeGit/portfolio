
document.addEventListener('DOMContentLoaded', function () {
    const link = document.querySelectorAll('.link');

    window.addEventListener('scroll', function () {
        // 스크롤 위치가 300px 이상인 경우 메뉴의 모든 글자색을 노란색으로 변경
        if (window.scrollY > 200) {
        	link.forEach(link => {
        		link.style.color = 'yellow';
        		link.style.textShadow = '0.5px 0.5px 2px black'; // 테두리 효과
            });
        } else {
        	link.forEach(link => {
        		link.style.color = ''; // 원래 상태로 복원
        		link.style.textShadow = ''; // 테두리 효과
            });
        }
    });
});