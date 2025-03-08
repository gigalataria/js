const num1 = 15
const num2 = 25
const num3 = num1*num2
const num4 = num1-num2
const num5 = num1/num2
const num6 = num1+num2


console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)

const name1 = "Giga"
const name2 = "Giorgi"

console.log(name1)
console.log(name2)

const color1 = "blue"
const color2 = "purple"

console.log(color1)
console.log(color2)


const name3 = "Jane"
const lastname3 = "Jordan"
const fullName = name3 + lastname3
console.log(fullName)

const str1 = "abc"
const str2 = "defg"
const str3 = str1 + str2
console.log(str3)

const str4 = "hello" + "abc" + "Georgia"
console.log(str4)

const x = "hi@#$%^&*()"
console.log(x)

const myName = "Giga"
console.log(myName)


console.log(str4.length)

console.log(myName.length)
console.log(str1.length)
console.log(str2.length)
console.log(str3.length)

let number1 = 1001
let number2 = 101
number1 = 10001

const elem1 = document.querySelector(".hello-JS")
console.log(elem1)
elem1.style.color = "red"
elem1.style.backgroundColor = "green"
elem1.style.border = "5px purple dashed"
elem1.style.borderRadius = "20px"
elem1.style.padding = "10px"

const elem2 = document.querySelector(".b-1")
console.log(elem2)
elem2.style.color = "cyan"
elem2.style.backgroundColor = "limeGreen"
elem2.style.border = "10px pink dashed"
elem2.style.borderRadius = "20px"
elem2.style.padding = "20px"



const elem3 = document.querySelector(".img-1")
console.log(elem3)


elem1.textContent = "hello abc"

elem2.textContent = "click me"


elem2.addEventListener("click",() => {
    console.log("elem2 was clicked")
})

elem1.addEventListener("click",() => {
    console.log("elem1 was clicked")
}) 

elem3.addEventListener("click", () => {
    console.log("elem3 was clicked")
    elem3.style.borderRadius = "30px"
    elem3.style.border = "10px pink solid"
})

const elem4 = document.querySelector(".div-1")
console.log(elem4)

elem4.addEventListener("click", () => {
    console.log("elem4 was clicked")
    elem4.style.backgroundColor = "blue"
    elem4.style.borderRadius = "20px"
    elem4.style.width = "300px"
    elem4.style.color = "limeGreen"
})


const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    console.log("btn was clicked")
    btn.remove()
})