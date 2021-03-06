import styled from 'styled-components';

import alchemy from './assets/alchemy.png';
import blacksmith from './assets/blacksmith.jpg';
import cup from './assets/cup.jpg';
import crate from './assets/crate.jpg';
import first_aid from './assets/first_aid.png';
import skull from './assets/skull.jpg';
import tailoring from './assets/tailoring.jpg';
import chest from './assets/chest.png';
import chest_box from './assets/chest_box.jpg';
import quest from './assets/quest.png';
import swords from './assets/swords.png';
import cross from './assets/cross.jpg';
import campfire from './assets/campfire.jpg';
import stealth from './assets/stealth.jpg';
import barrel from './assets/barrel.jpg';
import wine from './assets/wine.jpg';
import statue from './assets/statue.jpg';
import gold from './assets/gold.jpg';
import house_human from './assets/house_human.png';

const getIconByName = {
  alchemy,blacksmith, barrel, chest_box, cross, crate, 
  campfire, cup, first_aid, skull, stealth, tailoring,
  chest, quest, swords, wine, statue, gold, house_human
};

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: ${({ zoom }) => 32 * zoom}px;
  width: 192px;
  border: 2px solid lightgray;
  background: rgba(0, 0, 0);
  color: #fff;
  padding: 8px 16px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms ease-in-out;
`;

export const Icon = styled.div`
  width: ${({ zoom }) => 20 * zoom}px;
  height: ${({ zoom }) => 20 * zoom}px;
  background-image: ${({ icon }) => `url(${getIconByName[icon]})`};
  border: 2px solid darkorange;
  box-sizing: border-box;
  background-size: cover;
  position: absolute;
  left: ${({ x, zoom }) => x * zoom}px;
  top: ${({ y, zoom }) => y * zoom}px;
  transform: translate(-50%, -50%);
  opacity: 0.75;
  transition: opacity 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
    ${DescriptionContainer} {
      opacity: 1;
    }
  }
`;

export const Title = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 19px;
`;