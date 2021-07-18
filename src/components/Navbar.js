import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
function NavbarComponent() {
    return (
        <Navbar bg="light" expand="sm">
            Google Drive Clone
            <Nav className="ml-auto">
                Profile
            </Nav>
        </Navbar>
    )
}

export default NavbarComponent;