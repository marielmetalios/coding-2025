// Arrays - variables that hold multiple values
const fruits = ['apples', 'oranges', 'pairs'];

// 4th value here is grapes
fruits [3] = 'grapes';

// push adds value to the end (i.e. mangoes will show at end)
fruits.push('mangoes');

// unshift adds values to front (0 spot, strawberries will show for 0)
fruits.unshift('strawberries')

// takes last value off (i.e. removes mangoes)
fruits.pop ();

// this will give us the index of the value
console.log(fruits.indexOf('oranges'));

// from here, try to learn how to concaneate values. Will be helpful! 
console.log(fruits);

// ---------------------------------------------------------------------------------

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies, 'sports'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA',
    }
    }

// this will show us all of the values. You cant use alert for this successfully!
console.log(person);

// for a specific or single value, or multiple use commas 
console.log(person.firstName);
console.log(person.firstName, person.lastName);

// if you want to just pull the Movies value out using array values
console.log(person.hobbies[1]);

// if you want to pull out city of Boston using names of values
console.log(person.address.city)

// we can also use Destructuring (new feature) to pull specific values out. For example, to get "John"
const { firstName, lastName } = person;

console.log(firstName);

// for Destructing embedded objects like Address, use the below
const { firstName, lastName, address: { city} } = person;

console.log(city);

// you can also add properties

person.email = 'john@gmail.com'
console.log(person);

// ---------------------------------------------------------------------------------
//we typically deal with arrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos);   

// to grab meeting with boss text only:
console.log(todos[1].text);

// ---------------------------------------------------------------------------------

// JSON:
// this is a data format that's used a lot in full stack development and APIs sending data to server. Data is usually sent and received in JSON format.
// use a JSON converter (freeformater.com/json-formatter.html)
// the only difference is double quotes around keys and double quotes around strings. No single quotes used in JSON! 
// to convert the above to JSON to send to a server

const todoJSON = JSON.stringify(todos);
console.log(todosJSDON);

// ---------------------------------------------------------------------------------

// For Loops!
// How to write it. Uses 3 parameters:
// for(assignment of variable or iterator - use semi colons to add condition, then increment i++ to add 1 to i variable
// whatever below will run until the condition is true! 

// once it gets to 9, the condition will no longer true because i is no longer less than 10, so then it stops running
for(let i=0; i < 10; i++) {
console.log(i); 
}

// you can then add a string to this like the below. This will output the actual text "For Loop Number: i" in the Console Log.
for (let i=0; i <10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While Loops (more old school). The variable here is set outside of the loop. Make sure to add the i++ or it will be a neverending loop because the condition will never be met!
// TODO: ask for help on this!
let i=0;
while(i< 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// ---------------------------------------------------------------------------------
// How to loop through arrays. You can use a for loop, like the below. Length will give you the # of items in the array FOR BOTH STRINGS AND ARRAYS!

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

for(let i=0; i < todos.length; i++) {
    console.log(`For Loop Number: ${i}`); 
    }

// to log out the ToDo text - not really the best way to do it!
console.log(todos[i].text);

// A FOR OF LOOP IS PREFERRED HERE! Todo below can be changed to anything. You can call it T. Once todo is console logged, you'll get each one.
for(let todo of todos) {
    console.log(todo);

}
// OR ^^
console.log(todo.id);
console.log(todo.text);

// ---------------------------------------------------------------------------------
//42:00 in Traversy Media Course
// High Order Array Methods - this is preferred way for iteration with arrays! 
// forEach - loops through
// map - create new array from array
// filter - create new away based on condition
// this is FUNCTIONAL PROGRAMMING, MANIPULATES DATA REALLY WELL!

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];
todos.forEach(function(todo)) {
    console.log(todo.text);

}

// this will return a whole new array of new text (based on the text values) 
const todoText = todos.map(function(todo)) {
    console.log(todo.text);
    return todo.text;

// to return true values
const todoCompleted = todos.filter(function(todo)) {
    return todo.isCompleted === true;
    consolelog (todoCompleted);

// you can chain on other array methods. 

// ---------------------------------------------------------------------------------
// CONDITIONALS
// double == 
// triple === matches data types AND numbers
// since quotes around something mean strings (i.e. '10' then x===10 will not return 10 in the below with ===!!)

const x=10
if (x == 10) {
    console.log(x is 10)

}

// else if and if else are also options

// or is typed with double pipes || like below:
// and is typed with double ampersand &&
|| , &&
// these are used preferably over multiple if statements!

// ternary operator represented by ? which is THEN 
// and else is represented by colon :
// below we created a variable called color, 
// that when x is greater than 10, then the color is red, and if not, then else will be blue!
const x = 10;

const color = x > 10 ? 'red' : 'blue' ;
console.log (color)

// ^ this returns blue in console log! if you change x to 11 then it will return red!

// SWITCHES
const x = 11;

const color = x > 10 ? 'red' : 'blue' ;
console.log (color)

switch (color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue'
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue')
        break;
}

// 11 outputs color is red! 9 outputs color is blue.
// TODO: go over this ^^^

// ---------------------------------------------------------------------------------
// FUNCTIONS

// addNums allows you to add numbers together
// we can use detault values or overwrite them with just a formula like addNumbs (5,5)
// review screenshot in folder

// arrow functions allow