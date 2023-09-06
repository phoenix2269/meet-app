import React from 'react';

const NumberOfEvents = ({ eventNumber, onEventNumberChange, setErrorAlert }) => {
    const handleInputChanged = (value) => {
        const inputValue = parseInt(value);  // Convert input to a number

        if (isNaN(inputValue) || inputValue <= 0) {
            onEventNumberChange(0);
            setErrorAlert('Value is not a number or less than 1');
        // } else if (inputValue <= 0) {
        //     setErrorAlert('Minimum value is 1');
        } else {
            setErrorAlert("");
            onEventNumberChange(inputValue);
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