import React, { useEffect, useState } from "react";
import Header from "../Header";

function LoggedInApp(){
    const UID=sessionStorage.getItem('user');
    useEffect(()=>{
        console.log(UID);
    })

    return(
        <React.Fragment>
            <Header props={{loggedIn:true}} userUIDProps={{UID}}/>

            <div className="logged-in-app">
                EGEHEHEHEHE
            </div>
        </React.Fragment>

    )
}

export default LoggedInApp;