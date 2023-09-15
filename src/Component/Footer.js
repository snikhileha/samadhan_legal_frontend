import React, { useState } from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MdArrowForward } from 'react-icons/md';
import slsLogo from '../Images/companyLogo.png'

//
const Footer = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [message,setMessage] = useState("");
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleCheckBox =(e)=>{
        e.preventDefault();
        if(isChecked){
            setMessage("Your message has been received!");
        }else{
            setMessage("Accept Term And Conditions");
        }
    
    }
    return (
        <>
            <footer>
                <div className="container">

                    <div className="row">
                        <div className="widget col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3">
                            <img src={slsLogo} style={{ 'height': '50px', "width": 'auto' }} alt='compnyLogo' /><br /><br />
                            <p style={{ fontSize: "14px" }}>Helping Clients By Consulting And<br /> Asissting In Hiring The Best Lawyer <br /> Their Case.</p>
                            <Link to="/#" style={{ color: 'inherit', textDecoration: "none" }}><FaFacebook className='mx-2' /></Link>
                            <Link to="/#" style={{ color: 'inherit', textDecoration: "none" }}><FaTwitter className='mx-2' /></Link>
                            <Link to="/#" style={{ color: 'inherit', textDecoration: "none" }}><FaInstagram className='mx-2' /></Link>
                            <Link to="/#" style={{ color: 'inherit', textDecoration: "none" }}><FaLinkedin className='mx-2' /></Link>

                        </div><br/>
                        <div className="widget col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3">
                            <h4 style={{ marginBottom: "20px" }}>Connect</h4>
                            <h6>Address :</h6>
                            <Link to='mailto:Contact@Samadhanlegal.Com' style={{ color: 'inherit', textDecoration: "none",fontSize:"15px"}}><MdEmail className='me-1'/>Contact@Samadhanlegal.Com</Link><br/>
                            <Link to='tel:+91 937 310 5309' style={{ color: 'inherit', textDecoration: "none" ,fontSize:"16px"}}> <FaPhoneAlt className='me-1'/>+91 937 310 5309</Link>
                            
                        </div><br/>
                        <div className="widget col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3" >
                            <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black", fontSize: "16px" }}>About Us</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black", fontSize: "16px" }}>Our Approach</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black", fontSize: "16px" }}>Case Studies</Link>
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black", fontSize: "16px" }}>Latest Articles</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black", fontSize: "16px" }}>Contact</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black", fontSize: "16px" }}>Practice Areas</Link>
                        </div><br/>
                        <div className="widget col-xs-12 col-sm-6 col-md-4 col-lg-3 ">
                            <h4 style={{ marginBottom: "20px" }}>Newsletter</h4>
                            <form onSubmit={handleCheckBox}> 
                                <input type="email" required placeholder=' Enter E-mail' /><br /><br />


                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className='mx-2'
                                />


                                

                                <span>I Agree To The Privacy Policy</span><br /><br />

                                <button type="submit" className="btn btn-primary mx-2 me-2"
                                    // style={{ width: '120px', border: "none", height: '30px', backgroundColor: "#6bc9cf" }}
                                    >SUBSCRIBE<MdArrowForward className='mx-1' />
                                </button><br/><br/>
                                <p> {message}</p>
                            </form>
                            {/* <Link to="/#"><FaFacebook className='mx-2'/></Link>
                            <Link to="/#"><FaTwitter className='mx-2'/></Link>
                            <Link to="/#"><FaInstagram className='mx-2'/></Link>
                            <Link to="/#"><FaLinkedin className='mx-2'/></Link> */}

                        </div><br/>


                    </div><br /><br />
                    -

                    <div className="container" style={{ color: "white", padding: "5px", backgroundColor: "black", fontSize: "14px" }}>
  <div className='row'>
    <div className="social col-md-6 col-sm-6">
      Samadhan Legal Services © 2023. All Rights Reserved.
    </div>
    <div className="copyright col-md-6 col-sm-6">
      Website designed by <Link to="http://www.tekzoneweb.com" style={{ "textDecoration": "none", "color": "white" }}>Tekzone Web Solutions Pvt. Ltd.</Link>
    </div>
  </div>
</div>

                </div>
            </footer>


        </>
    )
}

export default Footer