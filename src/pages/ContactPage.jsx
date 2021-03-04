import emailjs from 'emailjs-com';
import React from 'react';
import './ContactPage.css';
import { withRouter } from "react-router-dom";
import{ init } from 'emailjs-com';
init("user_tQoWWeWR0n6d9HsA1Yuuc");



export default function ContactPage() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_y65hkza', 'template_19jc9tl', e.target, 'user_tQoWWeWR0n6d9HsA1Yuuc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className="submitButton"/>
    </form>
  );
}