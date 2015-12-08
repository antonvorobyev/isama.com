$(document).ready(function() {

    $("header nav.internal ul li a").each(function() {
        if (this.href == window.location.href) {
            $(this).parent('li').addClass('active');
        }
    });

    $("header nav.internal ul li a").click(function() {
        $('header nav.internal ul li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });

});