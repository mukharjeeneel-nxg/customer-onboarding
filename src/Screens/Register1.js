import HeaderScreen from "./HeaderScreen";
import * as React from "react";
import { Form, Button, Container, Col, InputGroup, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { RegisterAction } from "../actions/RegisterAction";
import { useSelector } from "react-redux";
import FooterScreen from "./FooterScreen";
import MessageBox from "./messageBox";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { Input } from "@mui/material";
import { FormHelperText } from "@mui/material";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
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
    if (age == "" || age == undefined) {
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

  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      {/* {loading ? (
        ""
      ) : error ? (
        ""
      ) : sellerInfo.id > 0 ? (
        <Navigate to="/register-step-2" replace={true} />
      ) : (
        ""
      )} */}
      <HeaderScreen />
      <section className="page-hero home is-white">
        <div className="bg"></div>
        <div className="hero-content" id="scene-wrapper--hero-wave">
          <Grid container>
            <Grid>
              <br />
            </Grid>

            <Grid container>
              <Grid item lg={5} sm={6} xs={12}></Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xs={12}
                sm="12"
                lg="6"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "30px",
                }}
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
                <h4 style={{ color: "black" }}>Step 1/2</h4>

                <Grid className="mb-3">
                  <FormGroup as={Col} md="12" style={{padding:"0px"}}>
                    {loading ? (
                      ""
                    ) : sellerInfo.response_code == 2 ? (
                      <Alert severity="error">
                        Requested store URL is already in use!
                      </Alert>
                    ) : sellerInfo.response_code == 1 ? (
                      <Alert severity="error">
                        Email address already in use!
                      </Alert>
                    ) : (
                      ""
                    )}
                    <FormLabel style={{ color: "black" }}>
                      Select your business category
                      <span className="required-span">*</span>
                    </FormLabel>
                    <InputLabel id="demo-multiple-name-label"> </InputLabel>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-controlled-open-select-label">
                       <span> Category &nbsp;&nbsp;&nbsp;</span>
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Clothing & Fashion</MenuItem>
                        <MenuItem value={20}>Beauty & Health</MenuItem>
                        <MenuItem value={30}>Electronics</MenuItem>
                        <MenuItem value={30}>Food or Restrourant</MenuItem>
                        <MenuItem value={30}>Other Retail business</MenuItem>
                        <MenuItem value={30}>Digital Goods</MenuItem>
                      </Select>
                    </FormControl>
                    <br />
                    <FormLabel
                      aria-label="Default select example"
                      onChange={(e) => setCategory(e.target.value)}
                    ></FormLabel>
                    <span className="required-span">{categoryError}</span>
                  </FormGroup>
                </Grid>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <FormLabel style={{ color: "black" }}>
                    Email address<span className="required-span">*</span>
                  </FormLabel>

                  <FormControl>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter email"
                      required
                    />
                  </FormControl>
                  <span style={{ color: "red" }}>{emailError}</span>
                </FormGroup>
                <br />

                <FormGroup className="mb-3" controlId="formBasicPassword">
                  <FormLabel style={{ color: "black" }}>
                    Password <span className="required-span">*</span>
                  </FormLabel>

                  <FormControl>
                    {" "}
                    <Input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </FormControl>
                  <span style={{ color: "red" }}>{passError}</span>
                </FormGroup>
                <br />

                <FormGroup className="mb-3" controlId="formBasicPassword">
                  <FormLabel style={{ color: "black" }}>
                    Store URL <span className="required-span">*</span>
                  </FormLabel>
                     
                  <InputGroup  hasValidation>
                    <FormControl>
                      {" "}
                      <Input 
                        placeholder="myshop"
                        type="text"
                        style={{ width: "620px" }}
                        required
                        value={storUrl}
                        minLength={4}
                        maxLength={25}
                        onChange={(e) => validateUrl(e.target.value)}
                      />
                    </FormControl>

                    <InputGroup.Text  
                      style={{ color: "black", marginTop: "50px" }}
                    >
                      <p
                        
                        style={{
                          marginLeft: "500px",
                          backgroundColor: "lightgray",
                          borderRadius: "7px",
                          width: " 120px",
                          height: " 53px",
                          marginTop: "-54px",
                          paddingTtop: "10px",
                          padding:" 10px"
                        }}
                      >
                        {" "}
                        .nxgecom.in{" "}
                      </p>
                    </InputGroup.Text>
                    <br />
                    <span style={{ color: "red" }}>{urlError} </span>
                    
                  </InputGroup>

                  <FormHelperText
                    className="text-muted"
                    style={{ color: "black" }}
                  >
                    Your customer will visit your store by this URL, you can
                    connect your custom URL like mystore.com later.
                  </FormHelperText>
                </FormGroup>
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
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <br /> <br />
              </Grid>
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
