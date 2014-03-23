$(function () {

    $('.main').onepage_scroll({
        sectionContainer: 'section',
        easing: "ease",
        animationTime: 1000,             
        pagination: true,                
        updateURL: false,                
        beforeMove: function(index) {},  
        afterMove: function(index) {
            $('section .content').show();
        },   
        loop: false,                     
        keyboard: true,                  
        responsiveFallback: false 
    });        


    var video = $('video')[0];
    video.volume = 0;
});
