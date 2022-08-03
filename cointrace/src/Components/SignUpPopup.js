import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from './Firebase-config';

function SignUpPopup(props){

    const [submitError, setSubmitError] = useState(null);
        
    useEffect(()=>{
        if(submitError!=null){

        }
    },[submitError]);

    if(props.props!=null){



        function createUser(email,password){
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                const form = document.querySelector('.signup-info');
                if(errorCode!='auth/email-already-in-use'){
                    form.email.setCustomValidity('Email already in use');
                    form.email.reportValidity();
                } else {
                    setSubmitError(<span className="signup-error">Uncaught error when trying to sign up</span>)
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
                    console.log('good form');
                    createUser(form.email.value,form.password.value);
                    // do stuff with firebase - create a user with the given email and password
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
            <div className="signup-popup">
                <label className="main-label">Enter your credentials below</label>
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
                {submitError}
            </div>
        )



    }
}

export default SignUpPopup;