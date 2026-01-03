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
        return $(window).scroll(function () {
            return $(window).scrollTop() > 200 ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
        }), $("#back-to-top").click(function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return false;
        })
    })
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