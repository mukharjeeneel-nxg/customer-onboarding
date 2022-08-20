import HeaderScreen from "./HeaderScreen";
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
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { RegisterAction } from "../actions/RegisterAction";
import { useSelector } from "react-redux";
import FooterScreen from "./FooterScreen";
import MessageBox from "./messageBox";
import Alert from '@mui/material/Alert';


export default function RegisterScreen() {
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
  const [category, setCategory] = useState();
  const [categoryError, setCategoryError] = useState();

  const validateUrl = (e) => {
    var re = /[^a-zA-Z0-9\-]/;
    if (e.match(/^[a-z0-9][a-z0-9\-]*[a-z0-9]$/)) {
      setUrlError("");
      setValidate(true);
      setUrl(e);
      //dispatch(checkurl(storUrl))
    } else {
      setUrl(e);
      setValidate(false);
      setUrlError("please enter a valid Url!");
    }
  };

  const handelSubmit = (e) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (category == "" || category == undefined) {
      setCategoryError("Category is required");
      return false;
    } else {
      setCategoryError("");
      if (re.test(email)) {
        setEmailError("");

        if (password.length > 8) {
          setPassError("");
          if (urlValidate == true) {
            console.log("data", email, password, storUrl);
            dispatch(RegisterAction(email, password, storUrl, category));
          }
        } else {
          setPassError("Password must be contain minimum 8 characters");
        }
      } else {
        setEmailError("Invalid Email Address");
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {loading ? (
        ""
      ) : error ? (
        ""
      ) : sellerInfo.id > 0 ? (
        <Navigate to="/register-step-2" replace={true} />
      ) : (
        ""
      )}
      <HeaderScreen />
      <section className="page-hero home is-white">
        <div className="bg"></div>
        <div className="hero-content" id="scene-wrapper--hero-wave">
          <canvas id="scene-hero-wave"></canvas>
          <Container>
            <Row>
              <Col lg="6"></Col>
              <Col
                sm="12"
                lg="6"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <br />
                <h3 style={{ color: "black" }}>Registration</h3>
                <p style={{ color: "black" }}>
                  Start 30 days{" "}
                  <span style={{ color: "green" }}>
                    free trial no credit card required
                  </span>{" "}
                  , you can choose plan later.
                </p>
                <Card>
                  <Card.Body>
                    <h4 style={{ color: "black" }}>Step 1/2</h4>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                          {loading ? (
                            ""
                          ) : sellerInfo.response_code == 2 ? (
                            <Alert severity="error">Requested store URL is already in use!</Alert>
                          ) : sellerInfo.response_code == 1 ? (
                            <Alert severity="error">Email address already in use!</Alert>
                          ) : (
                            ""
                          )}
                          <Form.Label style={{ color: "black" }}>
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
                        <Form.Label style={{ color: "black" }}>
                          Email address
                        </Form.Label>
                        <span className="required-span">*</span>
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
                        <Form.Label style={{ color: "black" }}>
                          Password
                        </Form.Label>
                        <span className="required-span">*</span>
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
                        <Form.Label style={{ color: "black" }}>
                          Store URL
                        </Form.Label>
                        <span className="required-span">*</span>
                        <InputGroup hasValidation>
                          <Form.Control
                            placeholder="myshop"
                            type="text"
                            required
                            value={storUrl}
                            minLength={4}
                            maxLength={25}
                            onChange={(e) => validateUrl(e.target.value)}
                          />
                          <InputGroup.Text style={{ color: "black" }}>
                            .nxgecom.in
                          </InputGroup.Text>
                          <br />
                          <span style={{ color: "red" }}>{urlError} </span>
                        </InputGroup>
                        <Form.Text
                          className="text-muted"
                          style={{ color: "black" }}
                        >
                          Your customer will visit your store by this URL, you
                          can connect your custom URL like mystore.com later.
                        </Form.Text>
                      </Form.Group>
                      <br />
                      <center>
                        <Button
                          onClick={(e) => handelSubmit(e)}
                          variant="primary"
                          disabled={loading ? "disabled" : ""}
                        >
                          {loading
                            ? "Creating your store.."
                            : "Start Your Online Store"}
                        </Button>
                      </center>
                      <br />
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
