import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

export const Category = ({ CategoryData, filterByCategory }) => {
  const filterByCategoryHandler = (cat) => {
    return filterByCategory(cat);
  };
  return (
    <Row >
      <Col sm="12">
        <Container>
          <div className=" m-4 d-flex justify-content-center">
            <Bounce left>
              {CategoryData.length ? (
                CategoryData.map((item) => {
                  return (
                    <Button key={item.id}
                      className=" mx-1"
                      variant="warning"
                      onClick={()=>{filterByCategoryHandler(item)}}
                    >
                      {item}
                    </Button>
                  );
                })
              ) : (
                <h2 className=" text-center">لا يوجد تصنيفات</h2>
              )}
            </Bounce>
          </div>
        </Container>
      </Col>
    </Row>
  );
};
