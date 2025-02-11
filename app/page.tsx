import Advantages from "./components/layout/advantages/Advantages";
import CasesSlider from "./components/layout/cases-slider/CasesSlider";
import Form from "./components/layout/form/Form";

export default function Home() {
  return (
    <>
      <CasesSlider />
      <Form />
      <Advantages />
    </>
  );
}
