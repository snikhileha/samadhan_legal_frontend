import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import '../Styles/SignUp.css';
import Menubar from './Menubar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';


export default function SignUpLawyer() {
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isEmail, setIsEmail] = useState(false);
    // const [userType, setUserType] = useState("client");
    // const [secretKey, setSecretKey] = useState("");
    const [experience, setExperience] = useState("");
    const [degree, setDegree] = useState("");
    const [catagory, setCatagory] = useState("");


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // if (userType === 'admin' && secretKey !== 'motivation') {
        //     e.preventDefault();
        //     alert('InValid Admin');


        // }
        // else if (userType === 'admin') {
        //     e.preventDefault();
        //     // console.log(image,image.name);
        //     let formData = new FormData();
        //     formData.append("image", image);
        //     formData.append("name", name);
        //     formData.append("email", email);
        //     formData.append("user", userType);
        //     formData.append("password", password);
        //     formData.append("secretKey", secretKey);


        //     await fetch("http://localhost:5000/signUp", {
        //         method: "POST",
        //         crossDomain: true,

        //         body: formData


        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             console.log(data, "adminRegister");

        //             if (data.message === "Admin created successfully") {
        //                 alert("Admin Registered Successfully");
        //                 setName("");
        //                 setEmail("");
        //                 setPassword("");
        //                 navigate('/signIn');
        //             } else if (data.error === 'Admin Exists') {
        //                 alert("Admin Already Exists");
        //             } else {
        //                 alert("Something went wrong");
        //             }


        //         });

        // }
        // else if (userType === 'client') {
        // e.preventDefault();
        // // console.log(image,image.name);
        // let formData = new FormData();
        // formData.append("image", image);
        // formData.append("name", name);
        // formData.append("email", email);
        // // formData.append("user", userType);
        // formData.append("password", password);



        // await fetch("http://localhost:5000/signUp-client", {
        //     method: "POST",
        //     crossDomain: true,

        //     body: formData


        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data, "clientRegister");

        //         if (data.message === "Client created successfully") {
        //             alert("Client Registered Successfully");
        //             setName("");
        //             setEmail("");
        //             setPassword("");
        //             navigate('/signIn');
        //         } else if (data.error === 'Client Exists') {
        //             alert("Client Already Exists");
        //         } else {
        //             alert("Something went wrong");
        //         }


        //     });

        // }
        // else if (userType === 'lawyer') {

        e.preventDefault();
        let formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("email", email);
        // formData.append("user", userType);
        formData.append("password", password);
        formData.append("catagory", catagory);
        formData.append("experience", experience);
        formData.append("degree", degree);
        if (isEmail) {
            await fetch("https://samadhan-legal-services.onrender.com/signUp-lawyer", {
                method: "POST",
                crossDomain: true,

                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, "lawyerRegister");

                    if (data.message === "Lawyer created successfully") {
                        alert("Lawyer Registered Successfully");
                        setName("");
                        setEmail("");
                        setPassword("");
                        navigate('/signIn');
                    } else if (data.error === 'Lawyer Exists') {
                        alert("Lawyer Already Exists");
                    } else {
                        alert("Something went wrong");
                    }


                });

        } else {
            alert("Invalid Email Id");
        }


        // }

    }
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }
    const emailValidation = () => {
        const regex = /[A-Za-z0-9_/-/.]+[@][a-z]+[/.][a-z]{2,3}/
        if (!regex.test(email)) {
            setMessage("Invalid Email");

        } else {
            setMessage('');
            setIsEmail(true);
        }
    }

    return (
        <>
            <Menubar />
            <div className='container-fluid d-flex align-items-center justify-content-center min-vh-100'>
                {/* <div className="row justify-content-center"> */}
                    {/* <div className=" col-sm-6 col-md-6 col-lg-3 my-3"> */}
                        <div className="signUp my-4 mx-5" style={{height:"130vh"}}>
                            <h1 className="text-center">SignUp</h1>
                            <Form onSubmit={handleSubmit} encType="multipart/form-data" method="post">
                                {/* Your form content here                    <h1>SignUp</h1> */}

                                <Form.Group className="mb-3" controlId="formBasicImage">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file"
                                        name='image'
                                        onChange={handleImage} />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"
                                        value={name}
                                        name='name'
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter name" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicExperience">
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        value={experience}
                                        name='experience'
                                        onChange={(e) => setExperience(e.target.value)}
                                        placeholder="Experience" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicDegree">
                                    <Form.Label>Degree</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        value={degree}
                                        name="degree"
                                        onChange={(e) => setDegree(e.target.value)}
                                        placeholder="Degree" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCatagory">
                                    <Form.Label>Catagory</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        value={catagory}
                                        name='catagory'
                                        onChange={(e) => setCatagory(e.target.value)}
                                        placeholder="Catagory" />

                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email"
                                        value={email}
                                        name='email'
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text><br />
                                    <Form.Text style={{ color: "red" }}>
                                        {message}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        required
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" onClick={emailValidation} type="submit">Submit</Button><br /><br />
                                Already signUp
                                <Link to='/signIn' className='mx-4' style={{ "textDecoration": "none", "color": "orange" }}>SignIn</Link>
                            </Form>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>

            <Footer />
        </>
    )
}
