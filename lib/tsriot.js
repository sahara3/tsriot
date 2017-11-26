import * as riot from 'riot';
export class Observable {
    constructor() {
        // empty by default.
    }
}
export class Tag extends Observable {
    constructor() {
        super();
        // empty by default.
    }
    init() {
        // empty by default.
    }
}
export function tag(tagName, html, css, attrs, constructor) {
    return riot.tag(tagName, html, css, attrs, constructor);
}
export function mixin(tag, tagClass) {
    tag.mixin(new tagClass());
}
