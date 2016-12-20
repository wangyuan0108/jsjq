/**
 * Created by LF on 2016/11/9.
 */
//调用方法
$(function(){
    $('.list li').hover(function(){
        $(this).find('a').addClass('play-a');
    },function(){
        $(this).find('a').removeClass('play-a');
    });
   slide();
    playHover();
    $('.block').smoove({offset:'10%'});
});
//方法
var hover=function(i){
    $('.main-content li').eq(i).hover(function(){
        $(this).find('img').attr('src','images/bg-img/img-0'+(i+1)+'f.png');
    },function(){
        $(this).find('img').attr('src','images/bg-img/img-0'+(i+1)+'.png');
    })
};
var playHover= function(){
    var x;
    for(x=0;x<=2;x++){
        hover(x);
    }
};
var slide=function (){
    $('.focus').slide({
        mainCell:".bd ul",
        autoPlay:true,
        titCell:'.hd li'
    });
};
