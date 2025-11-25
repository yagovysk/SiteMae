import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import { MenuClick } from "../Menu/MenuClick";
import { Title } from "./Components-All/Title/Title";
import { Allintro } from "./Components-All/Allintro/Allintro";
import { End } from "../End/End";
import "./Products.css";

export function AllProducts() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

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
