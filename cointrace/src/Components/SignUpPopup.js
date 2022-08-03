import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function SignUpPopup(props){
    if(props.props!=null){

        function formSubmit(e){
            e.preventDefault();
            const form = document.querySelector('.signup-info');
            // Check for blank inputs
            if(form.email.value == ''){
                form.email.setCustomValidity('Email cant be blank');
                form.email.reportValidity();
                return;
            };
            if(form.repeatEmail.value == ''){
                form.repeatEmail.setCustomValidity('Email cant be blank');
                form.repeatEmail.reportValidity();
                return;
            }
            if(form.password.value == ''){
                form.password.setCustomValidity('Password cant be blank');
                form.password.reportValidity();
                return;
            }
            if(form.repeatPassword.value == ''){
                form.repeatPassword.setCustomValidity('Password cant be blank');
                form.repeatPassword.reportValidity();
                return;
            }
            if(form.email.value == form.repeatEmail.value){

                form.repeatEmail.setCustomValidity('');
                form.repeatEmail.reportValidity();

                if(form.password.value === form.repeatPassword.value){

                    form.repeatPassword.setCustomValidity('');
                    console.log('good form');
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

        // const auth = getAuth();
        // createUserWithEmailAndPassword(auth, email, password)
        //   .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     // ...
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        //   });

        return (
        <div className="signup-popup">
            <label className="main-label">Enter your credentials below</label>
            <form className="signup-info" name="signupForm" onSubmit={(e)=>{formSubmit(e)}} noValidate>
                <div className="signup-email">
                    <label>Email:
                        <input type={'text'} name='email' required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"></input>
                    </label>
                    <label>Repeat email:
                        <input type={'text'} name='repeatEmail' required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"></input>
                    </label>
                </div>
                <div className="signup-password">
                    <label>Password:
                        <input type={'password'} name='password' required></input>
                    </label>
                    <label>Repeat password:
                        <input type={'password'} name='repeatPassword' required></input>
                    </label>
                </div>
                <button type="submit">Change my future!</button>
            </form>
        </div>
        )



    }
}

export default SignUpPopup;