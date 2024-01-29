
// 2초에 한 번씩 텍스트 색상을 흰색으로, 0.5초 후에 투명하게 변경하는 함수
function changeColor() {
    // 텍스트 요소의 색상을 흰색으로 변경
    document.getElementById("rightButton").style.color = "#ffffff";
    document.getElementById("leftButton").style.color = "#ffffff";

    // 0.5초 후에 투명하게 변경
    setTimeout(() => {
        document.getElementById("rightButton").style.color = "transparent";
        document.getElementById("leftButton").style.color = "transparent";
    }, 500);
}

// 초기에 한 번 실행
changeColor();

// 2초에 한 번씩 changeColor 함수 실행
setInterval(changeColor, 2000);


/** 슬라이더 효과(버튼) */
document.addEventListener('DOMContentLoaded', function () {
    // 사용자가 더 이상 보지 않기를 선택한 경우 세션 창을 감춥니다.
    if (localStorage.getItem('dontShowSession') === 'true') {
        closeSession();
    } else {
        showWelcomeSession();
    }
    
    const album = document.querySelector('.album');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');
    const slideWidth = 1000; // 슬라이드 이미지의 너비
    let currentIndex = 0;
 	
    // Common function for updating the slide
    function updateSlideLeft() {
        currentIndex = (currentIndex - 1 + album.children.length) % album.children.length;
        updateSlide();
    }
    // Common function for updating the slide to the right
    function updateSlideRight() {
        currentIndex = (currentIndex + 1) % album.children.length;
        updateSlide();
    }
    
    // Mouseover event
    leftButton.addEventListener('mouseover', updateSlideLeft);
    // Click event
    leftButton.addEventListener('click', updateSlideLeft);
    // Mouseover event for right button
    rightButton.addEventListener('mouseover', updateSlideRight);
    // Click event for right button
    rightButton.addEventListener('click', updateSlideRight);
    
 	// Keyboard event for left arrow key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            updateSlideLeft();
        }
    });

    // Keyboard event for right arrow key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            updateSlideRight();
        }
    });
    
    
//     leftButton.addEventListener('click', function () {
//         currentIndex = (currentIndex - 1 + album.children.length) % album.children.length;
//         updateSlide();
//     });
//     rightButton.addEventListener('click', function () {
//         currentIndex = (currentIndex + 1) % album.children.length;
//         updateSlide();
//     });

    function updateSlide() {
        const translateValue = -currentIndex * slideWidth + 'px';
        album.style.transform = 'translateX(' + translateValue + ')';
    }
    
 	// 이미지 크기 전환 효과
    const images = document.querySelectorAll('.album img');
    images.forEach(function (image) {
        image.style.width = '640px'; // 원래 크기로 전환
        image.style.height = '480px';
    });
    
});

function showWelcomeSession() {
    const sessionContainer = document.getElementById('sessionContainer');
    sessionContainer.style.display = 'flex';

    // 세션 창을 크게 나타내는 효과를 위해 크기를 1로 변경
    setTimeout(function () {
        sessionContainer.style.transform = 'scale(1)';
    }, 100);

    // 일정 시간이 지난 후에 세션 창을 숨김
    setTimeout(function () {
        closeSession();
    }, 10000); // 10초 후에 세션 창 닫기
}

function closeSession() {
    const sessionContainer = document.getElementById('sessionContainer');
    sessionContainer.style.transform = 'scale(0)'; // 크기를 0으로 변경하여 사라지는 효과
    setTimeout(function () {
        sessionContainer.style.display = 'none';
    }, 300); // 트랜지션 시간보다 조금 더 긴 시간으로 딜레이
}

function dontShowAgain() {
    localStorage.setItem('dontShowSession', 'true');
    closeSession();
}