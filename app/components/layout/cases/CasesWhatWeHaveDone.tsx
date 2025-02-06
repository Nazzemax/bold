import React from "react";
import "../cases/CasesWhatWeHaveDone.scss";
import img1 from "../../../../public/casesImg/cases-1-img-1.svg";
import img2 from "../../../../public/casesImg/cases-1-img-2.svg";
import img3 from "../../../../public/casesImg/cases-1-img-3.svg";
import img4 from "../../../../public/casesImg/cases-1-img-4.svg";
import Image from "next/image";

type BlockItem = {
  image: string[]; // Массив картинок
  "title-block"?: string; // Опциональный заголовок блока
  text: string;
};

type Case = {
  blockItem: BlockItem[]; 
};

//этот компонент надо переделывать когда будет готов бэкэнд
const CasesWhatWeHaveDone: React.FC = () => {
  const oneCase: Case[] = [
    {
      blockItem: [
        {
          image: [img1, img2],
          text: "Мы начали реализацию с проработки концепции ведения и контент-стратегии. Разработали уникальный стиль, провели фуд и интерьерную съемку.",
        },
        {
          image: [img3, img4],
          text: "Набрали полностью органически 1,2 млн просмотров на одном видео",
        },

        // {
        //   image: [img4],
        //   "title-block": "Обучающие видеоуроки «под ключ»",
        //   text: "Ввели новый формат сторис с ассортиментом магазина и скидками",
        // },
      ],
    },
  ];

  return (
    <div className="casesWhatWeHaveDone">
      <div
        className="casesWhatWeHaveDone-title"
        style={{ textTransform: "uppercase" }}
      >
        <span>что мы сделали?</span>
      </div>

      <div className="casesWhatWeHaveDone-text">
        {oneCase[0].blockItem.map((block, index) => (
          <div key={index} className="block-item">
            <div className="block-item-images">
              {block.image.map((img, i) => (
                <Image key={i} src={img} alt={`block-img-${i}`} />
              ))}
            </div>

            {block["title-block"] && (
              <div className="block-item-title font-bold text-black">
                <h3>{block["title-block"]}</h3>
              </div>
            )}

            <p>
              {block.text.split(".").map(
                (sentence, index) =>
                  sentence.trim() && (
                    <React.Fragment key={index}>
                      <span>{sentence.trim()}.</span>
                      <br />
                    </React.Fragment>
                  )
              )}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CasesWhatWeHaveDone;