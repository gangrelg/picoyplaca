const express = require('express');
const app = express();
const _index = require('./routes/index');

const port = process.env.PORT || 5000;

app.use('/api/placa', _index);

app.use(express.static('./client/build'));
app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'client/build/' });
});

const server = app.listen(port, () => {
  console.log(`Server running on port:. ${port}`);
});

module.exports = server;
