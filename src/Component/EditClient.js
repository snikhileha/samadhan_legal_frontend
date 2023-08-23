import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../Styles/SignUp.css';
import Menubar from './Menubar';
import Footer from './Footer';
// import prs from '../Images/prs.png';
import { useNavigate,Link, useParams } from 'react-router-dom';
// import { FaForward } from 'react-icons/fa';

export default function EditClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');

  const navigate = useNavigate();
  const { clientId } = useParams();

  useEffect(() => {
    getClient();
  }, []);

  const getClient = async () => {
    let result = await fetch(`/getClient/${clientId}`);
    result = await result.json();

    setName(result.data.name);
    setEmail(result.data.email);
    setImage(result.data.image);
    setPreviewImage(`/${result.data.image}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    if (image) {
      formData.append('image', image);
    }
    // console.log(formData);

    let result = await fetch(`/editClient/${clientId}`, {
      method: 'PUT',
      body: formData,
    });
    result = await result.json();
    console.log(result);

    navigate('/clientDetails');
  };

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setPreviewImage(URL.createObjectURL(selectedImage));
  };
  return (
    <>
      <Menubar />
      <div className="signUp">
      <div class="d-flex justify-content-end">
        <Link to="/clientDetails">
          <button style={{border:"none",padding:"5px"}}>
          {/* <FaForward className='mx-2'/> */}
          Back
          {/* <img style={{borderRadius: '50%', width: '35px', height: '35px', objectFit: 'cover'}}src={prs} alt="back"/> */}
          </button>
          </Link>
        </div>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <h4 style={{ textAlign: "center" }}>Edit Client Details</h4>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            <img
              src={previewImage}
              alt="preview"
              style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleImage}
              encType="multipart/form-data"
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              name='email'
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group><br />
          <div class="text-center">
            <Button variant="primary" type="submit" className='btn btn-primary btn-lg'>
              Update
            </Button>
          </div>

         
        </Form>
      </div>
      <Footer />
    </>
  );
}
