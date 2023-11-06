console.log("Hello World")

let firstname = "George"

let full_name = "George Darrall"

let secondName = "Darrall"

// const tax = 40 + 20 

// let total = 100 + tax

// console.log(total)

let total = 200 
let firstTimeUser = true

let canHaveDiscount = total >= 200 || firstTimeUser

console.log(canHaveDiscount)

// || = if one or the other is true
// && = is an "and" 

let isEqual = total == 200

//using === will check for type AND value


let provideDiscount = firstTimeUser != true 

let statement1 = "This is a js session"
let statement2 = "This is after break"

console.log(statement1 + " " + statement2)
//"" This is a space

console.log(`I think ${firstname} ${secondName} is the best`)
//` this key (next to !) is what I used above for the sentence

//anything outside the function is global e.g if I changed the value of firstname in the function, it would only apply to that

function calculate(num1, num2) {
let sum = num1 + num2
let sub = num1 - num2 
let mul = num1 * num2
let div = num1 / num2

return sum + sub + mul + div
}

console.log(calculate(10, 20))
console.log(calculate(55, 65))

//num1 and 2 are parameters 
//we have set num1 and 2 as numbers in the above statement


//this is an array
let names = ["Lancaster", "Darrall", 2 ,]

//this is an object
let person = {
    name: "Summer",
    proffesion : "Dog",
    colour: "Blonde",
    food: "Dog food"
}

console.log(person.name) //would show Summer

for(let i = 0; i < names.length; i++){console.log(person)} //the loop will continue until whilst the length is more than 0 

const numbers = [1,2,3,4,5,6,7,8,9]

const evennumbers = numbers.filter(
    (numbers) => {
        return numbers % 2 == 0
    }
)

console.log(evennumbers)

const squares = evennumbers.map( 
    (numbers) => {
        return numbers * numbers
    }
)

console.log(squares)

window.addEventListener('load', (event)=>{
    const h1 = document.getElementById("main-title")
    h1.innerHTML="Changed using Javascript"

    
    const button = document.querySelector("#button1")
    button.addEventListener('click', (event)=>{
        h1.innerHTML="Changed again using JS"
    })
})

        //setTimeout{'click', (event)=>{
        //h1.innerHTML = "Changed using JS"}, 2000}

        const button2 = document.querySelector("#new-ele")

        button2.addEventListener('click', (event)=>{
        const newElement = document.createElement("a")
        newElement.innerHTML = "New Link"
        document.body.appendChild(newElement)
        })
    


const form = document.querySelector("#contactform")

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    const formData = new FormData(form)

    const data = Object.fromEntries(formData.entries())

    console.log("formData", formData)
    console.log("data", data)

})
    
    

window.addEventListener('load', (event) =>{
    const form = document.querySelector("#todo-form")

    const list = document.querySelector("#list-items")

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        const li = document.createElement("li")
        li.innerHTML = data.todo
        list.appendChild(li)
    }) 
})