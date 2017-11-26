import * as riot from 'riot';

export class Observable implements riot.Observable {
    constructor() {
        // empty by default.
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
        // empty by default.
    }

    init() {
        // empty by default.
    }

    update: (data?: any) => void;

    mixin: (mixin: string | riot.TagMixin) => void;

    mount: () => void;

    unmount: (keepTheParent?: boolean) => void;
}

interface RiotEvent extends Event {
    item?: any; // current element in loop.
    which: number;
}
export { RiotEvent as Event };


export function tag<T extends riot.TagInterface = any>(tagName: string, html: string, css?: string, attrs?: string, constructor?: (this: T, opts?: any) => void): string {
    return riot.tag(tagName, html, css, attrs, constructor);
}

export function mixin<T extends riot.TagInterface, S extends Tag>(tag: T, tagClass: {new(): S; }): void {
    tag.mixin(new tagClass());
}
