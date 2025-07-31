// Primites: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

import { isInterfaceDeclaration } from "typescript";

// Primitives

let age: number = 24;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More Complex Types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string,
    age: number,
};

let person : Person
person = {
    name: 'Max',
    age: 32
}

let people : Person[];

// Type Inference

// let course = 'React  - The Complete Guide'
// course = 12341; error

// Union Types 

let course: string | number = 'React  - The Complete Guide'

course = 12341;

// Functions & types

function add(a: number , b: number) {
    return a + b;
}

function printOutput(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const demoArrayString = ['1','2','3'];
const updatedArrayString = insertAtBeginning(demoArrayString, '-1 0'); // [-1, 1, 2, 3]
updatedArrayString[0].split('')
