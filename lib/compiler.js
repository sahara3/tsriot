#!/usr/bin/env node
'use strict';

const fs = require('fs');
const util = require('util');
const riot = require('riot');

function escape(str) {
    if (!str) {
        return "";
    }
    return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function compile(tagFilePath, tagTemplate, tagClass) {
    // compile riot tag.
    var r = riot.compile(tagTemplate, {entities: true}, tagFilePath)[0];

    // build file contents.
    var name = r.tagName.toLowerCase();
    var className = name.replace(/(\-\w)/g, function(m) {
        return m[1].toUpperCase();
    }) + 'Tag';
    className = className[0].toUpperCase() + className.slice(1);

    var imports = [
        'import * as __tsriot__ from "tsriot";'
    ];

    var js = tagClass ? '__tsriot__.mixin(this, ' + className + ');' : '';
    if (r.js) {
        js = r.js + '\n' + js;
    }

    return util.format(
        "%s\n%s\n__tsriot__.tag('%s', '%s', '%s', '%s', function(opts?: any) { %s\n });",
        imports.join('\n'), tagClass,
        name, escape(r.html), escape(r.css), escape(r.attribs), js
    );
}

// main
var optionator = require('optionator')({
    prepend: 'Usage: tsriot [options]',
    options: [{
        option: 'help',
        alias: 'h',
        type: 'Boolean',
        description: 'displays help'
    },
    {
        option: 'out',
        alias: 'o',
        type: 'String',
        description: 'output file path'
    }]
});

var options = optionator.parseArgv(process.argv);
var path = options._[0];
var out = options.out;

if (options.help) {
    console.log(optionator.generateHelp());
    process.exit(0);
}

var template = fs.readFileSync(path, {encoding: 'utf8'});
fs.readFile(path.replace(/\.html/, '.ts'), {encoding: 'utf8'}, (err, data) => {
    var ts;
    if (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
        ts = '';
    }
    else {
        ts = data;
    }

    var js = compile(path, template, ts);
    if (out) {
        fs.writeFileSync(out, js, {encoding: 'utf8'});
    }
    else {
        console.log(js);
    }
});
