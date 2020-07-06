import { Tile } from './Tiles';
import { BasicResource } from '../Resource';

export default class Area {
  public type: AreaType;
  public x: number;
  public y: number;
  public tile?: Tile;
  public bonus?: AreaBonus;
  // Phobos / Ganymede / Noctis City / Ascraeus Mons / ...
  public name?: string;
  public highlighted: boolean;

  constructor(x: number, y: number, type: AreaType, bonus: AreaBonus) {
    this.bonus = bonus;
    this.type = type;
    this.x = x;
    this.y = y;
    this.highlighted = false;
  }
}

export enum AreaType {
  NORMAL,
  OCEAN,
  CITY,
  LAVA,
  PHOBOS,
  GANYMEDE,
}

// https://stackoverflow.com/questions/39701524/using-enum-as-interface-key-in-typescript
export interface AreaBonus {
  [BasicResource.MEGACREDITS]?: number;
  [BasicResource.STEEL]?: number;
  [BasicResource.TITANIUM]?: number;
  [BasicResource.PLANTS]?: number;
  [BasicResource.HEAT]?: number;
  cards?: number;
}

export enum AreaName {
  ganymede = 'Ganymede Colony',
  phobos = 'Phobos Space Haven',
  ascraeus = 'Ascraeus Mons',
  pavonis = 'Pavonis Mons',
  tharsis = 'Tharsis Tholis',
  noctis = 'Noctis City',
}
