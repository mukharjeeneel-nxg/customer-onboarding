import HeaderScreen from "./HeaderScreen";
import { Form, Button, Container, Col, Row, InputGroup, Card } from "react-bootstrap";
import { useState, useEffect } from "react"
import { Navigate } from "react-router";



export default function RegisterStep3(sellerInfo) {
    var sellerData = localStorage.getItem('sellerInfo');
    var sellerData = JSON.parse(sellerData);
    console.log('sellerData---', sellerData)

    console.log('propssellerInfo', sellerData.store_name);
    const handleContinue = (e) => {
        e.preventDefault();
        localStorage.removeItem('sellerInfo');
        window.location.replace(`https://${sellerData.store_name}.nxgecom.in/admin?registered-successfully`);
    }
    return (
        <>
            {/* {sellerData==null? <Navigate to="/" /> : ""} */}
            <HeaderScreen />
            <Row >
                <br></br>

            </Row>
            <Row>
                <Col sm="2" xs="10"></Col>
                <Col>
                    <br />

                    <Card>
                        <Card.Body>
                            <h5>Store creation is in process...</h5>
                            <p>You will receive an email after your store is created, please check your email in a while.</p>
                            <a href=""><Button onClick={(e) => handleContinue(e)}>Continue to store</Button></a>
                            <Col sm="2" xs="10"></Col>
                            <Col>

                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="2"></Col>
            </Row>
        </>
    )
}