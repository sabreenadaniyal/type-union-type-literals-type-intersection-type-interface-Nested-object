//=================TYPE UNION(Multiple lines of data in a single line)==============================
let value:number|string = 12345
console.log(value);
value="Welcome to TypeScript"
console.log(value);
//------OR------------
let T_shirt:string|number = "Three thousand"
console.log(T_shirt);
T_shirt=3000
console.log(T_shirt);

//===============TYPE LITERALS(you create types that express specific values)===========================
let days:"Mon"|"Tues"|"Wed"|"Thurs"|"Fri"|"Satur"|"Sun"
days="Mon",
days="Tues"
days="Wed"
days="Wed"
days="Thurs"
days="Fri"
console.log(days);

//==================================OBJECT(Assign values)=====================================================
let Mobile={
   name:"SamSung",
   model:"S6 edge",
   year: 2023,
   isAvailable: false,
   charging:() => "20mAh"
} 
console.log(Mobile.isAvailable);

//================NESTED OBJECT(Objects that contain objects inside them)================================
//-----------------With type Alias(code readability and maintainability)--------------------------------------
type Airplane={name:string, model:string, color:string, seats:string[], isfoodAvailable:boolean
   features:{engine:string, condition:number, seats:number},speed:()=>string}

let airPlane:Airplane = {
    name:"Emirates",
    model: "A380-800",
    color:"white",
    seats:["Alice","Eric","John"],
    isfoodAvailable:true,

features:{           //here this is nested object
   engine:"GP7200",
   condition: 100,
   seats:520,
},
 speed:()=> "1,185 km/h"
}
 console.log(airPlane.features.engine);
 
//======================TYPE INTERSECTION(combines multiple types into one)===================================
type Students={
    name:string,
    std_ID:string,
    class:string
}
type Teacher={
   teacherName:string,
   teacherExp: number
}
type University = Students & Teacher

let university : University = {
   name: "Kainat",
   std_ID: "abc9876",
   class: "4th semister",
   teacherName: "Maam Zufra",
   teacherExp: 6 
}
console.log(university.teacherName);
//---------------OR---------------------
console.log(university);

//===TYPE INTERFACE(Interface is a structure that defines the contract in your application)=============
//---------------------------interface only used for objects-------------------------------------
interface Person{
   name:string,
   age: number,
   gender: "male"|"female"
}
let user : Person = {
     name:"Laiba",
     age: 25,
     gender: "female"
}
console.log(user.gender);

