import React from 'react'
import HeaderScreen from "./HeaderScreen";
import { Form, Col, Row, InputGroup } from "react-bootstrap";
import FooterScreen from "./FooterScreen";
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
const Register3 = () => {
  var sellerData = localStorage.getItem('sellerInfo');
  var sellerData = JSON.parse(sellerData);
  console.log('sellerData---', sellerData)

  //console.log('propssellerInfo', sellerData.store_name);
  const handleContinue = (e) => {
      e.preventDefault();
      localStorage.removeItem('sellerInfo');
      window.location.replace(`https://${sellerData.store_name}.nxgecom.in/admin?registered-successfully`);
  }
  return (
      <>
          {/* {sellerData==null? <Navigate to="/" /> : ""} */}
          <HeaderScreen />
          <section className="page-hero home is-white">
              <Container >
          <Grid >
              <br></br>

          </Grid>
          <Grid Grid container>
             
                  <br />

                  
                      <Grid >
                          <h5>Store creation is in process...</h5>
                          <p>You will receive an email after your store is created, please check your email in a while.</p>
                          <a href=""><Button style={{color:"white", backgroundColor:"green"}} onClick={(e) => handleContinue(e)}>Continue to store</Button></a>
                          
                      </Grid>
                
          </Grid>
          </Container>
          </section>
          <FooterScreen/>
      </>
  )
}

export default Register3