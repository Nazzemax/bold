import CasesIntro from "./components/layout/cases/CasesIntro";
import CasesMeasurableResults from "./components/layout/cases/CasesMeasurableResults";
import CasesProblem from "./components/layout/cases/CasesProblem";
import CasesWhatWeHaveDone from "./components/layout/cases/CasesWhatWeHaveDone";
import Header from "./components/layout/header/Header";

export default function Home() {
  return (
    <>
      {/* <Header bgColor="black" /> */}
      <CasesIntro/>
      <CasesProblem/>
      <CasesWhatWeHaveDone/>
      <CasesMeasurableResults/>
    </>
  );
}
