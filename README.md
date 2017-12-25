# tsriot
It is a small extension for writing Riot.js script with TypeScript.

Tag layout (HTML with style) and logic can be written as separate files. This makes it easier for IDE to assist source code development.
It is effective when you want to attract the benefits of TypeScript's type system, such as when developing with multiple people.

## How to use

### Install
```sh
npm install --save-dev tsriot
```

### Write a tag
In tsriot, Riot.js tag consists of two files: .html and .ts.
- In .html file, you write only layout (HTML with style) of a tag.
- In .ts file, you write only logic (script) of a tag using TypeScript.

These file names except the extension must be the same.
You can omit .ts file when the tag has no logic.

#### Example
hello-world.html
```html
<hello-world>
  <div><input onkeyup={ edit } placeholder="Enter your name"></div>
  <p>Hello, { name }.</p>
  <style>
    ... (omitted)
  </style>
</hello-world>
```

hello-world.ts
```typescript
import * as tsriot from 'tsriot';

class HelloWorldTag extends tsriot.Tag {
  name: string;

  init() {
    this.name = 'world';
  }

  edit(e: tsriot.DomEvent) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
```

You write a class corresponding to a tag.
- A name of tag class must be CamelCase of a tag name + `Tag`.
- A tag class should be extended from the `tsriot.Tag` class.
- A tag class has same properties and methods of Riot tag instance. See http://riotjs.com/api/ for details.
- You can write initialization logic of a tag in `init()` method.
- When implementing a constructor, you must implement a constructor without arguments.
  - In a constructor, you cannot access standard properties of a tag such as opts. So you should use `init()` method for tag initialization.

After writing .html and .ts files, compile these files by tsriot command.
```sh
tsriot hello-world.html > hello-wold-tag.ts
```

tsriot command outputs TypeScript source code like original riot command do so.

For more examples, see [tsriot examples](https://github.com/sahara3/tsriot-examples).

## Restrictions
Currently, only the following custom parsers are supported.
- HTML: none
- CSS: `less`

## Build from source
```sh
npm install
npm run build
```

## Acknowledgement
This software uses source code from the following software.

### Riot.js
MIT: https://github.com/riot/riot
```
Copyright (c) 2015-present
Originally created by Muut Inc.
Actively maintained by:
 - Richard Bondi https://github.com/rsbondi
 - Gianluca Guarini https://github.com/GianlucaGuarini
 - Tsutomu Kawamura https://github.com/cognitom
 - Alberto Martínez https://github.com/aMarCruz
 - Grant Marvin https://github.com/rogueg
 - Tero Piirainen https://github.com/tipiirai
```

### riot-compiler
MIT: https://github.com/riot/compiler
```
Copyright (c) 2015 Riot
```

### @types/riot
MIT: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/riot
```
Definitions by: Boriss Nazarovs <https://github.com/Stubb0rn>
```

### riot-typed
MIT: https://github.com/Joylei/riot-typed
```
Copyright (c) 2017 Joylei<leingliu@gmail.com>
```

## License
MIT. See LICENSE file for details.
