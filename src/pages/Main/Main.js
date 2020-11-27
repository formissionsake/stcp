import "./Main.scss";
import NavBar from "../../components/NavBar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetcher from '../../utils/fetcher';
import {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";

function Main(props) {
    const [stpcAmount, setStpcAmount] = useState('');
    const [usdtAmount, setUsdtAmount] = useState('');
    const [stpcBalance, setStpcBalance] = useState(0);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const [ethBalance, setEthBalance] = useState(0);
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
        await fetcher.post('/user/login', {username: 'bbrick', password: '123'})
            .then((res) => {
                console.log(res.data.address);
                setAddress(res.data.address);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const buyStpc = async () => {
        await fetcher.post('/user/buy', {amount: stpcAmount})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
                alert('Something went wrong. Can you try again?');
            });
    };

    useEffect(() => {
        fetchBalance();
    }, []);

    return (
        <>
            <NavBar {...props}/>
            <Container fluid className="mt-0 bg-image">
                <Container>
                    <Row className="py-5">
                        <Col xs={12} sm={12} md={4}>
                            <Typography variant="h4" style={{color: 'white'}}>Buy</Typography>
                            <Form className="mt-4">
                                <Form.Group controlId="formBuy">
                                    <Form.Label className="text-light">STPC amount</Form.Label>
                                    <Form.Control type="number" placeholder="Enter amount"/>
                                    <Button type="submit" variant="flat" className="mt-2 py-1">
                                        Buy
                                    </Button>
                                </Form.Group>
                            </Form>
                            <Form className="mt-4">
                                <Form.Group controlId="formBuy">
                                    <Form.Label className="text-light">USDT amount</Form.Label>
                                    <Form.Control type="number" placeholder="Enter amount"/>
                                    <Button type="submit" variant="flat" className="mt-2 py-1">
                                        Buy
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} sm={12} md={4} className="mt-5 mt-sm-5 mt-md-0 offset-md-1">
                            <Typography variant="h4" style={{color: 'white'}}>Deposit</Typography>
                            <Form className="mt-4">
                                <Form.Group controlId="formDeposit">
                                    <Form.Label className="text-light">STPC Address</Form.Label>
                                    <Form.Control type="text" value={address} disabled={true}
                                                  className="overflow-auto"/>
                                </Form.Group>
                            </Form>
                            {/*{!address*/}
                            {/*    ? (*/}
                            {/*        <Button type="submit" variant="flat" onClick={generateAddress}>*/}
                            {/*            Generate address*/}
                            {/*        </Button>*/}
                            {/*    )*/}
                            {/*    : null*/}
                            {/*}*/}
                            <Form>
                                <Form.Group controlId="formDeposit">
                                    <Form.Label className="text-light">ETH Address</Form.Label>
                                    <Form.Control type="text" value={address} disabled={true}
                                                  className="overflow-auto"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} sm={12} md={2} className="mt-5 mt-sm-5 mt-md-0 offset-md-1">
                            <Typography variant="h4" style={{color: 'white'}}>Balance</Typography>
                            <Form className="mt-4">
                                <Form.Group controlId="formBalance">
                                    <Form.Label className="text-light">STPC balance</Form.Label>
                                    <Form.Control type="number" disabled={true} value={stpcBalance}/>
                                    <Form.Label className="mt-3 text-light">USDT balance</Form.Label>
                                    <Form.Control type="number" disabled={true} value={usdtBalance}/>
                                    <Form.Label className="mt-3 text-light">ETH balance</Form.Label>
                                    <Form.Control type="number" disabled={true} value={ethBalance}/>
                                </Form.Group>
                                {/*<Button type="submit" variant="primary">*/}
                                {/*    Buy*/}
                                {/*</Button>*/}
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Main;
