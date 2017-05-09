'use strict'
const https = require('https');
const requestOptions = {
  host: process.argv.slice(2)[0],
  path: process.argv.slice(2)[1]
};

function getHTML (options, callback) {
  https.get(options, (res) => {
    let buffer = '';
    res.setEncoding('utf-8');
    res.on('data', (data) => {
      buffer = buffer + data.toString();
    })
    res.on('end', () => {
      callback(buffer);
      console.log('response stream complete');
    });
  });
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions,printHTML);
