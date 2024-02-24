// PricingPlan.js
import React from 'react';

const PricingPlan = ({ name, price, features }) => {
  return (
    <div className="pricing-plan">
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn">Subscribe</button>
    </div>
  );
};

export default PricingPlan;
