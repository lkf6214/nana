import React from "react";
import PropTypes from "prop-types";
import "./Rolling.css";

export default function RollingSlide({ items, textColor }) {
  return (
    <>
      <div className="flow-wrap">
        <div className={`flow-container ${textColor}`}>
          <div className="flow">
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

RollingSlide.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
