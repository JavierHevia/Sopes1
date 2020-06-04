'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Eduardo Javier Hevia Calderòn \n 201313898 \n\n');
});

app.listen(PORT, HOST);
console.log('Arrancado en http://'+HOST+':'+PORT + 'Eduardo Javier Hevia Calderòn \n 201313898 \n\n');
