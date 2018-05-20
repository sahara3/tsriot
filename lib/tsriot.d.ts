import * as riot from 'riot';
export declare class Observable implements riot.Observable {
    constructor();
    on: (event: string, callback: riot.ObservableCallback) => this;
    one: (event: string, callback: riot.ObservableCallback) => this;
    off: (event: string, callback?: riot.ObservableCallback) => this;
    trigger: (event: string, ...args: any[]) => this;
}
export declare class Tag<O = any> extends Observable implements riot.TagInterface {
    isMounted?: boolean;
    opts: O;
    parent?: riot.TagInstance;
    root: Element;
    refs: riot.TagRefs;
    tags: riot.NestedTags;
    constructor();
    init(): void;
    update: (data?: any) => void;
    mixin: (mixin: string | riot.TagMixin) => void;
    mount: () => void;
    unmount: (keepTheParent?: boolean) => void;
}
export interface DomEvent extends Event {
    item?: any;
    which: number;
    preventUpdate?: boolean;
}
export declare function tag<T extends riot.TagInterface = any>(tagName: string, html: string, css?: string, attrs?: string, constructor?: (this: T, opts?: any) => void): string;
export declare function mixin<T extends riot.TagInterface, S extends Tag>(tag: T, tagClass: {
    new (): S;
}): void;
