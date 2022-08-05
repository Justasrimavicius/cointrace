import { auth } from '../Firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';


function LoginPopup(props){
    const [submitError, setSubmitError] = useState(null);
    if(props.props.login!=null){

        function LoginUser(email,password,form){
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                if(errorMessage=='Firebase: Error (auth/wrong-password).'){
                    form.password.setCustomValidity('Password is incorrect');
                    form.password.reportValidity();
                } else if(errorMessage=='Firebase: Error (auth/invalid-email).'){
                    form.email.setCustomValidity('Invalid email');
                    form.email.reportValidity();
                } else if(errorMessage=='Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'){
                    form.email.setCustomValidity('Too many login attempts. Try again later');
                    form.email.reportValidity();
                } else {
                    setSubmitError(true);

                }
              });
        }

        function formSubmit(e){
            e.preventDefault();
            const form = document.querySelector('.login-info');
            const email = form.email.value;
            const password = form.password.value;
            LoginUser(email,password,form);
        }


        return (
            <div className="login-popup" data-testid='loginPopup'>
                <form className="login-info" name="loginInfo" onSubmit={(e)=>{formSubmit(e)}}>
                    <label className="login-label">Enter the information</label>
                    <label><span>Email:</span>
                        <input type={'text'} name='email' required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"></input>
                    </label>
                    <label><span>Password:</span>
                        <input type={'password'} name='password' required></input>
                    </label>
                    <div className="buttons">
                        <button className="signup-submit" type="button" onClick={(e)=>{formSubmit(e)}}>Log in</button>
                        <button className="signup-exit" onClick={()=>{props.props.loadLogin(null)}}>X</button>
                    </div>

                </form>
                {submitError ? <span className="login-error" onClick={()=>{setSubmitError(null)}}>Uncaught error when trying to sign up</span> : null}

            </div>
        )

    }
}

export default LoginPopup;