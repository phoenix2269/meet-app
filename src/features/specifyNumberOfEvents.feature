Feature: Specify number of events
    Scenario: When user hasn't specified a number, 32 is the default
        Given the main page is open
        When the user doesn't specify the number of events to display
        Then the default number is 32

    Scenario: User can change the number of events to display
        Given the page is open
        When the user changes the number of events to display
        Then the user should see their chosen number of events at once