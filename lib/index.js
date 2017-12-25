'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var riot = require('riot');

var Observable = function Observable() {
    if (!(this instanceof Tag)) {
        riot.observable(this);
    }
};
var Tag = (function (Observable) {
    function Tag() {
        Observable.call(this);
    }

    if ( Observable ) Tag.__proto__ = Observable;
    Tag.prototype = Object.create( Observable && Observable.prototype );
    Tag.prototype.constructor = Tag;
    Tag.prototype.init = function init () {
        // empty by default.
    };

    return Tag;
}(Observable));
function tag$1(tagName, html, css, attrs, constructor) {
    return riot.tag(tagName, html, css, attrs, constructor);
}
function mixin(tag$$1, tagClass) {
    tag$$1.mixin(new tagClass());
}

exports.Observable = Observable;
exports.Tag = Tag;
exports.tag = tag$1;
exports.mixin = mixin;
