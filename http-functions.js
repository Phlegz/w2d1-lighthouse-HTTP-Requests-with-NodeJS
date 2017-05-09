'use strict'
const https = require('https');

function getHTML(options, callback) {
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

module.exports = getHTML
