import { End } from '../End/End';
import { Other } from '../Home/components-home/OtherProducts/Other';
import { SpecialCake } from '../Home/components-home/SpecialCake/Special';
import { Menu } from '../Menu/Menu';
import { MenuClick } from '../Menu/MenuClick';
import { Nossosservicos } from './Components-services/Nossosservicos';
import { Titleservice } from './Components-services/Titleservice';

export function ServicesPage() {
  return (
    <div>
      <Menu />
      <MenuClick />
      <Titleservice />
      <Nossosservicos />
      <SpecialCake />
      <Other />
      <End />
    </div>
  );
}
