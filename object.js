// 1. 
const student = new Object();
// console.log(typeof(student))

student.name = "Lakshaya";
student.age = 18
 console.log(student)

//  2.
const animal ={
    type: "Mammal",
    sound:"unknown"
}
animal.sound="meow"
console.log(animal)
const dog= Object.create(animal)
dog.name = "Lab"
dog.sound ="bark"

// console.log(animal)
// console.log(dog)
// console.log(dog.name)
// console.log(dog["name"])
// dog.age =2
// console.log(dog)
// console.log(animal)

// methods

const person = {
    name : "Gayathri",
    greet: function (){
        console.log("hello "+ this.name)
    }
}
person.greet()

// keys
let keys=Object.keys(person)
// console.log(keys)


// values 
let values =Object.values(person)
console.log(values )
// ["name","greet"]

// object.entries key,value array
let keyAndvalue = Object.entries(person)
// [["name","Gayathri"],["greet","f"]]

console.log(keyAndvalue)
const sla ={course:"Mern"}
// Object.assign(target ,sourse)
// Object.assign(target ,s1,s2,s3)
Object.assign(sla ,student)
console.log(sla)
