import { useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { extractLocations, getEvents } from './api';
import NumberofEvents from './components/NumberOfEvents';
import './App.css';

const App = () => {
    const [allLocations, setAllLocations] = useState([]);
    const [eventNumber, setEventNumber] = useState(32);

  const handleEventNumberChange = (value) => {
      setEventNumber(value);
  };

  return (
      <div className="App">
          <CitySearch
              allLocations={allLocations}
          />
          <NumberofEvents
              eventNumber={eventNumber}
              onEventNumberChange={handleEventNumberChange}
            />
        <EventList />
    </div>
  );
}

export default App;
