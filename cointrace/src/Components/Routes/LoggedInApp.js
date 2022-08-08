import React, { useEffect, useState } from "react";
import Header from "../Header";



function LoggedInApp(){
    const UID=sessionStorage.getItem('user');


    return(
        <React.Fragment>
            <Header props={{loggedIn:true}}/>

            <div className="logged-in-app" data-testid='LoggedInApp'>
                EGEHEHEHEHE
            </div>
        </React.Fragment>

    )
}

export default LoggedInApp;