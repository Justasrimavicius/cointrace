import { render, screen, cleanup, afterEach, fireEvent } from '@testing-library/react';
import Header from '../Components/Header';


test('renders header', () => {
render(<Header />);

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
});

describe('renders signup and login',()=>{


    test('signup',()=>{
        render(<Header />);

        const signupButton = screen.getByTestId('signupButton');
        fireEvent.click(signupButton);

        const signupPopup = screen.getByTestId('signupPopup');
        expect(signupPopup).toBeInTheDocument();
    });
    test('login',()=>{
        render(<Header />)
        const loginButton = screen.getByTestId('loginButton');
        fireEvent.click(loginButton);

        const loginPopup = screen.getByTestId('loginPopup');
        expect(loginPopup).toBeInTheDocument();

    })
});
