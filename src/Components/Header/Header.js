import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Header() {
    return (
        <>
            <Container fluid className="navbarBg">
                <Container>
                    <Row>
                        <Col md={1}>
                            <img src="/Assets/images/olxLogo.png" alt="" style={{ paddingTop: "10px" }} />
                        </Col>
                        <Col md={9} xs={7} sm={7}>
                            <Form.Group className="dpfl">
                                <Form.Control size="lg" type="text" placeholder="Find Cars, Mobile Phones and more..." />
                                <SearchIcon id="searchicon" />
                            </Form.Group>
                        </Col>
                        <Col md={1} xs={2} sm={2}>
                            <h5 id="logintxt">login</h5>
                        </Col>
                        <Col md={1} xs={2} sm={2}>
                            <img src="/Assets/images/sell.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <br />
            <Container fluid>
                <Container id="catagories">
                    <Row>
                        <Col sm={3} xs={6} md={2} id="allCtg">
                            <p>ALL CATEGORIES</p>
                            <ExpandMoreIcon id="expndMore" />
                        </Col>
                        <Col sm={3} xs={4} md={2} className="spcCtg">
                            <p>Mobile Phones</p>
                        </Col>
                        <Col sm={3} md={1} xs={4} className="spcCtg">
                            <p>Cars</p>
                        </Col>
                        <Col sm={3} md={1} xs={4} className="spcCtg">
                            <p>Motorcycles</p>
                        </Col>
                        <Col sm={3} md={1} xs={4} className="spcCtg">
                            <p>Houses</p>
                        </Col>
                        <Col sm={3} xs={6} md={2} className="spcCtg">
                            <p>TV - Video - Audio</p>
                        </Col>
                        <Col sm={3} md={1} xs={3} className="spcCtg">
                            <p>Tablets</p>
                        </Col>
                        <Col sm={3} xs={4} md={2} className="spcCtg">
                            <p> Land &amp; Plots</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default Header;