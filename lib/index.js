'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var riot = require('riot');

var Observable = function Observable() {
    if (!(this instanceof Tag)) {
        riot.observable(this);
    }
};
var Tag = /*@__PURE__*/(function (Observable) {
    function Tag() {
        Observable.call(this);
    }

    if ( Observable ) Tag.__proto__ = Observable;
    Tag.prototype = Object.create( Observable && Observable.prototype );
    Tag.prototype.constructor = Tag;
    Tag.prototype.init = function init () {
    };

    return Tag;
}(Observable));
function tag(tagName, html, css, attrs, constructor) {
    return riot.tag(tagName, html, css, attrs, constructor);
}
function mixin(tag, tagClass) {
    tag.mixin(new tagClass());
}

exports.Observable = Observable;
exports.Tag = Tag;
exports.mixin = mixin;
exports.tag = tag;
