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
$(function(){
	$('.g-focus').slide({
		mainCell:'.g-focus-pic',
		titCell:'.g-focus-num li',
		effect:'fade',
		autoPlay:true
	});
});	
$(function(){
	$('.g-banner').slide({
	mainCell:'.g-marquee',
	autoPlay:true,
	effect:'leftMarquee',
	vis:5,
	interTime:40,
	trigger:'click'
	})
});
 $(function(){
    $('.g-tab').slide({
        mainCell:'.g-tabmain',
        titCell:'.g-tabtitle ul li',
        effect:'left',
        autoPlay:true
    });
});
$(function(){
	$(".g-label").slide({ 
		mainCell:".bd ul",
		effect:"fade",
		autoPlay:false 
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
function showBox() {
	var dirWrap=$('.dir-wrap').val();
	if (dirWrap==""){
		$('.dir-wrap').append("<div class='ts'><h2>抱歉，没有找到相关的商品</h2><dl><dt>建议您：</dt><dd>1、适当减少删选条件</dd><dd>2、调整价格区间</dd><dd>3、尝试其他关键字</dd></dl><p><a href='#'>返回上一部</a></p></div>")
	}
}
$(function(){
	showBox();
});