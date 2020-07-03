import { BasicResource } from './Resource';
import Card from './Card';

export default class Player {
  private megaCredits: number = 0;
  private megaCreditProduction: number = 0;
  private steel: number = 0;
  private steelProduction: number = 0;
  public steelValue: number = 2; // Advanced Alloys
  private titanium: number = 0;
  private titaniumProduction: number = 0;
  public titaniumValue: number = 2; // Advanced Alloys
  private plants: number = 0;
  private plantProduction: number = 0;
  public greeneryPlantCost: number = 8; // Ecoline
  private energy: number = 0;
  private energyProduction: number = 0;
  private heat: number = 0;
  private heatProduction: number = 0;
  private hand: Array<Card> = [];

  public getResource(resource: BasicResource): number {
    if (resource == BasicResource.MEGACREDITS) return this.megaCredits;
    if (resource == BasicResource.STEEL) return this.steel;
    if (resource == BasicResource.TITANIUM) return this.titanium;
    if (resource == BasicResource.PLANTS) return this.plants;
    if (resource == BasicResource.ENERGY) return this.energy;
    if (resource == BasicResource.HEAT) return this.heat;
    throw new Error(`Resource ${resource} is not a valid resource.`);
  }
  public adjustMegaCredits(amount: number): boolean {
    // check if legal move
    if (this.megaCredits + amount < 0) {
      return false;
    }
    this.megaCredits += amount;
    return true;
  }

  public adjustMegaCreditProduction(amount: number): void {
    // MCProduction can go negative
    this.megaCreditProduction += amount;
  }

  public adjustSteel(amount: number): boolean {
    if (this.steel + amount < 0) {
      return false;
    }
    this.steel += amount;
    return true;
  }

  public adjustSteelProduction(amount: number): boolean {
    if (this.steelProduction + amount < 0) {
      return false;
    }
    this.steelProduction += amount;
    return true;
  }

  public adjustTitanium(amount: number): boolean {
    // check if legal move
    if (this.titanium + amount < 0) {
      return false;
    }
    this.titanium += amount;
    return true;
  }

  public adjustTitaniumProduction(amount: number): boolean {
    if (this.titaniumProduction + amount < 0) {
      return false;
    }
    this.titaniumProduction += amount;
    return true;
  }

  public adjustPlants(amount: number): boolean {
    // check if legal move
    if (this.plants + amount < 0) {
      return false;
    }
    this.plants += amount;
    return true;
  }

  public adjustPlantsProduction(amount: number): boolean {
    if (this.plantProduction + amount < 0) {
      return false;
    }
    this.plantProduction += amount;
    return true;
  }
  public adjustEnergy(amount: number): boolean {
    // check if legal move
    if (this.energy + amount < 0) {
      return false;
    }
    this.energy += amount;
    return true;
  }

  public adjustEnergyProduction(amount: number): boolean {
    if (this.energyProduction + amount < 0) {
      return false;
    }
    this.energyProduction += amount;
    return true;
  }

  public adjustHeat(amount: number): boolean {
    // check if legal move
    if (this.heat + amount < 0) {
      return false;
    }
    this.heat += amount;
    return true;
  }

  public adjustHeatProduction(amount: number): boolean {
    if (this.heatProduction + amount < 0) {
      return false;
    }
    this.heatProduction += amount;
    return true;
  }
}