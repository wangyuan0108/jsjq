/**
 * Created by LF on 2016/10/20.
 */
/**
 * Created by Administrator on 2016/9/28 0028.
 */
$(function(){
    $('.top_left').hover(function(){
        $('.list_down').toggle();
    });
    $('.m_width li').hover(function(){
        $(this).find('.m_menulist').toggle();
    });
    $('.do').hover(function(){
        $('.did').toggle();
    });
});
$(function(){
    $('.down-list').hover(function(){
        $(this).find('ul').toggle();
    })
});
$(function(){
    $('.dir').hover(function(){
        $(this).find('ul').toggle();
    })
});
$(function(){
    $('.dir-list').hover(function(){
        $(this).find('ul').toggle();
    })
});