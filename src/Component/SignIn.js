import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Menubar from './Menubar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userType, setUserType] = useState("");

  const navigate = useNavigate();
  let auth = localStorage.getItem('loggedIn');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth) {
      return alert('Already SignIn');

    }

    console.log(email, password);
    fetch("https://samadhan-legal-services.onrender.com/signIn", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({

        email,
        password,
        // userType

      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "logIn");

        if (data.status === "ok") {
          // alert("Client SignIn Successfully");
          if(data.user==='admin'){
            alert("Admin SignIn Successfully");
            window.localStorage.setItem("usertype-admin",true)
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
            setEmail("");
            setPassword("");
            navigate('/');
          }
          else if(data.user==='lawyer'){
            alert("Lawyer SignIn Successfully");
            window.localStorage.setItem("usertype-lawyer",true)
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
            setEmail("");
            setPassword("");
            navigate('/lawyerprofile');
          }
          else if(data.user==='client'){
            alert("Client SignIn Successfully");
            window.localStorage.setItem("usertype-client",true)
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
            setEmail("");
            setPassword("");
            navigate('/clientprofile');
          }
         

        }
        else if (data.status === 'error') {
          alert("Invalid Password");
        }
        else if (data.error === "UserType does not match") {
          alert("UserType Mismatched");
        }
        else if (data.error === 'User Not Found') {
          alert("User Not Found");
        }
        else {
          alert("Something went wrong");
        }


      });
  }

  return (
    <>
      <Menubar />
      <div className="signIn">
        <h1>SignIn</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <lable>Admin: </lable>
            <input type="radio"
              required
              value='admin'
              name='user'
              className='mx-2'
              checked={userType === 'admin' }
              // onClick={()=>window.localStorage.setItem("usertype-admin",true)}
              onChange={(e) => setUserType(e.target.value)} />

            <lable>Lawyer: </lable>
            <input type="radio"
              required
              value='lawyer'
              name='user'
              className='mx-2'
              checked={userType === 'lawyer' }
              // onClick={()=>window.localStorage.setItem("usertype-lawyer",true)}
              onChange={(e) => setUserType(e.target.value)} />


            <lable>User: </lable>
            <input type="radio"
              required
              value='client'
              name='user'
              className='mx-2'
              checked={userType === 'client' }
              // onClick={()=>window.localStorage.setItem("usertype-client",true)}
              onChange={(e) => setUserType(e.target.value)} /><br /><br /> */}

            <Form.Label className='my-4'>Email address</Form.Label>
            <Form.Control type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button><br /><br />

          <Link className="mx-2" style={{ "textDecoration": "none" }} to="/#"><span
            style={{ "fontSize": "14px", "color": "black" }}>FORGOT PASSWORD?</span></Link><br/>
          <Link className="mx-2" style={{ "textDecoration": "none" }} to="/signUp-client"><span
              style={{ "fontSize": "14px", "color": "black" }}>CREATE NEW ACCOUNT-CLIENT</span></Link> <br/>
              <Link className="mx-2" style={{ "textDecoration": "none" }} to="/signUp-lawyer"><span
              style={{ "fontSize": "14px", "color": "black" }}>CREATE NEW ACCOUNT-LAWYER</span></Link>
        </Form>
      </div>
      <Footer />
    </>

  )
}

export default SignIn

