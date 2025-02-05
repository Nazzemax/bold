import React from "react";
import "../advantages/Advantages.scss";
import Image from "next/image";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantages-up">
        <div className="text">
          <span className="text-1">Bold Brands International</span>
          <span className="text-2">
            совместно создаём прочную основу и уверенное будущее для вашей
            компании
          </span>
        </div>

        <div className="circles">
          <div className="circles-1">
            <Image
              src="/circle1.svg"
              alt="circle1"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/circle2.svg"
              alt="circle2"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className="circles-2">
            <Image
              src="/circle3.svg"
              alt="circle3"
              layout="responsive"
              width={100}
              height={100}
            />
            <Image
              src="/circle4.svg"
              alt="circle4"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <Image
        className="background-img"
        src="/BackGround.svg"
        alt="BackGround"
        layout="responsive"
        width={1220}
        height={1080}
      />
    </div>
  );
};

export default Advantages;
