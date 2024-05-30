import "./Home.css";
import { Intro } from "./components-home/Intro/Intro";
import { History } from "./components-home/History/History";
import { Products } from "./components-home/Products/Products";
import { SpecialCake } from "./components-home/SpecialCake/Special";
import { Services } from "./components-home/Services/services";
import { Other } from "./components-home/OtherProducts/Other";
import { Depoiments } from "./components-home/Depoiments/Depoiments";
import { Siga } from "./components-home/Siga/Siga";
import { Menu } from "../Menu/Menu";
import { MenuClick } from "../Menu/MenuClick";
import { End } from "../End/End";

export function Home() {
  return (
    <main className="main">
      <Menu />
      <MenuClick />
      <Intro />
      <History />
      <Products />
      <SpecialCake />
      <Services />
      <Other />
      <Depoiments />
      <Siga />
      <End />
    </main>
  );
}
