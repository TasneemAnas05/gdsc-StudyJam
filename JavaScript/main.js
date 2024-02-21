// var userName = "Tasnim";
// var userId = 123;
// var graduate = false;

// console.log("user name is:" , userName);
// console.log("user Id:" , userId);
// console.log("graduate:" , graduate);

// let x=5;
// let y=10;
// console.log(x+y);
// // X + Y = {}
// console.log("X+Y=" , x+y);
// // 5 + 10 = 15
// console.log( x , "+" , y , "=" , x+y);
// console.log(`${x}+${y}=${x+y}`);

// // == and ===
// let num1 = 15;
// let num2 = "15";
// console.log(num1 == num2)
// console.log(num1 === num2)//type and value comparision
// // !== not equal
// graduate = true;
// if(graduate  ){
//     //action 
//     console.log(`${userName} is  graduated`)
// } 
// else{
//     console.log(`${userName} is not graduated`)
// }
// if(userId === 123)
//   console.log("Tasnim")
// else if(userId === 124)
//  console.log("Lujain")
// else if (userId === 125)
//  console.log("Batool")
// else
// console.log("Invalid Input")
// //switch
// let dayOfWeek = "Sunday"
// switch (dayOfWeek){
//     case "Sunday":
//         console.log("it's Sunday");
//         break;
//     case "Friday":
//         console.log("it's Friday");
//         break;
//     default :
//     console.log("it's neither Sunday nor Friday ");
    
// }
//print numbers from 0-5 using for loop
for(let i=0 ; i<=5 ; i++){
    console.log(i);
}
console.log("********************")
//while loop
//print numbers from 5-0
let j=5;
while(j>=0){
    //aaction
    console.log(j);
    j--;
}
//array 
let student =["Tasnim" , 1234 , false];
//length
console.log("Array Length" , student.length);
//push => add last
student.push("Lujain");
console.log(student);
student.pop();
console.log(student);
//for each
let hobbies=["sport" , "video game" ,"coding" , "Reading"];
hobbies.forEach((hobbie)=>{
  console.log(hobbie);
})
//Map 
let newArr=hobbies.map((hobbie)=>{
    return hobbie.toUpperCase();
})
console.log(newArr);
