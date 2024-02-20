var userName = "Tasnim";
var userId = 123;
var graduate = false;

console.log("user name is:" , userName);
console.log("user Id:" , userId);
console.log("graduate:" , graduate);

let x=5;
let y=10;
console.log(x+y);
// X + Y = {}
console.log("X+Y=" , x+y);
// 5 + 10 = 15
console.log( x , "+" , y , "=" , x+y);
console.log(`${x}+${y}=${x+y}`);

// == and ===
let num1 = 15;
let num2 = "15";
console.log(num1 == num2)
console.log(num1 === num2)//type and value comparision
// !== not equal
graduate = true;
if(graduate  ){
    //action 
    console.log(`${userName} is  graduated`)
} 
else{
    console.log(`${userName} is not graduated`)
}
if(userId === 123)
  console.log("Tasnim")
else if(userId === 124)
 console.log("Lujain")
else if (userId === 125)
 console.log("Batool")
else
console.log("Invalid Input")