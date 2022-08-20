import NavigationScreen from "./NavigationScreen"
import { Form, Button, Container, Col, Row, InputGroup, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { RegisterAction } from "../actions/RegisterAction";
import { useSelector } from "react-redux";
export default function ValidateScreen(props) {

    const dispatch = useDispatch();
    const sellerDetails = useSelector((state) => state.sellerRegister);
    const { sellerInfo, loading, error } = sellerDetails;
    const [email, setName] = useState("");
    const [password, setPassword] = useState("");
    const [storUrl, setUrl] = useState("");
    const [passError, setPassError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [urlError, setUrlError] = useState("");
    const [urlValidate, setValidate] = useState(false);


    const validateUrl = (e) => {

        var re = /[^a-zA-Z0-9\-]/;
        if (e.match(/^[a-z0-9][a-z0-9\-]*[a-z0-9]$/)) {
            setUrlError('')
            setValidate(true);
            setUrl(e);
        }
        else
        {
            setUrl(e);
            setValidate(false);
            setUrlError('please enter a valid Url!')
        }
    }

    const handelSubmit = (e) => {

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (re.test(email)) {
            setEmailError('');

            if (password.length > 8) {
                setPassError('');
                if (urlValidate==true) {
                    console.log('data',email, password, storUrl);
                    dispatch(RegisterAction(email, password, storUrl));
                }
            }
            else {
                setPassError('Password must be contain minimum 8 charecters');
            }

        } else {
            setEmailError('Invalid Email Address');

        }

        //dispatch(RegisterAction(email, password, storUrl));
    };
    useEffect(() => {

    }, [sellerInfo]);


    console.log('Seller', sellerInfo);

    return (

        <>
            {loading ? "" : error ? "" :
                sellerInfo.id > 0 ? <Navigate to="/register-step-2" replace={true} /> : ""
            }
            <NavigationScreen />

            <Row>
                <Col sm="2"></Col>
                <Col>
                    <br />
                    <h3>Varify Your Email Address</h3>
                    <Card>

                        <Card.Body>

                            <h4>6 digit OTP has sent to your entered email address</h4>
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Enter OTP</Form.Label>
                                    <Form.Control type="email" value={email}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter OTP"
                                        required
                                    />
                                    <span style={{ color: 'red' }}>{emailError}</span>
                                    <span style={{ color: 'red' }}>{loading ? "" : error ? "Email Address is already in use" : ""}</span>
                                </Form.Group>

                                
                               
                                <Button onClick={(e) => handelSubmit(e)} variant="primary" disabled={loading ? "disabled" :""} >
                                {loading ? "Creating your store.." : "Verify & Start"}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
}