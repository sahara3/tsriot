import * as riot from 'riot';

export class Observable implements riot.Observable {
    constructor() {
        if (!(this instanceof Tag)) {
            riot.observable(this);
        }
    }

    on: (event: string, callback: riot.ObservableCallback) => this;

    one: (event: string, callback: riot.ObservableCallback) => this;

    off: (event: string, callback?: riot.ObservableCallback) => this;

    trigger: (event: string, ...args: any[]) => this;
}

export class Tag<O = any> extends Observable implements riot.TagInterface {
    isMounted?: boolean;

    opts: O;

    parent?: riot.TagInstance;

    root: Element;

    refs: riot.TagRefs;

    tags: riot.NestedTags;

    constructor() {
        super();
    }

    init() {
        // empty by default.
    }

    update: (data?: any) => void;

    mixin: (mixin: string | riot.TagMixin) => void;

    mount: () => void;

    unmount: (keepTheParent?: boolean) => void;
}

export interface DomEvent extends Event {
    item?: any; // current element in loop.
    which: number;
}

export function tag<T extends riot.TagInterface = any>(tagName: string, html: string, css?: string, attrs?: string, constructor?: (this: T, opts?: any) => void): string {
    return riot.tag(tagName, html, css, attrs, constructor);
}

export function mixin<T extends riot.TagInterface, S extends Tag>(tag: T, tagClass: {new(): S; }): void {
    tag.mixin(new tagClass());
}
