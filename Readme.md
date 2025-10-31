day-1
29/10/2025
javascript : prg: lang: used to make web page dynamic and interactive.
internal and external file 
string: set of char written inside the quotes("", '')

variable: store data
type/declaration
var: can redeclare and reassign
let : not allowed to redelaration but can reassign
const: not allowed to redelaration and reassign

day-2
30/10/2025

Data Types:
2 types 
1. primitve 
2. non-primitive

1. primitive 

string -- set of char written inside the quotes("", '')
number -- intiger decimal, float (1, 2.3, 0.34)
boolean - - tue/false
Undefined - declare but not assigned (impicily compailer says)
null - empty value;

  typeof()- to find type of variables

  non-primitive

  Array,  object and function

  Array - collection of data
  const alphabet =[a,b,c]
  index-index is the position number of elements in array(starts from 0 to ..)
  length of arr = total number of elements

object

let students ={
    name : "Riyas",
    age  : 23,
    city : "vadachennai"

}

operators

1. Arithmetic operators

+ --> addition
- ---> subtraction
* ---> multiplication
/ ---> devision
% ---> modulus 5%2  
**  ---> Exponentiation 

2. comparison operators

   ==  --> equal(loose )
   === -->  equal(strict )
   !=  --->not equal
   !== ---> stric not equal
   > --> greater than
   < --> less than 
   >= -- >greater than or equal to
   <= -- >less than than or equal to

   3. Logical operators

   && --> admin--> username and password 
            username === "admin" && password === "1234"

    || -->    username === "admin" || password === "1234"      

    !  --> !true
&&
    T+T --> T 
    T + F --> F 
    F + T --> F 
     F+F --> F  
||
    T+T --> T 
    T + F --> T 
    F + T --> T 
     F+F --> F  

     !

    T+T --> F
    T + F --> T 
    F + T --> T
     F+F --> T  


     4. Assignment operator

     = --> a=5
     += -->  a=a+2    a+=2
     -= ---> a=a-2    a-=2
     *= ---> a=a*2    a*=2
     /= ---> a=a/2    a/=2


let a=10;
a ||= 0    //  a remains 30 because it's truthy
a= a || 0 
