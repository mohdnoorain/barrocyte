"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent | any) => {
    e.preventDefault();
    console.log(formData, e);
    // Add email/API integration here
  };

  const handleNSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY || "",
        process.env.NEXT_PUBLIC_TEMPLATE_KEY || "",
        e.target,
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || "", }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  }
  console.log(process.env.NEXT_PUBLIC_NAME);
  return (
    <div className="container">
      <div className={styles.outerWrapper}>
        <div className={styles.innerContainer}>
          {/* Left Side */}
          <div className={styles.left}>
            <p className={styles.subText}>WE'RE HERE TO HELP YOU</p>
            <h1 className={styles.mainHeading}>
              Discuss Your <br />
              Regulatory Services
              <br /> Needs
            </h1>
            <p className={styles.description}>
              Are you looking for top-quality chemical solutions tailored to
              your needs? Reach out to us.
            </p>
            <div className={styles.contactRow}>
              <span className="material-icons">email</span>
              <a href="mailto:someone@example.com">info@barr.com</a>
            </div>
            <div className={styles.contactRow}>
              <span className="material-icons">phone</span>
              <a href="tel:+91-9266665237">+91-9266665237</a>
            </div>
          </div>

          {/* Right Side */}
          <form onSubmit={handleSubmit} className={styles.formCard}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className={styles.input}
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className={styles.input}
              onChange={handleChange}
              value={formData.email}
              required
            />
            <select
              name="industry"
              className={styles.input}
              onChange={handleChange}
              value={formData.industry}
              required
            >
              <option value="">Select...</option>
              <option value="pharma">Pharmaceutical</option>
              <option value="agri">Agriculture</option>
              <option value="food">Food</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Type your message"
              className={styles.textarea}
              rows={4}
              onChange={handleChange}
              value={formData.message}
            />
            <button type="submit" className={styles.submitButton}>
              <span className="material-icons">arrow_forward</span>
              Get a Solution
            </button>
          </form>

          <form id="form" onSubmit={handleNSubmit}>
            <div className="field">
              <label htmlFor="to_name">to_name</label>
              <input type="text" name="to_name" id="to_name" />
            </div>
            <div className="field">
              <label htmlFor="from_name">from_name</label>
              <input type="text" name="from_name" id="from_name" />
            </div>
            <div className="field">
              <label htmlFor="message">message</label>
              <input type="text" name="message" id="message" />
            </div>
            <div className="field">
              <label htmlFor="reply_to">reply_to</label>
              <input type="text" name="reply_to" id="reply_to" />
            </div>
            <input type="submit" id="button" value="Send Email" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
