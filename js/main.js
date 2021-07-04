$(document).ready(function () {
    $('.fa-bars').click(function () {
        $('.overlay-menu').fadeToggle()
        $('.close-icon').fadeToggle();
        $('.fa-bars').fadeOut()


    })

})


$(document).ready(function () {
    $('.close-icon').click(function () {
        $('.overlay-menu').fadeOut()
        $('.close-icon').fadeOut();
        $('.fa-bars').fadeToggle()


    })

})








$(document).ready(function () {

    $(window).scroll(function () {
        let t = $(window).scrollTop();

        if (t > 40) {
            $('header .top-nav-container').css({
                background: 'white',
                height: "80px"

            })

        } else {

            $('header .top-nav-container').css('background', 'transparent')
        }


    })


})


$('.color-faq').click(function () {
    $('.color-faq').removeClass('active');
    $(this).addClass('active');
});
$('.faq-text .item').first().show();
$('.color-faq').click(function () {
    let indexofColorfaq = $(this).index();
    $('.faq-text .item').hide();
    $('.faq-text .item').eq(indexofColorfaq).show();
});



$('.click1').click(function () {
    $('.faq-text ul li.click1').toggleClass('style-li');
    $('.faq-text ul li.click1 .icon-minus').toggle();
    $('.faq-text ul li.click1 .icon-plus').toggle();
    $('.faq-text ul li.click1 + .ul-text').slideToggle();
});
$('.click2').click(function () {
    $('.faq-text ul li.click2').toggleClass('style-li');
    $('.faq-text ul li.click2 .icon-minus').toggle();
    $('.faq-text ul li.click2 .icon-plus').toggle();
    $('.faq-text ul li.click2 + .ul-text').slideToggle();
});
$('.click3').click(function () {
    $('.faq-text ul li.click3').toggleClass('style-li');
    $('.faq-text ul li.click3 .icon-minus').toggle();
    $('.faq-text ul li.click3 .icon-plus').toggle();
    $('.faq-text ul li.click3 + .ul-text').slideToggle();
});
$('.click4').click(function () {
    $('.faq-text ul li.click4').toggleClass('style-li');
    $('.faq-text ul li.click4 .icon-minus').toggle();
    $('.faq-text ul li.click4 .icon-plus').toggle();
    $('.faq-text ul li.click4 + .ul-text').slideToggle();
});
$('.click5').click(function () {
    $('.faq-text ul li.click5').toggleClass('style-li');
    $('.faq-text ul li.click5 .icon-minus').toggle();
    $('.faq-text ul li.click5 .icon-plus').toggle();
    $('.faq-text ul li.click5 + .ul-text').slideToggle();
});
$('.click6').click(function () {
    $('.faq-text ul li.click6').toggleClass('style-li');
    $('.faq-text ul li.click6 .icon-minus').toggle();
    $('.faq-text ul li.click6 .icon-plus').toggle();
    $('.faq-text ul li.click6 + .ul-text').slideToggle();
});



jQuery("#responsive_headline").fitText();
