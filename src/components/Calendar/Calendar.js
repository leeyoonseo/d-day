import React, { useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onLunarCalendar = useCallback(() => {
    console.log('onLunarCalendar');
  }, []);

  return (
    <div className="calendar__wrap">
      <div>달력(양력)</div>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        inline
      />
    </div>
  );
};

export default Calendar;
