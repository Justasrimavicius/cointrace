import React, { useState } from 'react';
import SignUpPopup from './AuthComponents/SignUpPopup';

function App() {
  const [signup, loadSignup] = useState(null);
  return (
    <React.Fragment>
      <div className="App">
        <div className='first-load-screen'>
          <div className='text'>
            <span className='first-txt'>Begin by signing up</span>
            <span className='second-txt'>Your life can be changed forever by just a click of a button.</span>
            <button className='sign-up' onClick={()=>{loadSignup(true)}}>Sign up</button>
          </div>
          <img src={require('../Images/btc_phone.png')} height={'400px'}></img>
        </div>
      </div>
      <SignUpPopup props={{signup,loadSignup}} />
    </React.Fragment>
  );
}

export default App;
