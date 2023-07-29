import { render, screen, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {

    test('renders event name', async () => {
        const allEvents = await getEvents();
        render(<Event event={allEvents[0]} />)
        expect(screen.getByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders event location', async () => {
        const allEvents = await getEvents();
        render(<Event event={allEvents[0]} />)
        expect(screen.getByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event date', async () => {
        const allEvents = await getEvents();
        render(<Event event={allEvents[0]} />)
        expect(screen.getByText(allEvents[0].start.dateTime)).toBeInTheDocument();
    });

    test('render event details button with the title (show details)', async () => {
        const allEvents = await getEvents();
        render(<Event event={allEvents[0]} />)
        expect(screen.getByText('Show Details')).toBeInTheDocument();
    });
    
    test("shows and hides details section when the user toggles button", async () => {
        const allEvents = await getEvents();
        render(<Event event={allEvents[0]} />);
        const showDetailsButton = screen.getByText("Show Details");

        fireEvent.click(showDetailsButton);
        expect(screen.getByText(/Have you wondered how you can ask Google/)).toBeInTheDocument();
    
        fireEvent.click(showDetailsButton);
        expect(screen.queryByText(/Have you wondered how you can ask Google/)).not.toBeInTheDocument();
      });
});