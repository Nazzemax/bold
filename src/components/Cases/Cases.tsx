"use client"
import React, { useState } from 'react';
import styles from './Cases.module.scss';
import Image from 'next/image';
import iconBlog from '@/public/image/Frame_41.png';
import insta from '@/public/image/social.png';
import tiktok from '@/public/image/tiktok.png';
import search from '@/public/image/Vector.png';

const cases = [
  {
    title: "Увеличили выручку корейского ресторана на 70..",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [],
    image: iconBlog,
  },
  {
    title: "Привлекли клиентов на сумму 130 000 $ в агентство недви",
    category: "Консульт недвижимость",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [],
    image: iconBlog,
  },
  {
    title: "Увеличили выручку корейского ресторана на 70..",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [],
    image: iconBlog,
  },
  {
    title: "Привлекли клиентов на сумму 130 000 $ в агентство недвиж",
    category: "Консульт недвижимость",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [],
    image: iconBlog,
  },
  {
    title: "Увеличили выручку корейского ресторана на 70..",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [],
    image: iconBlog,
  },
  {
    title: "Увеличили выручку корейского ресторана на 70..",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [],
    image: iconBlog,
  },
  {
    title: "Привлекли клиентов на сумму 500 000 $ для бизнеса..",
    category: "Крупный бизнес",
    date: "20 Янв. 2024",
    stats: { subscribers: "+15К подписчиков", views: "2 млн просмотров" },
    tags: [],
    image: iconBlog,
  },
  {
    title: "Повысили продажи интернет-магазина на 30%",
    category: "E-commerce",
    date: "18 Янв. 2024",
    stats: { subscribers: "+8К подписчиков", views: "1,2 млн просмотров" },
    tags: [],
    image: iconBlog,
  },
];

function Cases() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Устанавливаем количество карточек на странице
  const totalPages = Math.ceil(cases.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const displayedCases = cases.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.pageWrapper}>
        
      <div className={styles.conteiner}>
      <h1 className={styles.title}>Кейсы</h1>
      <div className={styles.filters}>
        <div className={styles.filterButtons}>
          <button className={styles.filterButton}>SMM</button>
          <button className={styles.filterButton}>Таргет</button>
          <button className={styles.filterButton}>Маркетинг</button>
        </div>
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Найти кейс" className={styles.searchInput} />
          <Image src={search} alt="" className={styles.searchImage} />
        </div>
      </div>
      <div className={styles.casesGrid}>
        {displayedCases.map((item, index) => (
          <div className={styles.caseCard} key={index}>
            <div className={styles.tags}>
              {item.tags.map((tag, idx) => (
                <span className={styles.tag} key={idx}>
                  {tag}
                </span>
              ))}
            </div>
            <Image src={item.image} alt={item.title} className={styles.caseImage} />
            <div className={styles.caseBlog}>
              <div className={styles.caseStats}>
                <span>
                  <Image src={insta} alt="Instagram" /> {item.stats.subscribers}
                </span>
                <span>
                  <Image src={tiktok} alt="TikTok" /> {item.stats.views}
                </span>
              </div>
              <div className={styles.caseContent}>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                <div className={styles.caseDetails}>
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &#8249;
        </button>
        <span>
          {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
        </span>
        <button
          className={styles.paginationButton}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          &#8250;
        </button>
      </div>
      </div>
    </div>
  );
}

export default Cases;
