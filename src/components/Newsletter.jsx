// import React, { useRef, useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// import Navigation from "../elements/Navigation";
// import Info from "../elements/Info";
// import Footer from "../elements/Footer";
// import "dotenv/config";

// const publicKey = import.meta.env.VITE_PUBLIC_KEY;


// export const Newsletter = () => {
//     const emailRef = useRef<HTMLInputElement | null>(null);
// const nameRef = useRef<HTMLTextAreaElement | null>(null);

//   const form = useRef();
//   const [loading, setLoading] = useState(false);


// useEffect(() => emailjs.init({publicKey}), []);
//   // Add these
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const serviceId = import.meta.env.VITE_SERVICE_ID;
//     const templateId = import.meta.env.VITE_TEMPLATE_ID;
//     try {
//       setLoading(true);
//       await emailjs.send(serviceId, templateId, {
//        name: nameRef.current.value,
//         recipient: emailRef.current.value
//       });
//       alert("email successfully sent check inbox");
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//     <Navigation />

//     <section>
//       <aside></aside>
//       <form className="for" onSubmit={handleSubmit}>
//         <div className="form_group">
//           <label htmlFor="">name</label>
//           <input ref={nameRef} placeholder="enter your name" />
//         </div>
//         <div className="form_group">
//           <label htmlFor="">email</label>
//           <input ref={emailRef} type="email" placeholder="enter your email" />
//         </div>
//         <button className="btn" disabled={loading}>
//           subscribe
//         </button>
//       </form>
//     </section>

//     <Info />
//     <Footer />
//     </>
//   );
// };


// export default Newsletter

import React from 'react'
import Navigation from '../elements/Navigation'
import Info from '../elements/Info'
import Footer from '../elements/Footer'
import "../styles/newsletter.css"

const Newsletter = () => {
  return (
    <>
     <Navigation />
    <div className='news-container'>Newsletter coming soon!</div>
    <Info />
    <Footer />
    
    </>
   
  )
}

export default Newsletter

