import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from '../Firebase-config';

function SignUpPopup(props){
    const [submitError, setSubmitError] = useState(null);
    const [hidden, setHidden] = useState(null);
    const [avatar, setAvatar] = useState(null);

    if(props.props.signup!=null){



        function createUser(email,password){
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
                
              })
              .then((idk)=>{setAvatar(true)})
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                const form = document.querySelector('.signup-info');
                if(errorCode=='auth/email-already-in-use'){
                    form.email.setCustomValidity('Email already in use');
                    form.email.reportValidity();
                    console.log(errorMessage);

                } else {
                    setSubmitError(true)
                }
              });
        }

        function formSubmit(e){
            e.preventDefault();
            const form = document.querySelector('.signup-info');
            // Check for blank inputs
            if(form.email.value == ''){
                form.email.setCustomValidity(`Email can't be blank`);
                form.email.reportValidity();
                return;
            };
            if(form.repeatEmail.value == ''){
                form.repeatEmail.setCustomValidity(`Email can't be blank`);
                form.repeatEmail.reportValidity();
                return;
            }
            if(form.password.value == ''){
                form.password.setCustomValidity(`Password can't be blank`);
                form.password.reportValidity();
                return;
            }
            if(form.repeatPassword.value == ''){
                form.repeatPassword.setCustomValidity(`Password can't be blank`);
                form.repeatPassword.reportValidity();
                return;
            }
            // Check email pattern validity
            if(form.email.validity.patternMismatch==true){
                form.email.setCustomValidity(`Email isn't valid`);
                form.email.reportValidity();
                return;
            }

            // Check password length validity
            if(form.password.validity.tooShort==true){
                form.password.setCustomValidity('Password must be at least 6 characters long');
                form.password.reportValidity();
                return;
            }

            // Check if repeat input fields are the same as the original ones
            if(form.email.value === form.repeatEmail.value){
                form.repeatEmail.setCustomValidity('');
                form.repeatEmail.reportValidity();

                if(form.password.value === form.repeatPassword.value){

                    form.repeatPassword.setCustomValidity('');

                    // do stuff with firebase - create a user with the given email and password
                    createUser(form.email.value,form.password.value);
                } else {
                    form.password.setCustomValidity('Passwords must match');
                    form.password.reportValidity();
                    form.repeatPassword.setCustomValidity('Passwords must match');
                    form.repeatPassword.reportValidity();
                }
            } else {
                form.email.setCustomValidity('Emails must match');
                form.email.reportValidity();
                form.repeatEmail.setCustomValidity('Emails must match');
                form.repeatEmail.reportValidity();

            }
        }



        return (
            <React.Fragment>
                {avatar ? <div className='choose-avatar-overlay'>
                    <div className="choose-avatar">
                        <h3>Choose your profile avatar</h3>
                        <div className="avatar-line">
                            <img className="ada" src={require('../../Images/ProfileImages/ada.png')}></img>
                            <img className="bnb" src={require('../../Images/ProfileImages/bnb.png')}></img>
                            <img className="btc" src={require('../../Images/ProfileImages/btc.png')}></img>
                            <img className="dot" src={require('../../Images/ProfileImages/dot.png')}></img>
                            <img className="eth" src={require('../../Images/ProfileImages/eth.png')}></img>
                            <img className="usdt" src={require('../../Images/ProfileImages/usdt.png')}></img>
                        </div>
                    </div>
                </div> : 
                <div className="signup-popup" data-testid='signupPopup'>

                <div className="main-label">Enter your credentials below
                    <button className="signup-exit" onClick={()=>{props.props.loadSignup(null)}}>X</button>
                </div>
                <form className="signup-info" name="signupForm" onSubmit={(e)=>{formSubmit(e)}} noValidate>
                    <div className="signup-email">
                        <label>email:
                            <input type={'text'} name='email' required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"></input>
                        </label>
                        <label>Repeat email:
                            <input type={'text'} name='repeatEmail' required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"></input>
                        </label>
                    </div>
                    <div className="signup-password">
                        <label>Password:
                            <input type={'password'} name='password' required minLength={6}></input>
                        </label>
                        <label>Repeat password:
                            <input type={'password'} name='repeatPassword' required minLength={6}></input>
                        </label>
                    </div>
                    <button type="button" onClick={(e)=>{formSubmit(e)}}>Change my future!</button>
                </form>
                {submitError ? <span className="signup-error" onClick={()=>{setSubmitError(null)}}>Uncaught error when trying to sign up</span> : null}
                </div>
                }
                
            </React.Fragment>

        )



    }
}

export default SignUpPopup;