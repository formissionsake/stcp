import './Navbar.scss';
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/FormControl";
import fetcher from "../../utils/fetcher";
import Logo from "../../res/images/logo.png";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

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
        <Navbar variant="dark" className="border-bottom py-3">
            <Container>
                <Navbar.Brand href="/main"><Image src={Logo} width="125" height="auto"/></Navbar.Brand>
                <Nav className="mr-auto">
                    {/*<Nav.Link href="/main" className="text-dark">Home</Nav.Link>*/}
                    {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                    {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#" style={{color: '#eb1b8c', fontSize: '16px', fontWeight: 'bold'}} onSelect={() => handleLogOut()}>Log Out</Nav.Link>
                </Nav>
                {/*<Form inline>*/}
                {/*<FormControl type="text" placeholder="Search" className="mr-sm-2"/>*/}
                {/*<Button variant="outline-light">Search</Button>*/}
                {/*</Form>*/}

            </Container>
        </Navbar>
    );
}

export default NavBar;
