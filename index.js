const https = require('https');

const options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

https.get(options, (res) => {
  res.setEncoding('utf-8');
  res.on('data', (data) => {
    console.log(data.toString() + '\n');
  })
  res.on('end', () => {
    console.log('response stream complete');
  })
})
