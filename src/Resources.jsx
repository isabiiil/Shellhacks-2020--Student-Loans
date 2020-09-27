import React from "react";
import "./Resources.css";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


export default function Resources() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <p>This is the body of the card.</p>
              </CardBody>
              <CardImg bottom src="https://place-hold.it/300x200" />
            </Card>
          </Col>
  
          <Col>
            <Card>
              <CardBody>
                <p>This is the body of the card.</p>
              </CardBody>
              <CardImg bottom src="https://place-hold.it/300x200" />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }