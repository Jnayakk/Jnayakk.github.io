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
            scrollTop: $("#projects").offset().top
        }, 2000);
    });

    $('#navresume').on(('click'), function () {

        $('html, body').animate({
            scrollTop: $("#resume").offset().top
        }, 2000);
    });
    
        $('#navskills').on(('click'), function () {

        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 2000);
    });
    
        $('#navcontact').on(('click'), function () {

        $('html, body').animate({
            scrollTop: $("#contacts").offset().top
        }, 2000);
    });

    $('#logo').on(('click'), function () {

        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });

}

$(document).ready(navbarclick);
