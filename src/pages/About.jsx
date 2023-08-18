import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from '../components/UI/AboutSection';
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from '../components/UI/BecomeDriverSection';

import driveImg from '../assets/all-images/drive.jpg';
import OurMembers from "../components/UI/OurMembers";
import '../styles/about.css';
import ScrollButton from "../components/UI/ScrollButton";


const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage"/>

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
            <div className="about__page-img">
              <img src={driveImg} alt="" className="w-100 rounded-3" />
            </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">We are Commited 
                To Share Solution</h2>
                <p className="section__description">RingkasKami adalah perusahaan yang bergerak dibidang penyediaan bahan-bahan kimia untuk aplikasi sebagai berikut :1. Coating & Ink2. Personal Care3. Pharmaceutical4. Home Care5. Car Care6. Industrial and Institutional7. Adhesives8. Textilles Auxiliriaries9. Emulsion and Polymerization10. Plastic and Rubber11. Oil Lubricant and Metal Cutting Fluid12.
                </p>
                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4"><i class="ri-phone-line"></i> </span>
                  <div>
                    <h6 className="section__subtitle">Need Any Help ?</h6>
                    <h4>+62-813-186-60725 </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
        <BecomeDriverSection />

      <section>
        <ScrollButton />
      </section>

      
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
               <h2 className="sectiom__title">Our Special Customer</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About; 