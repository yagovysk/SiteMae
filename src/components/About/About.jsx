import { End } from '../End/End';
import { Depoiments } from '../Home/components-home/Depoiments/Depoiments';
import { Menu } from '../Menu/Menu';
import { MenuClick } from '../Menu/MenuClick';
import { Como } from './About-components/Como';
import { Memory } from './About-components/Memory';
import { Our } from './About-components/Our';
import { Titleabout } from './About-components/Titleabout';

export function About() {
  return (
    <div>
      <Menu />
      <MenuClick />
      <Titleabout />
      <Our />
      <Memory />
      <Como />
      <Depoiments />
      <End />
    </div>
  );
}
