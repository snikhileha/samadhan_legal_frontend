import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import slsLogo from '../Images/companyLogo.png'
// import { Button } from 'bootstrap';

export default function Menubar() {
  const [selectedItem, setSelectedItem] = useState("UserDetails"); // Initialize with a default title
  const [key, setKey] = useState(0);
  useEffect(() => {

    setSelectedItem("UserDetails");
    setKey(Math.random());
    // return () => {
    //   // document.title = selectedItem;
    // }
  }, []);
  const handleSelectItem = (item) => {
    setSelectedItem(item); // Update the selected item using state
    // console.log(selectedItem);
  };



  let auth = localStorage.getItem('loggedIn');
  let admin = localStorage.getItem('usertype-admin');
  let client = localStorage.getItem('usertype-client');
  let lawyer = localStorage.getItem('usertype-lawyer');
  let navigate = useNavigate();
  const signOut = () => {
    localStorage.clear();
    navigate('/');
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={slsLogo} style={{ 'height': '50px', "width": 'auto', "marginLeft": '50px' }} alt='compnyLogo' />
          </Navbar.Brand>
          {/* <Navbar.Brand href="#">Samadhan Legal Services</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} style={{ "selfAlign": "flex-end", marginRight: '10px' }} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} style={{ "selfAlign": "flex-end", marginRight: '10px' }} to={"/about"}>About</Nav.Link>
              {/* <Nav.Link as={Link} to={"/clientData"}>ClientData</Nav.Link> */}
              {/* <Nav.Link as={Link} to={"/clientDetails"}>ClientDetails</Nav.Link> */}
              {/* {admin ? (<Nav.Link as={Link} to={"/clientDetails"} style={{ "selfAlign": "flex-end", marginRight: '10px' }}>ClientDetails</Nav.Link>) : null} */}
              {client ? (<Nav.Link as={Link} to={"/clientprofile"} style={{ "selfAlign": "flex-end", marginRight: '10px' }}>ClientProfile</Nav.Link>) : null}
              {lawyer ? (<Nav.Link as={Link} to={"/lawyerprofile"} style={{ "selfAlign": "flex-end", marginRight: '10px' }}>LawyerProfile</Nav.Link>) : null}
              {admin ? (<React.Fragment key={key}>
                <NavDropdown title={selectedItem || "UserDetails"} id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to={"/adminDetails"} onClick={() => handleSelectItem("AdminDetails")}>AdminDetails</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/clientDetails"} onClick={() => handleSelectItem("ClientDetails")}>ClientDetails</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/lawyerDetails"} onClick={() => handleSelectItem("LawyerDetails")}>LawyerDetails</NavDropdown.Item>
                </NavDropdown>
              </React.Fragment>
              ) : null}
              {/* <Nav.Link as={Link} to={"/profile"}>
              Profile
            </Nav.Link> */}
              {/* <Button style={{"marginLeft":"20px","width":"auto","height":'40px',"backgroundColor":"orange"}}> */}
              {auth ? (<Nav.Link as={Link} to={"/"} style={{ "selfAlign": "flex-end", marginRight: '10px' }}>
                <button style={{ "border": "none", "color": "gray", "backgroundColor": "transparent" }} onClick={signOut}>SignOut</button>
              </Nav.Link>) : (<Nav.Link as={Link} to={"/signin"} style={{ "selfAlign": "flex-end", marginRight: '15px' }}>SignIn</Nav.Link>)}

            </Nav>
            <Form className="d-flex">

            </Form>
            <Form className="d-flex">
              {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
              <Button variant="btn btn-outline-primary">
                <Nav.Link as={Link} to={"/signup-client"} style={{ "selfAlign": "flex-end" }}>Join Now</Nav.Link>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}