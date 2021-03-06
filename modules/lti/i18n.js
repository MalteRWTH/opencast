#!/usr/bin/env node
'use strict';

const fs = require('fs');

let i18n = {},
    inpath = './src/i18n/',
    outpath = './target/classes/tools/series/',
    files = fs.readdirSync(inpath);

files.forEach(file => {
  if (file.endsWith('.json')) {
    let lang = file.split('.')[0],
        data = fs.readFileSync(inpath + file);
    i18n[lang] = JSON.parse(data);
  }
});
fs.writeFileSync(outpath + 'i18n-data.js', 'var i18ndata = ' + JSON.stringify(i18n));
