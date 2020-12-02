var translation=document.querySelector("#translate-options");
var intext=document.querySelector("#text-input");
var btnTranslate=document.querySelector("#translate-btn");
var outtext=document.querySelector("#text-output");
var serverURL="https://api.funtranslations.com/translate/"

function errorHandler(error){
console.log("Server not Responding"+error);
alert("Sorry, You have exhausted 5 trials or Something went wrong with the server");
}

function translateURL(option,text){

    return serverURL+option+"?"+"text="+text;
}

function clickTranslateHandler(){
    fetch(translateURL(translation.value,intext.value)).then(response=>response.json()).then(json=>outtext.innerText=json.contents.translated).catch(errorHandler);
}

//click response
btnTranslate.addEventListener("click",clickTranslateHandler);