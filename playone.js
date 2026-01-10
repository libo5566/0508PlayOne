//owlCarousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
        },
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});


//back-to-top
(function () {
    $(document).ready(function () {
        var backToTopButton = $("#back-to-top");
        var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                backToTopButton.addClass("show");
            } else {
                backToTopButton.removeClass("show");
            }
        });

        backToTopButton.click(function () {
            if (prefersReducedMotion) {
                $("html,body").scrollTop(0);
            } else {
                $("html,body").animate({
                    scrollTop: 0
                }, 400);
            }
            return false;
        });
    });
}).call(this);

//data-url
// 當頁面加載完成後執行此函數
window.onload = function () {
    // 獲取所有的 card-container 元素
    var cards = document.querySelectorAll('.card-container');

    // 為每個 card-container 添加點擊事件監聽器
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            // 從 data-url 屬性獲取要跳轉的 URL
            var url = card.getAttribute('data-url');
            // 如果 URL 存在，則導航到該 URL
            if (url) {
                window.location.href = url;
            }
        });
    });
};