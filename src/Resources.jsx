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
            <CardImg src="https://img2.storyblok.com/760x0/f/45004/760x370/899fa249c2/federal-loan-servicers-phone.png" />
                    <CardTitle>List of Federal Student Loan Servicers and their phone numbers</CardTitle>
                        <CardBody>
                            <p>For when you need to contact them, here is a list of federal student loan servicers and their phone numbers.</p>
                            <Button><a href="https://www.snowballwealth.com/blog/list-of-federal-student-loan-servicers-and-their-phone-numbers" target="_blank">Read more &rarr;</a></Button>
                        </CardBody>
                        <CardFooter>by Snowball Wealth · Mar 29, 2020</CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
                <CardImg src="https://images.unsplash.com/photo-1521897258701-21e2a01f5e8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" />
                    <CardTitle>Public Service Loan Forgiveness</CardTitle>
                        <CardBody>
                            <p>The PSLF Program forgives the remaining balance on your Direct Loans after you have made 120 qualifying monthly payments under a qualifying repayment plan while working full-time for a qualifying employer.</p>
                            <Button><a href="https://studentaid.gov/manage-loans/forgiveness-cancellation/public-service" target="_blank">Read more &rarr;</a></Button>
                        </CardBody>
                        <CardFooter>by Federal Student Aid</CardFooter>
            </Card>
          </Col>
  
          <Col>
            <Card>
            <CardImg src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" />
                    <CardTitle>Total and Permanent Disability Discharge</CardTitle>
                        <CardBody>
                            <p>If you’re totally and permanently disabled, you may qualify for a discharge of your federal student loans and/or Teacher Education Assistance for College and Higher Education (TEACH) Grant service obligation.</p>
                            <Button><a href="https://studentaid.gov/manage-loans/forgiveness-cancellation/disability-discharge" target="_blank">Read more &rarr;</a></Button>
                        </CardBody>
                        <CardFooter>by Federal Student Aid</CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
                <CardImg src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" />
                    <CardTitle>Pay As You Earn: How It Works and Whom It’s Best For</CardTitle>
                        <CardBody>
                            <p>Pay As You Earn is an income-driven repayment plan that caps federal student loan payments at 10% of your discretionary income and forgives your remaining balance after 20 years of repayment. You'll likely qualify for PAYE if you can't afford your payments and didn't start college until after 2007.</p>
                            <Button><a href="https://www.nerdwallet.com/article/loans/student-loans/pay-as-you-earn" target="_blank">Read more &rarr;</a></Button>
                        </CardBody>
                        <CardFooter>by NerdWallet · September 18, 2020</CardFooter>
            </Card>
          </Col>
  
          <Col>
            <Card>
            <CardImg src="hhttps://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" />
                    <CardTitle>Here’s How Personal Loan Deferment Works</CardTitle>
                        <CardBody>
                            <p>Deferring a personal loan payment can alleviate some financial stress for a month or two, but your loan’s overall cost could go up.</p>
                            <Button><a href="https://www.nerdwallet.com/blog/loans/personal-loans/how-personal-loan-deferment-works/" target="_blank">Read more &rarr;</a></Button>
                        </CardBody>
                        <CardFooter>by NerdWallet · April 14, 2020</CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }