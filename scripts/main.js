function main() {
    alert('test');

}

function navbarclick() {
    $('#navabout').on(('click'), function () {

        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $('#navprojects').on(('click'), function () {

        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 2000);
    });

    $('#logo').on(('click'), function () {

        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });

}

$(document).ready(navbarclick);
