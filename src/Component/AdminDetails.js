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
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                        <div className="table-responsive">
                            <div className="table table-bordered">
                                <div className="text-center align-middle">
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
                                <div className="text-center align-middle">
                                    {data.map((i, index) => (
                                        <div key={i._id}>
                                            <span className="text-center align-middle">{index + 1}</span>
                                            <span className="text-center align-middle">
                                                <img
                                                    style={{ width: "40px", height: "45px" }}
                                                    src={`https://samadhan-legal-services.onrender.com/${i?.image}`}
                                                    alt="profile"
                                                />
                                            </span>
                                            <span className="text-center align-middle">{i.name}</span>
                                            <span className="text-center align-middle">{i.email}</span>
                                            <span className="text-center align-middle">
                                                <Link to={`/editAdmin/${i._id}`}>
                                                    <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
                                                </Link>
                                            </span>
                                            <span className="text-center align-middle">
                                                <Link to={`/getAdmin/${i._id}`}>
                                                    <FontAwesomeIcon className="mx-4" icon={faEye} />
                                                </Link>
                                            </span>
                                            <span className="text-center align-middle">
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
