import * as React from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

export default function MyNavbar() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    function toggle(): void {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar color="dark" light expand="md" data-test='Navbar'>
                <Link to="/" className='navbar-brand'>Typescript</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/counter" className='nav-link'>Counter</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/todo" className='nav-link'>Todo</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/fetch" className='nav-link'>Users</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
