"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../cases/CasesIntro.scss";
import BreadcrumbCases from "../../ui/breadcrumbCases/BreadcrumbCases";
import smm from "../../../../public/casesImg/cases-smm.svg";
import target from "../../../../public/casesImg/cases-target.svg";
import marketing from "../../../../public/casesImg/cases-marketing.svg";
import img1 from "../../../../public/casesImg/cases-1-img.svg";

type Tag = {
  title?: string;
  image?: string;
};

type Case = {
  title?: string;
  date?: string;
  organization?: string;
  image?: {
    src?: string;
  };
  tags?: Tag[];
};

const CasesIntro: React.FC = () => {
  const oneCase: Case[] = [
    {
      title:
        "Увеличили выручку корейского ресторана на 70% на 2-й месяц работы",
      date: "15 Дек. 2023г",
      organization: "Корейский ресторан",
      image: img1,
      tags: [
        { title: "SMM", image: smm },
        { title: "Таргет", image: target },
        { title: "Маркетинг", image: marketing },
      ],
    },
  ];

  const caseData = oneCase[0] || {}; // Защита от отсутствия данных
  const [backgroundImage, setBackgroundImage] = useState<string | null>(
    caseData.image?.src || null
  );

  return (
    <div className="casesIntro-main">

      <div className="casesIntro">
        <div className="casesIntro-left">
        <BreadcrumbCases />
          <div className="casesIntro-left-up">
            <p>{caseData.organization || ""}</p>
            {caseData.date && (
              <>
                <Image
                  src="/casesImg/casesPoint.svg"
                  alt="cases Point"
                  width={4}
                  height={4}
                />
                <p>{caseData.date}</p>
              </>
            )}
          </div>
          <div>
            <h2>{caseData.title || ""}</h2>
          </div>
        </div>

        <div
          className="casesIntro-right"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : "none",
            border: "none",
            borderRadius: "17px",
          }}
        >
          <div className="casesIntro-right-tags-container">
            {caseData.tags && caseData.tags.length > 0
              ? caseData.tags.map((tag, index) => (
                  <div key={index} className="casesIntro-right-tag">
                    {tag.image && (
                      <Image
                        src={tag.image}
                        alt={tag.title || "Тег"}
                        width={16}
                        height={16}
                      />
                    )}
                    <span>{tag.title || "Тег"}</span>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesIntro;
