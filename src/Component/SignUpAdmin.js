import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import '../Styles/SignUp.css';
import Menubar from './Menubar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { GoogleLogin } from 'react-google-login';



export default function SignUpAdmin() {
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [isEmail,setIsEmail] = useState(false);
    // const [userType, setUserType] = useState("client");
    // const [secretKey, setSecretKey] = useState("");
    // const [experience, setExperience] = useState("");
    // const [degree, setDegree] = useState("");
    // const [catagory, setCatagory] = useState("");
//     const responseSuccessGoogle=(response)=>{
//            console.log(response);
//     }
//     const responseErrorGoogle=(response)=>{
//         // console.log(response);
//  }


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // if (userType === 'admin' && secretKey !== 'motivation') {
        //     e.preventDefault();
        //     alert('InValid Admin');


        // }
        // else if (userType === 'admin') {
            e.preventDefault();
            // console.log(image,image.name);
            let formData = new FormData();
            formData.append("image", image);
            formData.append("name", name);
            formData.append("email", email);
            // formData.append("user", userType);
            formData.append("password", password);
            // formData.append("secretKey", secretKey);

            if(isEmail){
            await fetch("/signUp-admin", {
                method: "POST",
                crossDomain: true,

                body: formData


            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, "adminRegister");

                    if (data.message === "Admin created successfully") {
                        alert("Admin Registered Successfully");
                        setName("");
                        setEmail("");
                        setPassword("");
                        navigate('/signIn');
                    } else if (data.error === 'Admin Exists') {
                        alert("Admin Already Exists");
                    } else {
                        alert("Something went wrong");
                    }


                });
            }else{
                alert("Invalid Email Id");
             }

        // }
        // else if (userType === 'client') {
        // e.preventDefault();
        // console.log(image,image.name);
        // let formData = new FormData();
        // formData.append("image", image);
        // formData.append("name", name);
        // formData.append("email", email);
        // // formData.append("user", userType);
        // formData.append("password", password);
        //  if(isEmail){
        //     await fetch("/signUp-client", {
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

        //  }else{
        //     alert("Invalid Email Id");
        //  }


       
        // }
        // else if (userType === 'lawyer') {

        //     e.preventDefault();
        //     let formData = new FormData();
        //     formData.append("image", image);
        //     formData.append("name", name);
        //     formData.append("email", email);
        //     formData.append("user", userType);
        //     formData.append("password", password);
        //     formData.append("catagory", catagory);
        //     formData.append("experience", experience);
        //     formData.append("degree", degree);

        //     await fetch("http://localhost:5000/signUp", {
        //         method: "POST",
        //         crossDomain: true,

        //         body: formData,
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             console.log(data, "lawyerRegister");

        //             if (data.message === "Lawyer created successfully") {
        //                 alert("Lawyer Registered Successfully");
        //                 setName("");
        //                 setEmail("");
        //                 setPassword("");
        //                 navigate('/signIn');
        //             } else if (data.error === 'Lawyer Exists') {
        //                 alert("Lawyer Already Exists");
        //             } else {
        //                 alert("Something went wrong");
        //             }


        //         });

        // }

    }
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }
    const emailValidation=()=>{
        const regex = /[A-Za-z0-9_/-/.]+[@][a-z]+[/.][a-z]{2,3}/
        if(!regex.test(email)){
            setMessage("Invalid Email");
            
        }else{
            setMessage('');
            setIsEmail(true);
        }
    }

    return (
        <>
            <Menubar />
            <div className='signUp'>
                <Form onSubmit={handleSubmit}
                    encType="multipart/form-data"

                    method="post"

                >
                    <h1>SignUp</h1>
                    {/* <lable>Admin: </lable>
                    <input type="radio"
                        required
                        value='admin'
                        name='user'
                        className='mx-2'
                        checked={userType === 'admin'}
                        onChange={(e) => setUserType(e.target.value)} />

                    <lable>Lawyer: </lable>
                    <input type="radio"
                        required

                        value='lawyer'
                        name='user'
                        className='mx-2'
                        checked={userType === 'lawyer'}
                        onChange={(e) => setUserType(e.target.value)} />


                    <lable>Client: </lable>
                    <input type="radio"
                        required
                        value='client'
                        name='user'
                        className='mx-2'
                        checked={userType === 'client'}
                        onChange={(e) => setUserType(e.target.value)} />
                    <br /><br />

                    {userType === 'admin' ?

                        <Form.Group className="mb-3" controlId="formBasicSecretKey">
                            <Form.Label>Secret Key</Form.Label>
                            <Form.Control type="text"
                                name="secretKey"
                                required
                                value={secretKey}
                                className='mx-2'
                                onChange={(e) => setSecretKey(e.target.value)}
                                placeholder="Enter Secret Key" />

                        </Form.Group>
                        : null} */}


                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file"
                            name='image'
                            
                            className='mx-2'
                            onChange={handleImage} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                            value={name}
                            name='name'
                            required
                            className='mx-2'
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name" />

                    </Form.Group>
                    {/* {userType === 'lawyer' ?

                        (
                            <>
                                <Form.Group className="mb-3" controlId="formBasicExperience">
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        value={experience}
                                        className='mx-2'
                                        name='experience'
                                        onChange={(e) => setExperience(e.target.value)}
                                        placeholder="Experience" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicDegree">
                                    <Form.Label>Degree</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        value={degree}
                                        className='mx-2'
                                        name="degree"
                                        onChange={(e) => setDegree(e.target.value)}
                                        placeholder="Degree" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCatagory">
                                    <Form.Label>Catagory</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        value={catagory}
                                        className='mx-2'
                                        name='catagory'
                                        onChange={(e) => setCatagory(e.target.value)}
                                        placeholder="Catagory" />

                                </Form.Group>
                            </>
                        )
                        : null} */}

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
                        </Form.Text><br/>
                        <Form.Text style={{color:"red"}}>
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
                    {/* <GoogleLogin
                        clientId="828958241791-ig1fhckkf4hn59bkiv2inhnemh9g6991.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={'single_host_origin'}
                    /><br/><br/> */}
                    Already signUp
                    <Link to='/signIn' className='mx-4' style={{ "textDecoration": "none", "color": "orange" }}>SignIn</Link>
                </Form>
            </div>
            <Footer />
        </>
    )
}
