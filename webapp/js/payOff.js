/**
 * Created by LF on 2016/12/14.
 */
$(function(){
    $('.payStep a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});