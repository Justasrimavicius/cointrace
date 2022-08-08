import React, { useEffect, useState } from 'react';
import SignUpPopup from '../AuthComponents/SignUpPopup';
import Header from '../Header';



function UnauthorizedApp() {
  const [signup, loadSignup] = useState(null);


  return (
    <React.Fragment>
        <Header props={{loggedIn:false}} /> 
        <div className="App">
          <div className='first-load-screen'>
            <div className='text'>
              <span className='first-txt'>Begin by signing up</span>
              <span className='second-txt'>Your life can be changed forever by just a click of a button.</span>
              <button className='sign-up' onClick={()=>{loadSignup(true)}}>Sign up</button>
            </div>
            <img src={require('../../Images/btc_phone.png')} height={'400px'}></img>
          </div>
        </div>
        <SignUpPopup props={{signup,loadSignup}} />
    </React.Fragment>
  );
}

export default UnauthorizedApp;
