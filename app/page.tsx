import Challenges from "./components/challenges/Challenges";
import Header from "./components/layout/header/Header";
import Partners from "./components/partners/Partners";

export default function Home() {
  return (
    <>
      <Header bgColor="black" />
      <Challenges />
      <Partners/>
    </>
  );
}
