import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('<Async />', () => {
    test('renders posts correctly', async() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{
                id: 'p1',
                title: 'first post'
            }]
        });

        render(<Async />);

       const itemElements = await screen.findAllByRole("listitem");
       expect(itemElements).not.toHaveLength(0);
    })
})