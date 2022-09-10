import * as React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import HeaderScreen from "./HeaderScreen";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useState } from "react";
import Feedback from "react-bootstrap/Feedback";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { billingAction } from "../actions/RegisterAction";
import { useDispatch } from "react-redux";
import FooterScreen from "./FooterScreen";
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
function Register2() {

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
        <Container >
          <Grid container style={{ backgroundColor : "white" , padding:"10px" , borderRadius:"10px"}}>
            <Grid item lg={12} sm={6} xs={12}>
              <h3>
               <span style={{ color : "black" }}> Fill out the Billing Details to </span> <span style={{ color : "green" }} > Get Paid <MoodRoundedIcon/> For Your FIRST Order </span>{" "}
              </h3>
            </Grid>

            <Grid item lg={12} sm={6} xs={12}>
              <h4 style={{ color : "black" }} >Step 2/3 </h4>
            </Grid>
            <br />

            <Grid container>
              <Grid item lg={4} sm={6} xs={12} style={{ padding: "30px" }}>
                <label style={{ color : "black" }}  >First Name </label>
                <span style={{ color: "red" }}>*</span>
                {/* <input
                type="text"
                placeholder="enter name"
               ></input> */}
                <input
                
                  color="secondary"
                  style={{ width: "300px", color: "black" }}
                  required
                  type="text"
                  placeholder="First name"
                  maxLength={60}
                  onChange={(e) => setFname(e.target.value)}
                />                        <span className="required-span">{fnameError}</span>

              </Grid>

              <Grid item lg={4} sm={6} xs={12} style={{ padding: "30px" }}>
                <label style={{ color : "black" }} >Last Name </label>
                <span style={{ color: "red" }}> *</span>
                <input
                  className="registerinput2"
                  color="secondary"
                  style={{ width: "300px" ,color: "black"}}
                  required
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setLname(e.target.value)}
                />
                                        <span className="required-span">{lnameError}</span>

              </Grid>

              <Grid item lg={4} sm={6} xs={12} style={{ padding: "30px" }}>
                <label style={{ color : "black" }} >Mob Number </label>
                <span style={{ color: "red" }}> *</span>
                <input
                  className="registerinput2"
                  color="secondary"
                  style={{ width: "300px" ,color: "black"}}
                  required
                  type="text"
                  placeholder="Enter 10 digit valid mobile no."
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => mobileValidation(e.target.value)}
                />
                                        <span className="required-span">{mobileError}</span>

              </Grid>
            </Grid>

            <Grid container>
              <Grid item lg={6} sm={6} xs={12} style={{ padding: "30px" }}>
                <label style={{ color : "black" }} >Address Line 1 </label>
                <span style={{ color: "red" }}> *</span>
                <input
                  className="registerinput2"
                  color="secondary"
                  style={{ width: "500px" ,color: "black"}}
                  type="text"
                  placeholder="House No., Building, Colony, Area"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(e) => setAddress1(e.target.value)} 
                />
              </Grid>

              <Grid item lg={6} sm={6} xs={12} style={{ padding: "30px" }}>
                <label style={{ color : "black" }} >Address Line 2 </label>
                <input
                  className="registerinput2"
                  color="secondary"
                  style={{ width: "492px" ,color: "black"}}
                  type="text"
                            placeholder="Land mark, Near by Places"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e) => setAddress2(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item lg={6} sm={6} xs={12} style={{ padding: "30px" }}>
                <label style={{ color : "black" }} > City </label>
                <span style={{ color: "red" }}> *</span>
                <input
                  className="registerinput2"
                  color="secondary"
                  style={{ width: "500px" ,color: "black"}}
                  type="text"
                  placeholder="City"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>

              <Grid item lg={3} sm={6} xs={12} style={{ padding: "30px" }}>
                <label style={{ color : "black" }}> State </label>
                <span style={{ color: "red" }}> *</span>

                <input
                  style={{ width: "200px",color: "black" }}
                  className="registerinput2"
                  type="text"
                          placeholder="State"
                          required
                          onChange={(e) => setState(e.target.value)}
                />
              </Grid>

              <Grid item lg={3} sm={6} xs={12} style={{ padding: "30px" }}>
                <label style={{ color : "black" }}>Zip</label>
                <span style={{ color: "red" }}> *</span>
                <input
                  style={{ width: "200px" , color: "black" }}
                  type="text"
                  className="registerinput2"
                  placeholder="Zip"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => pinValidation(e.target.value)}
                      required 
                />
                 <span className="required-span">{pincodeError}</span>
              </Grid>
            </Grid>

            <Grid lg={12} sm={6} xs={12}>
              <input
                type="checkbox"
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                onChange={(e) => setTerms(e.target.value)}
              />{" "}
              <label style={{ color : "black" }}> “ AGREE to Terms and Conditions ”</label>
            </Grid>
            <Grid lg={12} sm={6} xs={12} align="center">
              <Button
                variant="contained"
                color="success"
                size="large"
                onClick={() => handleContinue()}
                disabled={loading ? "disabled" : ""}
              >
                Continue To Store
              </Button>
            </Grid>
            <br />
            <br />
            {loadingBill ? (
              ""
            ) : errorBill.response_code == 0 ? (
              <p style={{ color: "red", padding: "10px" }}>
                Something went wrong! Please contact our support team or try
                again after some times.
              </p>
            ) : billingInfo ? (
              <Navigate to="/register-step-3" />
            ) : (
              ""
            )}
          </Grid>
        </Container>
        <br/>
      </section>
      <FooterScreen />
    </>
  );
}

export default Register2;
