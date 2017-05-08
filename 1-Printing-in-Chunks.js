const https = require('https');

function getAndPrintHTMLChunks () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (res) => {
    res.setEncoding('utf-8');
    res.on('data', (data) => {
      console.log(data.toString() +'\n');
    })
    res.on('end', () => {
      console.log('response stream complete');
    })
  })

}

getAndPrintHTMLChunks();
