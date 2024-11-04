import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('<Async />', () => {
    test('renders posts correctly', async() => {
        render(<Async />);

       const itemElements = await screen.findAllByRole("listitem");
       expect(itemElements).not.toHaveLength(0);
    })
})