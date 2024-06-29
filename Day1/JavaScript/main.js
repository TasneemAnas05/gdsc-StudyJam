// // var userName = "Tasnim";
// // var userId = 123;
// // var graduate = false;

// // console.log("user name is:" , userName);
// // console.log("user Id:" , userId);
// // console.log("graduate:" , graduate);

// // let x=5;
// // let y=10;
// // console.log(x+y);
// // // X + Y = {}
// // console.log("X+Y=" , x+y);
// // // 5 + 10 = 15
// // console.log( x , "+" , y , "=" , x+y);
// // console.log(`${x}+${y}=${x+y}`);

// // // == and ===
// // let num1 = 15;
// // let num2 = "15";
// // console.log(num1 == num2)
// // console.log(num1 === num2)//type and value comparision
// // // !== not equal
// // graduate = true;
// // if(graduate  ){
// //     //action 
// //     console.log(`${userName} is  graduated`)
// // } 
// // else{
// //     console.log(`${userName} is not graduated`)
// // }
// // if(userId === 123)
// //   console.log("Tasnim")
// // else if(userId === 124)
// //  console.log("Lujain")
// // else if (userId === 125)
// //  console.log("Batool")
// // else
// // console.log("Invalid Input")
// // //switch
// // let dayOfWeek = "Sunday"
// // switch (dayOfWeek){
// //     case "Sunday":
// //         console.log("it's Sunday");
// //         break;
// //     case "Friday":
// //         console.log("it's Friday");
// //         break;
// //     default :
// //     console.log("it's neither Sunday nor Friday ");
    
// // }
// //print numbers from 0-5 using for loop
// for(let i=0 ; i<=5 ; i++){
//     console.log(i);
// }
// console.log("********************")
// //while loop
// //print numbers from 5-0
// let j=5;
// while(j>=0){
//     //aaction
//     console.log(j);
//     j--;
// }
// //array 
// let student =["Tasnim" , 1234 , false];
// //length
// console.log("Array Length" , student.length);
// //push => add last
// student.push("Lujain");
// console.log(student);
// student.pop();
// console.log(student);
// //for each
// let hobbies=["sport" , "video game" ,"coding" , "Reading"];
// hobbies.forEach((hobbie)=>{
//   console.log(hobbie);
// })
// //Map 
// let newArr=hobbies.map((hobbie)=>{
//     return hobbie.toUpperCase();
// })
// console.log(newArr);
// //Objects
// let studentObj ={
//     //key:vakue
//     username :"Tasnim" ,
//     userId : 123 ,
//     graduatr : false ,
// };
// console.log(studentObj)
// console.log(studentObj.username)
// //object destructuring 
// let {username , userId} = studentObj;
// console.log(username , userId);
// let {hobbieOne , hobbieTwo} = hobbies
// console.log(hobbieTwo)
// //functions
// function greet(userName){
//     //action 
//     console.log(`Greetings: ${userName}`)

// }
// greet("Tasnim");
// function sum(x , y){
//     return x+y;
// }
// console.log(sum(5,5))
// //lamda function 
// let mul = function(x , y){
//     return x * y;
// }
// console.log(mul(5 ,5));
// //Arrow function
// let greetTwo =()=>{
//     console.log("Greetings:")
// }
// greetTwo();
const sayMyName = (username) =>{
    if(username === "Heisenberg")
      crossOriginIsolated.log("Your dam rigth")
    else
    crossOriginIsolated.log("Your not the cook")
}
sayMyName("Heisenberg")
//classes
class Student{
    studentName;
    studentId;
    graduateState;
    constructor(studentName , studentId , graduateState){
        this.studentName=studentName;
        this.studentId = studentId;
        this.graduateState=graduateState;
    }
    printDet =()=>{
        console.log(`student name is :${this.studentName}`)
        console.log(`student ID is :${this.studentId}`)
        //console.log(`student name is :${this.studentName}`)
        //exp1 ?
        console.log(this.graduateState ? `${this.studentName}
         is graduate student`: 
        `${this.studentName} is not graduate student`) 
    }

}  
const studentOne= new Student("Tasnim" , 123 , false)