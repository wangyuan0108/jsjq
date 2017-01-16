//ajax的用法总结

//通过调用$.ajax来进行通信,参数在一个对象当中
$.ajax({
    //发送的的数据类型，我觉得我可以这么去理解它
    accepts:'text/json',
    //异步发起请求，设置为false则为同步
    async:true,
    beforeSend:function(xhr){
        //在这里可以设置请求头
        //只有post提交需要设置下请求头，当然这是针对原生的情况下.
        //原生当中可以设置请求头和接收响应头,node 中是可以接收请求头和设置响应头
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    },
    //是否决定使用缓存的数据，如果不使用的话，则设置为false
    cache:false,
    //如果是post提交的话，就必须设置下
    contentType:'application/x-www-form-urlencoded',
    //无论是get提交还是post提交，数据都会放在这儿
    data:{name:"lizhiyuan",password:'123456'},
    //数据类型
    dataType:'json',
    //请求发送失败的时候
    error:function(xhr,status,err){

    },
    //自定义的请求头
    headers:{'name':'lizhiyuan'},
    //这里面接收三个参数，根据data-type处理过的数据data,返回的状态码status,还有一个JQ自带的jqXHR对象
    success:function(data,status,jqXHR){
        //可以接收到响应头
        //主要是为了接收到数据
        data.message;
    },
    url:'/api/user/login',
    type:'POST',
    timemout:10*1000

}