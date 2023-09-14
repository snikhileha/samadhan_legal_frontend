import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Menubar from './Menubar';
import Footer from './Footer';
import { useParams, Link } from 'react-router-dom';
// import prs from '../Images/prs.png';

export default function LawyerInfo() {
    // const [clientData, setClientData] = useState("");
    const [data, setData] = useState([]);
    // const [name,setName] = useState('');

    // const navigate = useNavigate();
    const lawyerId = useParams();
    // console.log(clientId);

    useEffect(() => {
        const getClient = () => {
            fetch(`https://samadhan-legal-services.onrender.com/getLawyer/${lawyerId.lawyerId}`, {
                method: "GET",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, "userData");
                    setData(data.data);
                });
        };

        getClient(); // Call the function immediately

    }, [lawyerId]); // Add clientId to the dependency array

    // useEffect(() => {
    //     getClient();

    // },[])

    // const getClient = () => {
    //     fetch(`/getClient/${clientId.clientId}`, {
    //         method: "GET",
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data, "userData");

    //             setData(data.data);
    //         });

    // }
    return (
        <>
            <Menubar />
            <div className='container-fluid d-flex align-items-center justify-content-center vh-100'>
            <div className='profile' style={{ maxWidth: "800px", width: " 60%", margin: "50px auto" }}>
                <div class="d-flex justify-content-end">
                    <Link to="/lawyerDetails"><button className=" float-end" style={{ border: "none", padding: "4px" }}>Back
                        {/* <img style={{ borderRadius: '50%', width: '35px', height: '35px', objectFit: 'cover'}}src={prs} alt="back"/> */}
                    </button></Link>
                </div>
                <h3 style={{ textAlign: "center" }}>My Profile</h3>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>

                    <img style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}
                        src={`https://samadhan-legal-services.onrender.com/${data?.image}`} alt='profile' />
                </div><br /><br />
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <h4 style={{ display: "inline" }}>Name:{data.name}</h4>
                    {/* <h3 style={{ display: "inline" }}>{data.name}</h3><br /> */}
                    <h4 style={{ display: "inline" }}>Email:{data.email}</h4>
                    {/* <h5 style={{ display: "inline" }}>{data.email}</h5> */}
                    <h4 style={{ display: "inline" }}>Experience:{data.experience}</h4>
                    {/* <h5 style={{ display: "inline" }}>{data.experience}</h5> */}
                    <h4 style={{ display: "inline" }}>Degree:{data.degree}</h4>
                    {/* <h5 style={{ display: "inline" }}>{data.degree}</h5> */}
                    <h4 style={{ display: "inline" }}>Catagory:{data.catagory} </h4>
                    {/* <h5 style={{ display: "inline" }}>{data.catagory}</h5> */}
                </div>


            </div>

            </div>

            <Footer />
        </>
    )
}