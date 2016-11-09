$(function(){
    $("input[name='username']").bind('focus',function(){
        $('.text02 span').css({'display':'block'})
    })
    $("input[name='username']").bind('blur',function(){
        $('.text02 span').css({'display':'none'})
    })
    $("input[name='password01']").bind('focus',function(){
        $('.text04 span').css({'display':'block'})
    })
    $("input[name='password01']").bind('blur',function(){
        $('.text04 span').css({'display':'none'})
    })
    $("input[name='password02']").bind('focus',function(){
        $('.text06 span').css({'display':'block'})
    })
    $("input[name='password02']").bind('blur',function(){
        $('.text06 span').css({'display':'none'})
    })
    $("input[name='phone']").bind('focus',function(){
        $('.text08 span').css({'display':'block'})
    })
    $("input[name='phone']").bind('blur',function(){
        $('.text08 span').css({'display':'none'})
    })
    $("input[name='code']").bind('focus',function(){
        $('.text011 span').css({'display':'block'})
    })
    $("input[name='code']").bind('blur',function(){
        $('.text011 span').css({'display':'none'})
    })
});
