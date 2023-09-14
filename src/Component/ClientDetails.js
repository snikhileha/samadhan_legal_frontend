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
  // const url = process.env.BASE_URL;


  useEffect(() => {
    getAllClient();


  }, [])
  const getAllClient = () => {
    fetch(`https://samadhan-legal-services.onrender.com/getAllClient`, {
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
    <>

      <Menubar />
      <div className="text-end my-3 mx-3 mb-2">
          <Link to="/signUp-client" className="btn btn-primary mx-2 me-2">Add Client</Link>
          <Link to="/signUp-admin" className="btn btn-primary">Add Admin</Link>
        </div>
      <div className="dataInfo">
        
        <div className="table-responsive">
          <div className="table table-bordered">
            <div>
              <div>
                <span>Index</span>
                <span>Profile</span>
                <span>Name</span>
                <span>Email</span>
                <span>Edit</span>
                <span>View</span>
                <span>Delete</span>
              </div>
            </div>
            <div>
              {data.map((i, index) => (
                <di key={i._id}>
                  <span>{index + 1}</span>
                  <span>
                    <img
                      style={{ width: "40px", height: "45px" }}
                      src={`https://samadhan-legal-services.onrender.com/${i?.image}`}
                      alt="profile"
                    />
                  </span>
                  <span>{i.name}</span>
                  <span>{i.email}</span>
                  <span>
                    <Link to={`/editClient/${i._id}`}>
                      <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
                    </Link>
                  </span>
                  <span>
                    <Link to={`/getClient/${i._id}`}>
                      <FontAwesomeIcon className="mx-4" icon={faEye} />
                    </Link>
                  </span>
                  <span>
                    <FontAwesomeIcon
                      className="mx-4"
                      icon={faTrash}
                      onClick={() => deleteProduct(i._id, i.name)}
                    />
                  </span>
                </di>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
