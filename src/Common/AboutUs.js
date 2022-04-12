import React from "react";
import Navbar2 from "../Components/C_navbar";

const About = () => {
  return (
    <div>
      <Navbar2 />
      <h1 className="text-danger">Welcome to Foodies...</h1>
      <h1 className="text-info">Better food for more people...</h1>
      <div className="container text-left text-white" >
        <h3>Who are we?</h3>
        <p>Launched in 2021, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire custom.</p>
        <p>Getting food delivered at home is always a great idea. But the whole episode of scrolling endlessly, scanning restaurant ratings, hunting for coupon codes...now that’s not fun at all. So, here’s the smarter way out with Eatclub!</p>
        <p>A membership program that takes you straight to a no-nonsense, curated selection of restaurants. Get unlimited savings with 30% OFF every time on all restaurants and NO extra charges on delivery, packaging or surge.</p>
       <h4>Thank you for your kind Support....</h4>
      
      </div>
    </div>
  );
};
export default About;
