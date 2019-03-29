import * as React from 'react';
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import './Navbar.css';

export default function MyNavbar() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    function toggle(): void {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar expand="md" data-test='Navbar' className='my-nav transparent-bg'>
                <NavLink to="/" className='navbar-brand logo'>Typescript</NavLink>
                <NavbarToggler onClick={toggle} className='toggler'/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink activeClassName='active-menu' to="/counter" className='nav-link nav-menu'>Counter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName='active-menu' to="/todo" className='nav-link nav-menu'>Todo</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName='active-menu' to="/fetch" className='nav-link nav-menu'>Users</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
