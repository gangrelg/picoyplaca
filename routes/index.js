const express = require('express');
const router = express.Router();

// METHOD GET
// JUST BECAUSE I'M NOT COMMITING ANY DATA SOMEWHERE
router.get('/', (req, res) => {
  res.send(`Route Working!`);
});

module.exports = router;
