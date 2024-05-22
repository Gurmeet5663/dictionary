let URL = ("https://api.dictionaryapi.dev/api/v2/entries/en/")
async function test() {
    // let upperh1=document.getElementsByClassName("upperh")[0]
    // let upperh2=document.getElementsByClassName("upperh")[1]
    let defini=document.getElementById("defini")
    //   let definiM=document.getElementById("difiniM")
    //   let example1=document.getElementById("example1")
    let examplesM=document.getElementById("examplesM")
    let here=document.getElementById("here")
    clearAllP()
    let input=document.querySelector("input")
     
     let word=input.value
    // let word="go"
    let Response = await fetch(URL + word)
    let usabledata = await Response.json()
    // console.log(usabledata)
    // console.log(usabledata[0])
    // console.log(usabledata[0].meanings)
     upperh1.style.justifyContent="center"
     upperh1.style.borderBottom= "1px solid black";
     upperh2.style.justifyContent="center"
     upperh2.style.borderBottom= "1px solid black";
    
    character.innerText=word
    // console.log("definitions")
    let definiArry=[]
    let a = usabledata[0].meanings.length
    for (let i = 0; i < a; i++) {
        let b = usabledata[0].meanings[i].definitions.length
        for (let x = 0; x < b; x++) {
            // console.log(usabledata[0].meanings[i].definitions[x].definition)
            definiArry.push(usabledata[0].meanings[i].definitions[x].definition)
        }
    }
    // console.log(definiArry)
    let n=definiArry.length>10 ? 10:definiArry.length
    here.style.overflow=definiArry.length>5?"scroll":null
for(let i=0 ; i<n;i++){
    const nthdefini = document.createElement("p");
    nthdefini.innerText = `difinition${i+1} : ${(definiArry[i])}`;
    nthdefini.style.fontSize="20px"
    nthdefini.style.marginLeft="20px"
    nthdefini.style.color="black"
    here.appendChild(nthdefini);
    // defini.innerText=(definiArry[i])
}
// definiM.style.color="black"



// console.log("exaple")
let exampleArry=[]
    let k = usabledata[0].meanings.length
    for (let i = 0; i < k; i++) {
        let b = usabledata[0].meanings[i].definitions.length
        for (let x = 0; x < b; x++) {
            if(usabledata[0].meanings[i].definitions[x].example){
                // console.log(usabledata[0].meanings[i].definitions[x].example)
                exampleArry.push(usabledata[0].meanings[i].definitions[x].example)
            }
        }
    }
  // console.log(exampleArry)
  let m=exampleArry.length>10 ? 10:exampleArry.length
  examplesM.style.overflow=exampleArry.length>5?"scroll":null
  for(let i=0;i<m;i++){
    const nthexample = document.createElement("p");
    nthexample.innerText = `example${i+1} : ${(exampleArry[i])}`;
    examplesM.appendChild(nthexample);
    examplesM.lastElementChild.style.color="black"
  }
//   example1.innerText=(exampleArry[m])
//   example2.innerText=(exampleArry[m-1])
//   example1.style.color="black"



    // console.log("audio")
     let audioArry=[]
    let l = usabledata[0].phonetics.length
    for (let i = 0; i < l; i++) {
        // let b = usabledata[0].phometics[i].length
            if(usabledata[0].phonetics[i].audio){
                // console.log(usabledata[0].phonetics[i].audio)
                audioArry.push(usabledata[0].phonetics[i].audio)
            }
        
    }

    // console.log(audioArry)
    let c=Math.floor(Math.random()*audioArry.length)
    let audio = new Audio(audioArry[c])
      audio.play()
      
    //  

}
// test()

let upperh1=document.getElementsByClassName("upperh")[0]
let upperh2=document.getElementsByClassName("upperh")[1]
let examplesM=document.getElementById("examplesM")
let here=document.getElementById("here")
let input=document.querySelector("input")
// console.log(input)
let btn=document.querySelector("#search")
// console.log(btn)
let character=document.getElementById("name")
// console.log(character)
let voice=document.getElementById("voice")
// console.log(voice)
let slesh=document.getElementById("slesh")
// console.log(slesh)
// let defini=document.getElementById("defini")
// console.log(defini)
// let example1=document.getElementById("example1")
// console.log(example1)
// let example2=document.getElementById("example2")
let examples=document.getElementById("examples")
// console.log(example2)

btn.addEventListener("click",test)

async function audiov(){
  let input=document.querySelector("input")
  let word=input.value
  let Response = await fetch(URL + word)
  let usabledata = await Response.json()
  let audioArry=[]
  let l = usabledata[0].phonetics.length
  for (let i = 0; i < l; i++) {
      // let b = usabledata[0].phometics[i].length
          if(usabledata[0].phonetics[i].audio){
              // console.log(usabledata[0].phonetics[i].audio)
              audioArry.push(usabledata[0].phonetics[i].audio)
          }
      
  }
  let audio = new Audio(audioArry[0])
  audio.play()

}





voice.addEventListener("click",audiov)

function clearAll(){
    examplesM.innerHTML=null
    examplesM.style.overflow=null
    here.innerHTML=null
    here.style.overflow=null
    character.innerText="Word"
    input.value=null
    upperh1.style.justifyContent=null
    upperh1.style.borderBottom= null
    upperh2.style.justifyContent=null
    upperh2.style.borderBottom= null
}
function clearAllP(){
    examplesM.innerHTML=null
    examplesM.style.overflow=null
    here.innerHTML=null
    here.style.overflow=null
    character.innerText="Word"
    
}




