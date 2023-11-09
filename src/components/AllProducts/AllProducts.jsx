import { Menu } from '../Menu/Menu';
import { MenuClick } from '../Menu/MenuClick';
import { Title } from './Components-All/Title/Title';
import { Allintro } from './Components-All/Allintro/Allintro';
import { End } from '../End/End';

export function AllProducts() {
  return (
    <div>
      <Menu />
      <MenuClick />
      <Title />
      <Allintro />
      <End />
    </div>
  );
}
