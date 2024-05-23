"use strict";
//=================TYPE UNION(Multiple lines of data in a single line)==============================
let value = 12345;
console.log(value);
value = "Welcome to TypeScript";
console.log(value);
//------OR------------
let T_shirt = "Three thousand";
console.log(T_shirt);
T_shirt = 3000;
console.log(T_shirt);
//===============TYPE LITERALS(you create types that express specific values)===========================
let days;
days = "Mon",
    days = "Tues";
days = "Wed";
days = "Wed";
days = "Thurs";
days = "Fri";
console.log(days);
//==================================OBJECT(Assign values)=====================================================
let Mobile = {
    name: "SamSung",
    model: "S6 edge",
    year: 2023,
    isAvailable: false,
    charging: () => "20mAh"
};
console.log(Mobile.isAvailable);
let airPlane = {
    name: "Emirates",
    model: "A380-800",
    color: "white",
    seats: ["Alice", "Eric", "John"],
    isfoodAvailable: true,
    features: {
        engine: "GP7200",
        condition: 100,
        seats: 520,
    },
    speed: () => "1,185 km/h"
};
console.log(airPlane.features.engine);
let university = {
    name: "Kainat",
    std_ID: "abc9876",
    class: "4th semister",
    teacherName: "Maam Zufra",
    teacherExp: 6
};
console.log(university.teacherName);
//---------------OR---------------------
console.log(university);
let user = {
    name: "Laiba",
    age: 25,
    gender: "female"
};
console.log(user.gender);
