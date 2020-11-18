import './Navbar.scss';
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/FormControl";
import fetcher from "../../utils/fetcher";
import Col from "react-bootstrap/Col";

function NavBar(props) {
    const handleLogOut = async () => {
        await fetcher.post('/user/logout')
            .then((res) => {
                console.log(res);
                props.history.push('/');
            })
            .catch((e) => {
                console.log(e);
            })
    };

    return (
        <Navbar variant="dark" className="navbar-color">
            <Navbar.Brand href="/main">B-Brick</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/main" className="text-white">Home</Nav.Link>
                {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="#" className="text-white" onSelect={() => handleLogOut()}>Log Out</Nav.Link>
            </Nav>
            {/*<Form inline>*/}
                {/*<FormControl type="text" placeholder="Search" className="mr-sm-2"/>*/}
                {/*<Button variant="outline-light">Search</Button>*/}
            {/*</Form>*/}
        </Navbar>
    );
}

export default NavBar;
