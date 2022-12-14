import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import Header from './Header'
import SidebarScreen from './SidebarScreen'
import Tab from 'react-bootstrap/Tab';
import { Nav } from "react-bootstrap";

export default function ManageStore() {

    return (
        <>

            <Header />


            <Row>
                <Col sm="2">

                    <Row>
                        <SidebarScreen />
                    </Row>
                </Col>


                <Col className="main-content">

                   <h4>Costomize your store</h4>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="header">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="header">Header</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="menu">Menu</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="banner">Banner</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="header">
                                       <p>Choose Header for your store</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="banner">
                                       <p>Add Banner</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="menu">
                                       <p>Add Manu Item</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>

        </>
    )
}