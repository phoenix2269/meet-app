# Meet App

## Objective

To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Demo

The deployed app can be viewed [here.](https://phoenix2269.github.io/meet-app/)

## Description

### User Stories
-   As a user, I would like to be able to filter events by city so that I can see the list of events that
    take place in that city.
-   As a user, I would like to be able to show/hide event details so that I can see more/less
    information about an event.
-   As a user, I would like to be able to specify the number of events I want to view in the app so
    that I can see more or fewer events in the events list at once.
-   As a user, I would like to be able to use the app when offline so that I can see the events I
    viewed the last time I was online.
-   As a user, I would like to be able to add the app shortcut to my home screen so that I can
    open the app faster.
-   As a user, I would like to be able to see a chart showing the upcoming events in each city so
    that I know what events are organized in which city

### Key Features

_Filter Events By City_
-   Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
-   Scenario 2: User should see a list of suggestions when they search for a city.
-   Scenario 3: User can select a city from the suggested list.

_Show/Hide Event Details_
-   Scenario 1: An event element is collapsed by default.
-   Scenario 2: User can expand an event to see details.
-   Scenario 3: User can collapse an event to hide details.

_Specify Number of Events_
-   Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
-   Scenario 2: User can change the number of events displayed.

_Use the App When Offline_
-   Scenario 1: Show cached data when there’s no internet connection
-   Scenario 2: Show error when user changes search settings (city, number of events).

_Add an App Shortcut to the Home Screen_
-   Scenario 1: User can install the meet app as a shortcut on their device home screen.

_Display Charts Visualizing Event Details_
-   Scenario 1: Show a chart with the number of upcoming events in each city

### Test Scenarios

_Filter Events By City_
SCENARIO 1 - When user hasn’t searched for a specific city, show upcoming events from all cities.
-   Given user hasn’t searched for any city
-   When the user opens the app
-   Then the user should see a list of upcoming events

SCENARIO 2 - User should see a list of suggestions when they search for a city.
-   Given the main page is open
-   When user starts typing in the city textbox
-   Then the user should receive a list of cities (suggestions) that match what they’ve typed

SCENARIO 3 - User can select a city from the suggested list.
-   Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing
-   When the user selects a city (e.g., “Berlin, Germany”) from the list
-   Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city

_Show/Hide Event Details_
SCENARIO 1 - An event element is collapsed by default.
-   Given user hasn't expanded an event element
-   When the user expands an event element
-   Then show more information about the event

SCENARIO 2 - User can expand an event to see details.
-   Given event page is open
-   When the user expands an event to see the details
-   Then the user should see the details of the event

SCENARIO 3 - User can collapse an event to hide details.
-   Given event details page is open
-   When the user closes the details page
-   Then the user should see the events element page

_Specify Number of Events_
SCENARIO 1 - When user hasn’t specified a number, 32 events are shown by default.
-   Given user hasn’t specified the number of events to show
-   When the user selects a city
-   Then the user should see a list of 32 upcoming events

SCENARIO 2 - User can change the number of events displayed.
-   Given user has specified the number of events
-   When the user selects a city
-   Then show the user spcified number of events

_Use the App When Offline_
SCENARIO 1 - Show cached data when there’s no internet connection
-   Given user has visited the site and site information has been cached
-   When the user disconnects from the net
-   Then show user the information cached from the last visit

SCENARIO 2 - Show error when user changes search settings (city, number of events).
-   Given user is offline
-   When the user changes search settings
-   Then show an error that user is offline

_Add an App Shortcut to the Home Screen_
SCENARIO 1 - User can install the meet app as a shortcut on their device home screen.
-   Given user has visited the site and likes it
-   When the user chooses to add a shortcut to the home screen
-   Then add the app shortcut to the home screen

_Display Charts Visualizing Event Details_
SCENARIO 1 - Show a chart with the number of upcoming events in each city.
-   Given user hasn't chosen a city
-   When the user chooses a city
-   Then show a chart of events details


## Getting Started

### Tech Stack

-   React
-   Javascript


 
