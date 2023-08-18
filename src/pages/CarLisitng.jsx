import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import CarItem from '../components/UI/CarItem';
import carData from '../assets/data/carData';
import ScrollButton from "../components/UI/ScrollButton";

const CarListing = () => {
  return ( <Helmet title='Product'>

          <CommonSection title='Product Listing' />
 {/* ======================= PCMO Product ========================*/}
          <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">PCMO</h2>
              <h6 className="section__subtitle">(Available all)</h6>
          </Col>

          <section>
            <ScrollButton />
          </section>

            <section>
            <Container>
          <Row>
              {carData.slice(0,7).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}          
        </Row>
        </Container>
            </section>

 {/* ======================= MCO Product ========================*/}
 <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">MCO</h2>
              <h6 className="section__subtitle">(Available all)</h6>
          </Col>

           <section>
            <Container>
          <Row>
            {carData.slice(7,15).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}          
            
          </Row>
        </Container>
        </section>

         {/* ======================= Other Product ========================*/}
 <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Other Product</h2>
              <h6 className="section__subtitle">(Available all)</h6>
          </Col>

           <section>
            <Container>
          <Row>
            {carData.slice(15,19).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}          
            
          </Row>
        </Container>
        </section>




        </Helmet>
  );
};

export default CarListing;