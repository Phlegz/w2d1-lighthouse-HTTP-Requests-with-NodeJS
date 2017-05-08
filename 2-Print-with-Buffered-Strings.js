'use strict'
const https = require('https');

function getAndPrintHTML () {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

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
