/**
 * Created by LF on 2016/11/18.
 */
$(function(){
    var swiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        direction: 'vertical'
    });
    cliok();
});
var cliok=function(){
    $('.title-right').click(function(){
        $('.home').toggle();
    })
};
$(function(){
    function fullWidth(){
        if($('body').width() >= 640){
            $('html').css('font-size',100 + 'px');
            return ;
        }
        var scale = $('body').width() / 640;
        $('html').css('font-size', 100 * scale + 'px');
    };
    fullWidth();
    $(window).resize(function(){
        fullWidth();
    });
});