import React, { useState, useEffect } from 'react';
import Menubar from './Menubar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function AdminDetails() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllClient();
    }, []);

    const getAllClient = () => {
        fetch(`https://samadhan-legal-services.onrender.com/getAllAdmin`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
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

    return (
        <>
            <Menubar />
            <div className="text-end my-3 mx-5">
                <Link to="/signUp-admin" className="btn btn-primary mx-5 mb-3">Add Admin</Link>
            </div>
            {/* <div className="container"> */}
                {/* <div className="row"> */}
                    {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12 "> */}
                        <div className="table-responsive">
                            <div className="table">
                                <div className="table-header">
                                    <div className="row">
                                        <div className="col-1">Index</div>
                                        <div className="col-2">Profile</div>
                                        <div className="col-2">Name</div>
                                        <div className="col-2">Email</div>
                                        <div className="col-1">Edit</div>
                                        <div className="col-1">View</div>
                                        <div className="col-1">Delete</div>
                                    </div>
                                </div>
                                <div className="table-body">
                                    {data.map((i, index) => (
                                        <div key={i._id} className="row">
                                            <div className="col-1">{index + 1}</div>
                                            <div className="col-2">
                                                <img
                                                    style={{ width: "40px", height: "45px" }}
                                                    src={`https://samadhan-legal-services.onrender.com/${i?.image}`}
                                                    alt="profile"
                                                />
                                            </div>
                                            <div className="col-2">{i.name}</div>
                                            <div className="col-2">{i.email}</div>
                                            <div className="col-1">
                                                <Link to={`/editAdmin/${i._id}`}>
                                                    <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
                                                </Link>
                                            </div>
                                            <div className="col-1">
                                                <Link to={`/getAdmin/${i._id}`}>
                                                    <FontAwesomeIcon className="mx-4" icon={faEye} />
                                                </Link>
                                            </div>
                                            <div className="col-1">
                                                <FontAwesomeIcon
                                                    className="mx-4"
                                                    icon={faTrash}
                                                    onClick={() => deleteProduct(i._id, i.name)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
            <Footer />
        </>
    )
}
