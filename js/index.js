
var images = new Array(
    '/images/burger.jpg',
    '/images/transition-image.jpg',
    '/images/transition-image-2.jpg',
    '/images/transition-image-3.jpg',
    '/images/transition-image-5.jpg',

);

var slider = setInterval(function () {
    document.getElementsByTagName('header')[0].setAttribute('style', 'background-image: url("' + images[0] + '")');
    images.splice(images.length, 0, images[0]);
    images.splice(0, 1);
}, 5000);


$('.scrolltomenu').click(function () {
    $('html, body').animate({ scrollTop: $('.jsmenu').offset().top }, 1000)
})

$('.wp-1').waypoint(function (direction) {
    $('.wp-1').addClass('animate__animated animate__fadeIn')
}, {
    offset: '60%'
})

$('.wp-2').waypoint(function (direction) {
    $('.wp-2').addClass('animate__animated animate__fadeInLeft');
    $('.menu__photo-small').addClass('active')
}, {
    offset: '60%'
})


$('.wp-3').waypoint(function (direction) {
    $('.wp-3').addClass('animate__animated animate__fadeInUp');
}, {
    offset: '60%'
})

$('.wp-4').waypoint(function (direction) {
    $('.wp-4').addClass('animate__animated animate__fadeIn')
}, {
    offset: '60%'
})
