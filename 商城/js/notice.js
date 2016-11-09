/**
 * Created by LF on 2016/10/27.
 */
//use jquery
function hover() {
    $('.top_left').hover(function(){
        $('.list_down').toggle();
    });
    $('.m_width li').hover(function(){
        $(this).find('.m_menulist').toggle();
    });
}
//function  focus() {
//    $('.g-focus').slide({
//        mainCell:'.g-focus-pic',
//        titCell:'.g-focus-num li',
//        effect:'fade',
//        autoPlay:true
//    });
//}
//function slideLeft() {
//    $('.g-banner').slide({
//        mainCell:'.g-marquee',
//        autoPlay:true,
//        effect:'leftMarquee',
//        vis:5,
//        interTime:40,
//        trigger:'click'
//    });
//}
function play(a) {
    $('.hot2title-right li').eq(a).hover(function(){
        $('.food-dir').eq(a).show().siblings().hide();
        $(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
    });
}
//function onPlay() {
//    $('.food-dir').eq(0).not().hide();
//    var i;
//    for(i=0;i<=8;i++){
//        play(i)
//    }
//}
$(function(){
    hover();
    //focus();
    //slideLeft();
    //onPlay();
});
//$(function(){
//    $('.top_left').hover(function(){
//    	$('.list_down').toggle();
//    });
//    $('.m_width li').hover(function(){
//    	$(this).find('.m_menulist').toggle();
//    });
//});
//use superslide
//$(function(){
//	$('.g-focus').slide({
//		mainCell:'.g-focus-pic',
//		titCell:'.g-focus-num li',
//		effect:'fade',
//		autoPlay:true
//	});
//});
//$(function(){
//	$('.g-banner').slide({
//	mainCell:'.g-marquee',
//	autoPlay:true,
//	effect:'leftMarquee',
//	vis:5,
//	interTime:40,
//	trigger:'click'
//	})
//});
// $(function(){
//    $('.g-tab').slide({
//        mainCell:'.g-tabmain',
//        titCell:'.g-tabtitle ul li',
//        effect:'left',
//        autoPlay:true
//    });
//});
//$(function(){
//	$('.m-list a').hover(function(){
//		$(this).css({'color':'red'})
//	},function(){$(this).css({'color':'#666'})
//	});
//});
//$(function(){
//	$('.food-dir').eq(0).not().hide();
//	$('.hot2title-right li').eq(0).hover(function(){
//		$('.food-dir').eq(0).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//	$('.hot2title-right li').eq(1).hover(function(){
//		$('.food-dir').eq(1).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//	$('.hot2title-right li').eq(2).hover(function(){
//		$('.food-dir').eq(2).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//	$('.hot2title-right li').eq(3).hover(function(){
//		$('.food-dir').eq(3).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//	$('.hot2title-right li').eq(4).hover(function(){
//		$('.food-dir').eq(4).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//	$('.hot2title-right li').eq(5).hover(function(){
//		$('.food-dir').eq(5).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//	$('.hot2title-right li').eq(6).hover(function(){
//		$('.food-dir').eq(6).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//	$('.hot2title-right li').eq(7).hover(function(){
//		$('.food-dir').eq(7).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//	$('.hot2title-right li').eq(8).hover(function(){
//		$('.food-dir').eq(8).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//});
//function play(a) {
//	$('.hot2title-right li').eq(a).hover(function(){
//		$('.food-dir').eq(a).show().siblings().hide();
//		$(this).addClass('play').find('a').addClass('play-color').end().siblings().removeClass('play').find('a').removeClass('play-color');
//	});
//}
//$(function(){
//	$('.food-dir').eq(0).not().hide();
//	var i;
//	for(i=0;i<=8;i++){
//		play(i)
//	}
//});
//$(function(){
//	$('.g-tabtitle ul li:not(:first-child)').remove();
//	$('.g-tabmain ul:not(:first-child)').remove();
//	$('.g-tabtitle ul li:first-child').text('历凡快报')
//	//$('.g-tabmain ul:first-child').children().eq(0).find('a').text('[特惠]山姆会员店盛大开业，全店热销');
//	//$('.g-tabmain ul:first-child').children().eq(1).find('a').text('[特惠]山姆会员店盛大开业，全店热销');
//	//$('.g-tabmain ul:first-child').children().eq(2).find('a').text('[特惠]山姆会员店盛大开业，全店热销');
//	//$('.g-tabmain ul:first-child').children().eq(3).find('a').text('[特惠]山姆会员店盛大开业，全店热销');
//});
//function change(x,b){
//	$('.g-tabmain ul:first-child').children().eq(x).find('a').text(b);
//}
//$(function(){
//	change(0,'[特惠]山姆会员店盛大开业，全店热销');
//	change(1,'[公告]山姆会员商店全面入驻京东商城');
//	change(2,'[特惠]进口欧德堡低至两件7.5折');
//	change(3,'[公告]大家电订单超期自动取消公告');
//});
function search() {
    var key = $("#searchtext").val();
    if (key.trim() == "") {
        $(".index-search").empty();
        return;
    }
    console.dir(key);
    $.ajax({
        type: 'GET',
        url: 'http://192.168.2.101:88/Search/Context',
        data: {key: key},
        dataType: "JSON",
        cache: false,
        success: function (result) {
            $(".index-search").empty();
            for (var i = 0; i < result.length; i++) {
                $(".index-search").append("<div class='search-hover'><p class='search-left'>" + result[i].key + "</p><p class='search-right'>" + result[i].context + "</p></div>");
            }
        },
        error: function (msg) {
            alert(" 数据加载失败！" + msg);
        }
    })
}
$(function(){
    $('#searchtext').keyup(function(){
        search();
        ShowModel();
    })
    $('#searchtext').focusout(function(){
        $('.index-search').hide();
    })
    $('#searchtext').focusin(function(){
        ShowModel();

    })
    function ShowModel(){
        var key = $("#searchtext").val();
        if (key.trim() != "") {
            $('.index-search').show();
        }else{
            $('.index-search').hide();
        }

    }
});
