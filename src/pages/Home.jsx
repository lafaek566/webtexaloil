import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Col, Row } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServiceList from "../components/UI/ServiceList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import ScrollButton from "../components/UI/ScrollButton";
import { Link } from "react-router-dom";




const Home = () => {
  return (
    <Helmet title="Home">
      {/*============= hero section ============*/ }
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        
         <div className="hero__form">
         <Container>
          <Row className="form__row">
            <Col lg="4" md="4">
              <div className="find__cars-left">
                <h2>Find your best Oil</h2>
              </div>
            </Col>
            <Col lg="8" md="8" sm="12">
              <FindCarForm />
            </Col>
          </Row>
         </Container>
        </div>
      </section>

      {/*===================== about section ==================*/}
      <AboutSection />

      {/*====================== service section ===============*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle"> See Our</h6>
              <h2 className="section__title">Popular Service</h2>
            </Col>

          <ServiceList />
          </Row>
        </Container>
      </section>

{/*=============== scrollbar section ================*/}
      <section>
      <ScrollButton />
      </section>



      {/*=============== car offer section ================*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0,3).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}          

          
            <Link to="/product">
                <button className="btn find__car-btn">See More All Product</button>
            </Link>
        
          </Row>
        </Container>
      </section>
      

      {/*======================= become a driver ================= */}

        <BecomeDriverSection />

      {/*========================= testimonial ====================*/}
      <section>
        <Container>
        <Row>
          <Col lg="12" className="mb-4 text-center">
                <h6 className="section__subtitle">Our Clients Says</h6>
                <h2 className="section__title">Testimonial</h2>
          </Col>

          <Testimonial />
        </Row>
        </Container>
      </section>
  </Helmet>
  );
};

export default Home;