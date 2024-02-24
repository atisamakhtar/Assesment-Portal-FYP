// PricingPage.js
import React from 'react';
import PricingPlan from './PricingPlan';
import './pricing.css';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$9.99/month',
      features: ['Access to basic courses', 'Limited quizzes'],
    },
    {
      name: 'Standard Plan',
      price: '$19.99/month',
      features: ['Access to standard courses', 'Unlimited quizzes', 'Homework assignments'],
    },
    {
      name: 'Premium Plan',
      price: '$29.99/month',
      features: ['Access to premium courses', 'Unlimited quizzes', 'Homework assignments', 'Personalized tutor support'],
    },
  ];

  return (
    <div>
      <h1 className='tittle_pricing'>Pricing Plans</h1>
      <div className="pricing-plans">
        {plans.map((plan, index) => (
          <PricingPlan key={index} name={plan.name} price={plan.price} features={plan.features} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
