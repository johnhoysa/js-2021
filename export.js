export const dataExport = [1,2,3];

export class vehical {
  constructor(type, wheels, fuel){
    this.type = type;
    this.wheels = wheels;
    this.fuel = fuel
  }


  get allData() {
    return `Type: ${this.type}, Wheels: ${this.wheels}, Fuel: ${this.fuel}`
  }
}
