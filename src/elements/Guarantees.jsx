import React from 'react'
import "../styles/guarantees.css"
import { Link } from "react-router-dom";

const Guarantees = () => {
  return (
    <div>
      <section className="guarantees">
        <section>
          <i className="pi pi-truck"></i> 
          <Link to="#" style={{textDecoration: 'none', color: "black"}}> <span>FREE SHIPPING ON ALL ORDERS</span> </Link>
        </section>
        <section>
          <i className="pi pi-globe"></i>
          <Link to="#" style={{textDecoration: 'none', color: "black"}}><span>WORLDWIDE DELIVERY</span></Link>
        </section>
        <section>
          <i className="pi pi-money-bill"></i>
          <Link to="#" style={{textDecoration: 'none', color: "black"}}><span>SAFE AND SECURE PAYMENTS</span></Link> 
        </section>
      </section>
    </div>
  );
};

export default Guarantees