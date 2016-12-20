/**
 * Created by LF on 2016/11/16.
 */
$(function(){
    $('.list li').hover(function(){
        $(this).find('a').addClass('play-a');
    },function(){
        $(this).find('a').removeClass('play-a');
    });
    click();
});
// function hover() {
//     $('.page span').hover(function () {
//         $(this).addClass('play-click').siblings('span').removeClass('play-click');
//     },function () {
//         $(this).removeClass('play-click');
//     })
// }
function click() {
    $('.page span').click(function () {
        $(this).addClass('play-click').siblings('span').removeClass('play-click');
    })
}