import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import CustomCalendarHeader from './CustomCalendarHeader';

export default function Calendar() {
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar 
                sx={{
                    width: '100%',
                    height: '100%',
                    '&.MuiDateCalendar-root': {
                        padding: 1.5,
                        margin: 0,
                        '& div[role="row"]' : {
                            justifyContent: 'space-around',
                            margin: 0,
                        },
                        '& .MuiDayCalendar-weekDayLabel': {
                            // fontSize: '1rem',
                            height: 'auto',
                            paddingY: '0.2rem',
                        },
                        '& .MuiPickersDay-root' : {
                            height: 'auto',
                            // width: 'auto',
                            aspectRatio: '1 / 1',
                            // backgroundColor: 'lightgray',
                            margin: 0,
                        },
                    },
                }}
                slots={{ calendarHeader: CustomCalendarHeader }}
            />
        </LocalizationProvider>
    );
}
