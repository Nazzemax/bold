import React from "react";
import "../cases/CasesTarget.scss";
import Image from "next/image";

type CaseTags = {
  title: string;
  text: string;
};

type Case = {
  title: string;
  tags: CaseTags[];
};

const CasesTarget: React.FC = () => {
  const oneCase: Case[] = [
    {
      title: "Таргетированная реклама",
      tags: [
        {
          title: "Три филиала — один подход",
          text: "мы настроили таргетинг под каждую локацию (Ташкент, Бишкек, Алматы), учитывая специфику аудитории.",
        },
        {
          title: "День открытых дверей в Ташкенте",
          text: "локальная реклама помогла быстро привлечь целевых клиентов, что позволило эффективно заполнить мероприятие.",
        },
        {
          title: "Эффективный результат",
          text: "цена за клик (CPC) — всего $0,51, что редко встречается в узком сегменте. Таргетинг на Бишкек и Ташкент дал заметный прирост посещаемости аккаунта и вовлеченности.",
        },
      ],
    },
  ];

  return (
    <div className="casesTarget">
      <div
        className="casesTarget-title"
        style={{ textTransform: "uppercase" }}
      >
        <span>{oneCase[0].title}</span>
      </div>
      <div className="casesTarget-text">
        <ul>
          {oneCase[0].tags.map((sentence, index) => (
            <li key={index} className="casesTarget-text-li">
              <Image
                src="/casesImg/cases-target-red-point.svg"
                alt="red point"
                width={8}
                height={8}
              />
              <div>
                <p className="font-bold">{sentence.title}</p>
                <span>{sentence.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CasesTarget;
