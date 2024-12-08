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

// High order array methods
// forEach, map, filter



