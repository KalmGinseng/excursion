// $(window).scroll(function() {
//     var hT = $('#portfolio').offset().top,
//         hH = $('#portfolio').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     console.log((hT - wH), wS);
//     if (wS > (hT + hH - wH)) {
//         document.getElementById('mainNav').style.background = "#000";
//     }
// });

var btn = document.getElementById('button');
var nav = document.getElementById('mainNav');

btn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }

    if ($(window).scrollTop() >= window.innerHeight) {
        nav.classList.remove('mainNav');
    } else {
        nav.classList.add('mainNav');
    }
});