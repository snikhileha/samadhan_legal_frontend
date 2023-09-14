import React, { useState, useEffect } from 'react'
import Menubar from './Menubar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component'; 


export default function AdminDetails() {
  const [data, setData] = useState([]);
  // const url = process.env.BASE_URL;


  useEffect(() => {
    getAllClient();


  }, [])
  const getAllClient = () => {
    fetch(`https://samadhan-legal-services.onrender.com/getAllAdmin`, {
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
      fetch(`https://samadhan-legal-services.onrender.com/admin/${id}`, {
        method: "DELETE"

      })
        .then((res) => res.json())
        .then((data) => {
          console.warn(data);
          getAllClient();
        });
    }
  };

  const columns = [
    {
      name: 'Index',
      selector: 'index',
    },
    {
      name: 'Profile',
      cell: (row) => (
        <img
          style={{ width: '40px', height: '45px' }}
          src={`https://samadhan-legal-services.onrender.com/${row?.image}`}
          alt="profile"
        />
      ),
    },
    {
      name: 'Name',
      selector: 'name',
    },
    {
      name: 'Email',
      selector: 'email',
    },
    {
      name: 'Edit',
      cell: (row) => (
        <Link to={`/editAdmin/${row._id}`}>
          <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
        </Link>
      ),
    },
    {
      name: 'View',
      cell: (row) => (
        <Link to={`/getAdmin/${row._id}`}>
          <FontAwesomeIcon className="mx-4" icon={faEye} />
        </Link>
      ),
    },
    {
      name: 'Delete',
      cell: (row) => (
        <FontAwesomeIcon
          className="mx-4"
          icon={faTrash}
          onClick={() => deleteProduct(row._id, row.name)}
        />
      ),
    },
  ];

  return (
    <>

      <Menubar />
      <div className="dataInfo">
        <div className="table-responsive">
          <DataTable
            title="Admin Details"
            columns={columns}
            data={data}
            pagination
          />
        </div>
      </div>
      <div className="text-end my-3 mx-3 mb-2">
          {/* <Link to="/signUp-client" className="btn btn-primary mx-2 me-2">Add Client</Link> */}
          <Link to="/signUp-admin" className="btn btn-primary">Add Admin</Link>
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
                    <Link to={`/editAdmin/${i._id}`}>
                      <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/getAdmin/${i._id}`}>
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
