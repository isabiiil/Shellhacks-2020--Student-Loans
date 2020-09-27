import React from "react";
import "./Resources.css";
import { Container, Row, Col, Card, CardBody, CardTitle, CardFooter, Button, CardImg } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


export default function Resources() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
                <CardImg src="https://img2.storyblok.com/760x0/f/45004/760x370/8a72d1ebc1/refinancing-blog-post.jpg" />
                    <CardTitle>What is Student Loan Refinancing and when is a good time to?</CardTitle>
                        <CardBody>
                            <p>Refinance private loans as soon as you have good credit and a stable income to get a lower rate and save the most money.</p>
                            <Button><a href="https://www.snowballwealth.com/blog/what-is-student-loan-refinancing-and-when-is-a-good-time-to-" target="_blank">Read more &rarr;</a></Button>
                        </CardBody>
                        <CardFooter>by Snowball Wealth · May 13, 2020</CardFooter>
            </Card>
          </Col>
  
          <Col>
            <Card>
            <CardImg src="https://img2.storyblok.com/760x0/f/45004/760x370/8a72d1ebc1/refinancing-blog-post.jpg" />
                    <CardTitle>List of Federal Student Loan Servicers and their phone numbers</CardTitle>
                        <CardBody>
                            <p>For when you need to contact them, here is a list of federal student loan servicers and their phone numbers.</p>
                            <Button><a href="https://www.snowballwealth.com/blog/list-of-federal-student-loan-servicers-and-their-phone-numbers" target="_blank">Read more &rarr;</a></Button>
                        </CardBody>
                        <CardFooter>by Snowball Wealth · Mar 29, 2020</CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }