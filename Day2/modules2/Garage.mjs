let sensor = true;//garage empty
export const GarageState = ()=> {
  console.log(sensor ? "Garage is empty" : "A car is in the garage")
};
class Garage{
    carplatenumber;
    constructor(carplatenumber){
        this.carplatenumber=carplatenumber

    }
    enterGarage=()=>{
      if(sensor === true )
              {
                console.log(`Car with ${carPlateNumber} plat number can park here`)
                sensor=false;
              }
      else{
        console.log(`their is a car already parked here`)
      }
    }
    exitGarage=()=>{
        if(sensor === true )
        {
          console.log(`The garage is Empty`)
         
        }
    else{
          console.log(`Car with ${carPlateNumber} plat number is leaving the garage`)
          sensor=true;
        }
    }
}