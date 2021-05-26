var btnTranslate=document.querySelector("#btn-translate");

var txtInput=document.querySelector("#txt-input");

var outputDiv=document.querySelector("#output");

var serverURL="	https://api.funtranslations.com/translate/minion.json";

function errorHandler(error){
    console.log("error occured,error");
}

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}


btnTranslate.addEventListener("click",function clickHandler(){
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })
    .catch(errorHandler)
})


