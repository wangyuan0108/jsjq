/**
 * Created by LF on 2016/11/15.
 */
$(function(){
    $('.list li').hover(function(){
        $(this).find('a').addClass('play-a');
    },function(){
        $(this).find('a').removeClass('play-a');
    });
    playClick()
});
function playClick(){
    $('.choice li').click(function(){
        $(this).find('a').addClass('play').removeClass('chose').parent().siblings().find('a').removeClass('play').addClass('chose');
    })
}