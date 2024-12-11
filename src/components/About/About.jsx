import { End } from "../End/End";
import { Menu } from "../Menu/Menu";
import { MenuClick } from "../Menu/MenuClick";
import { Como } from "./About-components/Como/Como";
import { Aboutdepoiments } from "./About-components/Depoiments-about/Aboutdepoiments";
import { Memory } from "./About-components/Memory/Memory";
import { Our } from "./About-components/Our/Our";
import { Titleabout } from "./About-components/TitleAbout/Titleabout";

export function About() {
  return (
    <section className="about-section">
      <Menu />
      <MenuClick />
      <Titleabout />
      <Our />
      <Memory />
      <Como />
      <Aboutdepoiments />
      <End />
    </section>
  );
}
