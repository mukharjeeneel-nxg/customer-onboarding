import {
  Form,
  Button,
  Container,
  Col,
  Row,
  InputGroup,
  Card,
} from "react-bootstrap";
import { useState } from "react";
import Feedback from "react-bootstrap/Feedback";
import HeaderScreen from "./HeaderScreen";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { billingAction } from "../actions/RegisterAction";
import { useDispatch } from "react-redux";
import FooterScreen from "./FooterScreen";

export default function RegisterStep2() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState();
  const [valid, setValid] = useState();
  const sellerDetails = useSelector((state) => state.sellerRegister);
  const { sellerInfo, loading, error } = sellerDetails;

  const billingDetails = useSelector((state) => state.sellerBilling);
  const { billingInfo, loadingBill, errorBill } = billingDetails;

  const [validated, setValidated] = useState(false);
  const [category, setCategory] = useState();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [terms, setTerms] = useState(false);
  var storName = sellerInfo.store_name;
  var sellerId = sellerInfo.id;

  const [categoryError, setCategoryError] = useState();
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [mobileError, setMobileError] = useState();
  const [address1Error, setAddress1Error] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [PhoneValidation, setPhoneValidation] = useState(false);
  const [pincodeValidation, setPinValidation] = useState(false);
  console.log("billingDetails", billingDetails);
  const handleContinue = () => {
    //console.log('dataqq', categoryError,fname, lname, mobile, address1, address2, city, state, pincode, terms, storName,);
    if (fname.replace(/\s/g, "").length <= 0) {
      setFnameError("First name is required");
    } else if (lname.replace(/\s/g, "").length <= 0) {
      console.log();
      setFnameError("");
      setLnameError("Last name is required");
    } else if (PhoneValidation == false) {
      return false;
    } else if (pincodeValidation == false) {
      return false;
    } else {
      console.log("submit success");
      setFnameError("");
      setLnameError("");
      dispatch(
        billingAction(
          fname,
          lname,
          mobile,
          address1,
          address2,
          city,
          state,
          pincode,
          terms,
          storName,
          sellerId
        )
      );
    }
  };
  function mobileValidation(value) {
    const re = /^[0-9\b]+$/;

    if (value.length === 10) {
      if ((value === "") | re.test(value)) {
        setMobileError("");
        setMobile(value);
        setPhoneValidation(true);
      }
    } else {
      if ((value === "") | re.test(value)) {
        setMobile(value);
        setMobileError("Invalid mobile input!");
        setPhoneValidation(false);
      }
    }
  }
  function pinValidation(value) {
    const re = /^[0-9\b]+$/;

    if (value.length === 6) {
      if ((value === "") | re.test(value)) {
        setPincodeError("");
        setPincode(value);
        setPinValidation(true);
      }
    } else {
      if ((value === "") | re.test(value)) {
        setPincode(value);
        setPincodeError("Invalid pincode input!");
        setPinValidation(false);
      }
    }
  }

  console.log("seller_data", sellerInfo);

  return (
    <>
      {/* {sellerInfo.length == 0 ? <Navigate to="/" /> :
      valid ? <Navigate to="/dashboard" /> : ""
    }
      {loadingBill ? "" : errorBill ? "" : billingInfo ? <Navigate to="/register-step-3" /> : ""
      } */}
      <HeaderScreen />
      <section className="page-hero home is-white">
        <Container>
          <Row>
            <br></br>
          </Row>
          <Row>
            <Col sm="2" xs="10"></Col>
            <Col>
              <br />
              <h3>
                Fill out the billing details to get paid for your first order
              </h3>
              <Card>
                <Card.Body>
                  <h4>Step 2/2</h4>
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          First name<span className="required-span">*</span>
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                          maxLength={60}
                          onChange={(e) => setFname(e.target.value)}
                        />
                        <span className="required-span">{fnameError}</span>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom02"
                      >
                        <Form.Label>
                          Last name<span className="required-span">*</span>
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last name"
                          onChange={(e) => setLname(e.target.value)}
                        />
                        <span className="required-span">{lnameError}</span>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>
                          Mobile no.<span className="required-span">*</span>
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter 10 digit valid mobile no."
                          maxLength={10}
                          value={mobile}
                          onChange={(e) => mobileValidation(e.target.value)}
                        />
                        <span className="required-span">{mobileError}</span>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label>
                          Address Line 1<span className="required-span">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="House No., Building, Colony, Area"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e) => setAddress1(e.target.value)}
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label>Address Line 2</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Land mark, Near by Places"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e) => setAddress2(e.target.value)}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please choose a username.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom03"
                      >
                        <Form.Label>
                          City<span className="required-span">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          required
                          onChange={(e) => setCity(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid city.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom04"
                      >
                        <Form.Label>
                          State<span className="required-span">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="State"
                          required
                          onChange={(e) => setState(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid state.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationCustom05"
                      >
                        <Form.Label>
                          Zip<span className="required-span">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Zip"
                          maxLength={6}
                          value={pincode}
                          onChange={(e) => pinValidation(e.target.value)}
                          required
                        />
                        <span className="required-span">{pincodeError}</span>
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        onChange={(e) => setTerms(e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      type="button"
                      onClick={() => handleContinue()}
                      disabled={loading ? "disabled" : ""}
                    >
                      Continue to Store
                    </Button>
                  </Form>
                  {loadingBill ? (
                    ""
                  ) : errorBill.response_code == 0 ? (
                    <p style={{ color: "red", padding: "10px" }}>
                      Something went wrong! Please contact our support team or
                      try again after some times.
                    </p>
                  ) : billingInfo ? (
                    <Navigate to="/register-step-3" />
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Card>
            </Col>
            <Col sm="2"></Col>
          </Row>
        </Container>
      </section>
      <FooterScreen />
    </>
  );
}
