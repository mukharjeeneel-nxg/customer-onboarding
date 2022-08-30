import HeaderScreen from "./HeaderScreen";
import FooterScreen from "./FooterScreen";
import { useSelector } from "react-redux";
import MessageBox from "./messageBox";
//import { Form, Button, Col, Row, Card } from "react-bootstrap";
import Container from "@mui/material/Container";
import { ContactAction } from "../actions/ContactAction";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { InputBase } from "@mui/material";
import { FormControl } from "@mui/material";

export default function Contact2() {
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
  console.log("name", setName);
  return (
    <>
      <HeaderScreen />
      <section className="page-hero home is-white">
        <div className="bg"></div>
        <div className="hero-content" id="scene-wrapper--hero-wave">
          <Grid container>
            <Grid>
              <br />
            </Grid>
            <Grid container>
            <Grid item  xs={6}>
                <h3>We're here to support you. If you're looking for help you've come to the right place.</h3>
                <p>Please show us your interest by filling the form.</p>
              </Grid>
              <Grid item xs={4} sx={{ backgroundColor: "white", borderRadius: "5px" }}>
                <Grid>
                  <label className="contactlabel">Enter your name</label>{" "}
                  <span style={{ color: "red" }}>*</span>
                  <br />
                  <input
                    type="text"
                    className="contactinput"
                    style={{ width: "410px", height: "40px" }}
                  />
                </Grid>
                <Grid>
                  <label className="contactlabel">Enter email Address</label>
                  <span style={{ color: "red" }}>*</span>
                  <br />
                  <input
                    type="text"
                    className="contactinput"
                    style={{ width: "410px", height: "40px" }}
                  />
                </Grid>
                <Grid>
                  <label className="contactlabel">Enter mobile no.</label>
                  <span style={{ color: "red" }}>*</span>
                  <br />
                  <input
                    type="text"
                    className="contactinput"
                    style={{ width: "410px", height: "40px" }}
                  />
                </Grid>
                <Grid>
                  <label className="contactlabel">Message</label>{" "}
                  <span style={{ color: "red" }}>*</span>
                  <br />
                  <textarea
                    name="Text1"
                    cols="40"
                    rows="5"
                    className="contactinput"
                    style={{ width: "410px", height: "80px" }}
                  ></textarea>
                </Grid>
                <br />
                <center>
                  {" "}
                  <Button
                    class="ecommbutton"
                    variant="contained"
                    color="success"
                  >
                    Success
                  </Button>
                </center>
                <br />
              </Grid>
            </Grid>
            <Grid>
              <br /> <br />
            </Grid>
          </Grid>
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
