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

let person : {
    name: string,
    age: number,
};

person = {
    name: 'Max',
    age: 32
}

// Type Inference

let course = 'React  - The Complete Guide'

// course = 12341; error
