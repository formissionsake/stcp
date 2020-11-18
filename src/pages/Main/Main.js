import "./Main.scss";
import NavBar from "../../components/NavBar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetcher from '../../utils/fetcher';
import {useEffect, useState} from "react";

function Main(props) {
    const [stpcBalance, setStpcBalance] = useState(0);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const [address, setAddress] = useState('');

    const fetchBalance = async () => {
        await fetcher.get('/user/balance')
            .then((res) => {
                console.log(res);
                setStpcBalance(res.data.stpc);
                setUsdtBalance(res.data.usdt);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const generateAddress = async () => {
        // e.preventDefault();
        await fetcher.post('/user/login', {username: '', password: ''})
            .then((res) => {
                console.log(res.data.address);
                setAddress(res.data.address);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        fetchBalance();
    }, []);

    return (
        <>
            <NavBar {...props}/>
            <Container className="mt-3">
                <Row className="border p-5">
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <h2>Buy</h2>
                        <Form className="mt-4">
                            <Form.Group controlId="formBuy">
                                <Form.Label>Buy amount</Form.Label>
                                <Form.Control type="number" placeholder="Enter amount"/>
                            </Form.Group>
                            <Button type="submit" variant="flat">
                                Buy
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={12} sm={12} md={4} className="mt-5 mt-sm-5 mt-md-0 offset-md-1">
                        <h2>Deposit</h2>
                        <Form className="mt-4">
                            <Form.Group controlId="formDeposit">
                                <Form.Label>STPC Address</Form.Label>
                                <Form.Control type="text" value={address} disabled={true}/>
                            </Form.Group>
                        </Form>
                        {!address
                            ? (
                                <Button type="submit" variant="flat" onClick={generateAddress}>
                                    Generate address
                                </Button>
                            )
                            : null
                        }
                    </Col>
                    <Col xs={12} sm={12} md={2} className="mt-5 mt-sm-5 mt-md-0 offset-md-1">
                        <h2>Balance</h2>
                        <Form className="mt-4">
                            <Form.Group controlId="formBalance">
                                <Form.Label>STPC balance</Form.Label>
                                <Form.Control type="number" disabled={true} value={stpcBalance}/>
                                <Form.Label className="mt-3">USDT balance</Form.Label>
                                <Form.Control type="number" disabled={true} value={usdtBalance}/>
                            </Form.Group>
                            {/*<Button type="submit" variant="primary">*/}
                            {/*    Buy*/}
                            {/*</Button>*/}
                        </Form>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Main;
