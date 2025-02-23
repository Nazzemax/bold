import { SecondBanner } from "@/widgets/secondBanner/SecondBanner";
import React from "react";
import bgImg from "@/public/banner/img-1.jpg";
import Cases from "@/widgets/Cases/Cases";

type Props = {};

const CasesPage: React.FC<Props> = ({}) => {
  return (
    <div>
      <SecondBanner
        bgImg={bgImg}
        title={"Наша миссия воплощать идеи в жизнь"}
      />

      <Cases />
    </div>
  );
};

export default CasesPage;
