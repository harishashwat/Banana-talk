let btnTranslate = document.querySelector("#submit")
let textArea = document.querySelector("#text-input")
let  outputDiv = document.querySelector("#output")



function clickHandeler(){
    outputDiv.innerText = "yoyooyoyo: " + textArea.value
}

btnTranslate.addEventListener('click',clickHandeler)