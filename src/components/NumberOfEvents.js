import React from 'react';

const NumberOfEvents = ({ eventNumber, onEventNumberChange }) => {
    const handleInputChanged = (value) => {
        const inputValue = parseInt(value);  // Convert input to a number

        if (inputValue) {
            onEventNumberChange(inputValue);
        } else {
            onEventNumberChange(0);
        }
    };

    return (
        <div id="number-of-events" data-testid="number-of-events">
            <input
                type="text"
                className="textbox"
                placeholder="Enter a number"
                value={eventNumber}
                onChange={(e) => handleInputChanged(e.target.value)}
            />
        </div>
    );
};

export default NumberOfEvents;