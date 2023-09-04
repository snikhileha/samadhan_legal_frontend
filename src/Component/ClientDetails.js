import React, { useState, useEffect } from 'react'
import Menubar from './Menubar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";



// import image from "../"

// import DataTable from 'react-data-table-component';

export default function ClientDetails() {
    const [data, setData] = useState([]);
    const url = process.env.BASE_URL;
   

    useEffect(() => {
        getAllClient();


    }, [])
    const getAllClient = () => {
        fetch(`${url}/getAllClient`, {
            method: "GET",
            // mode: 'cors',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                // console.log(data.data);
                setData(data.data);
            });

    }
    const deleteProduct = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}`)) {
            fetch(`https://samadhan-legal-services.onrender.com/client/${id}`, {
                method: "DELETE"

            })
                .then((res) => res.json())
                .then((data) => {
                    console.warn(data);
                    getAllClient();
                });
        }
    };

   
    return (
       
        <div>
        <Menubar />
        <div className="dataInfo">
        <div >
        <Link to="/signUp-client"><button style={{marginBottom:"15px",display:"inline-block"}} className='btn btn-primary float-end mx-2'>Add Client</button></Link>
        <Link to="/signUp-admin"><button style={{marginBottom:"15px",display:"inline-block"}} className='btn btn-primary float-end mx-2'>Add Admin</button></Link>
        </div>
          <div className="header-row">
            <span style={{width:"0"}}>Index</span>
            <span style={{width:"45px"}}>Profile</span>
            <span style={{width:"45px"}}>Name</span>
            <span style={{width:"40px"}}>Email</span>
            {/* <span style={{width:"45px"}}>Usertype</span> */}
            <span style={{width:"10px"}}>Edit</span>
            <span style={{width:"0"}}>View</span>
            <span style={{width:"25px"}}>Delete</span>
          </div>
          <div className="info">
            {data.map((i, index) => (
              <div className="data-row" key={i._id}>
                <span style={{width:"0",display:"flex"}}>{index + 1}</span>
                <img style={{width:"40px",height:"45px",display:"flex"}} src={`https://samadhan-legal-services.onrender.com/${i?.image}`} alt="profile"/>
                <span style={{width:"30px",display:"flex"}}>{i.name}</span>
                <span style={{width:"60px",display:"flex"}}>{i.email}</span>
                {/* <span style={{width:"20px",display:"flex"}}>{i.user}</span> */}
                <span style={{width:"20px",display:"flex"}}>
                  <Link to={`/editClient/${i._id}`}>
                    <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
                  </Link>
                </span>
                <span style={{width:"0"}}>
                  <Link to={`/getClient/${i._id}`}>
                    <FontAwesomeIcon className="mx-4" icon={faEye} />
                  </Link>
                </span>
                <span style={{width:"35px"}}>
                  <FontAwesomeIcon
                    className="mx-4"
                    icon={faTrash}
                    onClick={() => deleteProduct(i._id, i.name)}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
}
