import React from "react";
import styles from "./StepCard.module.scss";
import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
  number: string;
  icon: string;
}

interface StepsSectionProps {
  title: string;
  steps: Step[];
  buttonText?: string;
}

const StepsSection: React.FC<StepsSectionProps> = ({ title, steps, buttonText }) => {
  return (
    <section className={styles.howWeWork}>
      <div className={styles.container}>
        <div className={styles.titleBlog}>
          <h2 className={styles.heading}>{title}</h2>
          {buttonText && (
            <button className={styles.button}>
              {buttonText}
              <span className={styles.arrow}>→</span>
            </button>
          )}
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.icon_blog}>
                <Image src={step.icon} alt={step.title} className={styles.icon} />
              </div>
              <div className={styles.textContent}>
                <p className={styles.stepNumber}>{step.number}</p>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
