import React, { useState, useEffect } from 'react';
import Menubar from './Menubar';
import Footer from './Footer';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import 'react-data-table-component/styles.css';

export default function AdminDetails() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllAdmins();
      }, []);
      
      const getAllAdmins = () => {
        fetch(`https://samadhan-legal-services.onrender.com/getAllAdmin`, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((data) => {
            setData(data.data);
          });
      };

    const deleteAdmin= (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}`)) {
            fetch(`https://samadhan-legal-services.onrender.com/admin/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {
                    console.warn(data);
                    getAllAdmins();
                });
        }
    };

    const columns = [
        {
          name: 'Index',
          selector: 'index',
          sortable: true,
        },
        {
          name: 'Profile',
          selector: 'profile',
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
          sortable: true,
        },
        {
          name: 'Email',
          selector: 'email',
          sortable: true,
        },
        {
          name: 'Edit',
          selector: 'edit',
          cell: (row) => (
            <Link to={`/editAdmin/${row._id}`}>
              <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
            </Link>
          ),
        },
        {
          name: 'View',
          selector: 'view',
          cell: (row) => (
            <Link to={`/getAdmin/${row._id}`}>
              <FontAwesomeIcon className="mx-4" icon={faEye} />
            </Link>
          ),
        },
        {
          name: 'Delete',
          selector: 'delete',
          cell: (row) => (
            <FontAwesomeIcon
              className="mx-4"
              icon={faTrash}
              onClick={() => deleteAdmin(row._id, row.name)}
            />
          ),
        },
      ];
      

    return (
  <>
    <Menubar />
    <div className="text-end my-3 mx-5">
      <Link to="/signUp-admin" className="btn btn-primary mx-5 mb-3">
        Add Admin
      </Link>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <DataTable
            title="Admin Data"
            columns={columns}
            data={data}
            pagination
          />
        </div>
      </div>
    </div>
    <Footer />
  </>
);
}
