import React from "react";
import styles from "./ServiceSection3.module.scss";

interface ServiceItem {
  title: string;
  highlightText?: string; // Красный текст
  description: string;
  imageUrl: string;
}

interface ServiceSectionProps {
  sectionTitle: string;
  sectionDescription?: string;
  services: ServiceItem[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ sectionTitle, sectionDescription, services }) => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.BlogTitle}>
        <h2 className={styles.title}>{sectionTitle}</h2>
        {sectionDescription && <p className={styles.sectionDescription}>{sectionDescription}</p>}
        </div>
        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <img src={service.imageUrl} alt={service.title} className={styles.image} />
              <div className={styles.textContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                {service.highlightText && <p className={styles.highlightText}>{service.highlightText}</p>}
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
