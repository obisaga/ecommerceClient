import React from 'react'
import "../styles/guarantees.css"

const Guarantees = () => {
  return (
    <div>
      <section className="guarantees">
        <section>
          <i className="pi pi-truck"></i>
          <span>FREE SHIPPING ON ALL ORDERS</span>
        </section>
        <section>
          <i className="pi pi-globe"></i>
          <span>WORLDWIDE DELIVERY</span>
        </section>
        <section>
          <i className="pi pi-money-bill"></i>
          <span>SAFE AND SECURE PAYMENTS</span>
        </section>
      </section>
    </div>
  );
};

export default Guarantees