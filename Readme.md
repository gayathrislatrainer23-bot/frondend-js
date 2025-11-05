day-1
29/10/2025
javascript : prg: lang: used to make web page dynamic and interactive.
internal and external file 
string: set of char written inside the quotes("", '')

variable: store data
type/declaration-- creating a value
var: can redeclare and reassign
let : not allowed to redelaration but can reassign
const: not allowed to redelaration and reassign
initialization- assign a value
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
day-3
31/10/2025


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


day-4
3/11/2025

1. if(condition){
    <!--   -->
}

2.   if(condition){
    <!--  condition: true -->
}else{
 <!--  condition: false -->
}
<!-- else if ladder -->

3. if(condition1){
    <!--  condition1: true -->   
}else if(condition2){
    <!--  condition2: true -->   
}elae if(condition3){
        <!--  condition3: true -->   
}else{
    <!--  condition all : false --> 
}

4. nested condition

 if(condition1){
 if(condition2){
    <!--   condition1 && condition2: true -->     
}
}

<!-- ternary operator -->

condition ? true : false

task :  print the number is even or odd.

day-5
4/11/2025
1.  switch
2. loop
let number 
swich (number){
    case value1:
    console.log(" ")
    break;
    case value2:
    console.log(")
    case value1:
    console.log(")
}
task in class 1.: trafic light : light= ??
               light= "red" stop
               light= "green" go
               light= "yellow" get ready
               light= ""        invalid signal


2.  fruit = apple
            orenge

3. variable decleare but not assigned implicitly it become undefined

loop
// for loop
for(initialization; condition; increment){

}
for(let i = 0; i<4;i++){
    console.log(i)
}
<!-- first itration -->
i=0
print 0
check condition 0<4 ===> true
i++ --> i=0+1=1
<!-- 2nd itration -->

print 1
i=1
check condition 1<4 ===>true
i++ --> i=1+1=2
<!-- 3rd itration -->

print 2
i=2
check condition 2<4 ===>true
i++ --> i=2+1=3
<!-- 4rd itration -->

print 3
i=3
check condition 3<4 ===>true
i++ --> i=3+1=4
<!-- 5rd itration -->

print 4
i=4
check condition 4<4 ===>false

out

a++ - post-increment
++a - pre-increment

a= 5
b= a++
a =6
b= 5

c= 8
d= ++c
c= 9
d=9

class- task: print even number 1 to 15

day-6
5/11/2025

<!-- while loop -->
while(condition){
code
}

let i = 1
while(i<2){
console.log(i)
    i++;
}

 let bigNum = 123456
 //find the digit of this number

 block scoped- {} let, const
 function scoped /Global
 global scope - var

 <!-- sum of first 5 number -->
 