import * as riot from 'riot';
export class Observable {
    constructor() {
        if (!(this instanceof Tag)) {
            riot.observable(this);
        }
    }
}
export class Tag extends Observable {
    constructor() {
        super();
    }
    init() {
    }
}
export function tag(tagName, html, css, attrs, constructor) {
    return riot.tag(tagName, html, css, attrs, constructor);
}
export function mixin(tag, tagClass) {
    tag.mixin(new tagClass());
}
//# sourceMappingURL=tsriot.js.map