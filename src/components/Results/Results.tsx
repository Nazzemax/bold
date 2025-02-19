import React from "react";
import styles from "./Results.module.scss";

const resultsData = [
  { id: "01", text: "Сформированный отдел маркетинга, работающий как слаженный механизм." },
  { id: "02", text: "Чёткая политика продвижения и финансовая модель, позволяющая прогнозировать расходы и доходы." },
  { id: "03", text: "Подготовленный маркетолог, знающий все тонкости продвижения именно вашего продукта или услуги." },
  { id: "04", text: "Постоянный рост ключевых показателей: заявок, продаж, лояльности клиентов." },
];

const Results: React.FC = () => {
  return (
    <section className={styles.resultsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Результат</h2>
        <div className={styles.grid}>
          {resultsData.map((result, index) => (
            <div key={index} className={styles.resultItem}>
              <span className={styles.number}>{result.id}</span>
              <p className={styles.text}>{result.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
