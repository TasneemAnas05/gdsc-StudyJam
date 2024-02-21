export  default Garage 
class Garage{
    sensor;
    constructor(sensor){
        this.sensor=sensor;
    }
    // enter Garage method
    enterGarage =()=>{
        if(this.sensor === true)
         console.log("Garage is full")
        else{
            console.log("You can enter the garage")
            this.sensor=true
        }
        
    }
    // leave Garage method
    leaveGarage = ()=>{
        if(this.sensor === true)
        console.log("Good Bye")
       else
       console.log("The Garage is empty")
           
    }
    
}