import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An events element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the user has selected a location city', () => {
            AppComponent = render(<App />);
        });

        when('the list of events for the selected city loads', async () => {
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('the events elements will display collapsed', async () => {
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);

                const eventDetails = EventListDOM.querySelector('.show-details');
                expect(eventDetails).not.toBeInTheDocument();
            });
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the list of events is displayed', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        let EventListItems;
        let showDetailsButton;
        when('the user clicks on show details for a given event', async () => {
            const user = userEvent.setup();

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });

            showDetailsButton = within(EventListItems[0]).queryByText('Show Details');
            await user.click(showDetailsButton);
        });

        then('the events details will be displayed', () => {
            const details = EventListDOM.querySelector('.description');
            expect(details).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let EventListItems;
        let showDetailsButton;
        given('the user has chosen an event and clicked on the details button', async () => {
            const user = userEvent.setup();
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });

            showDetailsButton = within(EventListItems[0]).queryByText('Show details');
            await user.click(showDetailsButton);
        });

        let detailedEvent;
        let hideDetailsButton;
        when('the user clicks on the hide details button', async () => {
            const user = userEvent.setup();
            detailedEvent = EventListDOM.querySelector('.details-btn');

            hideDetailsButton = within(detailedEvent).queryByText('Hide Details');
            await user.click(hideDetailsButton);
        });

        then('the event element showuld collapse and the details hidden', () => {
            expect(hideDetailsButton).not.toBeInTheDocument();
        });
    });
});