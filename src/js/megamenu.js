alert("hide");

$('div.menuzord-menu>li>a').hover(
    function() {
        alert("hi");
        $(this).children("div.megamenu-bg-img").css("display","block");
    });