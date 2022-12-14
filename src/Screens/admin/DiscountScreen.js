import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import Header from './Header'
import SidebarScreen from './SidebarScreen'

export default function DiscountScreen() {

    return (
        <>
     
        <Header />
           
        
            <Row>
                <Col sm="2">
                    
                    <Row>
                    <SidebarScreen/>
                    </Row>
                </Col>
                
            
                <Col className="main-content">
                
                <h3>Discount</h3>
                
                </Col>
            </Row>
      
        </>
    )
}