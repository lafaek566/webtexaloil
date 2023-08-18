import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../../styles/about-section.css';
import aboutImg from'../../assets/all-images/cars-img/gear.jpg';

const AboutSection = ({aboutClass}) => {
  return(
    <section>
        <Container className="about__section" style={
            aboutClass === "aboutPage"
                ? { marginTop: "0px" }
                : { marginTop: "280px"}
        }
        >
            <Row className="">
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">About Us</h4>
                        <h2 className="section__title">Welcome to Texal Service</h2>
                        <h4 className="section__subtitle">Indusrial & Marine</h4>
                        <p className="section__description">
                        Texal Oil merupakan salah satu formula oil yang tepat untuk segala keperluan mesin industri,
                        perkapalan dan transportasi, dan berbagai jenis kendaraan yang bergerak di TEXAL OIL
                        mepergunakan Base Oil dan Additive Package Standard Internasional serta adanya
                        MOCAF - Metal Organic Coated Additive Reduce Film, menjadikan gerak laju
                        mesin, More Speed-Power-Endurance sehingga kinerja perusahaan pemakai 
                        Texal Oil semakin diuntungkan.
                        </p>

                        <p> Establisher 1992-2000 : Chemichal Trading Company</p>
                        <p> Establisher 1992-2000 : Lubcricant Distributin</p>
                        <p> Establisher 1992-2000 : Chemichal Trading Company LOA Formulator & Chemichal Trading Independence Oil Manufaktur</p>

                        
                        <p className="section__description"> Dengan dukungan Fasilitas Oil Analysisi Laboratorium yang Ber-SNI 
                        Supreme Diesel Engine, Oil, Diesel Engine Oil, Premium Indsutrial Gear Oil
                        ,Hydraulic Oil, Cutting Oil, Heat Transfer Oil, Transformer Oil, Refrigeneration,
                        Turbo Oil,compressor Oil, White Oil, Marine Diesel, Engine Oil, 2T Marine Outboard Motor Oil,
                        Premium Calcium MP Greases No.3, Lithium Complex EP Greases No.2.
                        </p>
                                           
                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                            <i class="ri-checkbox-circle-line"></i>More Power
                            </p>

                            <p className="section__description d-flex align-items-center gap-2">
                            <i class="ri-checkbox-circle-line"></i>More Speed
                            </p>
                        </div> 

                          <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                            <i class="ri-checkbox-circle-line"></i>More Endurence
                            </p>

                            <p className="section__description d-flex align-items-center gap-2">
                            <i class="ri-checkbox-circle-line"></i>More Energizing
                            </p>
                        </div> 
                    </div>
                </Col>
                <Col lg='6' md='6'>
                <div className="about__img">
                    <img src={aboutImg} alt="" className="w-100" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>

  ); 
};

export default AboutSection; 