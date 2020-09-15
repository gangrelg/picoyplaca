const express = require('express');
const app = express();
const _index = require('./routes/index');

const port = process.env.PORT || 5000;

app.use('/', _index);

app.listen(port, () => {
  console.log(`Server running on port:. ${port}`);
});
