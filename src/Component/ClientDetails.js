import React, { useState, useEffect } from 'react';
import Menubar from './Menubar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        console.log(data, "userData");
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

  return (
    <>
      <Menubar />
      <div className="text-end my-3  mb-4 me-5">
        <Link to="/signUp-client" className="btn btn-primary me-5 ">
          Add Client
        </Link>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="dataInfo">
              <div className="table-responsive">
                <div className="table table-bordered table-striped table-responsive-sm">
                  <div>
                    <div className="row">
                      <div className="col text-center">Index</div>
                      <div className="col text-center">Profile</div>
                      <div className="col text-center">Name</div>
                      <div className="col text-center">Email</div>
                      <div className="col text-center">Edit</div>
                      <div className="col text-center">View</div>
                      <div className="col text-center">Delete</div>
                    </div>
                  </div>
                  <div>
                    {data.map((i, index) => (
                      <div key={i._id} className="row">
                        <div className="col text-center">{index + 1}</div>
                        <div className="col text-center">
                          <img
                            style={{ width: "40px", height: "45px" }}
                            src={`https://samadhan-legal-services.onrender.com/${i?.image}`}
                            alt="profile"
                          />
                        </div>
                        <div className="col text-center">{i.name}</div>
                        <div className="col text-center">{i.email}</div>
                        <div className="col text-center">
                          <Link to={`/editClient/${i._id}`}>
                            <FontAwesomeIcon className="mx-4" icon={faPenToSquare} />
                          </Link>
                        </div>
                        <div className="col text-center">
                          <Link to={`/getClient/${i._id}`}>
                            <FontAwesomeIcon className="mx-4" icon={faEye} />
                          </Link>
                        </div>
                        <div className="col text-center">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
