// let fruit = "apple"
// let veggi = "Pototo"
//    let element = document.getElementById("title") 
//    console.log(element)
//    console.log(element.textContent)
//    let info = document.getElementsByClassName("info")
//    console.log(info,"info")
//          let p = document.getElementsByTagName('p')
//    //             console.log(p)
//                document.querySelector("#title")
//             const   classSelect =document.querySelector(".info")
//             const   classSelect2 =document.querySelectorAll(".info")
//             console.log(classSelect,'single')
//             console.log(classSelect2 ,'aLL')
   
//    element.innerText = fruit
  
//  element.innerHTML = veggi
//    element.innerHTML = "<h1>I am h1</h1>"

// document.getElementById("title").innerHTML =  "<h1>hello, welcome </h1>"
// // document.getElementById("title").style.color = "red"
// // document.getElementById("title").style.background = "blue"
// // document.getElementsByClassName("info").style.background = "blue"
// document.querySelector(".info").style.color = "green"
  
//  element.innerHTML = veggi



//  

document.getElementById('formSubmit').addEventListener('submit', function(event){
   event.preventDefault()
   console.log(event)
   let value1 =document.getElementById('email').value
document.getElementById('display').innerHTML =value1
})

let token1 = localStorage.getItem("token")
document.getElementById('token').innerHTML = token1
let token2 = 'jbhafdskagFKJZNBCjklvhfsoifdtryuiojkl;sdfghjmk,bvfghjkjhgfdcvmki87654ewscvg'
localStorage.setItem('token2',token2)
localStorage.removeItem('token')
localStorage.clear()
let token3 = "hkfyxchvjbklmnbvcfdrtyuiokl,m bvgftyu"

sessionStorage.setItem('token3', token3)
document.getElementById('token').innerHTML=sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")
sessionStorage.removeItem('token')
sessionStorage.clear()