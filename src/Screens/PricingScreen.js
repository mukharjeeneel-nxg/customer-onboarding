import FooterScreen from "./FooterScreen";
import Header2 from "./Header2";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, Basic, Intermediate, Advanced, AdvancedPro) {
  return { name, Basic, Intermediate, Advanced, AdvancedPro };
}

const rows = [
  createData('Online Store', "yes", "yes", "yes", "yes"),
  createData('Unlimited products', "yes", "yes", "yes", "yes"),
  createData('Manual order creation', "yes", "yes", "No", "yes"),
  createData('Discount codes', "No", "yes", "yes", "yes"),
  createData('Customer segmentation',  "No", "yes", "yes", "yes"),
];

function PricingScreen() {
    const [show,setShow]= useState(false)

  return (
    <>
      <Header2 />
      <Container>
        <Row>
          <br />
        </Row>
        <Row>
          <Col lg="12" className="core-features">
            <img
              src="https://www.nxgsols.com/img/svg/section-icon-2.svg"
              alt=""
            />
            <h1 style={{ padding: "13px" }}>Pricing</h1>
          </Col>
        </Row>

        <Row>
          <Col lg="3" xs="6">
            <div className="feature-card">
              <img src="https://www.nxgsols.com/img/services/s6.png" />
              <div className="feature-body">
                <h5>Basic</h5>
                <p>Ideal for new E-commerce business</p>
                <h5>$14/month</h5>
              </div>
            </div>
          </Col>
          <Col lg="3" xs="6">
            <div className="feature-card">
              <img src="https://www.nxgsols.com/img/services/s2.png" />
              <div className="feature-body">
                <h5>Intermediate</h5>
                <p>Best for E-commerce businesses which are growing</p>
                <h5>$25/month</h5>
              </div>
            </div>
          </Col>
          <Col lg="3" xs="6">
            <div className="feature-card">
              <img src="https://www.nxgsols.com/img/services/s1.png" />
              <div className="feature-body">
                <h5>Advanced</h5>
                <p>Ideal for Established businesses</p>
                <h5>$60/month</h5>
              </div>
            </div>
          </Col>
          <Col lg="3" xs="6">
            <div className="feature-card">
              <img src="https://www.nxgsols.com/img/services/s5.png" />
              <div className="feature-body">
                <h5>AdvancedPro</h5>
                <p>Highly secured E-commerce webiste.</p>
                <h5>$100/month</h5>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <center>
          <div>
               <Button variant="text"
                style={{backgroundColor:"white", color:"green"}}
              type="button"
              className="pricing-showhide"
              onClick={() => setShow(!show)}
            >
              {show === true ? "- Hide plan features" : "+ show plan features"}
</Button>            {show &&
                <div> 
                   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>FEATURES</TableCell>
            <TableCell align="right">Basic</TableCell>
            <TableCell align="right">Intermediate&nbsp;</TableCell>
            <TableCell align="right">Advanced&nbsp;</TableCell>
            <TableCell align="right">AdvancedPro&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Basic}</TableCell>
              <TableCell align="right">{row.Intermediate}</TableCell>
              <TableCell align="right">{row.Advanced}</TableCell>
              <TableCell align="right">{row.AdvancedPro}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                  </div>}
          </div>
        </center>
      </Container>
      <FooterScreen />
    </>
  );
}
export default PricingScreen;
