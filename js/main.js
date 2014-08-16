/*global Zepto*/
(function ($) {

    "use strict";

    var tay1orjones = {

        otherVariable: "can be anything",

        el: {

            header: $(".header")

        },

        functionNameHere: function (params) {

            // code
            return params;

        },

        toggleNavVisibility: function () {

            tay1orjones.el.header.toggleClass("open-nav");

        },

        events: function () {

            // tay1orjones.el.formBtn().on('click', tay1orjones.submitHandler);
            tay1orjones.el.navToggle.on('click', tay1orjones.toggleNavVisibility);

        },

        init: function () {

            tay1orjones.events();

        }

    };

    tay1orjones.init();

}(Zepto));
