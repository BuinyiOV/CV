"use strict"; //preloader--------------------------------------------------------------------

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}; //----------------------------------------------------------------


var bodyElement = document.body;
var cardWrap = document.querySelectorAll(".wrap");
var wrap = cardWrap[0];
var cardLeader = document.querySelectorAll('.experience__leader');
var leader = cardLeader[0];
var cardOperator = document.querySelectorAll('.experience__operator');
var operator = cardOperator[0];
var cardTeacher = document.querySelectorAll('.experience__teacher');
var teacher = cardTeacher[0];
var cardOwner = document.querySelectorAll('.experience__owner');
var owner = cardOwner[0];
var cardTraveler = document.querySelectorAll('.works__traveler');
var traveler = cardTraveler[0];
var cardMusic = document.querySelectorAll('.works__music');
var music = cardMusic[0];
var cardEducation = document.querySelectorAll('.education');
var education = cardEducation[0];
var cardCourses = document.querySelectorAll('.courses');
var courses = cardCourses[0];
var cardAdditionalInformation = document.querySelectorAll('.additional-information');
var additionalInformation = cardAdditionalInformation[0];
var html = document.querySelectorAll("html");
var htmlTeg = html[0];
var scrollWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth); //-----------------------------------------------------

var h3 = document.querySelectorAll("h3");
var a = document.querySelectorAll("a");
var span = document.querySelectorAll("span");
var shadow = document.querySelectorAll(".shadow");
var borderRight = document.querySelectorAll(".border-right");
var borderLeft = document.querySelectorAll(".border-left");
var borderTop = document.querySelectorAll(".border-top");
var darkText = document.querySelectorAll(".darktext");
var bodyElementStyle = getComputedStyle(bodyElement);
var wrapElementStyle = getComputedStyle(wrap); //------------------------------------------------------

var backgroundToggle = document.querySelector('.cl-toggle-switch');
backgroundToggle.addEventListener("mousedown", function (event) {
  wrap.classList.toggle("lightgradient");
  htmlTeg.classList.toggle("darktext");

  if (bodyElementStyle.backgroundColor === "rgb(226, 226, 226)") {
    span.forEach(function (item) {
      item.style.color = "black";
    });
    bodyElement.style.background = "rgb(0, 0, 0)";
  } else if (bodyElementStyle.backgroundColor === "rgb(0, 0, 0)") {
    span.forEach(function (item) {
      item.style.color = "white";
    });
    bodyElement.style.background = "rgb(226, 226, 226)";
  } else {}

  ;

  if (bodyElementStyle.backgroundColor === "rgb(226, 226, 226)") {
    shadow.forEach(function (item) {
      item.style.textShadow = "0px 0px 15px white, 0px 0px 15px white";
    });
    shadow.forEach(function (item) {
      item.style.dropShadow = "0px 0px 15px white, 0px 0px 15px white";
    });
  } else if (bodyElementStyle.backgroundColor === "rgb(0, 0, 0)") {
    shadow.forEach(function (item) {
      item.style.textShadow = "0px 0px 5px black, 0px 0px 15px black";
    });
    shadow.forEach(function (item) {
      item.style.dropShadow = "0px 0px 5px black, 0px 0px 5px black";
    });
  } else {}
}); //-------------------------------------------------------------

var colorRed = document.querySelector('.red');
colorRed.addEventListener("mousedown", function (event) {
  span.forEach(function (item) {
    item.style.color = "red";
  });
  shadow.forEach(function (item) {
    item.style.textShadow = "0px 0px 15px red, 0px 0px 15px red";
  });
  shadow.forEach(function (item) {
    item.style.dropShadow = "0px 0px 15px red, 0px 0px 15px red";
  });
  borderRight.forEach(function (item) {
    item.style.borderRight = "1px solid red";
  });
  borderRight.forEach(function (item) {
    item.style.borderBottom = "1px solid red";
  });
  borderLeft.forEach(function (item) {
    item.style.borderLeft = "1px solid red";
  });
  borderLeft.forEach(function (item) {
    item.style.borderBottom = "1px solid red";
  });
  borderTop.forEach(function (item) {
    item.style.borderTop = "1px solid red";
  });
  borderTop.forEach(function (item) {
    item.style.borderBottom = "1px solid red";
  });
  bodyElement.style.background = "red";
}); //-------------------------------------------------------------

var colorYellow = document.querySelector('.yellow');
colorYellow.addEventListener("mousedown", function (event) {
  span.forEach(function (item) {
    item.style.color = "yellow";
  });
  shadow.forEach(function (item) {
    item.style.textShadow = "0px 0px 15px yellow, 0px 0px 15px yellow";
  });
  shadow.forEach(function (item) {
    item.style.dropShadow = "0px 0px 15px yellow, 0px 0px 15px yellow";
  });
  borderRight.forEach(function (item) {
    item.style.borderRight = "1px solid yellow";
  });
  borderRight.forEach(function (item) {
    item.style.borderBottom = "1px solid yellow";
  });
  borderLeft.forEach(function (item) {
    item.style.borderLeft = "1px solid yellow";
  });
  borderLeft.forEach(function (item) {
    item.style.borderBottom = "1px solid yellow";
  });
  borderTop.forEach(function (item) {
    item.style.borderTop = "1px solid yellow";
  });
  borderTop.forEach(function (item) {
    item.style.borderBottom = "1px solid yellow";
  });
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

var colorGreen = document.querySelector('.green');
colorGreen.addEventListener("mousedown", function (event) {
  span.forEach(function (item) {
    item.style.color = "rgb(0, 234, 12)";
  });
  shadow.forEach(function (item) {
    item.style.textShadow = "0px 0px 15px rgb(0, 234, 12), 0px 0px 15px rgb(0, 234, 12)";
  });
  shadow.forEach(function (item) {
    item.style.dropShadow = "0px 0px 15px rgb(0, 234, 12), 0px 0px 15px rgb(0, 234, 12)";
  });
  borderRight.forEach(function (item) {
    item.style.borderRight = "1px solid rgb(0, 234, 12)";
  });
  borderRight.forEach(function (item) {
    item.style.borderBottom = "1px solid rgb(0, 234, 12)";
  });
  borderLeft.forEach(function (item) {
    item.style.borderLeft = "1px solid rgb(0, 234, 12)";
  });
  borderLeft.forEach(function (item) {
    item.style.borderBottom = "1px solid rgb(0, 234, 12)";
  });
  borderTop.forEach(function (item) {
    item.style.borderTop = "1px solid rgb(0, 234, 12)";
  });
  borderTop.forEach(function (item) {
    item.style.borderBottom = "1px solid rgb(0, 234, 12)";
  });
  bodyElement.style.background = "rgb(0, 234, 12)";
}); //-------------------------------------------------------------

var colorBlue = document.querySelector('.blue');
colorBlue.addEventListener("mousedown", function (event) {
  span.forEach(function (item) {
    item.style.color = "blue";
  });
  shadow.forEach(function (item) {
    item.style.textShadow = "0px 0px 15px blue, 0px 0px 15px blue";
  });
  shadow.forEach(function (item) {
    item.style.dropShadow = "0px 0px 15px blue, 0px 0px 15px blue";
  });
  borderRight.forEach(function (item) {
    item.style.borderRight = "1px solid blue";
  });
  borderRight.forEach(function (item) {
    item.style.borderBottom = "1px solid blue";
  });
  borderLeft.forEach(function (item) {
    item.style.borderLeft = "1px solid blue";
  });
  borderLeft.forEach(function (item) {
    item.style.borderBottom = "1px solid blue";
  });
  borderTop.forEach(function (item) {
    item.style.borderTop = "1px solid blue";
  });
  borderTop.forEach(function (item) {
    item.style.borderBottom = "1px solid blue";
  });
  bodyElement.style.background = "blue";
}); //-------------------------------------------------------------

var colorPink = document.querySelector('.pink');
colorPink.addEventListener("mousedown", function (event) {
  span.forEach(function (item) {
    item.style.color = "rgb(253, 36, 170)";
  });
  shadow.forEach(function (item) {
    item.style.textShadow = "0px 0px 15px rgb(253, 36, 170), 0px 0px 15px rgb(253, 36, 170)";
  });
  shadow.forEach(function (item) {
    item.style.dropShadow = "0px 0px 15px rgb(253, 36, 170), 0px 0px 15px rgb(253, 36, 170)";
  });
  borderRight.forEach(function (item) {
    item.style.borderRight = "1px solid rgb(253, 36, 170)";
  });
  borderRight.forEach(function (item) {
    item.style.borderBottom = "1px solid rgb(253, 36, 170)";
  });
  borderLeft.forEach(function (item) {
    item.style.borderLeft = "1px solid rgb(253, 36, 170)";
  });
  borderLeft.forEach(function (item) {
    item.style.borderBottom = "1px solid rgb(253, 36, 170)";
  });
  borderTop.forEach(function (item) {
    item.style.borderTop = "1px solid rgb(253, 36, 170)";
  });
  borderTop.forEach(function (item) {
    item.style.borderBottom = "1px solid rgb(253, 36, 170)";
  });
  bodyElement.style.background = "rgb(253, 36, 170)";
}); //-------------------------------------------------------------

var colorMono = document.querySelector('.mono');
colorMono.addEventListener("mousedown", function (event) {
  if (wrap.classList.contains("lightgradient")) {
    borderRight.forEach(function (item) {
      item.style.borderRight = "1px solid white";
    });
    borderRight.forEach(function (item) {
      item.style.borderBottom = "1px solid white";
    });
    borderLeft.forEach(function (item) {
      item.style.borderLeft = "1px solid white";
    });
    borderLeft.forEach(function (item) {
      item.style.borderBottom = "1px solid white";
    });
    borderTop.forEach(function (item) {
      item.style.borderTop = "1px solid white";
    });
    borderTop.forEach(function (item) {
      item.style.borderBottom = "1px solid white";
    });
    bodyElement.style.background = "rgb(0, 0, 0)";
  } else {
    borderRight.forEach(function (item) {
      item.style.borderRight = "1px solid white";
    });
    borderRight.forEach(function (item) {
      item.style.borderBottom = "1px solid white";
    });
    borderLeft.forEach(function (item) {
      item.style.borderLeft = "1px solid white";
    });
    borderLeft.forEach(function (item) {
      item.style.borderBottom = "1px solid white";
    });
    borderTop.forEach(function (item) {
      item.style.borderTop = "1px solid white";
    });
    borderTop.forEach(function (item) {
      item.style.borderBottom = "1px solid white";
    });
    bodyElement.style.background = "rgb(226, 226, 226)";
  }
});
colorMono.addEventListener("mousedown", function (event) {
  if (bodyElementStyle.backgroundColor === "rgb(226, 226, 226)") {
    shadow.forEach(function (item) {
      item.style.textShadow = "0px 0px 15px white, 0px 0px 15px white";
    });
    shadow.forEach(function (item) {
      item.style.dropShadow = "0px 0px 15px white, 0px 0px 15px white";
    });
    span.forEach(function (item) {
      item.style.color = "white";
    });
  } else if (bodyElementStyle.backgroundColor === "rgb(0, 0, 0)") {
    shadow.forEach(function (item) {
      item.style.textShadow = "0px 0px 5px black, 0px 0px 15px black";
    });
    shadow.forEach(function (item) {
      item.style.dropShadow = "0px 0px 5px black, 0px 0px 5px black";
    });
    span.forEach(function (item) {
      item.style.color = "black";
    });
  } else {}
}); //cursor-------------------------------------------------------------

var middle = document.querySelector(".middle");
middle.addEventListener("mousemove", function cursor(event) {
  var pointerX = event.clientX + window.pageXOffset + "px";
  var pointerY = event.clientY + window.pageYOffset + "px";
  var backgroundPointerColor = "0px 0px 15px " + bodyElementStyle.backgroundColor;
  var pointer = document.createElement("div");
  middle.prepend(pointer);
  pointer.style.backgroundColor = bodyElementStyle.backgroundColor;
  pointer.style.boxShadow = backgroundPointerColor;
  pointer.style.top = pointerY;
  pointer.style.left = pointerX;
  pointer.classList.add("cursor-pointer");

  function pointerDelete(pointer) {
    pointer.remove();
    setTimeout(pointerDelete, 2000, pointer);
  }

  ;
  setTimeout(pointerDelete, 2000, pointer);
});