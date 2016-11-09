/**
 * Created by Administrator on 2016/9/26 0026.
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