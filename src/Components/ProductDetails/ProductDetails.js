import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./ProductDetails.css"
import PdCard from "./PdCard.js"
function ProductDetails() {
    return (
        <>
            <div id="crousel">
                <Container fluid >

                    <Row>
                        <Col md={8} id="cvc">
                            <img src="Assets/images/demo2.jpg" alt="" />
                        </Col>
                        <Col md={4} >
                            <PdCard id="sideCard" />
                        </Col>
                    </Row>
                    
                </Container>
                <hr />
                <Container>
                <Row>
                        <Col md={8}>
                            <h3 id="dtlhd">Description</h3>
                            
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <p>
                        New Arrival
New PLUS FAT BIKE P-750 brand new imported box pack 
Full Aluminium Frame light weight 10 to 11
New Model 2021
Whole sale rate
Price 30,000
Men/women Both
Size 27
Dual disk brake 
Front gear 3
Rear gear 7
High speed 21
Aluminum rims 
Seat adjustable 
Light Weight 
Super High Quality 
Address model colony near airport karachi 
What'sapp 0,3,1,6,2,4,5,1,4,1,3
Phone 0,3,1,6,2,4,5,1,4,1,3
zero three one six two four five one four one three 
Home delivery Available
Visit Facebook page 
#MashaAllah_bicycle_karachi
Home delivery available at your doorstep 
Limited piece are available
                        </p>
                    </Row>
                    
                </Container>
            </div>
        </>
    )
}
export default ProductDetails;