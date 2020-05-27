// POPULAR EVENT
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll > $('.popular').offset().top - 400) {
        $('.popular .card').each(function (i) {
            setTimeout(function () {
                $('.popular .card').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });


    }
});
// END

// DISCOVER
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll > $('.discover').offset().top - 400) {
        $('.discover .card').each(function (i) {
            setTimeout(function () {
                $('.discover .card').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });


    }
});
// END