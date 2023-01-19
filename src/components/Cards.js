import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
export const Cards = ({ fullData }) => {
  return (
    <Row  >
        {fullData.length ? (
          fullData.map((i) => {
            return (
              <Zoom >
              <Col  sm="12" className=" my-2">
                <Card className=" flex-row align-items-center ">
                  <Card.Img
                    variant="right"
                    src={i.img}
                    style={{ width: "150px", height: "100%" }}
                  />
                  <Card.Body className=" lh-lg">
                    <Card.Title className="  d-flex justify-content-between">
                      <p>{i.title}</p>
                      <p className=" color-red">{i.price}</p>
                    </Card.Title>
                    <Card.Text>{i.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
            );
          })
        ) : (
          <h2 className=" text-center">لا يوجد وجبات</h2>
        )}
      </Row>
  );
};
