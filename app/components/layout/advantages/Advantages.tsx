import React from "react";
import "../advantages/Advantages.scss";
import Image from "next/image";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantages-up">
        <div className="advantages-text">
          <span className="advantages-text-1">Bold Brands International</span>
          <span className="advantages-text-2">
            совместно создаём прочную основу и уверенное будущее для вашей
            компании
          </span>
        </div>

        <div className="advantages-circles">
          <div className="advantages-circles-1">
            <Image
              src="/advantages/circle1.svg"
              alt="circle1"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/advantages/circle2.svg"
              alt="circle2"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className="advantages-circles-2">
            <Image
              src="/advantages/circle3.svg"
              alt="circle3"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/advantages/circle4.svg"
              alt="circle4"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <Image
        className="advantages-background-img"
        src="/advantages/BackGround.svg"
        alt="BackGround"
        layout="responsive"
        width={1220}
        height={1080}
      />
    </div>
  );
};

export default Advantages;
