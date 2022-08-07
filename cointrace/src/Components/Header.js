import React, { useEffect, useState } from 'react';
import SignUpPopup from './AuthComponents/SignUpPopup';
import LoginPopup from './AuthComponents/LoginPopup'
import { useNavigate } from 'react-router-dom';

import { db } from './Firebase-config';
import { doc, getDoc } from "firebase/firestore"; 

function Header(props){

    const [signup, loadSignup] = useState(null);
    const [login, loadLogin] = useState(null);
    const [avatarLink, setAvatarLink] = useState(null);

    const [triggerRoute, setTriggerRoute] = useState(null);
    let navigate = useNavigate();

    useEffect(()=>{
        if(triggerRoute!=null){
            navigate('/');
        }
    },[triggerRoute]);
    useEffect(()=>{
        if(props.props.loggedIn!=null){
            getAvatar();
        }
    },[props.props.loggedIn]);
    async function getAvatar(){
        try{
            const docRef = doc(db, "users", sessionStorage.getItem('user'));
            const docSnap = getDoc(docRef).then((e)=>{
            setAvatarLink(require(`../Images/ProfileImages/${e.data().avatar}.png`));
            });
        }
        catch{

        }
    }
    return (
        <React.Fragment>
            <div className="Header" data-testid='header'>
                <div className='header-left'>
                    <img src={require('../Images/btc.png')} height={'40px'}></img>
                    <span>Your financial literacy begins here!</span>
                </div>
                <div className='header-right'>
                    {!props.props.loggedIn ? <button onClick={()=>{loadSignup(true)}} data-testid='signupButton'>Sign up</button> : null}
                    {!props.props.loggedIn ? <button onClick={()=>{loadLogin(true)}} data-testid='loginButton'>Log in</button> : null}
                    {props.props.loggedIn ? <img src={avatarLink} className='header-avatar' width={'40px'} height={'40px'} tabIndex='1'></img> : null}
                    {props.props.loggedIn ? <button onClick={()=>{setTriggerRoute('/')}}>Log out</button> : null}
                </div>
            </div>
            <SignUpPopup props={{signup,loadSignup}} />
            <LoginPopup props={{login,loadLogin}} />
        </React.Fragment>


    )
}

export default Header;