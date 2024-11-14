import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComponent.css'; // Your custom styles for the component

function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="calendar-container">
      <h3 className="calendar-header">Select your check-in date</h3>
      <p className="calendar-subtitle">See prices and availability for your dates</p>
      
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        minDate={new Date()} // Optional: restrict past dates
      />

      <button
        type="button"
        className="calendar-close-button"
        onClick={() => setSelectedDate(null)}
      >
        Close
      </button>
    </div>
  );
}

export default DatePickerComponent;
