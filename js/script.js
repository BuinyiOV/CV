
"use strict"

//preloader--------------------------------------------------------------------


window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
	document.body.classList.add('loaded');
	document.body.classList.remove('loaded_hiding');
	}, 500);
}

//----------------------------------------------------------------

const bodyElement = document.body;

const cardWrap = document.querySelectorAll(`.wrap`);
const wrap = cardWrap [0];

const cardLeader = document.querySelectorAll('.experience__leader');
const leader = cardLeader [0];

const cardOperator = document.querySelectorAll('.experience__operator');
const operator = cardOperator [0];

const cardTeacher = document.querySelectorAll('.experience__teacher');
const teacher = cardTeacher [0];

const cardOwner = document.querySelectorAll('.experience__owner');
const owner = cardOwner [0];

const cardTraveler = document.querySelectorAll('.works__traveler');
const traveler = cardTraveler [0];

const cardMusic = document.querySelectorAll('.works__music');
const music = cardMusic [0];

const cardEducation = document.querySelectorAll('.education');
const education = cardEducation [0];

const cardCourses = document.querySelectorAll('.courses');
const courses = cardCourses [0];

const cardAdditionalInformation = document.querySelectorAll('.additional-information');
const additionalInformation = cardAdditionalInformation [0];

const html = document.querySelectorAll(`html`);
const htmlTeg = html [0];

let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
)

//-----------------------------------------------------

const h3 = document.querySelectorAll(`h3`);
const a = document.querySelectorAll(`a`);
const span = document.querySelectorAll(`span`);
const shadow = document.querySelectorAll(`.shadow`);
const borderRight = document.querySelectorAll(`.border-right`);
const borderLeft = document.querySelectorAll(`.border-left`);
const borderTop = document.querySelectorAll(`.border-top`);
const darkText = document.querySelectorAll(`.darktext`);

const bodyElementStyle = getComputedStyle(bodyElement);
const wrapElementStyle = getComputedStyle(wrap);



//------------------------------------------------------

const backgroundToggle = document.querySelector('.cl-toggle-switch');

backgroundToggle.addEventListener("mousedown", function (event) {
wrap.classList.toggle(`lightgradient`);
htmlTeg.classList.toggle(`darktext`);
if (bodyElementStyle.backgroundColor === "rgb(226, 226, 226)"){
	span.forEach (item=>{item.style.color = "black"});
	bodyElement.style.background = "rgb(0, 0, 0)";}
	else if (bodyElementStyle.backgroundColor === "rgb(0, 0, 0)"){
		span.forEach (item=>{item.style.color = "white"});
		bodyElement.style.background = "rgb(226, 226, 226)";}
		else{};
		if (bodyElementStyle.backgroundColor === "rgb(226, 226, 226)"){
			shadow.forEach (item=>{item.style.textShadow = "0px 0px 15px white, 0px 0px 15px white"});
			shadow.forEach (item=>{item.style.dropShadow = "0px 0px 15px white, 0px 0px 15px white"});
		
		}else if (bodyElementStyle.backgroundColor === "rgb(0, 0, 0)"){
			shadow.forEach (item=>{item.style.textShadow = "0px 0px 5px black, 0px 0px 15px black"});
			shadow.forEach (item=>{item.style.dropShadow = "0px 0px 5px black, 0px 0px 5px black"});
		
		}else {}
});


//-------------------------------------------------------------
const colorRed = document.querySelector('.red');
colorRed.addEventListener("mousedown", function (event) {
span.forEach (item=>{item.style.color = "red"});
shadow.forEach (item=>{item.style.textShadow = "0px 0px 15px red, 0px 0px 15px red"});
shadow.forEach (item=>{item.style.dropShadow = "0px 0px 15px red, 0px 0px 15px red"});
borderRight.forEach (item=>{item.style.borderRight = "1px solid red"});
borderRight.forEach (item=>{item.style.borderBottom = "1px solid red"});
borderLeft.forEach (item=>{item.style.borderLeft = "1px solid red"});
borderLeft.forEach (item=>{item.style.borderBottom = "1px solid red"});
borderTop.forEach (item=>{item.style.borderTop = "1px solid red"});
borderTop.forEach (item=>{item.style.borderBottom = "1px solid red"});
bodyElement.style.background = "red";

});

//-------------------------------------------------------------

const colorYellow = document.querySelector('.yellow');
colorYellow.addEventListener("mousedown", function (event) {
span.forEach (item=>{item.style.color = "yellow"});
shadow.forEach (item=>{item.style.textShadow = "0px 0px 15px yellow, 0px 0px 15px yellow"});
shadow.forEach (item=>{item.style.dropShadow = "0px 0px 15px yellow, 0px 0px 15px yellow"});
borderRight.forEach (item=>{item.style.borderRight = "1px solid yellow"});
borderRight.forEach (item=>{item.style.borderBottom = "1px solid yellow"});
borderLeft.forEach (item=>{item.style.borderLeft = "1px solid yellow"});
borderLeft.forEach (item=>{item.style.borderBottom = "1px solid yellow"});
borderTop.forEach (item=>{item.style.borderTop = "1px solid yellow"});
borderTop.forEach (item=>{item.style.borderBottom = "1px solid yellow"});
bodyElement.style.background = "yellow";

});

/*
colorYellow.addEventListener("mousedown", function (event) {

	if (scrollWidth<1000){
	borderRight.forEach (item=>{item.style.borderRight = "10px solid yellow"});
	borderRight.forEach (item=>{item.style.borderBottom = "10px solid yellow"});
	borderLeft.forEach (item=>{item.style.borderLeft = "10px solid yellow"});
	borderLeft.forEach (item=>{item.style.borderBottom = "10px solid yellow"});
	borderTop.forEach (item=>{item.style.borderTop = "10px solid yellow"});
	borderTop.forEach (item=>{item.style.borderBottom = "10px solid yellow"});
	bodyElement.style.background = "yellow";}
	else {}
	
	
	});

	*/

//-------------------------------------------------------------

const colorGreen = document.querySelector('.green');
colorGreen.addEventListener("mousedown", function (event) {
span.forEach (item=>{item.style.color = "rgb(0, 234, 12)"});
shadow.forEach (item=>{item.style.textShadow = "0px 0px 15px rgb(0, 234, 12), 0px 0px 15px rgb(0, 234, 12)"});
shadow.forEach (item=>{item.style.dropShadow = "0px 0px 15px rgb(0, 234, 12), 0px 0px 15px rgb(0, 234, 12)"});
borderRight.forEach (item=>{item.style.borderRight = "1px solid rgb(0, 234, 12)"});
borderRight.forEach (item=>{item.style.borderBottom = "1px solid rgb(0, 234, 12)"});
borderLeft.forEach (item=>{item.style.borderLeft = "1px solid rgb(0, 234, 12)"});
borderLeft.forEach (item=>{item.style.borderBottom = "1px solid rgb(0, 234, 12)"});
borderTop.forEach (item=>{item.style.borderTop = "1px solid rgb(0, 234, 12)"});
borderTop.forEach (item=>{item.style.borderBottom = "1px solid rgb(0, 234, 12)"});
bodyElement.style.background = "rgb(0, 234, 12)";

});
//-------------------------------------------------------------

const colorBlue = document.querySelector('.blue');
colorBlue.addEventListener("mousedown", function (event) {
span.forEach (item=>{item.style.color = "blue"});
shadow.forEach (item=>{item.style.textShadow = "0px 0px 15px blue, 0px 0px 15px blue"});
shadow.forEach (item=>{item.style.dropShadow = "0px 0px 15px blue, 0px 0px 15px blue"});
borderRight.forEach (item=>{item.style.borderRight = "1px solid blue"});
borderRight.forEach (item=>{item.style.borderBottom = "1px solid blue"});
borderLeft.forEach (item=>{item.style.borderLeft = "1px solid blue"});
borderLeft.forEach (item=>{item.style.borderBottom = "1px solid blue"});
borderTop.forEach (item=>{item.style.borderTop = "1px solid blue"});
borderTop.forEach (item=>{item.style.borderBottom = "1px solid blue"});
bodyElement.style.background = "blue";

});
//-------------------------------------------------------------

const colorPink = document.querySelector('.pink');
colorPink.addEventListener("mousedown", function (event) {
span.forEach (item=>{item.style.color = "rgb(253, 36, 170)"});
shadow.forEach (item=>{item.style.textShadow = "0px 0px 15px rgb(253, 36, 170), 0px 0px 15px rgb(253, 36, 170)"});
shadow.forEach (item=>{item.style.dropShadow = "0px 0px 15px rgb(253, 36, 170), 0px 0px 15px rgb(253, 36, 170)"});
borderRight.forEach (item=>{item.style.borderRight = "1px solid rgb(253, 36, 170)"});
borderRight.forEach (item=>{item.style.borderBottom = "1px solid rgb(253, 36, 170)"});
borderLeft.forEach (item=>{item.style.borderLeft = "1px solid rgb(253, 36, 170)"});
borderLeft.forEach (item=>{item.style.borderBottom = "1px solid rgb(253, 36, 170)"});
borderTop.forEach (item=>{item.style.borderTop = "1px solid rgb(253, 36, 170)"});
borderTop.forEach (item=>{item.style.borderBottom = "1px solid rgb(253, 36, 170)"});
bodyElement.style.background = "rgb(253, 36, 170)";

});
//-------------------------------------------------------------
const colorMono = document.querySelector('.mono');
colorMono.addEventListener("mousedown", function (event) {
if (wrap.classList.contains(`lightgradient`)){
borderRight.forEach (item=>{item.style.borderRight = "1px solid white"});
borderRight.forEach (item=>{item.style.borderBottom = "1px solid white"});
borderLeft.forEach (item=>{item.style.borderLeft = "1px solid white"});
borderLeft.forEach (item=>{item.style.borderBottom = "1px solid white"});
borderTop.forEach (item=>{item.style.borderTop = "1px solid white"});
borderTop.forEach (item=>{item.style.borderBottom = "1px solid white"});
bodyElement.style.background = "rgb(0, 0, 0)";

} else {
borderRight.forEach (item=>{item.style.borderRight = "1px solid white"});
borderRight.forEach (item=>{item.style.borderBottom = "1px solid white"});
borderLeft.forEach (item=>{item.style.borderLeft = "1px solid white"});
borderLeft.forEach (item=>{item.style.borderBottom = "1px solid white"});
borderTop.forEach (item=>{item.style.borderTop = "1px solid white"});
borderTop.forEach (item=>{item.style.borderBottom = "1px solid white"});
bodyElement.style.background = "rgb(226, 226, 226)";}

});

colorMono.addEventListener("mousedown", function (event) {
if (bodyElementStyle.backgroundColor === "rgb(226, 226, 226)"){
shadow.forEach (item=>{item.style.textShadow = "0px 0px 15px white, 0px 0px 15px white"});
shadow.forEach (item=>{item.style.dropShadow = "0px 0px 15px white, 0px 0px 15px white"});
span.forEach (item=>{item.style.color = "white"});

}else if (bodyElementStyle.backgroundColor === "rgb(0, 0, 0)"){
	shadow.forEach (item=>{item.style.textShadow = "0px 0px 5px black, 0px 0px 15px black"});
	shadow.forEach (item=>{item.style.dropShadow = "0px 0px 5px black, 0px 0px 5px black"});
	span.forEach (item=>{item.style.color = "black"});}
	else{}}
	);

//cursor-------------------------------------------------------------

const middle = document.querySelector(`.middle`);
middle.addEventListener("mousemove", function cursor (event){
const pointerX = event.clientX + window.pageXOffset + "px";
const pointerY = event.clientY + window.pageYOffset + "px";

const backgroundPointerColor = "0px 0px 15px " + bodyElementStyle.backgroundColor;
const pointer = document.createElement(`div`);
middle.prepend(pointer);
pointer.style.backgroundColor = bodyElementStyle.backgroundColor;
pointer.style.boxShadow = backgroundPointerColor;
pointer.style.top = pointerY;
pointer.style.left = pointerX;
pointer.classList.add(`cursor-pointer`);

function pointerDelete (pointer){
	pointer.remove ();
	setTimeout (pointerDelete, 2000, pointer);
};

setTimeout (pointerDelete, 2000, pointer);
});





