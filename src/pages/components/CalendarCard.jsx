import React from 'react';
import { DatePicker, RangePicker, theme } from 'react-trip-date';
import {ThemeProvider} from 'styled-components';
import themeStyle from "../../assets/syntax-themes/ghcolors.json";

function CalendarCard(props) {
    return (
    <ThemeProvider theme={themeStyle}>
    <RangePicker
        // jalali={boolean("jalali", false)}
        // allowDisabledDaysSpan={boolean("allow disabled days span", false)}
        // disabled={boolean("disabled", false)}
        // startOfWeek={number("start of week", 0)}
        // autoResponsive={boolean("auto responsive", true)}
        disabledBeforeToday="true"
        // disabledBeforeDate={text("disabled before date", disabledBeforeDate)}
        // disabledAfterDate={text("disabled after date", disabledAfterDate)}
        // numberOfMonths={number("number of months", 4)}
        // initialMonthAndYear={text("initial month and year", initialMonthAndYear)}
        // onRangeDateInScreen={window => console.log("window changed", window)}
        // selectedDays={selectedDays}
        // disabledDays={array("disabled days", disabledDays)}
        onChange={dates => console.log("dates", dates)}
    />
    </ThemeProvider>
    );
}

export default CalendarCard;