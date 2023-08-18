import React from "react";
import '../../styles/our-members.css';
import { Col } from 'reactstrap'
import { Link } from "react-router-dom";
import ava01 from '../../assets/all-images/9.jpg';
import ava02 from '../../assets/all-images/10.jpg';
import ava03 from '../../assets/all-images/11.jpg';
import ava04 from '../../assets/all-images/12.jpg';

const OUR__MEMBERS = [
    {
        name: 'Yank Motor',
        experience: '6 years of being the best customer',
        fbUrl: '#',
        insUrl: '#',
        whatUrl: '#',
        imgUrl: ava01,
    },

    {
        name: 'Manggung Diesel',
        experience: '3 years of being the best customer',
        fbUrl: '#',
        insUrl: '#',
        twiUrl: '#',
        linkedUrl: '#',
        imgUrl: ava02,
    },

    {
        name: 'An Jaya Motor',
        experience: '4 years of being the best customer',
        fbUrl: '#',
        insUrl: '#',
        twiUrl: '#',
        linkedUrl: '#',
        imgUrl: ava03,
    },

    {
        name: 'Bad Boy Motor',
        experience: '6 years of being the best customer',
        insUrl: '#',
        twiUrl: '#',
        linkedUrl: '#',
        imgUrl: ava04,
    },
];

const OurMembers = () => {
  return (
    <>
    {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
            <div className="single__member-img">
                <div className="single__member-img">
                    <img src={item.imgUrl} alt="" className="w-100"/>

                    <div className="single__member-social">
                        <Link to={item.fbUrl}><i
                         class="ri-facebook-line"></i></Link>

                        <Link to={item.fbUrl}><i
                         class="ri-whatsapp-line"></i></Link>
                        
                         <Link to={item.insUrl}><i
                         class="ri-instagram-line"></i></Link>
                    </div>
                </div>

                <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                <p className="section__description text-center">{item.experience}</p>
            </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;