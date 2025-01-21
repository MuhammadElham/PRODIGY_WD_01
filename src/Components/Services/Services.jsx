import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";
const Services = () => {
  const ServiceData = [
    {
      id: 1,
      icon: <FaCarSide />,
      title: "Free Shipping",
      description: "Free Shipping On All Order",
    },
    {
      id: 2,
      icon: <FaCheckCircle />,
      title: "Safe Money",
      description: "30 Days Money Back",
    },
    {
      id: 3,
      icon: <FaWallet />,
      title: "Secure Payment",
      description: "All Payment Secure",
    },
    {
      id: 4,
      icon: <FaHeadphonesAlt />,
      title: "Online Supoort 24/7",
      description: "Technical Support 24/7",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="grid">
          {/* One */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
