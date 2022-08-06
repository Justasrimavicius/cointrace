import React, { useState } from 'react';
import SignUpPopup from './AuthComponents/SignUpPopup';
import LoginPopup from './AuthComponents/LoginPopup'

function Header(){

    const [signup, loadSignup] = useState(null);
    const [login, loadLogin] = useState(null);
    return (
        <React.Fragment>
            <div className="Header" data-testid='header'>
                <div className='header-left'>
                    <img src={require('../Images/btc.png')} height={'40px'}></img>
                    <span>Your financial literacy begins here!</span>
                </div>
                <div className='header-right'>
                    <button onClick={()=>{loadSignup(true)}} data-testid='signupButton'>Sign up</button>
                    <button onClick={()=>{loadLogin(true)}} data-testid='loginButton'>Log in</button>
                </div>
            </div>
            <SignUpPopup props={{signup,loadSignup}} />
            <LoginPopup props={{login, loadLogin}} />
        </React.Fragment>


    )
}

export default Header;