/**
 * Created by LF on 2016/11/24.
 */
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
    click();
    Click();
});
var click=function(){
    $('.title-right').click(function(){
        $('.home').toggle();
    })
};
function Click(){
    $('.play-list li').click(function(){
        $(this).css({'background':'#005a9f'}).siblings().css({'background':'#999'})
    })
}