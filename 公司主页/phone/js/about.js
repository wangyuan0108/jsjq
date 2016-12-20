/**
 * Created by LF on 2016/11/22.
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
});
var click=function(){
    $('.title-right').click(function(){
        $('.home').toggle();
    })
};