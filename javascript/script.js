var slideWidth = $(".slide li").width();

let currentIdx = 0; // 슬라이드 현재 번호
let translate = 0; // 슬라이드 위치 값

function slideMove() {
    $(".slide").css("transform", "translateX(-" + slideWidth * currentIdx + "px)");
}

setInterval(() => {
    if (currentIdx != 2) {
        currentIdx += 1;
        slideMove();
    } else if (currentIdx == 2) {
        currentIdx = 0;
        slideMove();
    }

}, 3000);

$(".left").click(() => {
    if (currentIdx != 0) {
        currentIdx -= 1;
        slideMove();
    } else if (currentIdx == 0) {
        currentIdx = 2;
        slideMove();
    }
});

$(".right").click(() => {
    if (currentIdx != 2) {
        currentIdx += 1;
        slideMove();

    } else if (currentIdx == 2) {
        currentIdx = 0;
        slideMove();
    }
});

$(".github").click(() => {
    window.open("https://github.com/LaberryO/ANIMORE", "_blank");
});




