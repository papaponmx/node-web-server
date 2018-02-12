const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Jaime',
    likes: [
      'Women',
      'Protein powder',
      'Movies',
      'Tennis',
    ],
  });
 });

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'unable to fulfill request',
  });
});

app.listen(3000);
