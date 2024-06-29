let numbers=[1 , 2 , 3 ,4 , 5];
let mul = []
for(let i=0 ; i<numbers.length ;i++){
    mul[i]=numbers[i]*2;
}
let Indexes=[]
for(let i=0 ; i<numbers.length ; i++){
    Indexes[i]=i;
}
console.log("numbers array :" , numbers)
console.log("mul array :" , mul)
console.log("Indexes array :" , Indexes)