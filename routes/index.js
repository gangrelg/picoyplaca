const express = require('express');
const router = express.Router();
const { query, validationResult } = require('express-validator');

// METHOD GET
// JUST BECAUSE I'M NOT COMMITING ANY DATA SOMEWHERE
router.get(
  '/find',
  [
    query('plate')
      .isString()
      .isLength({ min: 6, max: 7 })
      .matches('^[a-zA-Z0-9äöüÄÖÜ]*$'),
    query('date').isString(),
    query('time').isString().matches('^$|^(([01][0-9])|(2[0-3])):[0-5][0-9]$'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { plate, date, time } = req.query;
    const digit = plate.substr(-1);
    const day = new Date(date).getDay();

    return res.status(200).send(`plate: ${day}`);
  }
);

module.exports = router;
