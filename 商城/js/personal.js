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
$(function(){
    $('.right-title li:nth-child(1)').click(function(){
        $('.main-side-left').show();
        $('.m-box2').hide();
        $('.m-box3').hide();
        $(this).find('a').addClass('m-color').end().siblings().find('a').removeClass('m-color')
    });
    $('.right-title li:nth-child(2)').click(function(){
        $('.main-side-left').hide();
        $('.m-box2').show();
        $('.m-box3').hide();
        $(this).find('a').addClass('m-color').end().siblings().find('a').removeClass('m-color')
    });
    $('.right-title li:nth-child(3)').click(function(){
        $('.main-side-left').hide();
        $('.m-box2').hide();
        $('.m-box3').show();
        $(this).find('a').addClass('m-color').end().siblings().find('a').removeClass('m-color')
    })
});
$(function(){
    $('.min-img li').click(function(){
        $(this).find('b').addClass('b').end().siblings().find('b').removeClass('b');
    })
});