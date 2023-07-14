import React from "react";
import PropTypes from "prop-types";
import "./Rolling.css";

export default function RollingSlide({ items }) {
  return (
    <>
      <div className="flow-container">
        <div className="flow">
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}

RollingSlide.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
