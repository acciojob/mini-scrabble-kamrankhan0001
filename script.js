//your code here
let evalutedText=document.getElementById("evaluatedText");
let letterCount=document.getElementById("letterCount");
 evalutedText.addEventListener('input'),()=>{
	let str = evalutedText.value;
	letterCount.innerHtml=`${str.length}`;
});