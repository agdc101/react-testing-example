
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders hello world text', () => {
        render(<Greeting />);

        const helloWorldElement = screen.getByText("Hello World!");
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders good to be here if button NOT clicked', () => {
        render(<Greeting />);

        const paragraphElement = screen.getByText("good to be here", {exact: false});
        expect(paragraphElement).toBeInTheDocument();
    })

    test('renders changed! if button is clicked', () => {
        render(<Greeting />);

        userEvent.click(screen.getByRole('button', { name: /change/i }));

        const paragraphElement = screen.getByText("changed!", {exact: false});
        expect(paragraphElement).toBeInTheDocument();
    })

    test('does not render "good to be here" if button was clicked', () => {
        render(<Greeting />);

        userEvent.click(screen.getByRole('button', { name: /change/i }));

        const paragraphElement = screen.queryByText("good to be here", {exact: false});
        expect(paragraphElement).toBeNull();
    })
})