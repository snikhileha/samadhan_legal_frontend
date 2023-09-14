import React, { useState, useEffect } from 'react';
import Menubar from './Menubar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

export default function ClientDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllClient();
  }, []);

  const getAllClient = () => {
    fetch(`https://samadhan-legal-services.onrender.com/getAllClient`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  };

  const deleteProduct = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch(`https://samadhan-legal-services.onrender.com/client/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(() => {
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
        <Link to={`/editClient/${row._id}`}>
          <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
        </Link>
      ),
    },
    {
      name: 'View',
      cell: (row) => (
        <Link to={`/getClient/${row._id}`}>
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
      <div className="text-end my-3 mx-3 mb-2">
        <Link to="/signUp-client" className="btn btn-primary mx-2 me-2">
          Add Client
        </Link>
        <Link to="/signUp-admin" className="btn btn-primary">
          Add Admin
        </Link>
      </div>
      <div className="dataInfo">
        <div className="table-responsive">
          <DataTable
            title="Client Details"
            columns={columns}
            data={data}
            pagination
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
