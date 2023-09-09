import React, { useEffect, useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import Menubar from './Menubar';
import Footer from './Footer';

export default function ClientProfile() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const token = window.localStorage.getItem('token');

    useEffect(() => {
        const viewProfile = () => {
            fetch("https://samadhan-legal-services.onrender.com/profile", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    // ... other headers
                },
                body: JSON.stringify({
                    token: window.localStorage.getItem('token')
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, "clientData");
                    console.log(data.data);
                    if (data.data === "token expired") {
                        alert("Token Expired. Please Sign In Again.");
                        window.localStorage.clear();
                        navigate('/');
                    } else {
                        setData(data.data);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching profile data:", error);
                    // Handle the error, maybe show an error message to the user
                });
        };

        if (token) {
            viewProfile();
        }

    }, [token, navigate]);

    return (
        <>
            <Menubar />
            <div className='profile'>
            <div class="d-flex justify-content-end">
                    <Link to="/clientDetails"><button className=" float-end" style={{ border: "none", padding: "4px" }}>Back
                        {/* <img style={{ borderRadius: '50%', width: '35px', height: '35px', objectFit: 'cover'}}src={prs} alt="back"/> */}
                    </button></Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                <img style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}
                    src={`https://samadhan-legal-services.onrender.com/${data?.image}`} alt='profile' />
                    </div><br/><br/>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <h4 style={{ display: "inline" }}>Name: </h4>
                    <h3 style={{ display: "inline" }}>{data.name}</h3><br />
                    <h4 style={{ display: "inline" }}>Email: </h4>
                    <h3 style={{ display: "inline" }}>{data.email}</h3>
                </div><br/><br/>

              {/* <Link to='/editClient/:clientId'><button>Edit Your Prifile</button></Link> */}
              <Link to={`/editClient/${data._id}`}><button>Edit Your Prifile</button></Link>

            </div>
            <Footer />
        </>
    )
}
