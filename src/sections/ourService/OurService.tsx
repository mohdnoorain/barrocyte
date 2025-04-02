"use client";
import React, { useEffect } from "react";
import "./OurService.css";
import Link from "next/link";

const servicesData = [
  {
    title: "Salesforce Cloud",
    details:
      "Leverage the capabilities of our tailored Salesforce clouds to improve collaboration, streamline workflows, enhance productivity, and drive success. All our Salesforce solutions will help authorities make better decisions.",
    icon: "https://nsiqinfotech.com/wp-content/uploads/2024/07/salesforce-cloud.png",
    cardPointsIcon: "medical_services",
    cardPoints: [
      "Web Services",
      "Cloud Integration",
      "Data Security",
      "API Management",
      "Automation Tools",
    ],
    url: "/salesforce-cloud", // Added URL field
  },
  {
    title: "Salesforce Cloud",
    details:
      "Leverage the capabilities of our tailored Salesforce clouds to improve collaboration, streamline workflows, enhance productivity, and drive success. All our Salesforce solutions will help authorities make better decisions.",
    icon: "https://nsiqinfotech.com/wp-content/uploads/2024/07/salesforce-cloud.png",
    cardPointsIcon: "medical_services",
    cardPoints: [
      "Web Services",
      "Cloud Integration",
      "Data Security",
      "API Management",
      "Automation Tools",
    ],
    url: "/salesforce-cloud", // Added URL field
  },
  {
    title: "Salesforce Cloud",
    details:
      "Leverage the capabilities of our tailored Salesforce clouds to improve collaboration, streamline workflows, enhance productivity, and drive success. All our Salesforce solutions will help authorities make better decisions.",
    icon: "https://nsiqinfotech.com/wp-content/uploads/2024/07/salesforce-cloud.png",
    cardPointsIcon: "medical_services",
    cardPoints: [
      "Web Services",
      "Cloud Integration",
      "Data Security",
      "API Management",
      "Automation Tools",
    ],
    url: "/salesforce-cloud", // Added URL field
  },
  {
    title: "Salesforce Cloud",
    details:
      "Leverage the capabilities of our tailored Salesforce clouds to improve collaboration, streamline workflows, enhance productivity, and drive success. All our Salesforce solutions will help authorities make better decisions.",
    icon: "https://nsiqinfotech.com/wp-content/uploads/2024/07/salesforce-cloud.png",
    cardPointsIcon: "medical_services",
    cardPoints: [
      "Web Services",
      "Cloud Integration",
      "Data Security",
      "API Management",
      "Automation Tools",
    ],
    url: "/salesforce-cloud", // Added URL field
  },
  {
    title: "Salesforce Cloud",
    details:
      "Leverage the capabilities of our tailored Salesforce clouds to improve collaboration, streamline workflows, enhance productivity, and drive success. All our Salesforce solutions will help authorities make better decisions.",
    icon: "https://nsiqinfotech.com/wp-content/uploads/2024/07/salesforce-cloud.png",
    cardPointsIcon: "medical_services",
    cardPoints: [
      "Web Services",
      "Cloud Integration",
      "Data Security",
      "API Management",
      "Automation Tools",
    ],
    url: "/salesforce-cloud", // Added URL field
  },
  {
    title: "Salesforce Cloud",
    details:
      "Leverage the capabilities of our tailored Salesforce clouds to improve collaboration, streamline workflows, enhance productivity, and drive success. All our Salesforce solutions will help authorities make better decisions.",
    icon: "https://nsiqinfotech.com/wp-content/uploads/2024/07/salesforce-cloud.png",
    cardPointsIcon: "medical_services",
    cardPoints: [
      "Web Services",
      "Cloud Integration",
      "Data Security",
      "API Management",
      "Automation Tools",
    ],
    url: "/salesforce-cloud", // Added URL field
  },
  
  // Add more services as needed
];

export default function OurService() {
  useEffect(() => {
    const section = document.querySelector(".ourSection");

    if (!section) return; // Prevent errors if the element is not found

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section>
      <div className="ourSection">
        <div className="container">
          <div className="ourSectionTitle">Our Services</div>
          <div className="ourSectionCard">
            {servicesData.map((service, index) => (
              <div className="cardContainer" key={index}>
                <div className="innerCardContainer">
                  <div className="iconContainer">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h3 className="cardTitle">{service.title}</h3>
                  <div className="cardDetails">{service.details}</div>
                  <ul className="cardPoints">
                    {service.cardPoints.map((point, idx) => (
                      <li key={idx}>
                        <span className="material-icons cardPointsIcon">
                          {service.cardPointsIcon}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.url} className="readMore">
                    Read more
                    <span className="material-icons readmoreIcon">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
