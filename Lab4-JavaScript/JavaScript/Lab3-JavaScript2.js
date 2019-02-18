

console.log("Question 1");

let i=0;

while(i<=100){

    if(i%2!=0)

    console.log(i);

    i++;
}



console.log("Question 2");

for(i=0;i<=100;i++){

    if(i%2===0){

        console.log(i);
    }

}




console.log("Question 3 Part A and B")


let cars = ["Saab", "Volvo", "BMW"]; //Part A


cars.push("Toyota")

console.log(cars);

cars.unshift("Mercedes"); //Part B
console.log(cars);









console.log("Question 3 part C and Part D ")


function displayArray(numArray){

    for(let value of numArray){
        console.log(value)
    }


}
displayArray(cars.sort());












console.log("Question 4");

let num=[1,2,34,5];

function AvgArray(numArray){

   let sum= numArray.reduce((acc,curr) => acc+curr);

   let avg=sum/numArray.length;

   console.log(avg);


}
AvgArray(num);

console.log("Question 5")

function dayOfWeek(dayNumber){


    switch(dayNumber){

        case 1: console.log("Monday");
        break;

        case 2:console.log("Tuesday");
        break;

        case 3:console.log("Wednesday");
        break;

        case 4:console.log("Thursday");break;

        case 5:console.log("Friday");break;

        case 6: console.log("Saturday");break;

        case 7: console.log("Sunday");

        default:console.log("sorry");break;
    }


}
dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(8);


console.log("Question 6")

function drawTraingle(n) {

    for (i = 1; i <= n; i++) {

        /*number=1;*/

        let x="";

        for (j = 1; j <= i; j++) {

            x+=j;







        }
        console.log(x);

    }
}
drawTraingle(5);



console.log("Question7");

let string = 'Hello', int = 254;
let float = 25.4;
let arr = [1, 2, 3];
let object = {course: 'JS', part: 1};
let func = function(){return;};
let nullValue = null;
let undefinedValue;
let boolean = true;

let variables=[];

variables.push(string);
variables.push(int);
variables.push(float);
variables.push(arr);
variables.push(object);
variables.push(func);
variables.push(nullValue);
variables.push(undefinedValue);
variables.push(boolean);

variables.join(',');

for(let value of variables){

    console.log(value +" is "+ typeof value);

}


console.log("Question 8");

let person = {
    firstName: "Ali",
    lastName: "Falih",
    age:10,
    get greet(){
        return `Hello my name is  ${this.firstName} ${this.lastName} I'm ${this.age} years old`;
    }
}
console.log(person.greet);





console.log("Question 9");


let map=new Map();
map.set(1,'Monday');
map.set(2,'Tuesday');
map.set(3,'Wednesday');
map.set(4,'Thursday');
map.set(5,'Friday');
map.set(6,'Saturday');
map.set(7,'Sunday');

for (let [key, value] of map) {
    console.log(key + "  " + value);
}



console.log("Question 10");

let colors = ["white", "blue", "yellow", "black", "red", "green"]

let [firstColor,secondColor,...otherColors]=colors;

console.log(firstColor);
console.log(secondColor);
console.log(...otherColors);


console.log("Question 11");

let cold = ['autumn', 'winter'];
let warm = ['spring', 'summer'];

let seasons=['Cool!',...cold,...warm,'Super Hot Summer!'];

console.log(seasons);


console.log("Question 12");

let nums1 = [1, 2, 3, 4, 45, 5, 6]

console.log(Math.max(...nums1));



console.log("Question 13");

let numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.map(x=>x*x));



console.log("Question 14");

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log((nums.filter(x=>x%2===0)).map(x=>x*x)); //Part A

console.log(nums.reduce((acc,curr)=>acc+curr)); //Part B


console.log("Question 15");

let nums2=[2,4,5];

let sum=nums2.map(x=>x*2).reduce(((sum,x)=>sum+x));

console.log(sum/nums.length);


console.log("Question 16");

let arr1=[8,7,6,5,4,3,2,1];

console.log(arr1.sort());


