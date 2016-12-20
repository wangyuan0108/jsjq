/**
 * Created by LF on 2016/11/23.
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
    Show();
});
var click=function(){
    $('.title-right').click(function(){
        $('.home').toggle();
    })
};
function Click(){
    $('.shop-list li').click(function(){
        $(this).addClass('play').removeClass('df').siblings().removeClass('play').addClass('df');
    })
}
function show(i){
    $('.shop-list li').eq(i).click(function(){
        $('.main-one p').eq(i).show().siblings().hide();
    })
}
function Show(){
    var x;
    for(x=0;x<=2;x++){
        show(x);
    }
}