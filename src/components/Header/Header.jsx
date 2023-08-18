import React, {useRef}from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import driverImg from "../../assets/all-images/logo.png"
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path:"/about",
    display: "About",
  },
  {
    path:"/product",
    display: "Product",
  },
  {
    path:"/blogs",
    display: "Blog",
  },
  {
    path:"/contact",
    display: "Contact",
  },
];

const Header = () => {


const menuRef = useRef(null)

const toggleMenu = ()=> menuRef.current.classList.toggle("menu__active")


  return (
    <header className="header">
      {/*=============== header top ==============*/}
      <div className="header__top">
        <Container>
         <Row>
          <Col lg="6" md="6" sm="6">
            <div className="header__top__left">
              <span>Need Help?</span>
              <span className="header__top__help"> 
              <Link to="https://wa.me/6281318660725?text=kami dari TEXAL OIL; silahkan memesan, terima kasih">
              <i class="ri-phone-line"></i>
               </Link>081318660725
              </span>
             </div>
            </Col>
          
    {/* =================== Login & Registration ==================== */}
          <Col lg="6" md="6" sm="6">
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
             <Link to ='/oil' className=" d-flex align-items-center gap-1">
                <i class="ri-login-circle-line"></i>  </Link>

              <Link to ='/blogs' className=" d-flex align-items-center gap-1">
                <i class="ri-user-line"></i>  </Link>
            </div>
          </Col>
        </Row>
       </Container>
      </div>


      {/*================ header middle ==================*/}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="2" md="1" sm="1">
              <div className="logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-3">
              <img src={driverImg} alt="" className="w-50"/>
             
              </Link >
              </h1>  
              </div>
            </Col>

            <Col lg='3' md='2' sm='2'>
              <div className="header__location d-flex align-items-center gap-2">
              <Link to='https://goo.gl/maps/cQxNDwTMXvDdwTeHA'>
              <span><i class="ri-map-pin-line"></i></span>
              </Link>
              <div className="header__location-content">
                <h4>Bandung</h4>
                <h6>Indonesia </h6>
                </div>
               </div>
              </Col>

              
            <Col lg='4' md='4'>
              <div className="header__location d-flex align-items-center gap-2">
              <span><i class="ri-time-line"></i></span>
              <div className="header__location-content">
                <h4>Monday to Saturday</h4>
                <h6>08.00.am - 17.00.pm</h6>
                </div>
               </div>          
              </Col>

              <Col lg='4' md='6'>
              <Link to='https://wa.me/6281318660725?text=kami dari TEXAL OIL; silahkan memesan, terima kasih'>
              <div className="wa__btn">
              <span> <i class="ri-whatsapp-line"></i></span>
              </div>
              </Link>           
              </Col>
                
              <Col lg='6' md='6'>
              <Link to='https://goo.gl/maps/cQxNDwTMXvDdwTeHA'> 
              <div className="maps__btn">
                <span><i class="ri-map-pin-line"></i></span>
              </div>
              </Link>       
            </Col>
              
          </Row>
        </Container>
      </div> 


      {/*================ main navigation ================== */}
          <div className="main__navbar">
            <Container>
              <div className="navigation__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                    {navLinks.map((item,index) => (
                      <NavLink to={item.path} className={(navClass) =>
                        navClass.isActive ? "nav__active nav__item" :
                        "nav__item"
                      } 
                      key={index} 
                      >
                        {item.display}
                        </NavLink>
                      ))}
                </div>
              </div>
                        

              <div className="nav__right className header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/product">  
                 <span><i class="ri-search-line"></i></span>
                  </Link>
                </div>

              </div>
          </Container>
        </div>
      </header>
  );
};

export default Header;