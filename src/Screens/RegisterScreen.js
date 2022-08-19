import HeaderScreen from "./HeaderScreen";
import FooterScreen from "./FooterScreen";
import {
  Form,
  Button,
  Container,
  Col,
  InputGroup,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Contactscreen() {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const [storUrl, setUrl] = useState("");
  const [passError, setPassError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [urlValidate, setValidate] = useState(false);
  const [category, setCategory] = useState();
  const [categoryError, setCategoryError] = useState();

  return (
    <>
      <HeaderScreen />
      <section className="page-hero home is-white">
        <div className="bg"></div>
        <div className="hero-content" id="scene-wrapper--hero-wave">
          <canvas id="scene-hero-wave"></canvas>
          <Container>
            <Row>
              <Col lg="3"></Col>
              <Col sm="12" lg="6">
                <br />
                <h3>Registration</h3>
                <p>
                  Start 30 days <span>free trial</span> no credit card required,
                  you can choose plan later.
                </p>
                <Card>
                  <Card.Body>
                    <h4>Step 1/2</h4>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                          <Form.Label>
                            Select your business category
                            <span className="required-span">*</span>
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option value="">Select</option>
                            <option value="fashion">Clothing & Fashion</option>
                            <option value="beauty">Beauty & Health</option>
                            <option value="electronics">Electronics</option>
                            <option value="food">Food or Restrourant</option>
                            <option value="other">Other Retail business</option>
                            <option value="digital">Digital Goods</option>
                          </Form.Select>
                          <span className="required-span">{categoryError}</span>
                        </Form.Group>
                      </Row>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          value={email}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter email"
                          required
                        />
                        <span style={{ color: "red" }}>{emailError}</span>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          required
                        />
                        <span style={{ color: "red" }}>{passError}</span>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Store URL</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            placeholder="myshop"
                            type="text"
                            required
                            value={storUrl}
                            minLength={4}
                            maxLength={25}
                          />
                          <InputGroup.Text>.nxgecom.in</InputGroup.Text>
                        </InputGroup>
                        <Form.Text className="text-muted">
                          Your customer will visit your store by this URL, you
                          can connect your custom URL like mystore.com later.
                        </Form.Text>
                        <span style={{ color: "red" }}>{urlError} </span>
                        <br />
                      </Form.Group>

                      <Button
                       
                        variant="primary"
                        
                      >
                        Submit
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3"></Col>
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
