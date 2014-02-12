/*
* Coded by Pana
* 2014-01-28
*/


$(function(){
    var $win = $(window);
    var winH = $win.height();
    var winW = $win.width();


    // 设置section高度
    // $('section').height(winH);


    var $v = $('video');
    var v = $v[0];
    v.volume = 0;


    // h1居中, css是否可以实现 ?
    var $h = $('h1');
    var hH = $h.height();
    var hW = $h.width();
    $h.css('top', (winH - hH)/2 + 'px').css('left', (winW-hW)/2 + 'px');


    console.log(hH, hW);


    var $tmp = $('.chapter.bgblue');
    var wheeling = false;
    $(window).bind('mousewheel', function(event) {
        if(wheeling) return;
        wheeling = true;
        if (event.originalEvent.wheelDelta >= 0) {
            $tmp.removeClass('show');
        } else {
            $tmp.addClass('show')
        }
        setTimeout(function(){
            wheeling = false;
        }, 400);
    });
    



});