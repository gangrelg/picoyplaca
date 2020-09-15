const express = require('express');
const router = express.Router();
const { query, validationResult } = require('express-validator');

// METHOD GET
// JUST BECAUSE I'M NOT COMMITING ANY DATA SOMEWHERE
router.get(
  '/',
  [
    query('plate')
      .isString()
      .isLength({ min: 6, max: 7 })
      .matches('^[a-zA-Z0-9äöüÄÖÜ]*$'),
    query('date').isString(),
    query('time').isString().matches('^$|^(([01][0-9])|(2[0-3])):[0-5][0-9]$'),
  ],
  (req, res) => {
    const { plate, date, time } = req.query;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.send('yeah');
  }
);

module.exports = router;
