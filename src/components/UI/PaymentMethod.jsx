import React from "react";
import '../../styles/payment-method.css';
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  return (
    <>
    { /* =================== block payment 
    <img src={masterCard} alt=""/>
    <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2 mt-4">
            <input type="radio" /> Direct Bank Transfer
        </label>
    </div>
   
    <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
            <input type="radio" /> Master Card
        </label>

        
    </div>
============= */}
     
    <div className="payment text-end mt-5">
    
        <Link to ="https://wa.me/6281318660725?text=kami dari Texal Oil, silahkan memesan, terima kasih">
        <button>Buy Now </button>
        </Link>
    </div>
   
    
    </>
  );
};

export default PaymentMethod;