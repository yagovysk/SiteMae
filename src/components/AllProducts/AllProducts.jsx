import { Menu } from "../Menu/Menu";
import { MenuClick } from "../Menu/MenuClick";
import { Title } from "./Components-All/Title/Title";
import { Allintro } from "./Components-All/Allintro/Allintro";
import { End } from "../End/End";
import "./AllProducts.css";

export function AllProducts() {
  return (
    <section className="ALL-section">
      <Menu />
      <MenuClick />
      <Title />
      <Allintro />
      <End />
    </section>
  );
}
