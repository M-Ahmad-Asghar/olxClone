import "./RecentAds.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RecipeReviewCard from "./Card/Card"

function RecentAds() {
    return (
        <>
        <br /><br /><br /><br /><br />
         <Container id="recAdsContnr">
                  
                    
                    
                        <Col md={3}  className="crd"><RecipeReviewCard/>  </Col>
        
            </Container>
            
        </>
    )
}
export default RecentAds;