import React from 'react';
import { RangePicker } from 'react-trip-date';
import { ThemeProvider } from 'styled-components';
import themeStyle from "../../assets/syntax-themes/ghcolors.json";

function CalendarCard(props) {
    return (
    <ThemeProvider theme={themeStyle}>
    <RangePicker
        disabledBeforeToday="true"
        onChange={dates => props.set({ina: dates.from,outa:dates.to })}
    />
    </ThemeProvider>
    );
}

export default CalendarCard;