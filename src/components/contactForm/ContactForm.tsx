"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import Toast from "../toast/Toast";

const ContactForm = () => {

  const serviceOptions = [
    { label: "Service type", value: "" },
    { label: "Medical Device", value: "Medical" },
    { label: "Diagnostic Kits", value: "Diagnostic" },
    { label: "Drugs", value: "Drugs" },
    { label: "Blood Banks", value: "Blood" },
    { label: "legal Metrology", value: "legal" },
    { label: "Custom Clearance", value: "Custom" },
    { label: "Sanitary Import Permit", value: "Sanitary" },

    { label: "Other", value: "other" },
  ];


  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.services ||
      !formData.message
    ) {
      setToast({
        message: "Please fill in all the fields.",
        type: "error",
      });
      return;
    }

    const serviceId = "service_erbtxhi";
    const templateId = "template_19cszhu";
    const publicKey = "mSvmlMZzxtogSgK-5";
    console.log(formData);
    if (!formRef.current) return;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setToast({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", services: "", message: "" });
      },
      (error) => {
        setToast({
          message: "Failed to send message. Try again.",
          type: "error",
        });
        console.error(error);
      }
    );
  };

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
              <a href="mailto:someone@example.com">barrocyte@gmail.com</a>
            </div>
            <div className={styles.contactRow}>
              <span className="material-icons">phone</span>
              <a href="tel:+91-7838883608">+91-7838883608</a>
            </div>
          </div>

          {/* Right Side */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.formCard}
          >
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
              name="services"
              className={styles.input}
              onChange={handleChange}
              value={formData.services}
              required
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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
            {toast && (
              <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
