import React from "react";
import { Link, Outlet } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <nav>
        <Link to="email">Email</Link> | <Link to="message">Message</Link> | <Link to="phone">Phone</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default ContactUs;