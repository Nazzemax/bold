import React from "react";
import "../cases/CasesMeasurableResults.scss";

type Stat = { redText: string; grayText: string };

type Case = {
  title: string;
  stats: Stat[];
};

const CasesMeasurableResults: React.FC = () => {
  const oneCase: Case[] = [
    {
      title: "Измеримые результаты",
      stats: [
        {
          redText: "с 109 до 10K",
          grayText:
            "Увеличение роста лояльных подписчиков  и целевых пользователей.",
        },
        {
          redText: "1 млн",
          grayText: "за 8 месяцев - охват аудитории",
        },
        {
          redText: "1,2 млн",
          grayText: "набрали органически  просмотров на одном видео (фото 3.4)",
        },
        {
          redText: "100+",
          grayText: "Ежедневно приходят  новых подписчиков.",
        },
        {
          redText: "25-50",
          grayText: "Среднее количество поступающих заявок в месяц",
        },
      ],
    },
  ];

  return (
    <div className="casesMeasurableResults">
      {/* <div> */}
        <h5 style={{ textTransform: "uppercase", color: "#838895" }}>
          {oneCase[0].title}
        </h5>
        <ul>
          {oneCase[0].stats.map((stat, index) => (
            <li key={index}>
              <span
                style={{
                  color: "#FF2B44",
                  fontWeight: "700",
                  fontSize: "30px",
                  lineHeight: "1",
                }}
              >
                {stat.redText}
              </span>
              <p style={{ color: "#838895" }}>{stat.grayText}</p>
            </li>
          ))}
        </ul>
      {/* </div> */}
    </div>
  );
};

export default CasesMeasurableResults;
