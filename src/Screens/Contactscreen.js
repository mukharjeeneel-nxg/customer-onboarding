import HeaderScreen from "./HeaderScreen";
import FooterScreen from "./FooterScreen";
import { useSelector } from "react-redux";
import MessageBox from "./messageBox";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
import { ContactAction } from "../actions/ContactAction";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Alert from '@mui/material/Alert';

export default function Contactscreen() {
  const dispatch = useDispatch();
  const contactDetails = useSelector((state) => state.contactSubmit);
  const { contactInfo, loading } = contactDetails;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [verified, setVerified] = useState(false);

  function mobileValidation(value) {
    const re = /^[0-9\b]+$/;

    if (value.length === 10) {
      if ((value === "") | re.test(value)) {
        setPhoneError("");
        setPhone(value);
      }
    } else {
      if ((value === "") | re.test(value)) {
        setPhone(value);
        setPhoneError("Invalid mobile input!");
      }
    }
  }
  const submitContact = (e) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (name == "" || name.length > 120) {
      setNameError("Enter a valid name!");
      return false;
    } else {
      setNameError("");
      if (re.test(email)) {
        setEmailError("");

        if (phone.length == 10) {
          setPhoneError("");
          console.log("contact", name, email, phone, message);
          if (setVerified) {
            dispatch(ContactAction(name, email, phone, message));
          }
        } else {
          setPhoneError("Enter valid mobile number!");
        }
      } else {
        setEmailError("Invalid Email Address");
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (loading) {
    } else if (contactInfo != null) {
      if (contactInfo.response_code == 1) {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    }
  }, [contactInfo]);
  //console.log("response code", contactInfo);
  return (
    <>
      <HeaderScreen />
      <section className="page-hero home is-white">
        <div className="bg"></div>
        <div className="hero-content" id="scene-wrapper--hero-wave">
          <canvas id="scene-hero-wave"></canvas>
          <Container>
            <Row>
              <br />
            </Row>

            <Row>
              <Col lg="6">
                <h3>We're here to support you. If you're looking for help you've come to the right place.</h3>
                <p>Please show us your interest by filling the form.</p>
              </Col>

              <Col
                sm="12"
                lg="6"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <br />
                <h3 style={{ color: "black" }}>Contact Details</h3>
                <p style={{ color: "black" }}>
                  Enter your{" "}
                  <span style={{ color: "green" }}>
                    {" "}
                    details so that we can{" "}
                  </span>
                  contact you!
                </p>
                <br/>
                <Card>
                  <Card.Body>
                    <Form>
                      <Row className="mb-3">
        
                      </Row>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                      {loading ? (
                      ""
                    ) : contactInfo == null ? (
                      ""
                    ) : contactInfo.response_code == 1 ? (
                      <center>
                        {" "}
                        <Alert severity="success">Successfully submitted!</Alert>
                      </center>
                    ) : contactInfo.response_code == 0 ? (
                      <Alert severity="error">Email already exists!</Alert>
                    ) : (
                      ""
                    )}  
                        <Form.Label style={{ color: "black", marginBottom:'0.5 rem' }}>
                          Enter your name{" "}
                          <span className="required-span">*</span>
                        </Form.Label>
                        <br/>
                        <Form.Control
                          className="form-control"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                        <span style={{ color: "red" }}>{nameError}</span>
                        <br/><br/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: "black" }}>
                          Enter email address{" "}
                          <span className="required-span">*</span>
                        </Form.Label>
                        
                        <Form.Control
                          className="form-control"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                        />
                        <span style={{ color: "red" }}>{emailError}</span>
                        <br/><br/>
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: "black" }}>
                          Enter Mobile no.
                          <span className="required-span">*</span>
                        </Form.Label>
                        <Form.Control
                          className="form-control"
                          className="phn-num"
                          type="text"
                          id=""
                          name=""
                          maxLength={10}
                          min="0"
                          value={phone}
                          onChange={(e) => mobileValidation(e.target.value)}
                          placeholder="9179******"
                          name=""
                        />
                        <span style={{ color: "red" }}>{phoneError}</span>
                        <br/><br/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: "black" }}>
                          Message:-
                        </Form.Label>
                        <Form.Control
                          className="form-control"
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="type here..."
                        />
                      </Form.Group>
                      <br />
                      <center>
                        {" "}
                        <Button variant="primary"
                         onClick={(e) => submitContact(e)}
                         disabled={loading ? "disabled" : ""}
                        > 
                        {loading
                          ? "Please wait submitting your details.."
                          : "Submit your details"}
                          </Button>{" "}
                      </center>
                      <br />
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <br /> <br />
            </Row>
          </Container>

          <div className="col-md-6">
            <div className="hero-img" data-appear-fade-in>
              <div className="holder" style={{ maxWidth: "700px" }}>
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-xl"
                  alt="Homepage_2x"
                  data-lazy-src="wp-content/uploads/2022/02/Homepage_2x.png"
                />
                <noscript>
                  <img
                    src="wp-content/uploads/2022/02/Homepage_2x.png"
                    className="attachment-xl"
                    alt="Homepage_2x"
                  />
                </noscript>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterScreen />
    </>
  );
}
