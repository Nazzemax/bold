import React from "react";
import "../cases/CasesProblem.scss"

type Case = {
  title: string;
  text: string;
};

const CasesProblem: React.FC = () => {
  const oneCase: Case[] = [
    {
      title: "Задача клиента",
      text: "Основной задачей стояло привлечение клиентов в кафе и продвижение определенной линейки продукции: фирменные напитки, продукты правильного питания. Кафе обладало определенной уникальностью — его основали переселенцы из Южной Кореи и привезли с собой авторское меню. Основательница, переболела раком. Болезнь вдохновила ее разработать эксклюзивную линейку ПП-блюд, где каждый ингредиент благотворно влияет на организм. Мы разработали концепцию продвижения так, чтобы зацепить нашу целевую аудиторию.",
    },
  ];

  return (
    <div className="casesProblem">
      <div
        className="casesProblem-title"
        style={{ textTransform: "uppercase" }}
      >
        <span>{oneCase[0].title}</span>
      </div>
      <div className="casesProblem-text">
        {oneCase[0].text.split(".").map(
          (sentence, index) =>
            sentence.trim() && (
              <React.Fragment key={index}>
                <span>{sentence.trim()}.</span>
                <br /> <br />
              </React.Fragment>
            )
        )}
      </div>
    </div>
  );
};

export default CasesProblem;
