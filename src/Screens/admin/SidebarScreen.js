import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { BsCart4, BsFillGearFill, BsFillSimFill, BsFillMegaphoneFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdDashboard, MdOutlineLocalOffer, MdOutlineLocalShipping, } from "react-icons/md";
import { GiLargeDress } from "react-icons/gi";
import { useLocation } from 'react-router';
export default function SidebarScreen() {

    const location = useLocation();
    const pageUrl = location.pathname;

    return (
        <Container className='sidebar'>
            
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link className={pageUrl == '/dashboard' ? 'active' : ''} ><MdDashboard />&nbsp;<Link to="/dashboard">Dashboard</Link></Nav.Link>

                <div className='overflow'>
                    <Nav.Link className={pageUrl == '/orders' ? 'active' : 'not-active'} >
                        <BsCart4 />&nbsp;
                        <Link to="/orders">Orders</Link>
                    </Nav.Link>

                    <Nav.Link className={pageUrl == '/products' ? 'active' : 'not-active'}>
                        <GiLargeDress />&nbsp;
                        <Link to="/products">Products</Link> 
                    </Nav.Link>

                    <Nav.Link className={pageUrl == '/manage-store' ? 'active' : 'not-active'} ><BsFillSimFill />&nbsp;<Link to="/manage-store">Online Store</Link> </Nav.Link>

                    <Nav.Link className={pageUrl == '/discounts' ? 'active' : ''} >
                        <MdOutlineLocalOffer />&nbsp;
                        <Link to="/discounts">Discounts</Link>
                    </Nav.Link>

                    <Nav.Link ><MdOutlineLocalShipping />&nbsp;<Link to="/orders">Shipping</Link> </Nav.Link>

                    <Nav.Link ><BsFillMegaphoneFill />&nbsp;<Link to="/orders">Marketing</Link> </Nav.Link>

                    <Nav.Link ><BsFillGearFill />&nbsp;<Link to="/orders">Settings</Link> </Nav.Link>

                    <Nav.Link ><BsFillTelephoneFill />&nbsp;<Link to="/orders">Support</Link> </Nav.Link>






                </div>
            </Nav>
        </Container>

    )
}