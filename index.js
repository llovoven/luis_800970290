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
});