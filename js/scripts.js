$('#container').imagesLoaded(function () {
    // images have loaded
});

$(function () {
    $('.carousel').carousel();
    var caption = $('div.carousel-item:nth-child(1) .carousel-caption');
    $('#row_under_carousel span').html(caption.html());
    caption.css('display', 'none');
    $(".carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.carousel-item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
        $('#row_under_carousel span').html(caption.html());
        caption.css('display', 'none');
    });
});

var $grid = $('.grid').masonry({
    // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
});

// make Masonry a jQuery plugin
jQueryBridget('masonry', Masonry, $);

// now you can use $().masonry()
$('.grid').masonry({
    columnWidth: '.grid-sizer',
    percentPosition: true
});

require('fslightbox');

