

let URL = ("https://api.dictionaryapi.dev/api/v2/entries/en/")
async function test() {
  let input=document.querySelector("input")
  let defini=document.getElementById("defini")
  let example1=document.getElementById("example1")
     let word=input.value
    let Response = await fetch(URL + word)
    let usabledata = await Response.json()
    // console.log(usabledata)
    // console.log(usabledata[0])
    // console.log(usabledata[0].meanings)

   
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
let n=Math.floor(Math.random()*definiArry.length)
defini.innerText=(definiArry[n])
defini.style.color="black"



    let exampleArry=[]
    // console.log("exaple")
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
  let m=Math.floor(Math.random()*exampleArry.length)
  example1.innerText=(exampleArry[m])
  example2.innerText=(exampleArry[m-1])
  example1.style.color="black"
  example2.style.color="black"



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
      
  

}
// test()



// let input=document.querySelector("input")
// console.log(input)
let btn=document.querySelector("button")
// console.log(btn)
let character=document.getElementById("name")
// console.log(character)
let voice=document.getElementById("voice")
// console.log(voice)
let slesh=document.getElementById("slesh")
// console.log(slesh)
let defini=document.getElementById("defini")
// console.log(defini)
let example1=document.getElementById("example1")
// console.log(example1)
let example2=document.getElementById("example2")
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
