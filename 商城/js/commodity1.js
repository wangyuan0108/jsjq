//use jquery
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
    $('.m-list a').hover(function(){
        $(this).css({'color':'red'})
    },function(){$(this).css({'color':'#666'})
    });
});
//use superslide
function menuFixed(id){
    var obj = document.getElementById(id);
    var _getHeight = obj.offsetTop;

    window.onscroll = function(){
        changePos(id,_getHeight);
    }
}
function changePos(id,height){
    var obj = document.getElementById(id);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop < height){
        obj.style.position = 'relative';
    }else{
        obj.style.position = 'fixed';
    }
}
$(function(){
  menuFixed('pj');
});
function play(a) {
    $('.zw-main-title li').eq(a).click(function(){
        $('.zw-main-content').eq(a).show().siblings().hide();
        $(this).addClass('zw-color').siblings().removeClass('zw-color');
        $('.zw-main-title').css('display','block');
    });
}
$(function(){
    $('.zw-main-content').eq(1).hide();
    play(0);
    play(1);
});
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