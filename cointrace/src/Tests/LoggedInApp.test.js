import { render, screen, cleanup, afterEach, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import LoggedInApp from '../Components/Routes/LoggedInApp'

test('renders header', () => {

    render(<Router><LoggedInApp/></Router>)

    const loggedInApp = screen.getByTestId('LoggedInApp');
    expect(loggedInApp).toBeInTheDocument();
});

