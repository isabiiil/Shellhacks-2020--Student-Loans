import React from 'react';
import { Button, Form, FormInput, FormGroup } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./Login.css";

export default function Login() {
    return(
        <Form className="LoginForm">
            <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput type="password" id="#password" placeholder="Password" />
            </FormGroup>
            <FormGroup><Button className="SignIn">Sign in</Button></FormGroup>
        </Form>
    );
}