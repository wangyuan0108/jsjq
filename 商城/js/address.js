/**
 * Created by Administrator on 2016/9/28 0028.
 */
function hoverOne() {
    $('.top_left').hover(function(){
        $('.list_down').toggle();
    });
    $('.m_width li').hover(function(){
        $(this).find('.m_menulist').toggle();
    });
    $('.do').hover(function(){
        $('.did').toggle();
    });
}
function  hoverAll(w) {
    w.hover(function () {
        w.find('ul').toggle();
    });
}
$(function () {
    hoverOne();
    hoverAll( $('.down-list'));
    hoverAll( $('.dir'));
    hoverAll(  $('.dir-list'));
});
//function hoverTwo() {
//    $('.dir-list').hover(function(){
//        $(this).find('ul').toggle();
//    })
//}
//function hoverThree(){
//    $('.down-list').hover(function(){
//        $(this).find('ul').toggle();
//    })
//}
//function hoverFour(){
//    $('.dir').hover(function(){
//      $(this).find('ul').toggle();
//   })
//}
//function  hoverAll(w) {
//    w.hover(function () {
//        w.find('ul').toggle();
//    });
//}
//$(function () {
//    hoverOne();
//    hoverAll( $('.down-list'));
//    hoverAll( $('.dir'));
//    hoverAll(  $('.dir-list'));
//});
//$(function(){
//    $('.top_left').hover(function(){
//        $('.list_down').toggle();
//    });
//    $('.m_width li').hover(function(){
//        $(this).find('.m_menulist').toggle();
//    });
//    $('.do').hover(function(){
//        $('.did').toggle();
//    });
//});
//$(function(){
//    $('.down-list').hover(function(){
//        $(this).find('ul').toggle();
//    })
//});
//$(function(){
//    $('.dir').hover(function(){
//        $(this).find('ul').toggle();
//    })
//});
//$(function(){
//    $('.dir-list').hover(function(){
//        $(this).find('ul').toggle();
//    })
//});