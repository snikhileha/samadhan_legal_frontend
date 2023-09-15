import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Menubar from './Menubar';
import Footer from './Footer';

export default function LawyerProfile() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    const viewProfile = () => {
      fetch("https://samadhan-legal-services.onrender.com/lawyerProfile", {
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
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((response) => {
          console.log(response, "lawyerData");

          if (response.status === 'ok' && response.data !== null) {
            // Valid response format, proceed with displaying the data
            setData(response.data);
          } else if (response.status === 'ok' && response.data === null) {
            // Handle the case when the server returns null data
            console.error("User data is null.");
            // Display an appropriate message to the user
          } else {
            // Handle other unexpected response formats
            console.error("Unexpected response format:", response);
            // Display an appropriate message to the user or take another action
          }
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
          // Handle the error, maybe show an error message to the user
        });
    };

    if (token) {
      viewProfile();
    } else {
      // Handle the case when there's no token, maybe redirect to login
      navigate('/');
    }

  }, [token, navigate]);

  return (
    <>
      <Menubar />
      <div className='profile container className="col-md-10 col-sm-12 mx-auto' style={{ maxWidth: "800px", width: " 60%", margin: "50px auto" }}>
        <div className="d-flex justify-content-end">
          <Link to="/">
            <button className="float-end" style={{ border: "none", padding: "4px" }}>Back</button>
          </Link>
        </div>
        {data ? (
          <>
            <div className="text-center">
              <img
                className="rounded-circle"
                src={`https://samadhan-legal-services.onrender.com/${data?.image}`}
                alt='profile'
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </div>
            <br /><br />
            <div className='lawyerProfile'
            style={{ display: 'flex',margin:"0 0 5px 0",justifyContent: 'flexStart',flexDirection:"column", padding: '10px 5vh' }}>
                    <h4 style={{ display: "inline" }}>Name: {data.name}</h4><br/>
                    {/* <h3 style={{ display: "inline" }}>{data.name}</h3><br /> */}
                    <h4 style={{ display: "inline" }}>Email: {data.email}</h4><br/>
                    {/* <h5 style={{ display: "inline" }}>{data.email}</h5> */}
                    <h4 style={{ display: "inline" }}>Experience: {data.experience}</h4><br/>
                    {/* <h5 style={{ display: "inline" }}>{data.experience}</h5> */}
                    <h4 style={{ display: "inline" }}>Degree: {data.degree}</h4><br/>
                    {/* <h5 style={{ display: "inline" }}>{data.degree}</h5> */}
                    <h4 style={{ display: "inline" }}>Catagory: {data.catagory} </h4><br/>
                    {/* <h5 style={{ display: "inline" }}>{data.catagory}</h5> */}
                </div>

            <br /><br />
            {data._id && (
              <div className="text-center">
                <Link to={`/editLawyerProfile/${data._id}`}>Edit Profile</Link>
              </div>
            )}
          </>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>
      <Footer />
    </>
  )
}
