"use client";
import React, { ChangeEvent, useState, useEffect, useCallback } from "react";
import styles from "./CasesFilter.module.scss";
import Image from "next/image";
import iconBlog from "@/public/caseItem.png";
import insta from "@/public/image/social.png";
import tiktok from "@/public/image/tiktok.png";
import search from "@/public/image/Vector.png";
import { truncateText } from "@/app/utils/truncateText";
import { debounce } from "lodash";
import badge from "@/public/image/Badges.svg";
import Link from "next/link";

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else {
      mediaQuery.addListener(handler);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  return isMobile;
}

const categories = [
  { id: 1, name: "SMM", active: true },
  { id: 2, name: "Таргет", active: false },
  { id: 3, name: "Маркетинг", active: false },
];

const cases = [
  {
    title:
      "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [{ SMM: badge }, { Маркетинг: badge }, { Таргет: badge }],
    image: iconBlog,
  },
  {
    title: "Привлекли клиентов на сумму 130 000 $ в агентство недви",
    category: "Консульт недвижимость",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [{ Маркетинг: badge }],
    image: iconBlog,
  },
  {
    title:
      "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [{ Таргет: badge }],
    image: iconBlog,
  },
  {
    title: "Привлекли клиентов на сумму 130 000 $ в агентство недвиж",
    category: "Консульт недвижимость",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [{ SMM: badge }, { Маркетинг: badge }],
    image: iconBlog,
  },
  {
    title:
      "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [{ SMM: badge }, { Маркетинг: badge }],
    image: iconBlog,
  },
  {
    title:
      "Увеличили выручку корейского ресторана на 70% уже во 2-й месяц работы",
    category: "Корейский ресторан",
    date: "15 Дек. 2023",
    stats: { subscribers: "+10,5К подписчиков", views: "1,5 млн просмотров" },
    tags: [{ SMM: badge }, { Маркетинг: badge }],
    image: iconBlog,
  },
  {
    title: "Привлекли клиентов на сумму 500 000 $ для бизнеса..",
    category: "Крупный бизнес",
    date: "20 Янв. 2024",
    stats: { subscribers: "+15К подписчиков", views: "2 млн просмотров" },
    tags: [{ SMM: badge }, { Маркетинг: badge }],
    image: iconBlog,
  },
  {
    title: "Повысили продажи интернет-магазина на 30%",
    category: "E-commerce",
    date: "18 Янв. 2024",
    stats: { subscribers: "+8К подписчиков", views: "1,2 млн просмотров" },
    tags: [{ SMM: badge }, { Маркетинг: badge }],
    image: iconBlog,
  },
];

export const CasesFilter: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();
  // Устанавливаем количество карточек на странице
  const itemsPerPage = isMobile ? 3 : 6;

  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setDebouncedSearchQuery(query);
    }, 500),
    []
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  const filteredCases = cases.filter((caseItem) => {
    const matchesTag =
      selectedTag === ""
        ? true
        : caseItem.tags.some((tagObj) =>
            Object.keys(tagObj).includes(selectedTag)
          );
    const matchesSearch =
      debouncedSearchQuery === "" ||
      caseItem.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const totalPages = Math.ceil(filteredCases.length / itemsPerPage);
  const shouldShowPagination = totalPages > 1;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const displayedCases = filteredCases.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTagClick = (tagName: string) => {
    if (selectedTag === tagName) {
      setSelectedTag("");
    } else {
      setSelectedTag(tagName);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.conteiner}>
        <h1 className={styles.title}>Кейсы</h1>
        <div className={styles.filters}>
          <div className={styles.filterButtons}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={styles.filterButton}
                onClick={() => handleTagClick(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className={styles.searchWrapper}>
            <form>
              <input
                type="text"
                placeholder="Найти кейс"
                className={styles.searchInput}
                onChange={handleSearchChange}
                value={searchQuery}
              />
              <Image src={search} alt="" className={styles.searchImage} />
            </form>
          </div>
        </div>
        <div className={styles.casesGrid}>
          {displayedCases.map((item, index) => (
            <div className={styles.caseCard} key={index}>
              <div className={styles.tags}>
                {item.tags.map((tag, idx) => (
                  <div key={idx} className={styles.tagWrapper}>
                    <span className={styles.tagIcon}>
                      <Image
                        alt="badge img"
                        height={24}
                        width={24}
                        priority
                        src={Object.values(tag)[0]}
                      />
                    </span>
                    <span className={styles.tag} key={idx}>
                      {Object.keys(tag)}
                    </span>
                  </div>
                ))}
              </div>
              <Image
                src={item.image}
                alt={item.title}
                className={styles.caseImage}
              />
              <div className={styles.caseBlog}>
                <div className={styles.caseStats}>
                  <span>
                    <Image src={insta} alt="Instagram" />{" "}
                    {truncateText(item.stats.subscribers, isMobile ? 11 : 14)}
                  </span>
                  <span>
                    <Image src={tiktok} alt="TikTok" />{" "}
                    {truncateText(item.stats.views, isMobile ? 12 : 15)}
                  </span>
                </div>
                <div className={styles.caseContent}>
                  <Link href={"/cases/1"}>
                    <h3 className={styles.caseTitle}>
                      {truncateText(item.title, isMobile ? 41 : 44)}
                    </h3>
                  </Link>
                  <div className={styles.caseDetails}>
                    <span>{item.category}</span>
                    <span className={styles.block}></span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <span className={styles.text}>Total: {cases.length} cases</span>
          {shouldShowPagination && (
            <div className={styles.pagination}>
              <button
                className={styles.paginationButton}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                &#8249;
              </button>
              <span>
                {String(currentPage).padStart(2, "0")} /{" "}
                {String(totalPages).padStart(2, "0")}
              </span>
              <button
                className={styles.paginationButton}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                &#8250;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
