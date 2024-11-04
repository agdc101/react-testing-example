import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders correctly', () => {
        render(<Greeting />);

        const helloWorldElement = screen.getByText("Hello World!");
        expect(helloWorldElement).toBeInTheDocument();
    })
})