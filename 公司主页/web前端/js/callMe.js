/**
 * Created by LF on 2016/11/17.
 */
$(function(){
    $('.list li').hover(function(){
        $(this).find('a').addClass('play-a');
    },function(){
        $(this).find('a').removeClass('play-a');
    });
});