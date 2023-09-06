import { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { extractLocations, getEvents } from './api';
import NumberofEvents from './components/NumberOfEvents';
import './App.css';
import { InfoAlert, ErrorAlert } from './components/Alert';

const App = () => {
    const [allLocations, setAllLocations] = useState([]);
    const [eventNumber, setEventNumber] = useState(32);
    const [events, setEvents] = useState([]);
//    const [currentNOE, setCurrentNOE] = useState(32);
    const [currentCity, setCurrentCity] = useState("See all cities");
    const [infoAlert, setInfoAlert] = useState("");
    const [errorAlert, setErrorAlert] = useState("");

  const handleEventNumberChange = (value) => {
      setEventNumber(value);
  };

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
        allEvents :
        allEvents.filter(event => event.location === currentCity);
//    setEvents(filteredEvents.slice(0, currentNOE));
    setEvents(filteredEvents.slice(0, eventNumber));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    fetchData();
  }, [currentCity, eventNumber]);

  return (
      <div className="App">
          <div className="alerts-container">
              {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
              {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
          </div>
          <CitySearch
              allLocations={allLocations}
              setCurrentCity={setCurrentCity}
              setInfoAlert={setInfoAlert}
          />
          <NumberofEvents
              eventNumber={eventNumber}
              onEventNumberChange={handleEventNumberChange}
              setErrorAlert={setErrorAlert}
            />
        <EventList events={events} />
    </div>
  );
}

export default App;
