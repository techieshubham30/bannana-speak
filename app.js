var btnTranslate=document.querySelector("#btn-translate");

var txtInput=document.querySelector("#txt-input");

var outputDiv=document.querySelector("#output")


btnTranslate.addEventListener("click",function clickHandler(){
    outputDiv.innerText= `bannana language : ${txtInput.value}`;
})