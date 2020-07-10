import moment from 'moment';
import React, { useState } from 'react';

const Break = ({
    breakLengthInSeconds,
    incrementBreakLengthByOneMinute,
    decrementBreakLengthByOneMinute,

}) => {
      const breakLengthInMinutes = moment.duration(breakLengthInSeconds, 's').minutes(); // the seconds to minutes conversion is HERE!
    return (
         <div>
            <p id="break-label">Break</p> 
            <p id="break-length">{breakLengthInSeconds}</p>

            <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>
                +
            </button>
            <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>
                -
            </button>
        </div>
    );
};

export default Break; 