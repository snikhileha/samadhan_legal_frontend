import React, { useState, useEffect } from 'react';
import Menubar from './Menubar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function LawyerDetails() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllClient();
    }, []);

    const getAllClient = () => {
        fetch(`https://samadhan-legal-services.onrender.com/getAllLawyer`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
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
            <div className="text-end my-3 mx-5">
                <Link to="/signUp-lawyer" className="btn btn-primary mx-5 mb-3">Add Lawyer</Link>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="text-center align-middle">
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
                                            <td className="text-center align-middle">{index + 1}</td>
                                            <td className="text-center align-middle">
                                                <img
                                                    style={{ width: "40px", height: "45px" }}
                                                    src={`https://samadhan-legal-services.onrender.com/${i?.image}`}
                                                    alt="profile"
                                                />
                                            </td>
                                            <td className="text-center align-middle">{i.name}</td>
                                            <td className="text-center align-middle">{i.email}</td>
                                            <td className="text-center align-middle">
                                                <Link to={`/editLawyer/${i._id}`}>
                                                    <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
                                                </Link>
                                            </td>
                                            <td className="text-center align-middle">
                                                <Link to={`/getLawyer/${i._id}`}>
                                                    <FontAwesomeIcon className="mx-4" icon={faEye} />
                                                </Link>
                                            </td>
                                            <td className="text-center align-middle">
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
                </div>
            </div>
            <Footer />
        </>
    )
}
