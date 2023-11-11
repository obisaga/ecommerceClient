import React from 'react'
import "../styles/guarantees.css"
import { NavLink } from "react-router-dom";

const Guarantees = () => {
  return (
    <div>
      <section className="guarantees">
        <section>
          <i className="pi pi-truck"></i> 
          <NavLink to="#" style={{textDecoration: 'none', color: "black"}}> <span>FREE SHIPPING ON ALL ORDERS</span> </NavLink>
        </section>
        <section>
          <i className="pi pi-globe"></i>
          <NavLink to="#" style={{textDecoration: 'none', color: "black"}}><span>WORLDWIDE DELIVERY</span></NavLink>
        </section>
        <section>
          <i className="pi pi-money-bill"></i>
          <NavLink to="#" style={{textDecoration: 'none', color: "black"}}><span>SAFE AND SECURE PAYMENTS</span></NavLink> 
        </section>
      </section>
    </div>
  );
};

export default Guarantees