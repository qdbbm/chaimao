$(function () {

    // tab切换
    $('.js-mod-tab').on('click', 'a', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings('.mod-tab-content').find('.mod-tab-pane').addClass('mbui-hide');
        $(this).parent().siblings('.mod-tab-content').find('.mod-tab-pane:eq(' + $(this).index() + ')').removeClass('mbui-hide');
    })

    // $('input').on('focus', function () {
    //     $('html,body').addClass('ios-fixed-input');
    // })

    // $('input').on('blur', function () {
    //     $('html,body').removeClass('ios-fixed-input');
    // })

})

function openShareTips() {
    $('.mod-share-wrap').addClass('active');
}

function closeShareTips() {
    $('.mod-share-wrap').removeClass('active');
}