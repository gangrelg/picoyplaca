import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

export default function _Form() {
  const [plate, setPlate] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(moment());
  const api = process.env.REACT_APP_API_URL;
  const format = 'HH:mm';

  function handleTime(value) {
    setTime(value);
  }

  const submitData = () => {
    const formattedTime = time.format('HH:mm');
    const formattedDate = moment(startDate).format('MM/DD/YYYY');
    fetch(`${api}/?plate=${plate}&date=${formattedDate}&time=${formattedTime}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 1) {
          alert('Usted puede circular');
        } else {
          alert('Usted no puede circular');
        }
      })
      .catch((err) => {
        alert('Por favor, verifique los datos');
      });
  };

  return (
    <Fragment>
      <Form>
        <Form.Group>
          <Form.Label>Placa</Form.Label>
          <Form.Control
            placeholder='AAA5451'
            onChange={(val) => setPlate(val.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Form.Group>
        <Form.Group>
          <TimePicker
            defaultValue={time}
            value={time}
            showHour={false}
            onChange={(val) => handleTime(val)}
            format={format}
            showSecond={false}
            showMinute={true}
            showHour={true}
          />
        </Form.Group>
        <Button variant='success' onClick={submitData}>
          Success
        </Button>
      </Form>
    </Fragment>
  );
}
