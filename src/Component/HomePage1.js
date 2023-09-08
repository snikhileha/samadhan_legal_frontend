import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function HomePage1() {
    const [data, setData] = useState([]);
    useEffect(() => {

        getLawyerDetails();

    }, [])
    const getLawyerDetails = () => {
        fetch("https://samadhan-legal-services.onrender.com/getAllLawyer", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                // console.log(data.data);
                setData(data.data);
            });

    }

    return (
        <div className='HomePage1'>
            <div className="row">
                <div className="col-md-5" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <h2><strong>Find Your Legal Aid For All  </strong></h2>
                    <h4><strong>Your Civil And Corporate Needs</strong></h4>
                    <Link to="/signUp-lawyer">
                        <button  className="my-2" style={{ width: "200px", height: "35px",border:"none", backgroundColor: "#6bc9cf" }}>GET Started</button>
                        </Link>
                </div>
                <div className="col-md-6">
                    <h2 style={{textAlign:"center",margin:"20px"}}>Lawyer Info</h2>
                    <div className="widget row-md-4 lawyerInfo">

                        {
                            data.reduce((result, i, index) => {
                                if (index < 5) {
                                    result.push(
                                        <Card key={index} style={{ width: '18rem', border: 'none' }} className='cardItem'>
                                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                                                <Card.Img style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }} src={`https://samadhan-legal-services.onrender.com/${i?.image}`} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title style={{textAlign:"center"}}>{i.name}</Card.Title>
                                                <Card.Text>
                                                    {/* Card text content */}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    );
                                }
                                return result;
                            }, [])
                        }
                        <Card style={{ width: '18rem', border: 'none' }} className='cardItem d-flex justify-content-center'>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                                {/* <Card.Img style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }} src={i.image} /> */}
                            </div>
                            <Card.Body className="text-center">
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <h5>Know More About Our <br />Team</h5>
                                    <Link to='/lawyersInfo'>
                                        <button className='my-2' style={{ width: '100px',border:"none",  height: '30px',backgroundColor:"#6bc9cf"  }}>Click here</button></Link>
                                    {/* Card text content */}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    )
}
