Feature: Show/Hide an event's details
    Scenario: An events element is collapsed by default
        Given the user has selected a location city
        When the list of events for the selected city loads
        Then the events elements will display collapsed

    Scenario: User can expand an event to see its details
        Given the list of events is displayed
        When the user clicks on show details for a given event
        Then the events details will be displayed

    Scenario: User can collapse an event to hide its details
        Given the user has chosen an event and clicked on the details button
        When the user clicks on the hide details button
        Then the event element showuld collapse and the details hidden
