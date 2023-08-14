import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 is the default', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the main page is open', () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
        });

        let NumberOfEventsDOM;
        let NumberOfEventsInput;
        when('the user doesn\'t specify the number of events to display', () => {
            NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
        });

        then('the default number is 32', () => {
            expect(parseInt(NumberOfEventsInput.value, 10)).toBe(32);
        });
    });

    test('User can change the number of events to display', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
         given('the page is open', () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
        });

        let NumberOfEventsDOM;
        let NumberOfEventsInput;
        when('the user changes the number of events to display', async () => {
            const user = userEvent.setup();
            NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

            await user.type(NumberOfEventsInput, "{backspace}{backspace}10");

            expect(NumberOfEventsInput.value).toBe("10");
        });

        then('the user should see their chosen number of events at once', async () => {
            const EventListDOM = AppDOM.querySelector('#event-list');
            let EventListItems;

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            });
        });
    });
});