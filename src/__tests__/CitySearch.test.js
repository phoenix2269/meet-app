import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import { extractLocations, getEvents } from '../api';

describe('<CitySearch /> component', () => {
/*     let CitySearchComponent;

    beforeEach(() => {
        CitySearchComponent = render(<CitySearch />);
    }); */

    test('renders text input', () => {
        render(<CitySearch />);
        const cityTextBox = screen.queryByRole('textbox');
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
    });

    test('suggestions list is hidden by default', () => {
        render(<CitySearch />);
        const suggestionList = screen.queryByRole('list');
        expect(suggestionList).not.toBeInTheDocument();
    });

    test('renders a list of suggestions when city textbox gains focus', async () => {
        render(<CitySearch />);
        const user = userEvent.setup();
        const cityTextBox = screen.queryByRole('textbox');
        await user.click(cityTextBox);
        const suggestionList = screen.queryByRole('list');
        expect(suggestionList).toBeInTheDocument();
        expect(suggestionList).toHaveClass('suggestions');
    });

    test('updates list of suggestions correctly when user types in city textbox', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);
        render(<CitySearch allLocations={allLocations} />);

        // user types "Berlin" in City textbox
        const cityTextBox = screen.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");

        //filter allLocations to locations matching "Berlin"
        const suggestions = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
        }) : [];

        //get all <li> elements inside the suggestion list
        const suggestionListItems = screen.queryAllByRole('listitem');
        expect(suggestionListItems).toHaveLength(suggestions.length + 1);
        for (let i = 0; i < suggestions.length; i++) {
            expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
        }
    });

    test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);
        render(<CitySearch allLocations={allLocations} />);

        const cityTextBox = screen.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");

        // the suggestion's textContent look like this: "Berlin, Germany"
        const BerlinGermanySuggestion = screen.queryAllByRole('listitem')[0];

        await userEvent.click(BerlinGermanySuggestion);

        expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
    });
});