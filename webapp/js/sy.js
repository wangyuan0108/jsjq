/**
 * Created by LF on 2016/12/8.
 */
$(function(){
    function fullWidth(){
        if($('body').width() >= 750){
            $('html').css('font-size',100 + 'px');
            return ;
        }
        var scale = $('body').width() / 750;
        $('html').css('font-size', 100 * scale + 'px');
    };
    fullWidth();
    $(window).resize(function(){
        fullWidth();
    });
});