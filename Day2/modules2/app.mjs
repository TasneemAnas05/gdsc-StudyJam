import Garage, {GarageState}from "../modules2/Garage.mjs";
console.log(GarageState())

const car1 = new Garage(1234);
car1.enterGarage();
car1.exitGarage();