import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React,{ useState } from 'react';

export function NavBar({filterBySearch}) {
  const [searchValue, setSearchValue] = useState("");
  const filterBySearchHandler=(word) => {
    filterBySearch(word)
    setSearchValue("")
  }
  return (
    <Row sm="12">
      <Col>
        <Navbar bg="dark" variant="dark" expand="lg" >
          <Container>
            <Navbar.Brand className="color-main" href="#">
              وجبات الطعام
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className=" justify-content-end">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="ابحث بالوجبة"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e)=>setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <Button onClick={()=>{filterBySearchHandler(searchValue)}} className=" mx-2" variant="outline-warning">
                  ابحث
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}
