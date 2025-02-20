import React, { useState } from "react";

function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const servicesData = [
    {
      title: "Web Design",
      icon: "fa-solid fa-code",
      shortDescription:
        "I create visually appealing and user-friendly websites tailored to your brand.",
      longDescription:
        "I specialize in custom UI/UX designs that capture your brand's identity. My designs prioritize responsive layouts, accessibility, and seamless user interaction across all devices. Whether it's a portfolio, business site, or e-commerce platform, I ensure an intuitive and visually stunning experience.",
    },
    {
      title: "Web Development",
      icon: "fa-solid fa-database",
      shortDescription:
        "I develop custom web solutions that meet your specific needs and business goals.",
      longDescription:
        "From front-end development using React.js and Next.js to backend development with Node.js, Express, and databases like MongoDB and PostgreSQL, I build scalable and high-performing web applications. I ensure security, optimization, and smooth user experiences.",
    },
    {
      title: "AI Topics",
      icon: "fa-brands fa-python",
      shortDescription:
        "I explore AI advancements, machine learning, and deep learning applications.",
      longDescription:
        "I provide insights into Artificial Intelligence, including natural language processing (NLP), computer vision, and predictive analytics. Learn how AI is transforming industries and explore real-world applications with hands-on guidance and projects.",
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="services-box" key={index}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.shortDescription}</p>
            {expandedIndex === index && (
              <p className="extra-content">{service.longDescription}</p>
            )}
            <button className="btn" onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
