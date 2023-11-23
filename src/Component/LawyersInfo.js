import React, { useState, useEffect } from 'react';
import Menubar from './Menubar';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function LawyersInfo() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    getLawyerDetails();
  }, []);

  const getLawyerDetails = () => {
    fetch('https://samadhan-legal-services.onrender.com/lawyerRoute/getAllLawyer', {
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

  // ... (previous code)

return (
  <>
    <Menubar />
    <Container style={{ margin: '20px auto', maxWidth: '800px' }}>
      <h2 className="text-center">Lawyer Info</h2>
      <Row className="justify-content-center">
        {currentItems.map((i) => (
          <Col sm={6} md={4} key={i.id}>
            <Card className="mb-3" style={{ border: "none" }}>
              <div className="text-center mt-3">
                <Card.Img
                  style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}
                  src={`https://samadhan-legal-services.onrender.com/${i?.image}`}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">{i.name}</Card.Title>
                <Card.Text>{/* Card text content */}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center">
        <Pagination.Prev onClick={handlePreviousPage} disabled={currentPage === 1} />
        {pageItems}
        <Pagination.Next onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} />
      </Pagination>
    </Container>
    <Footer />
  </>
);
}
