$(function () {

    var $video = $('video');
    var video = $video[0];
    video.volume = 0;
    var $main = $('.main');


    // video.play();

    $('.main').onepage_scroll({
        sectionContainer: 'section',
        easing: "ease",
        animationTime: 1000,             
        pagination: true,                
        updateURL: false,                
        beforeMove: function(index) {},  
        afterMove: function(index) {
            var a = $('section.active').data('index');
            if(a == 1)
                $main.attr('style', 'relative');
        },   
        loop: false,                     
        keyboard: true,                  
        responsiveFallback: false 
    });        


});
