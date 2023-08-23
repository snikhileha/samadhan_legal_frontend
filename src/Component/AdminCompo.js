import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';

export default function PrivateCompo(){
    let auth=localStorage.getItem('usertype-admin');
    console.log(auth)
    return(
        <>
        {auth ? <Outlet/>:<Navigate to='/'/>}
        </>
    )
}