
function startquiz() {
const start=document.getElementById("startbtn");
const quizinfo=document.getElementById("quizinfo");

quizinfo.style.display="block";
start.style.display="none";
} 
function exitQuiz(){
	const start=document.getElementById("startbtn");
	const exit=document.getElementById('exitbtn')
	const cont=document.getElementById('contbtn')
	quizinfo.style.display="none";
    start.style.display="block";

}
let quecont=0
let quenumb=1
let counter;
let timevalue=15
let userscore=0

function contQuiz(){
	const quizbox=document.getElementById("quizbox");
	const quizinfo=document.getElementById("quizinfo");
	quizinfo.style.display="none";
	quizbox.style.display="block";
	showquestions(0);
	bottomqueCount(1)
	starttimer(timevalue )
}


function next(){
	if (quecont < questions.length-1) {
		quecont++
		quenumb++
		showquestions(quecont)
		bottomqueCount(quenumb)
		clearInterval(counter)
		starttimer(timevalue)
		nextbtn.style.display="none";
		
	}else{
		showResultBox()
	}
	
	}
	
	
function showquestions(index){ 
	const quetext=document.getElementById('quetext')
	const optionlist=document.getElementById('optionlist')
	let quetag= '<span>' + questions[index].numb+'.' + questions[index].question + '</span>'
	let optiontag='<div class="option" <span>'+questions[index].options[0]+'</span></div>'
				+'<div class="option" <span>'+questions[index].options[1]+'</span></div>'
				+'<div class="option" <span>'+questions[index].options[2]+'</span></div>'
				+'<div class="option" <span>'+questions[index].options[3]+'</span></div>'
	quetext.innerHTML =quetag;
	optionlist.innerHTML=optiontag
	const option=optionlist.querySelectorAll(".option")
	for (var i = 0; i < option.length; i++) {
		option[i].setAttribute("onClick","optionSelected(this)")
	}

}
let tickicon='<div class="icon-check"><i class="fas fa-check"></i></div>'
let crossicon='<div class="icon-cross"><i class="fas fa-times"></i></div>'

function optionSelected(answer){
	clearInterval(counter)
	const optionlist=document.getElementById('optionlist')
	const nextbtn=document.getElementById("nextbtn")
	let userAns=answer.textContent;
	let correctAns=questions[quecont].answer
	let allOptions=optionlist.children.length
	if (userAns===correctAns) { 
		userscore+=1
answer.classList.add("correct")
answer.insertAdjacentHTML("beforeend",tickicon)

	}else{ 
answer.classList.add("incorrect")
answer.insertAdjacentHTML("beforeend",crossicon) 
//also show correct answer
for (var i = 0; i < allOptions; i++) {
	if(optionlist.children[i].textContent==correctAns){
		optionlist.children[i].setAttribute("class","option correct")
	}
	
}

	}

	//disable all options once an answer is selected
	for (var i = 0; i < allOptions; i++) {
		optionlist.children[i].classList.add("disabled")

	}
	nextbtn.style.display="block";

}


function bottomqueCount(index ) {
	const totalque=document.getElementById('totalque')
	let bottomcount='<span><p>'+ index +'</p> of <p>' +questions.length+'</p>Questions</span>'
	totalque.innerHTML=bottomcount
}
 function showResultBox() {
	const resultbox=document.getElementById('resultbox')
	const start=document.getElementById('startbtn')
	const replay=document.getElementById('replay')
	const quit=document.getElementById('quit')
	const score=document.getElementById("score");
	let scoreholder='<span>you got <p>'+userscore+'</p>out of<p>5</p></span>'
	const quizbox=document.getElementById('quizbox')
	const quizinfo=document.getElementById('quizinfo')

	quizbox.style.display="none";
    resultbox.style.display="block";
    score.innerHTML=scoreholder

    replay.addEventListener("click",function(){
    	resultbox.style.display="none";
        start.style.display="block";

    })
	
}

function starttimer(time){
	const timecount=document.getElementById('timersec')
	counter=setInterval(timer,1000)
	function timer(){
		timecount.textContent=time
		time-- 
		if (time<9) {
		let addzero =timecount.textContent
		timecount.textContent="0"+addzero	
		}
		if (time<0) {
			clearInterval(counter)
			timecount.textContent="00"
			let correctAns=questions[quecont].answer
	       let allOptions=optionlist.children.length

		for (var i = 0; i < allOptions; i++) {
	if(optionlist.children[i].textContent==correctAns){
		optionlist.children[i].setAttribute("class","option correct")
	}
	
	
}
for (var i = 0; i < allOptions; i++) {
		optionlist.children[i].classList.add("disabled")

	}
	nextbtn.style.display="block";

		}

	}
}


