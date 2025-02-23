import ServiceSection from "@/src/UI/ServiceSection/ServiceSection";
import { servicesData1 } from "@/src/data/servicesData";
import StepCard from "@/src/UI/StepCard/StepCard";
import { crmBenefits2 } from "@/src/data/stepsData";
import { ExamplePage2 } from "@/src/UI/ExamplePage/ExamplePage";
import Results from "@/src/components/Results/Results";

export default function CMS() {
  return (
    <div>
      <ExamplePage2 />
      <ServiceSection {...servicesData1} />;
      <StepCard
        title="Почему выбирают Bold Brands?"
        steps={crmBenefits2}
        buttonText="Получить консультацию"
      />
      <Results />
    </div>
  );
}
