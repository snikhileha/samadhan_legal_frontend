import React from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import slsLogo from '../Images/companyLogo.png'

//
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">

                    <div className="row">
                        <div className="widget col-sm-4 col-md-4">
                            <img src={slsLogo} style={{ 'height': '50px', "width": 'auto', "marginLeft": '50px' }} alt='compnyLogo' />
                            <h4>Helping Clients By Consulting And<br /> Asissting In Hiring The Best Lawyer <br /> Their Case.</h4><br />
                            <Link to="/#"><FaFacebook className='mx-2' /></Link>
                            <Link to="/#"><FaTwitter className='mx-2' /></Link>
                            <Link to="/#"><FaInstagram className='mx-2' /></Link>
                            <Link to="/#"><FaLinkedin className='mx-2' /></Link>

                        </div>
                        <div className="widget col-sm-4 col-md-2">
                            <h4>Connect</h4>
                            {/* <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>About Us</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Career</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Blog</Link> */}
                        </div>
                        <div className="widget col-sm-4 col-md-3">
                            <h4>Quick Links</h4>
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>About Us</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Our Approach</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Case Studies</Link>
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Latest Articles</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Contact</Link><br />
                            <Link to="/#" style={{ "textDecoration": "none", "color": "black" }}>Practice Areas</Link>
                        </div>
                        <div className="widget col-sm-4 col-md-3">
                            <h4>Newsletter</h4>
                            <input type="text" required placeholder='Enter E-mail' />
                            
                            <p>I Agree To The Privacy Policy</p>

                            <button type="submit" className='bg-primary mx-2'
                                style={{ "border": "none", "color": "white", "width": "60px", "height": "27px" }}>Subscribe</button>
                            {/* <Link to="/#"><FaFacebook className='mx-2'/></Link>
                            <Link to="/#"><FaTwitter className='mx-2'/></Link>
                            <Link to="/#"><FaInstagram className='mx-2'/></Link>
                            <Link to="/#"><FaLinkedin className='mx-2'/></Link> */}

                        </div>


                    </div><br /><br />

                    <div className="row" style={{ "borderTop": "1px solid gray" }}>
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