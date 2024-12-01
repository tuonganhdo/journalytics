import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ChevronLeft, ChevronRight, Undo2 } from 'lucide-react';
import dayjs from 'dayjs';

export default function CustomCalendarHeader(props) {
    const { currentMonth, onMonthChange } = props;
  
    const selectNextMonth = () => {onMonthChange(currentMonth.add(1, 'month'), 'left');}
    const selectNextYear = () => onMonthChange(currentMonth.add(1, 'year'), 'left');
    const selectPreviousMonth = () => onMonthChange(currentMonth.subtract(1, 'month'), 'right');
    const selectPreviousYear = () => onMonthChange(currentMonth.subtract(1, 'year'), 'right');
    const selectThisMonth = () => (currentMonth > dayjs(new Date())) ? onMonthChange(dayjs(new Date()), 'right') : onMonthChange(today, 'left')
    const strokeWidth = 1.5;
    const arrowSize = 18;
  
    return (
      <div className="flex flex-row justify-between content-center w-full h-fit pt-2 pb-4 px-1 text-zinc-600">
        <p className="font-semibold text-sm my-auto">{currentMonth.format('MMMM YYYY')}</p>
        <div className="flex flex-row space-x-2 place-content-center my-auto">
            <button onClick={selectThisMonth} title="This month" className="my-auto">
                <Undo2 strokeWidth={strokeWidth} size={arrowSize - 2} />
            </button>
            <button onClick={selectPreviousMonth} title="Previous month"  className="my-auto">
                <ChevronLeft strokeWidth={strokeWidth} size={arrowSize} />
            </button>
            <button onClick={selectNextMonth} title="Next month"  className="my-auto">
                <ChevronRight strokeWidth={strokeWidth} size={arrowSize}/>
            </button>
        </div>
      </div>
    );
  }