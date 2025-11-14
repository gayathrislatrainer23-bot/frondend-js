let fruit = "apple"
let veggi = "Pototo"
   let element =document.getElementById("title") 
//    console.log(element)
//    console.log(element.textContent)
   let info = document.getElementsByClassName("info")
   console.log(info,"info")
         let p = document.getElementsByTagName('p')
   //             console.log(p)
   //             document.querySelector("#title")
            const   classSelect =document.querySelector(".info")
            const   classSelect2 =document.querySelectorAll(".info")
            console.log(classSelect,'single')
            console.log(classSelect2 ,'aLL')
   
   element.innerText = fruit
   // element.innerHTML = veggi
   element.innerHTML = "<h1>I am h1</h1>"

document.getElementById("title").innerHTML =  "<h1>hello, welcome </h1>"
document.getElementById("title").style.color = "red"
document.getElementById("title").style.background = "blue"
// document.getElementsByClassName("info").style.background = "blue"
document.querySelector(".info").style.color = "green"
