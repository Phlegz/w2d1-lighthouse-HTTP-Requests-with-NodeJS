'use strict'
const https = require('https');
const requestOptions = {
  host: process.argv.slice(2)[0],
  path: process.argv.slice(2)[1]
};

function getAndPrintHTML () {
  https.get(requestOptions, (res) => {
    let buffer = '';
    res.setEncoding('utf-8');
    res.on('data', (data) => {
      buffer = buffer + data.toString();
    })
    res.on('end', () => {
      console.log(buffer);
      console.log('response stream complete');
    });
  });
}

getAndPrintHTML();
