
console.log('I am running from terminal');
//Variable
let a=10;
let a1=20;
let firstName='maya';
let firstname='mm';
{
    let a=90;  //Block 2
    console.log(typeof(a));
}
console.log(a);
var b;
console.log(typeof(b));
//Array
let arr=[1,2,3,4,5,'Mridula'];
console.log(arr[1]);
//Object
let car={
    model:'i10',
    color:'Black',
    year_man:1970
}
let person=new Object();
person.age=33;
person.name='Maya';
console.log(car.model);
let obj1=[{
    model:'i10',
    color:'Black',
    year_man:1970
},{
    model:'i20',
    color:'Green',
    year_man:1972
}]
console.log(obj1[1].color);
let t=9;
let t1=++t;
console.log(t1)

//Loops
for (let i=1;i<=10;i++) {
    console.log(i)  
}
let arr2=['Orange','Apple','Pear'];
for (const x of arr2) {
    console.log(x);
}
//For in loop
for (const k in car) {
    console.log(car[k])
}

//Array functions
let arr3=[1,2,3,4,55];
// arr3.forEach(function (item){
//  console.log(item);
// })
// arr3.forEach(function(item,ind,arr2){
//     arr2[ind]=item<10;
// })
// console.log(`The modified array is ${arr3}`);
//Filter Function
let arr4=arr3.filter((item)=>{
    return item<5;
})
console.log(`The filtered array is ${arr4}`)
console.log(`The old array is ${arr3}`);
//Conditional Statement
let ab=77;
let cd='77';
if(ab==cd){
    console.log('Both values are equal');
}
else{
    console.log('Both values are not equal');
}
//Array destructuring
const [first,second,third]=[34,55,67];
console.log(third);
//Array Spread Operator
let s2=['q','w','e','r','t'];
let s3=['sd','tt'];
let s4=[1,2,3,...s3];
let [a7,a2,...a5]=[23,34,45,67,89];
console.log(a5);
//Arrow Functions
function totals(a,b){
    var sum=a+b;
    return sum;
}
var result=totals(2,3);//Function call
console.log(`The total sum is ${result}`); 

var totals= (a,b)=>{  //Arrow Function
    var sum=a+b;
    return sum;
}
var result=totals(10,56);
console.log(`The total sum is ${result}`); 
//ES6 Classes
class Person{
    constructor(name,age){
        this.Name=name;
        this.Age=age;
    }

}
const mydetails= new Person('John',17);
console.log(mydetails.Name);
//Modules
//Asynchronous function

setTimeout(()=>{
    console.log('I am executed after 5 secs');
},5000);
setInterval(()=>{
    console.log('I am executed every 3 secs');
},3000);