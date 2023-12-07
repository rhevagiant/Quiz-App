/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth } from "../../firebase";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else{
                setAuthUser(null);
            }
        });
        
        return () => {
            listen()
        }
    }, [])

    const usersignOut = () => {
        signOut(auth).then(() =>{
            console.log('sign out succesful')
        }).catch(error => console.log(error))
    }
    return (
        <div>{ authUser ? <><p>{`Signed in as ${authUser.email}`}</p><button onClick={usersignOut}>Sign Out</button></> : <p>Signed Up</p>}</div>
    )

}

export default AuthDetails