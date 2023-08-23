import React from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

//
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                
                    <div className="row">
                        <div className="widget col-sm-4 col-md-4">
                            <h4>Sign up to receive<br />coaching events, insights, and more</h4><br />
                            <input type="text" placeholder='Enter Your Email' />
                            <button type="submit" className='bg-primary mx-2' 
                            style={{"border":"none","color":"white","width":"60px","height":"27px"}}>submit</button>
                        </div>
                        <div className="widget col-sm-4 col-md-2">
                            <h4>Company</h4>
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>About Us</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Career</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Blog</Link>
                        </div>
                        <div className="widget col-sm-4 col-md-3">
                            <h4>Contact Us</h4>
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>team@joinskye.com</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Privacy Policy</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Terms And Conditions</Link>
                        </div>
                        <div className="widget col-sm-4 col-md-3">
                            <h4>Samadhan Legal Services</h4>
                            <p>160 Madison Ave, New York, NY 10016<br />Limitless Potential</p>
                            <Link to="/#"><FaFacebook className='mx-2'/></Link>
                            <Link to="/#"><FaTwitter className='mx-2'/></Link>
                            <Link to="/#"><FaInstagram className='mx-2'/></Link>
                            <Link to="/#"><FaLinkedin className='mx-2'/></Link>
                            
                        </div>
                        

                    </div><br /><br />

                    <div className="row" style={{"borderTop":"1px solid gray"}}>
                        <div className="copyright col-md-8">
                            Website designed and developed by <Link to="http://www.tekzoneweb.com" style={{ "textDecoration": "none", "color": "orange" }}>Tekzone Web Solutions Pvt. Ltd.</Link>
                        </div>
                        <div className="social col-md-4">
                            {/* link facebook */}
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer