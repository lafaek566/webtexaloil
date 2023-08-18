import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";
import ScrollButton from "../components/UI/ScrollButton";

const socialLinks = [
    {
        url: "https://www.facebook.com/texaloil2018",
        icon: "ri-facebook-line",
    },
    {
        url: "https://www.instagram.com/texaloil_official/",
        icon: "ri-instagram-line",
    },
    {
        url: "https://wa.me/081318660725?text=kami dari TEXAL OIL, silahkan memesan, terima kasih",
        icon: "ri-whatsapp-line",
    },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
        <CommonSection title="Contact"/>
        <section>
            <Container>
                <Row>
                    <Col lg="7" md="7">
                        <h6 className="fw-bold">Pengaduan dan Layanan</h6>
                        <Form>
                            <FormGroup>
                                <Input placeholder="your name" type="text"/>
                            </FormGroup>
                            <FormGroup className="contact_form">
                                <Input placeholder="Email" type="email"/>
                            </FormGroup>
                            <FormGroup className="contact__form">
                                <textarea rows="5" placeholder="Message" className="textarea"></textarea>
                            </FormGroup>
                            
                            <button className="email__btn">
                            <Link to='mailto:texaloil.bandung@gmail.com?subject=silahkan tinggalkan pesan untuk pengaduan dan layanan kami'>
                            <i class="ri-mail-send-line"></i> Send Email
                            </Link>
                            </button>
                            
                        </Form>
                       </Col>

                    <Col lg="5" md="5">
                        <div className="contact__info">
                            <h6 className="fw-bold">Contact Information</h6>

                        <div className=" d-flex align-items-center gap-2">
                            <h6 className="mb-0 fs-6">Head Office:</h6>
                            <p className="section__description mb-0">TEXAL OIL</p>
                        </div> 

                        <div className=" d-flex align-items-center gap-2">
                            <h6 className="mb-0 fs-6">Head Office:</h6>
                            <p className="section__description mb-0">Michael</p>
                        </div> 

                        <div className=" d-flex align-items-center gap-2">
                            <h6 className="mb-0 fs-6">Phone:</h6>
                            <Link to="https://wa.me/6281318660725?text=kami dari TEXAL OIL; silahkan memesan, terima kasih">
                            <p className="section__description mb-0">+6281318660725</p>
                            </Link>
                        </div>

                         <div className="d-flex align-items-center gap-2">
                            <h6 className="mb-0 fs-6">Email:</h6>
                            <p className="section__description mb-0">texaloil.bandung@gmail.com</p>
                        </div>   

                          <div className="d-flex align-items-center gap-2">
                            <h6 className="mb-0 fs-6">Address:</h6>
                            <p className="section__description mb-0">Soekarno-Hatta St No.399A, Karasak, Astanaanyar, Bandung City, West Java 40243, Indonesia Kota Bandung, Jawa Barat, 40243</p>
                        </div> 


                        <section>
                            <ScrollButton />
                        </section>
                        
                        <div className="d-flex align-items-center gap-2 mt-2">
                        <h6 className="mb-3 fs-6 ">Maps :</h6>
                        </div>


                        <div className="d-flex align-items-center gap-2">
                            <Link to="https://goo.gl/maps/cQxNDwTMXvDdwTeHA">
                            <i class="ri-map-pin-fill fs-1"></i>
                         </Link>
                        </div>  
                                            
                            <h6 className="fw-bold mt-4">Contact & Follow Us</h6>

                        <div className="d-flex align-items-center gap-4 mt-3">
                            {socialLinks.map((item, index) => (
                                <Link to={item.url} key={index}
                                className="social__link-icon">
                                <i class={item.icon}></i></Link>

                            ))}
                        </div>    
                    </div>
                  </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  );
};

export default Contact;