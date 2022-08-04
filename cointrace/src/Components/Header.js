import React, { useEffect, useState } from 'react';
import SignUpPopup from './SignUpPopup';

function Header(){

    const [signup, loadSignup] = useState(null);

    return (
        <React.Fragment>
            <div className="Header" data-testid='header'>
                <div className='header-left'>
                    <img src={require('../Images/btc.png')} height={'40px'}></img>
                    <span>Your financial literacy begins here!</span>
                </div>
                <div className='header-right'>
                    <button onClick={()=>{loadSignup(true)}} data-testid='signupButton'>Sign up</button>
                    <button>Log in</button>
                </div>
            </div>
            <SignUpPopup props={{signup,loadSignup}} />
        </React.Fragment>


    )
}

export default Header;