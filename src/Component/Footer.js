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
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <footer>
                <div className="container">

                    <div className="row">
                        <div className="widget col-sm-4 col-md-4">
                            <img src={slsLogo} style={{ 'height': '50px', "width": 'auto', "marginLeft": '50px' }} alt='compnyLogo' />
                            <p>Helping Clients By Consulting And<br /> Asissting In Hiring The Best Lawyer <br /> Their Case.</p><br />
                            <Link to="/#"><FaFacebook className='mx-2' /></Link>
                            <Link to="/#"><FaTwitter className='mx-2' /></Link>
                            <Link to="/#"><FaInstagram className='mx-2' /></Link>
                            <Link to="/#"><FaLinkedin className='mx-2' /></Link>

                        </div>
                        <div className="widget col-sm-4 col-md-2">
                            <h4>Connect</h4>
                            <Link to='mailto:Contact@Samadhanlegal.Com'><MdEmail className='mx-2' />Contact@Samadhanlegal.Com</Link>
                            <Link to='tel:+91 937 310 5309'> <FaPhoneAlt className='mx-2' />+91 937 310 5309</Link>
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
                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    Check this box
                                </label>
                                <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
                            </div>
                            <p>I Agree To The Privacy Policy</p>

                            <button type="submit" className='bg-primary mx-2'
                                style={{ "border": "none", "color": "white", "width": "60px", "height": "27px" }}>SUBSCRIBE<MdArrowForward /></button>
                            {/* <Link to="/#"><FaFacebook className='mx-2'/></Link>
                            <Link to="/#"><FaTwitter className='mx-2'/></Link>
                            <Link to="/#"><FaInstagram className='mx-2'/></Link>
                            <Link to="/#"><FaLinkedin className='mx-2'/></Link> */}

                        </div>


                    </div><br /><br />
-
                    <div className="row" style={{ "borderTop": "1px solid gray" }}>
                        <div className="social col-md-4">
                            Samadhan Legal Services © 2023. All Rights Reserved.
                        </div>
                        <div className="copyright col-md-8">
                            Website designed and developed by <Link to="http://www.tekzoneweb.com" style={{ "textDecoration": "none", "color": "orange" }}>Tekzone Web Solutions Pvt. Ltd.</Link>
                        </div>

                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer