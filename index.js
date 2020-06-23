$(document).ready(function() {
        $('#font-resizer').on('click', function() {
            document.getElementById("blogentry1").style.fontSize = "xx-large";
            document.getElementById("navfonts").style.fontSize = "large";
        });
        $('#background1').on('click', function() {
            document.getElementById("bg-img").style.backgroundImage = "url('rider.jpg')";
        })
        $('#background2').on('click', function() {
            document.getElementById("bg-img").style.backgroundImage = "url('highjump.jpg')";
        })
        $('#background3').on('click', function() {
            document.getElementById("bg-img").style.backgroundImage = "url('grab.jpg')";
        })
        $("#blogentry2").bxSlider({
            auto: true,
            mode: 'fade',
            slideWidth: 600,
            slideMargin: 4,
            moveSlides: 1,
            maxSlides: 1,
            speed: 1000,
            pause: 3000,
            controls: true,
        });
});