const express = require('express');
const router = express.Router();
const { query, validationResult } = require('express-validator');
const moment = require('moment');
const restrictions = require('../restrictions.json');

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
    // ERROR VALIDATION FROM REQUEST
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { plate, date, time } = req.query;
      const digit = Number(plate.substr(-1));

      // SOME EXTRA VALIDATION THAT WE MIGHT NEED
      if (isNaN(digit)) {
        return res.status(500).json({ msg: 'Server error' });
      }

      if (!moment(date).isValid()) {
        return res.status(500).json({ msg: 'Server error' });
      }

      // REQUEST QUERY STRINGS FORMAT
      const day = new Date(date).getDay();

      const format = 'hh:mm';

      const { days, hours } = restrictions;

      const restrictedDigitOne = days[day][0];
      const restrictedDigitTwo = days[day][1];

      // PLATE VALIDATION
      if (digit != restrictedDigitOne && digit != restrictedDigitTwo) {
        return res.status(200).json({ msg: 1 });
      } else {
        let hourSplitROne = hours[0].split('-');
        let hourSplitRTwo = hours[1].split('-');
        let minHourROne = hourSplitROne[0];
        let maxHourROne = hourSplitROne[1];
        let minHourRTwo = hourSplitRTwo[0];
        let maxHourRTwo = hourSplitRTwo[1];

        let checkTime = moment(time, format);
        let beforeTimeROne = moment(minHourROne, format);
        let afterTimeROne = moment(maxHourROne, format);
        let beforeTimeRTwo = moment(minHourRTwo, format);
        let afterTimeRTwo = moment(maxHourRTwo, format);

        if (
          !checkTime.isBetween(beforeTimeROne, afterTimeROne) &&
          !checkTime.isBetween(beforeTimeRTwo, afterTimeRTwo)
        ) {
          return res.status(200).json({ msg: 1 });
        } else {
          return res.status(200).json({ msg: 0 });
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
);

module.exports = router;
