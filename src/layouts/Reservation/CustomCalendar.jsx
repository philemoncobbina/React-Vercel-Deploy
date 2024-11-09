import React, { useState, useEffect } from 'react';
import {
  format,
  getDaysInMonth,
  getDay,
  isToday,
  isSameDay,
  isWeekend,
  startOfMonth,
  addMonths
} from 'date-fns';
import { cn } from '@/lib/utils';

const getDayNames = () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CustomCalendar = ({ selectedDate, onDateSelect, error }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const startOfCurrentMonth = startOfMonth(currentMonth);
  const daysInMonth = getDaysInMonth(currentMonth);
  const dayNames = getDayNames();

  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(selectedDate);
    }
  }, [selectedDate]);

  const handlePrevMonth = () => {
    setCurrentMonth(prev => addMonths(prev, -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1));
  };

  const handleDateClick = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onDateSelect(date); 
  };

  const renderDays = () => {
    const days = [];

    for (let i = 0; i < getDay(startOfCurrentMonth); i++) {
      days.push(<div key={`empty-${i}`} className="flex items-center justify-center p-1"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      days.push(
        <button
          key={i}
          className={cn(
            "p-1 w-7 h-8 flex items-center justify-center rounded-full text-sm",
            isWeekend(date) ? "text-red-500" : "text-gray-800",
            selectedDate && isSameDay(date, selectedDate) ? "bg-blue-500 text-white" : "",
            isToday(date) ? "border border-blue-300" : ""
          )}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="mx-auto bg-white p-2 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <button onClick={handlePrevMonth} className="p-1 text-gray-700">Prev</button>
        <span className="font-semibold text-sm">{format(currentMonth, 'MMMM yyyy')}</span>
        <button onClick={handleNextMonth} className="p-1 text-gray-700">Next</button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center font-semibold text-gray-700 text-xs">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {renderDays()}
      </div>
      {error && <div className="text-red-600 mt-2 text-xs">{error}</div>}
    </div>
  );
};

export default CustomCalendar;
