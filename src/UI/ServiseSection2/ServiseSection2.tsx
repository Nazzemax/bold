import React from "react";
import styles from "./ServiceSection2.module.scss";

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[]; // Добавили tags
}

interface ServiceSectionProps {
  sectionTitle: string;
  services: ServiceItem[];
}

const ServiceSection2: React.FC<ServiceSectionProps> = ({ sectionTitle, services }) => {
  return (
    <div className={styles.serviceSection}>
      <h2 className={styles.title}>{sectionTitle}</h2>
      <div className={styles.container}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <img src={service.imageUrl} alt={service.title} className={styles.image} />
            <div className={styles.textContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>

              {/* Добавляем условие, если есть tags */}
              {service.tags && service.tags.length > 0 && (
                <ul >
                  {service.tags.map((tag, idx) => (
                    <li key={idx} >{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection2;
