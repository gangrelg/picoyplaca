import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

export default function _Form() {
  const api = process.env.REACT_APP_API_URL;

  const [plate, setPlate] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(moment());
  const [loading, setLoading] = useState(false);

  const format = 'HH:mm';
  const isWeekday = (date) => {
    const _date = new Date(date);
    const day = _date.getDay();
    return day !== 0 && day !== 6;
  };

  function handleTime(value) {
    setTime(value);
  }

  function validateData() {
    if (
      plate.length >= 6 &&
      plate.length <= 7 &&
      /^[A-Za-z]{3,3}[0-9]{3,4}$/.test(plate) == true
    ) {
      return true;
    } else {
      return false;
    }
  }

  const submitData = () => {
    setLoading(true);
    const formattedTime = time.format('HH:mm');
    const formattedDate = moment(startDate).format('MM/DD/YYYY');
    if (validateData()) {
      fetch(
        `${api}/?plate=${plate}&date=${formattedDate}&time=${formattedTime}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.msg === 1) {
            alert('Usted puede circular');
          } else {
            alert('Usted no puede circular');
          }
          setLoading(false);
        })
        .catch((err) => {
          alert('Ha ocurrido un error inesperado');
          setLoading(false);
        });
    } else {
      alert('Uno o mas datos son incorrectos');
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Form>
        <Form.Row>
          <Col>
            <Form.Label>Placa</Form.Label>
            <Form.Control
              placeholder='AAA5451'
              maxLength={7}
              onChange={(val) => setPlate(val.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Fecha</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              filterDate={isWeekday}
            />
          </Col>
          <Col>
            <Form.Label>Hora</Form.Label>
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
          </Col>
        </Form.Row>
        <Button
          variant='success'
          onClick={submitData}
          disabled={loading === true ? true : false}
        >
          Submit
        </Button>
      </Form>
    </Fragment>
  );
}
