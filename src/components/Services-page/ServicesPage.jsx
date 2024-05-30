import { End } from "../End/End";
import { Other } from "../Home/components-home/OtherProducts/Other";
import { SpecialCake } from "../Home/components-home/SpecialCake/Special";
import { Menu } from "../Menu/Menu";
import { MenuClick } from "../Menu/MenuClick";
import { Nossosservicos } from "./Components-services/Nossosservicos";
import { Titleservice } from "./Components-services/Titleservice";
import "./ServicesPage.css";

export function ServicesPage() {
  return (
    <section className="Service-section">
      <Menu />
      <MenuClick />
      <Titleservice />
      <Nossosservicos />
      <SpecialCake />
      <Other />
      <End />
    </section>
  );
}
