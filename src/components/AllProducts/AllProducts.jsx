import { Menu } from "../Menu/Menu";
import { MenuClick } from "../Menu/MenuClick";
import { Title } from "./Components-All/Title/Title";
import { Allintro } from "./Components-All/Allintro/Allintro";
import { End } from "../End/End";
import "./Products.css";

export function AllProducts() {
  return (
    <section className="section-all">
      <Menu />
      <MenuClick />
      <Title />
      <Allintro />
      <End />
    </section>
  );
}
