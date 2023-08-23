import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menubar from './Menubar';
import Footer from './Footer';

export default function Profile() {
    // const [clientData, setClientData] = useState("");
    const [data, setData] = useState([]);
    
    const navigate = useNavigate();


    useEffect(() => {
        viewProfile();


    },[])

    const viewProfile = () => {


        fetch("/profile", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem('token')
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "clientData");
                // setClientData({clientData:data.data});
                setData(data.data);
                if(data.data==="token expired"){
                    alert("Token Expired Please SignIn Again");
                    window.localStorage.clear();
                    navigate('/profile');
                }



            });

    }



    return (
        <>
        <Menubar/>
            <div className='profile'>
                <img src={data.image} alt='profile'/>
                <h3>Name:</h3>
                <h2>{data.name}</h2>
                <h3>Email:</h3>
                <h2>{data.email}</h2>
                
                <button onClick={()=>navigate('/')}>Back</button>
                
                

            </div>
        <Footer/>
        </>
    )
}