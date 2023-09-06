import React, { useState, useEffect } from 'react';
import Menubar from './Menubar';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';

export default function LawyersInfo() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    getLawyerDetails();
  }, []);

  const getLawyerDetails = () => {
    fetch('https://samadhan-legal-services.onrender.com/getAllLawyer', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userData');
        setData(data.data);
      });
  };

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate pagination items
  const pageItems = [];
  for (let number = 1; number <= Math.ceil(data.length / itemsPerPage); number++) {
    pageItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Menubar />
      <div style={{ margin: '20px auto', width: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ textAlign: 'center' }}>Lawyer Info</h2>
        <div className="widget row-md-4 lawyerInfo">
          {currentItems.map((i) => (
            <Card style={{ width: '18rem', border: 'none' }} className="cardItem" key={i.id}>
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                <Card.Img
                  style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}
                  src={`https://samadhan-legal-services.onrender.com/${i?.image}`}
                />
              </div>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>{i.name}</Card.Title>
                <Card.Text>{/* Card text content */}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <Pagination style={{ marginTop: '20px' }}>
          <Pagination.Prev onClick={handlePreviousPage} disabled={currentPage === 1} style={{backgroundColor:"black"}} />
          {pageItems}
          <Pagination.Next onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} style={{backgroundColor:"black"}} />
        </Pagination>
      </div>
      <Footer />
    </>
  );
}
