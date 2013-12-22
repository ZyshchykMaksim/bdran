/*bgran v1.0
* Copyright 2013 Zyshchyk Maksim
* Create 20.12.2013
* Warning: Должен быть подключен jquery.color 
* Link: https://github.com/jquery/jquery-color/
*/

; (function ($) {
    $.fn.bgran = function (o) {
        var defaults = {
            timeout: 4000,
            colors: null,
            images: null,
            type: "color" // color or image
        };

        var settings = $.extend({}, defaults, o);
        var $el = this;

        this.unit = function () {
            setInterval(function () {
                if (settings.type == "color") {
                    var hue = 'white';
                    if (settings.colors != null && settings.colors.length > 0) {
                        hue = settings.colors[Math.floor(settings.colors.length * Math.random())];
                    } else {
                        hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                    }
                    $el.animate({ backgroundColor: hue }, "slow");
                } else {
                    if (settings.images != null && settings.images.length > 0) {
                        var img = settings.images[Math.floor(settings.images.length * Math.random())];
                        $el.animate({ opacity: 0 }, 'slow', function () {
                            $(this).css({ 'background-image': 'url(' + img + ')', 'background-size': '100% 100%' }).animate({ opacity: 1 });
                        });
                    } else {
                        console.log("Warning image = null");
                    }
                }
            }, settings.timeout);
            return this;
        };
        return this.unit();
    };
})(jQuery)
