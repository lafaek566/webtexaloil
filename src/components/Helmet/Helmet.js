import React from "react";

const Helmet = (props) => {
    document.title = "Bangkit-Trade.co"; 
  return <div className="w-100">{props.children}</div>;
};

export default Helmet; 