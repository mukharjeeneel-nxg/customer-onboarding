import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./Header";
import SidebarScreen from "./SidebarScreen";
import Alert from "react-bootstrap/Alert";
export default function DashboardSceen() {
  return (
    <>
      <Header />

      <Row>
        <Col sm="2">
          <Row>
            <SidebarScreen />
          </Row>
        </Col>

        <Col sm="8" className="main-content">
          <h4>Dashboard</h4>
          <br />
          <h5>Complete the following steps to get started</h5>
          <Alert variant={"primary"}>
            Add Your First Product &nbsp;
            <Link to="/products">
              {" "}
              <Button>Add Product</Button>
            </Link>
          </Alert>

          <Alert variant={"primary"}>
            Costomise your store &nbsp;
            <Link to="/products">
              {" "}
              <Button>Start design</Button>
            </Link>
          </Alert>
          <Alert variant={"primary"}>
            Setup Payment method &nbsp;
            <Link to="/products">
              {" "}
              <Button>Setup Payment</Button>
            </Link>
          </Alert>
          <Alert variant={"primary"}>
            Setup Shipping &nbsp;
            <Link to="/products">
              {" "}
              <Button>Setup Shipping</Button>
            </Link>
          </Alert>
        </Col>
      </Row>
    </>
  );
}
