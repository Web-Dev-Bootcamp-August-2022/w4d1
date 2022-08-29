/*
console.log('hello ES6')

// differences between var and let

// var gets hoisted - moved to the top but only declared
console.log(num)
var num = 23

// let is not hoisted
// console.log(str) // => Reference Error
// let str = '23'

// var can be redeclared - let cannot
// var user = 'marco'
// var user = 'mattias'

// scoping of var and let

// var is function scoped
function run() {
	var output = '42'
}
// console.log(output) //  => Reference Error

if (true) {
	// var is not scoped to this block
	var output = '42'
}
console.log(output)

// let is block scoped
function run2() {
	let output2 = '42'
}
// console.log(output) //  => Reference Error

if (true) {
	// var is not scoped to this block
	let output2 = '42'
}
// console.log(output2)

// ternary operator
// replacement for if else

const password = '123'
// let user
// if (password === '123') {
// 	user = 'authenticated'
// } else {
// 	user = 'unauthenticated'
// }
// console.log(user)
// <condition> ? <do this> : <otherwise do that>
let user = password === '123' ? 'authenticated' : 'unauthenticated'

// object shorthand
console.log({ user }) // short version for: {user: user}

const age = 34
const obj = { age: age }
// short:
// const obj = {age}

const animals = {
	// dog: {
	// 	name: 'Rufus'
	// },
	cat: {
		name: 'Elvis'
	}
}
// optional chaining
// only if dog exists in animals we access it
// console.log(animals.dog?.name)

// Destructuring

// Objects
const person = {
	username: 'foo',
	email: 'foo@gmail.com',
	age: 34,
	address: {
		street: 'Friedrichstr.',
		location: 'Berlin'
	}
}
// const username = person.username
// const email = person.email
// console.log(username, email)

// object destructuring
const { username, email, address: { street } } = person
// we can alias a variable by using the : - the value
// of the key username is now assigned to a variable
// called user2
// if we want to access nested objects we do this
// const { username, email, address: { street } } = person
// const { username: user2, email } = person
// console.log(username, email, street)

const root = {
	first: 'foo',
	middle: 'bar',
	last: 'baz'
}
// write a function that gets the root object and returns a string
// like 'foo bar baz' using object destructuring

function display(user) {
	const { first, middle, last } = user
	return `${first} ${middle} ${last}`
}

// you can also destructure in the parameter
// function display({ first, middle, last }) {
// 	// const { first, middle, last } = user
// 	return `${first} ${middle} ${last}`
// }
// console.log(display(root))

// Array destructuring

const numbers = [10, 20, 30, 40, 50]
// const first = numbers[0]
// const second = numbers[1]
// to skip an element you add a comma
const [first, , third] = numbers
console.log(first, third)
const nums = [33, 44, 55]
// this sets a default value for the third element
const [, , x = 66] = nums
console.log(x)
// we can also destructure from a string
const str = 'marco'
const [firstChar] = str
console.log(firstChar)

// spread operator
const array = ['a', 'b']
const copy = [...array]
console.log(copy)
const nums2 = [234, 23, 45333, 234]
// we can't pass an array to Math.max()
console.log(Math.max(...nums2))
const combined = [...array, ...nums2]
console.log(combined)

// spread as the 'rest' operator
function sum(...nums) {
	// console.log(nums)
	// nums is an array containing all the arguments
	return nums.reduce(function (acc, val) {
		return acc + val
	})
}
const result = sum(3, 5, 12, 4)
console.log(result)

*/

// Destructuring Exercise 
const car = {
	make: 'Volvo',
	year: 1995,
	engine: {
		fuel: 'petrol',
		hp: 80
	}
}
// extract the make and year from the car in one line
const { make, year } = car
console.log(make, year)
// extract the fuel and hp from the car in one line
const { engine: { fuel, hp } } = car
console.log(fuel, hp);
// Arrays
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Extract the first two values
const [zero, one] = numbers
console.log(zero, one); // 0 1
// Extract all the values but the first one from the array
// const greaterThan0 = numbers.slice(1)
const [, ...greaterThan0] = numbers
console.log(greaterThan0); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// Strings
const str = "Hello World!"
// Using the spread, return an array of all characters in `str` upperCased and reversed
const reversedUppercase = [...str.toUpperCase()].reverse()
console.log(reversedUppercase); // [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
console.log('hello');
console.clear()

// Arrow functions
const nums3 = [1, 2, 3, 4, 5]
// if you have exactly one parameter you can remove the ()

const doubled = nums3.map(function (num) {
	return num * 2
})
// the callback as an arrow function
// const doubled = nums3.map(num => num * 2)

const greet = () => {
	return 'hello'
}
// as an arrow function: 

// const greet = () => 'hello'

// console.log(doubled)

// Promises
// Promise - a JS object that represents the eventual completion
// or failure of an asynchronous operation

// this function returns a promise
function createRandomNumber(min, max) {
	return new Promise(function (resolve, reject) {
		// passing 1 as min is not allowed 
		if (min === 1) {
			reject(new Error('invalid argument'))
		}
		setTimeout(function () {
			resolve(Math.floor(Math.random() * (max - min + 1) + min))
		}, 3000)
	})
}
function createRandomNumber2(min, max) {
	return new Promise(function (resolve, reject) {
		// passing 1 as min is not allowed 
		if (min === 1) {
			reject(new Error('invalid argument'))
		}
		setTimeout(function () {
			resolve(Math.floor(Math.random() * (max - min + 1) + min))
		}, 3000)
	})
}
// const res = createRandomNumber()
// console.log(res)

// how to handle a function that returns a promise 
// 1. using .then()
// createRandomNumber(3, 10)
// 	.then(function (randomNumber) {
// 		// this get's executed when we have 
// 		// a successful result
// 		console.log(randomNumber)
// 	})
// 	.then(function () {
// 		// here you can chain another .then()
// 		// bc .then() always returns a promise 
// 		// itself
// 		console.log('hello')
// 	})
// 	.catch(function (error) {
// 		// this get's executed if we have an error
// 		console.log(error)
// 	})
// 	.finally(function () {
// 		console.log('this always executes')
// 	})


// 2. using async await 
// IIFE immediately invoked function expression
// (async function () {
// 	const result2 = await createRandomNumber(3, 10)
// 	console.log(result2)
// })()

async function run() {
	// try catch
	try {
		const result2 = await createRandomNumber(3, 10)
		console.log(result2)
	} catch (error) {
		console.log(error)
	} finally {
		console.log('this always executes')
	}
}
// run()

// If we want to call multiple async functions and wait 
// until all them are resolved we can use Promise.all()

Promise.all([
	createRandomNumber(1, 6),
	createRandomNumber2(7, 10)
])
	// result here will be an array with the resolved
	// values from all the async function calls that we
	// passed as arguments
	.then(function (result) {
		console.log(result)
	})
	.catch(function (err) {
		console.log(err)
	})

