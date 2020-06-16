(function () {
    var clipboard = new ClipboardJS('.to-weixin', {
        text: function(trigger) {
            breezeCommonJs.toast('复制成功')
            return '如果有保'; //复制内容
        }
    })
    clipboard.on('success', function(e) {
        console.log('success');
    });

    clipboard.on('error', function(e) {
        console.log('error');
    });
    $('.show-gif').on('click', function () {
        $('#mask, .show-procress-box').show();
        breezeCommonJs.forbidBodyScroll();
    })
    $('.modal-procress-close').on('click', function () {
        $('#mask, .show-procress-box').hide();
        breezeCommonJs.recoverBodyScroll();
    })
}())