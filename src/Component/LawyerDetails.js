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

export default function LawyerDetails() {
  const [data, setData] = useState([]);
  // const url = process.env.BASE_URL;


  useEffect(() => {
    getAllClient();


  }, [])
  const getAllClient = () => {
    fetch(`https://samadhan-legal-services.onrender.com/getAllLawyer`, {
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
      fetch(`https://samadhan-legal-services.onrender.com/lawyer/${id}`, {
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
          <Link to="/signUp-lawyer" className="btn btn-primary mx-2 me-2">Add Lawyer</Link>
          {/* <Link to="/signUp-admin" className="btn btn-primary">Add Admin</Link> */}
        </div>
      <div className="dataInfo">
        
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Index</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>View</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => (
                <tr key={i._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{ width: "40px", height: "45px" }}
                      src={`https://samadhan-legal-services.onrender.com/${i?.image}`}
                      alt="profile"
                    />
                  </td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>
                    <Link to={`/editLawyer/${i._id}`}>
                      <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/getLawyer/${i._id}`}>
                      <FontAwesomeIcon className="mx-4" icon={faEye} />
                    </Link>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      className="mx-4"
                      icon={faTrash}
                      onClick={() => deleteProduct(i._id, i.name)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  )
}
