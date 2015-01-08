// JavaScript Document

/*room 515*/
document.getElementById("one").onclick= 
	function(){
		one();
	}
	
function one(){
	document.getElementById("one").style.backgroundImage = "url(img/515_H.gif)";
	document.getElementById("onePopUp").style.width = "1100px";
	document.getElementById("onePopUp").style.height = "500px";
	document.getElementById("onePopUp").style.opacity = "1";
	document.getElementById("onePopUp").style.zIndex = "50";
	
	document.getElementById("onePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("onePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("oneButton").onclick= 
	function(){
		onePop();
	}
	
document.getElementById("oneClose").onclick= 
	function(){
		onePopClose();
	}
	
function onePopClose(){
	document.getElementById("one").style.backgroundImage = "url(img/515.gif)";
	document.getElementById("onePopUp").style.width = "0px";
	document.getElementById("onePopUp").style.height = "0px";
	document.getElementById("onePopUp").style.opacity = "0";
	document.getElementById("onePopUp").style.zIndex = "1";
	
	document.getElementById("onePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("onePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function onePop(){
	document.getElementById("onePopUp").style.width = "0px";
	document.getElementById("onePopUp").style.height = "0px";
	document.getElementById("onePopUp").style.opacity = "0";
	document.getElementById("onePopUp").style.zIndex = "1";
	
	document.getElementById("onePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("onePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "580px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("oneArrowB").style.opacity = "1";
	document.getElementById("oneArrowB").style.height = "28px";
	
	document.getElementById("oneArrowA").style.opacity = "1";
	document.getElementById("oneArrowA").style.width = "110px";
	
	document.getElementById("oneArrowA").style.transition = "width .3s ease-out .8s,opacity .3s ease-out .8s";
	document.getElementById("oneArrowA").style.webkitTransition = "width .3s ease-out .8s,opacity .3s ease-out .8s";
	
	document.getElementById("oneArrowB").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("oneArrowB").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}



/*room 514*/
document.getElementById("two").onclick= 
	function(){
		two();
	}
	
function two(){
	document.getElementById("two").style.backgroundImage = "url(img/514_H.gif)";
	document.getElementById("twoPopUp").style.width = "1100px";
	document.getElementById("twoPopUp").style.height = "500px";
	document.getElementById("twoPopUp").style.opacity = "1";
	document.getElementById("twoPopUp").style.zIndex = "50";
	
	document.getElementById("twoPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("twoPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("twoButton").onclick= 
	function(){
		twoPop();
	}
	
document.getElementById("twoClose").onclick= 
	function(){
		twoPopClose();
	}
	
function twoPopClose(){
	document.getElementById("two").style.backgroundImage = "url(img/514.gif)";
	document.getElementById("twoPopUp").style.width = "0px";
	document.getElementById("twoPopUp").style.height = "0px";
	document.getElementById("twoPopUp").style.opacity = "0";
	document.getElementById("twoPopUp").style.zIndex = "1";
	
	document.getElementById("twoPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("twoPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function twoPop(){
	document.getElementById("twoPopUp").style.width = "0px";
	document.getElementById("twoPopUp").style.height = "0px";
	document.getElementById("twoPopUp").style.opacity = "0";
	document.getElementById("twoPopUp").style.zIndex = "1";
	
	document.getElementById("twoPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("twoPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "580px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("oneArrowB").style.opacity = "1";
	document.getElementById("oneArrowB").style.height = "28px";
	document.getElementById("oneArrowA").style.opacity = "1";
	document.getElementById("oneArrowA").style.width = "90px";
	document.getElementById("twoArrow").style.opacity = "1";
	document.getElementById("twoArrow").style.height = "16px";
	
	document.getElementById("twoArrow").style.transition = "height .3s linear 1.1s";
	document.getElementById("twoArrow").style.webkitTransition = "height .3s linear 1.1s";
	document.getElementById("oneArrowA").style.transition = "width .3s linear .8s";
	document.getElementById("oneArrowA").style.webkitTransition = "width .3s linear .8s";
	document.getElementById("oneArrowB").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("oneArrowB").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//513
document.getElementById("three").onclick= 
	function(){
		three();
	}
	
function three(){
	document.getElementById("three").style.backgroundImage = "url(img/513_H.gif)";
	document.getElementById("threePopUp").style.width = "1100px";
	document.getElementById("threePopUp").style.height = "500px";
	document.getElementById("threePopUp").style.opacity = "1";
	document.getElementById("threePopUp").style.zIndex = "50";
	
	document.getElementById("threePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("threePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("threeButton").onclick= 
	function(){
		threePop();
	}
	
document.getElementById("threeClose").onclick= 
	function(){
		threePopClose();
	}
	
function threePopClose(){
	document.getElementById("three").style.backgroundImage = "url(img/513.gif)";
	document.getElementById("threePopUp").style.width = "0px";
	document.getElementById("threePopUp").style.height = "0px";
	document.getElementById("threePopUp").style.opacity = "0";
	document.getElementById("threePopUp").style.zIndex = "1";
	
	document.getElementById("threePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("threePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function threePop(){
	document.getElementById("threePopUp").style.width = "0px";
	document.getElementById("threePopUp").style.height = "0px";
	document.getElementById("threePopUp").style.opacity = "0";
	document.getElementById("threePopUp").style.zIndex = "1";
	
	document.getElementById("threePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("threePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "431px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("threeArrow").style.opacity = "1";
	document.getElementById("threeArrow").style.height = "20px";
	
	document.getElementById("threeArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("threeArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//511

document.getElementById("four").onclick= 
	function(){
		four();
	}
	
function four(){
	document.getElementById("four").style.backgroundImage = "url(img/511_H.gif)";
	document.getElementById("fourPopUp").style.width = "1100px";
	document.getElementById("fourPopUp").style.height = "500px";
	document.getElementById("fourPopUp").style.opacity = "1";
	document.getElementById("fourPopUp").style.zIndex = "50";
	
	document.getElementById("fourPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fourPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("fourButton").onclick= 
	function(){
		fourPop();
	}
	
document.getElementById("fourClose").onclick= 
	function(){
		fourPopClose();
	}
	
function fourPopClose(){
	document.getElementById("four").style.backgroundImage = "url(img/511.gif)";
	document.getElementById("fourPopUp").style.width = "0px";
	document.getElementById("fourPopUp").style.height = "0px";
	document.getElementById("fourPopUp").style.opacity = "0";
	document.getElementById("fourPopUp").style.zIndex = "1";
	
	document.getElementById("fourPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("fourPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function fourPop(){
	document.getElementById("fourPopUp").style.width = "0px";
	document.getElementById("fourPopUp").style.height = "0px";
	document.getElementById("fourPopUp").style.opacity = "0";
	document.getElementById("fourPopUp").style.zIndex = "1";
	
	document.getElementById("fourPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("fourPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "418px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("fourArrow").style.opacity = "1";
	document.getElementById("fourArrow").style.height = "20px";
	
	document.getElementById("fourArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("fourArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}

//509
document.getElementById("five").onclick= 
	function(){
		five();
	}
	
function five(){
	document.getElementById("five").style.backgroundImage = "url(img/509_H.gif)";
	document.getElementById("fivePopUp").style.width = "1100px";
	document.getElementById("fivePopUp").style.height = "500px";
	document.getElementById("fivePopUp").style.opacity = "1";
	document.getElementById("fivePopUp").style.zIndex = "50";
	
	document.getElementById("fivePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fivePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("fiveButton").onclick= 
	function(){
		fivePop();
	}
	
document.getElementById("fiveClose").onclick= 
	function(){
		fivePopClose();
	}
	
function fivePopClose(){
	document.getElementById("five").style.backgroundImage = "url(img/509.gif)";
	document.getElementById("fivePopUp").style.width = "0px";
	document.getElementById("fivePopUp").style.height = "0px";
	document.getElementById("fivePopUp").style.opacity = "0";
	document.getElementById("fivePopUp").style.zIndex = "1";
	
	document.getElementById("fivePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("fivePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function fivePop(){
	document.getElementById("fivePopUp").style.width = "0px";
	document.getElementById("fivePopUp").style.height = "0px";
	document.getElementById("fivePopUp").style.opacity = "0";
	document.getElementById("fivePopUp").style.zIndex = "1";
	
	document.getElementById("fivePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("fivePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "170px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("fiveArrow").style.opacity = "1";
	document.getElementById("fiveArrow").style.height = "20px";
	
	document.getElementById("fiveArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("fiveArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}

//507
document.getElementById("six").onclick= 
	function(){
		six();
	}
	
function six(){
	document.getElementById("six").style.backgroundImage = "url(img/507_H.gif)";
	document.getElementById("sixPopUp").style.width = "1100px";
	document.getElementById("sixPopUp").style.height = "500px";
	document.getElementById("sixPopUp").style.opacity = "1";
	document.getElementById("sixPopUp").style.zIndex = "50";
	
	document.getElementById("sixPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("sixPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("sixButton").onclick= 
	function(){
		sixPop();
	}
	
document.getElementById("sixClose").onclick= 
	function(){
		sixPopClose();
	}
	
function sixPopClose(){
	document.getElementById("six").style.backgroundImage = "url(img/507.gif)";
	document.getElementById("sixPopUp").style.width = "0px";
	document.getElementById("sixPopUp").style.height = "0px";
	document.getElementById("sixPopUp").style.opacity = "0";
	document.getElementById("sixPopUp").style.zIndex = "1";
	
	document.getElementById("sixPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("sixPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function sixPop(){
	document.getElementById("sixPopUp").style.width = "0px";
	document.getElementById("sixPopUp").style.height = "0px";
	document.getElementById("sixPopUp").style.opacity = "0";
	document.getElementById("sixPopUp").style.zIndex = "1";
	
	document.getElementById("sixPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("sixPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "156px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("sixArrow").style.opacity = "1";
	document.getElementById("sixArrow").style.height = "20px";
	
	document.getElementById("sixArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("sixArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}

//506
document.getElementById("seven").onclick= 
	function(){
		seven();
	}
	
function seven(){
	document.getElementById("seven").style.backgroundImage = "url(img/506_H.gif)";
	document.getElementById("sevenPopUp").style.width = "1100px";
	document.getElementById("sevenPopUp").style.height = "500px";
	document.getElementById("sevenPopUp").style.opacity = "1";
	document.getElementById("sevenPopUp").style.zIndex = "50";
	
	document.getElementById("sevenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("sevenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("sevenButton").onclick= 
	function(){
		sevenPop();
	}
	
document.getElementById("sevenClose").onclick= 
	function(){
		sevenPopClose();
	}
	
function sevenPopClose(){
	document.getElementById("seven").style.backgroundImage = "url(img/506.gif)";
	document.getElementById("sevenPopUp").style.width = "0px";
	document.getElementById("sevenPopUp").style.height = "0px";
	document.getElementById("sevenPopUp").style.opacity = "0";
	document.getElementById("sevenPopUp").style.zIndex = "1";
	
	document.getElementById("sevenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("sixPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function sevenPop(){
	document.getElementById("sevenPopUp").style.width = "0px";
	document.getElementById("sevenPopUp").style.height = "0px";
	document.getElementById("sevenPopUp").style.opacity = "0";
	document.getElementById("sevenPopUp").style.zIndex = "1";
	
	document.getElementById("sevenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("sevenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("rightArrow").style.width = "115px";
	document.getElementById("rightArrow").style.opacity = "1";
	document.getElementById("sevenArrow").style.opacity = "1";
	document.getElementById("sevenArrow").style.height = "45px";
	
	document.getElementById("sevenArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("sevenArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
	document.getElementById("rightArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("rightArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}

//505
document.getElementById("eight").onclick= 
	function(){
		eight();
	}
	
function eight(){
	document.getElementById("eight").style.backgroundImage = "url(img/505_H.gif)";
	document.getElementById("eightPopUp").style.width = "1100px";
	document.getElementById("eightPopUp").style.height = "500px";
	document.getElementById("eightPopUp").style.opacity = "1";
	document.getElementById("eightPopUp").style.zIndex = "50";
	
	document.getElementById("eightPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("eightPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("eightButton").onclick= 
	function(){
		eightPop();
	}
	
document.getElementById("eightClose").onclick= 
	function(){
		eightPopClose();
	}
	
function eightPopClose(){
	document.getElementById("eight").style.backgroundImage = "url(img/505.gif)";
	document.getElementById("eightPopUp").style.width = "0px";
	document.getElementById("eightPopUp").style.height = "0px";
	document.getElementById("eightPopUp").style.opacity = "0";
	document.getElementById("eightPopUp").style.zIndex = "1";
	
	document.getElementById("eightPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("eightPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function eightPop(){
	document.getElementById("eightPopUp").style.width = "0px";
	document.getElementById("eightPopUp").style.height = "0px";
	document.getElementById("eightPopUp").style.opacity = "0";
	document.getElementById("eightPopUp").style.zIndex = "1";
	
	document.getElementById("eightPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("sevenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("rightArrow").style.width = "115px";
	document.getElementById("rightArrow").style.opacity = "1";
	document.getElementById("eightArrow").style.opacity = "1";
	document.getElementById("eightArrow").style.width = "22px";
	document.getElementById("sevenArrow").style.opacity = "1";
	document.getElementById("sevenArrow").style.height = "25px";
	
	document.getElementById("sevenArrow").style.transition = "height .3s linear .5s";
	document.getElementById("sevenArrow").style.webkitTransition = "height .3s linear .5s";
	
	document.getElementById("eightArrow").style.transition = "width .3s linear .8s";
	document.getElementById("eightArrow").style.webkitTransition = "width .3s linear .8s";
	
	document.getElementById("rightArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("rightArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//516
document.getElementById("nine").onclick= 
	function(){
		nine();
	}
	
function nine(){
	document.getElementById("nine").style.backgroundImage = "url(img/516_H.gif)";
	document.getElementById("ninePopUp").style.width = "1100px";
	document.getElementById("ninePopUp").style.height = "500px";
	document.getElementById("ninePopUp").style.opacity = "1";
	document.getElementById("ninePopUp").style.zIndex = "50";
	
	document.getElementById("ninePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("ninePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("nineButton").onclick= 
	function(){
		ninePop();
	}
	
document.getElementById("nineClose").onclick= 
	function(){
		ninePopClose();
	}
	
function ninePopClose(){
	document.getElementById("nine").style.backgroundImage = "url(img/516.gif)";
	document.getElementById("ninePopUp").style.width = "0px";
	document.getElementById("ninePopUp").style.height = "0px";
	document.getElementById("ninePopUp").style.opacity = "0";
	document.getElementById("ninePopUp").style.zIndex = "1";
	
	document.getElementById("ninePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("ninePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function ninePop(){
	document.getElementById("ninePopUp").style.width = "0px";
	document.getElementById("ninePopUp").style.height = "0px";
	document.getElementById("ninePopUp").style.opacity = "0";
	document.getElementById("ninePopUp").style.zIndex = "1";
	
	document.getElementById("ninePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("ninePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "590px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("nineArrowB").style.opacity = "1";
	document.getElementById("nineArrowB").style.height = "90px";
	document.getElementById("nineArrow").style.opacity = "1";
	document.getElementById("nineArrow").style.width = "95px";
	
	document.getElementById("nineArrowB").style.transition = "height .3s linear .5s";
	document.getElementById("nineArrowB").style.webkitTransition = "height .3s linear .5s";
	
	document.getElementById("nineArrow").style.transition = "width .3s linear .8s";
	document.getElementById("nineArrow").style.webkitTransition = "width .3s linear .8s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//508
document.getElementById("fourteen").onclick= 
	function(){
		fourteen();
	}
	
function fourteen(){
	document.getElementById("fourteen").style.backgroundImage = "url(img/508_H.gif)";
	document.getElementById("fourteenPopUp").style.width = "1100px";
	document.getElementById("fourteenPopUp").style.height = "500px";
	document.getElementById("fourteenPopUp").style.opacity = "1";
	document.getElementById("fourteenPopUp").style.zIndex = "50";
	
	document.getElementById("fourteenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fourteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("fourteenButton").onclick= 
	function(){
		fourteenPop();
	}
	
document.getElementById("fourteenClose").onclick= 
	function(){
		fourteenPopClose();
	}
	
function fourteenPopClose(){
	document.getElementById("fourteen").style.backgroundImage = "url(img/508.gif)";
	document.getElementById("fourteenPopUp").style.width = "0px";
	document.getElementById("fourteenPopUp").style.height = "0px";
	document.getElementById("fourteenPopUp").style.opacity = "0";
	document.getElementById("fourteenPopUp").style.zIndex = "1";
	
	document.getElementById("fourteenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("fourteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function fourteenPop(){
	document.getElementById("fourteenPopUp").style.width = "0px";
	document.getElementById("fourteenPopUp").style.height = "0px";
	document.getElementById("fourteenPopUp").style.opacity = "0";
	document.getElementById("fourteenPopUp").style.zIndex = "1";
	
	document.getElementById("fourteenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("fourteenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "162px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("fourteenArrow").style.opacity = "1";
	document.getElementById("fourteenArrow").style.height = "22px";
	
	document.getElementById("fourteenArrow").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("fourteenArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//510
document.getElementById("thirteen").onclick= 
	function(){
		thirteen();
	}
	
function thirteen(){
	document.getElementById("thirteen").style.backgroundImage = "url(img/510_H.gif)";
	document.getElementById("thirteenPopUp").style.width = "1100px";
	document.getElementById("thirteenPopUp").style.height = "500px";
	document.getElementById("thirteenPopUp").style.opacity = "1";
	document.getElementById("thirteenPopUp").style.zIndex = "50";
	
	document.getElementById("thirteenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("thirteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("thirteenButton").onclick= 
	function(){
		thirteenPop();
	}
	
document.getElementById("thirteenClose").onclick= 
	function(){
		thirteenPopClose();
	}
	
function thirteenPopClose(){
	document.getElementById("thirteen").style.backgroundImage = "url(img/510.gif)";
	document.getElementById("thirteenPopUp").style.width = "0px";
	document.getElementById("thirteenPopUp").style.height = "0px";
	document.getElementById("thirteenPopUp").style.opacity = "0";
	document.getElementById("thirteenPopUp").style.zIndex = "1";
	
	document.getElementById("thirteenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("thirteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function thirteenPop(){
	document.getElementById("thirteenPopUp").style.width = "0px";
	document.getElementById("thirteenPopUp").style.height = "0px";
	document.getElementById("thirteenPopUp").style.opacity = "0";
	document.getElementById("thirteenPopUp").style.zIndex = "1";
	
	document.getElementById("thirteenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("thirteenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "172px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("thirteenArrow").style.opacity = "1";
	document.getElementById("thirteenArrow").style.height = "22px";
	
	document.getElementById("thirteenArrow").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("thirteenArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//512
document.getElementById("twelve").onclick= 
	function(){
		twelve();
	}
	
function twelve(){
	document.getElementById("twelve").style.backgroundImage = "url(img/512_H.gif)";
	document.getElementById("twelvePopUp").style.width = "1100px";
	document.getElementById("twelvePopUp").style.height = "500px";
	document.getElementById("twelvePopUp").style.opacity = "1";
	document.getElementById("twelvePopUp").style.zIndex = "50";
	
	document.getElementById("twelvePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("twelvePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("twelveButton").onclick= 
	function(){
		twelvePop();
	}
	
document.getElementById("twelveClose").onclick= 
	function(){
		twelvePopClose();
	}
	
function twelvePopClose(){
	document.getElementById("twelve").style.backgroundImage = "url(img/512.gif)";
	document.getElementById("twelvePopUp").style.width = "0px";
	document.getElementById("twelvePopUp").style.height = "0px";
	document.getElementById("twelvePopUp").style.opacity = "0";
	document.getElementById("twelvePopUp").style.zIndex = "1";
	
	document.getElementById("twelvePopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("twelvePopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function twelvePop(){
	document.getElementById("twelvePopUp").style.width = "0px";
	document.getElementById("twelvePopUp").style.height = "0px";
	document.getElementById("twelvePopUp").style.opacity = "0";
	document.getElementById("twelvePopUp").style.zIndex = "1";
	
	document.getElementById("twelvePopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("twelvePopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "425px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("twelveArrow").style.opacity = "1";
	document.getElementById("twelveArrow").style.height = "22px";
	
	document.getElementById("twelveArrow").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("twelveArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}



// JavaScript Document

//504
document.getElementById("ten").onclick= 
	function(){
		ten();
	}
	
function ten(){
	document.getElementById("ten").style.backgroundImage = "url(img/504_H.gif)";
	document.getElementById("tenPopUp").style.width = "1100px";
	document.getElementById("tenPopUp").style.height = "500px";
	document.getElementById("tenPopUp").style.opacity = "1";
	document.getElementById("tenPopUp").style.zIndex = "50";
	
	document.getElementById("tenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("tenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("tenButton").onclick= 
	function(){
		tenPop();
	}
	
document.getElementById("tenClose").onclick= 
	function(){
		tenPopClose();
	}
	
function tenPopClose(){
	document.getElementById("ten").style.backgroundImage = "url(img/504.gif)";
	document.getElementById("tenPopUp").style.width = "0px";
	document.getElementById("tenPopUp").style.height = "0px";
	document.getElementById("tenPopUp").style.opacity = "0";
	document.getElementById("tenPopUp").style.zIndex = "1";
	
	document.getElementById("tenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("tenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function tenPop(){
	document.getElementById("tenPopUp").style.width = "0px";
	document.getElementById("tenPopUp").style.height = "0px";
	document.getElementById("tenPopUp").style.opacity = "0";
	document.getElementById("tenPopUp").style.zIndex = "1";
	
	document.getElementById("tenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("tenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "120px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("tenArrowB").style.opacity = "1";
	document.getElementById("tenArrowB").style.width = "92px";
	document.getElementById("tenArrow").style.height = "30px";
	
	document.getElementById("tenArrow").style.transition = "height .3s linear .8s";
	document.getElementById("tenArrow").style.webkitTransition = "height .3s linear .8s";
	
	document.getElementById("tenArrowB").style.transition = "width .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("tenArrowB").style.webkitTransition = "width .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//502
document.getElementById("eleven").onclick= 
	function(){
		eleven();
	}
	
function eleven(){
	document.getElementById("eleven").style.backgroundImage = "url(img/502_H.gif)";
	document.getElementById("elevenPopUp").style.width = "1100px";
	document.getElementById("elevenPopUp").style.height = "500px";
	document.getElementById("elevenPopUp").style.opacity = "1";
	document.getElementById("elevenPopUp").style.zIndex = "50";
	
	document.getElementById("elevenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("elevenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("elevenButton").onclick= 
	function(){
		elevenPop();
	}
	
document.getElementById("elevenClose").onclick= 
	function(){
		elevenPopClose();
	}
	
function elevenPopClose(){
	document.getElementById("eleven").style.backgroundImage = "url(img/502.gif)";
	document.getElementById("elevenPopUp").style.width = "0px";
	document.getElementById("elevenPopUp").style.height = "0px";
	document.getElementById("elevenPopUp").style.opacity = "0";
	document.getElementById("elevenPopUp").style.zIndex = "1";
	
	document.getElementById("elevenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("elevenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function elevenPop(){
	document.getElementById("elevenPopUp").style.width = "0px";
	document.getElementById("elevenPopUp").style.height = "0px";
	document.getElementById("elevenPopUp").style.opacity = "0";
	document.getElementById("elevenPopUp").style.zIndex = "1";
	
	document.getElementById("elevenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("elevenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "120px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("tenArrowB").style.opacity = "1";
	document.getElementById("tenArrowB").style.width = "30px";
	document.getElementById("elevenArrow").style.height = "30px";
	
	document.getElementById("elevenArrow").style.transition = "height .3s linear .8s";
	document.getElementById("elevenArrow").style.webkitTransition = "height .3s linear .8s";
	
	document.getElementById("tenArrowB").style.transition = "width .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("tenArrowB").style.webkitTransition = "width .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}
	
//501
document.getElementById("fifteen").onclick= 
	function(){
		fifteen();
	}
	
function fifteen(){
	document.getElementById("fifteen").style.backgroundImage = "url(img/501_H.gif)";
	document.getElementById("fifteenPopUp").style.width = "1100px";
	document.getElementById("fifteenPopUp").style.height = "500px";
	document.getElementById("fifteenPopUp").style.opacity = "1";
	document.getElementById("fifteenPopUp").style.zIndex = "50";
	
	document.getElementById("fifteenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fifteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("fifteenButton").onclick= 
	function(){
		fifteenPop();
	}
	
document.getElementById("fifteenClose").onclick= 
	function(){
		fifteenPopClose();
	}
	
function fifteenPopClose(){
	document.getElementById("fifteen").style.backgroundImage = "url(img/501.gif)";
	document.getElementById("fifteenPopUp").style.width = "0px";
	document.getElementById("fifteenPopUp").style.height = "0px";
	document.getElementById("fifteenPopUp").style.opacity = "0";
	document.getElementById("fifteenPopUp").style.zIndex = "1";
	
	document.getElementById("fifteenPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("fifteenPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function fifteenPop(){
	document.getElementById("fifteenPopUp").style.width = "0px";
	document.getElementById("fifteenPopUp").style.height = "0px";
	document.getElementById("fifteenPopUp").style.opacity = "0";
	document.getElementById("fifteenPopUp").style.zIndex = "1";
	
	document.getElementById("fifteenPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("fifteenPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "266px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("fifteenArrow").style.width = "30px";
	
	document.getElementById("fifteenArrow").style.transition = "width .3s linear .5s";
	document.getElementById("fifteenArrow").style.webkitTransition = "width .3s linear .5s";
	
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//military Room
document.getElementById("military").onclick= 
	function(){
		military();
	}
	
function military(){
	document.getElementById("militaryPopUp").style.width = "1100px";
	document.getElementById("militaryPopUp").style.height = "500px";
	document.getElementById("militaryPopUp").style.opacity = "1";
	document.getElementById("militaryPopUp").style.zIndex = "50";
	
	document.getElementById("militaryPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("militaryPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("getMilitary").onclick= 
	function(){
		militaryPop();
	}
	
document.getElementById("closeMilitary").onclick= 
	function(){
		militaryPopClose();
	}
	
function militaryPopClose(){
	document.getElementById("militaryPopUp").style.width = "0px";
	document.getElementById("militaryPopUp").style.height = "0px";
	document.getElementById("militaryPopUp").style.opacity = "0";
	document.getElementById("militaryPopUp").style.zIndex = "1";
	
	document.getElementById("militaryPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("militaryPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function militaryPop(){
	document.getElementById("militaryPopUp").style.width = "0px";
	document.getElementById("militaryPopUp").style.height = "0px";
	document.getElementById("militaryPopUp").style.opacity = "0";
	document.getElementById("militaryPopUp").style.zIndex = "1";
	
	document.getElementById("militaryPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("militaryPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "120px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("militaryArrow").style.height = "30px";
	document.getElementById("tenArrowB").style.width = "75px";
	
	document.getElementById("tenArrowB").style.transition = "width .3s linear .5s";
	document.getElementById("tenArrowB").style.webkitTransition = "width .3s linear .5s";
	
	document.getElementById("militaryArrow").style.transition = "height .3s linear .8s";
	document.getElementById("militaryArrow").style.webkitTransition = "height .3s linear .8s";
	
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}



//ladies room
document.getElementById("ladiesRoom").onclick= 
	function(){
		ladies();
	}
	
function ladies(){
	document.getElementById("ladiesRoom").style.backgroundImage = "url(img/wRoom_H.png)";
	document.getElementById("ladiesPopUp").style.width = "1100px";
	document.getElementById("ladiesPopUp").style.height = "500px";
	document.getElementById("ladiesPopUp").style.opacity = "1";
	document.getElementById("ladiesPopUp").style.zIndex = "50";
	
	document.getElementById("ladiesPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("ladiesPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("ladiesButton").onclick= 
	function(){
		ladiesPop();
	}
	
document.getElementById("ladiesClose").onclick= 
	function(){
		ladiesPopClose();
	}
	
function ladiesPopClose(){
	document.getElementById("ladiesRoom").style.backgroundImage = "url(img/wRoom.png)";
	document.getElementById("ladiesPopUp").style.width = "0px";
	document.getElementById("ladiesPopUp").style.height = "0px";
	document.getElementById("ladiesPopUp").style.opacity = "0";
	document.getElementById("ladiesPopUp").style.zIndex = "1";
	
	document.getElementById("ladiesPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("ladiesPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function ladiesPop(){
	document.getElementById("ladiesPopUp").style.width = "0px";
	document.getElementById("ladiesPopUp").style.height = "0px";
	document.getElementById("ladiesPopUp").style.opacity = "0";
	document.getElementById("ladiesPopUp").style.zIndex = "1";
	
	document.getElementById("ladiesPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("ladiesPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "460px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("ladiesArrow").style.height = "20px";
	
	document.getElementById("ladiesArrow").style.transition = "height .3s linear .5s";
	document.getElementById("ladiesArrow").style.webkitTransition = "height .3s linear .5s";
	
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}


//mens room
document.getElementById("mensRoom").onclick = 
	function(){
		mensRoom();
	}
	
function mensRoom(){
	document.getElementById("mensRoom").style.backgroundImage = "url(img/mRoom_H.gif)";
	document.getElementById("mensPopUp").style.width = "1100px";
	document.getElementById("mensPopUp").style.height = "500px";
	document.getElementById("mensPopUp").style.opacity = "1";
	document.getElementById("mensPopUp").style.zIndex = "50";
	
	document.getElementById("mensPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("mensPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("mensButton").onclick= 
	function(){
		mensPop();
	}
	
document.getElementById("mensClose").onclick= 
	function(){
		mensPopClose();
	}
	
function mensPopClose(){
	document.getElementById("mensRoom").style.backgroundImage = "url(img/mRoom.gif)";
	document.getElementById("mensPopUp").style.width = "0px";
	document.getElementById("mensPopUp").style.height = "0px";
	document.getElementById("mensPopUp").style.opacity = "0";
	document.getElementById("mensPopUp").style.zIndex = "1";
	
	document.getElementById("mensPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("mensPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function mensPop(){
	document.getElementById("mensPopUp").style.width = "0px";
	document.getElementById("mensPopUp").style.height = "0px";
	document.getElementById("mensPopUp").style.opacity = "0";
	document.getElementById("mensPopUp").style.zIndex = "1";
	
	document.getElementById("mensPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("mensPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "530px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("mensArrow").style.height = "20px";
	
	document.getElementById("mensArrow").style.transition = "height .3s linear .5s";
	document.getElementById("mensArrow").style.webkitTransition = "height .3s linear .5s";
	
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}	



//gallery room
document.getElementById("gallery").onclick = 
	function(){
		galleryRoom();
	}
	
function galleryRoom(){
	document.getElementById("gallery").style.backgroundImage = "url(img/gallery_H.gif)";
	document.getElementById("galleryPopUp").style.width = "1100px";
	document.getElementById("galleryPopUp").style.height = "500px";
	document.getElementById("galleryPopUp").style.opacity = "1";
	document.getElementById("galleryPopUp").style.zIndex = "50";
	
	document.getElementById("galleryPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("galleryPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("getGallery").onclick= 
	function(){
		galleryPop();
	}
	
document.getElementById("galleryClose").onclick= 
	function(){
		galleryPopClose();
	}
	
function galleryPopClose(){
	document.getElementById("gallery").style.backgroundImage = "url(img/gallery.gif)";
	document.getElementById("galleryPopUp").style.width = "0px";
	document.getElementById("galleryPopUp").style.height = "0px";
	document.getElementById("galleryPopUp").style.opacity = "0";
	document.getElementById("galleryPopUp").style.zIndex = "1";
	
	document.getElementById("galleryPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("galleryPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function galleryPop(){
	document.getElementById("galleryPopUp").style.width = "0px";
	document.getElementById("galleryPopUp").style.height = "0px";
	document.getElementById("galleryPopUp").style.opacity = "0";
	document.getElementById("galleryPopUp").style.zIndex = "1";
	
	document.getElementById("galleryPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("galleryPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("downArrow").style.height = "120px";
	document.getElementById("downArrow").style.opacity = "1";
	document.getElementById("galleryArrow2").style.width = "70px";
	document.getElementById("galleryArrow").style.height = "20px";
	
	document.getElementById("galleryArrow").style.transition = "height .3s linear .8s";
	document.getElementById("galleryArrow").style.webkitTransition = "height .3s linear .8s";
	
	document.getElementById("galleryArrow2").style.transition = "width .3s linear .5s";
	document.getElementById("galleryArrow2").style.webkitTransition = "width .3s linear .5s";
	
	
	document.getElementById("downArrow").style.transition = "height .5s linear, opacity .5s";
	document.getElementById("downArrow").style.webkitTransition = "height .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}	


//library room
document.getElementById("library").onclick = 
	function(){
		libraryRoom();
	}
	
function libraryRoom(){
	document.getElementById("library").style.backgroundImage = "url(img/library_H.gif)";
	document.getElementById("libraryPopUp").style.width = "1100px";
	document.getElementById("libraryPopUp").style.height = "500px";
	document.getElementById("libraryPopUp").style.opacity = "1";
	document.getElementById("libraryPopUp").style.zIndex = "50";
	
	document.getElementById("libraryPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("libraryPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementById("getlibrary").onclick= 
	function(){
		libraryPop();
	}
	
document.getElementById("libraryClose").onclick= 
	function(){
		libraryPopClose();
	}
	
function libraryPopClose(){
	document.getElementById("library").style.backgroundImage = "url(img/library.gif)";
	document.getElementById("libraryPopUp").style.width = "0px";
	document.getElementById("libraryPopUp").style.height = "0px";
	document.getElementById("libraryPopUp").style.opacity = "0";
	document.getElementById("libraryPopUp").style.zIndex = "1";
	
	document.getElementById("libraryPopUp").style.transition = "width 1s ease-out, opacity 0s";
	document.getElementById("libraryPopUp").style.webkitTransition = "width 1s ease-out, opacity 0s";
}
	
function libraryPop(){
	document.getElementById("libraryPopUp").style.width = "0px";
	document.getElementById("libraryPopUp").style.height = "0px";
	document.getElementById("libraryPopUp").style.opacity = "0";
	document.getElementById("libraryPopUp").style.zIndex = "1";
	
	document.getElementById("libraryPopUp").style.transition = "scale 1s ease-out, opacity 0s";
	document.getElementById("libraryPopUp").style.webkitTransition = "scale 1s ease-out, opacity 0s";
	
	document.getElementById("leftArrow").style.width = "605px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("libraryArrow2").style.width = "25px";
	document.getElementById("libraryArrow").style.height = "240px";
	
	document.getElementById("libraryArrow2").style.transition = "width .3s linear .8s";
	document.getElementById("libraryArrow2").style.webkitTransition = "width .3s linear .8s";
	
	document.getElementById("libraryArrow").style.transition = "height .3s linear .5s";
	document.getElementById("libraryArrow").style.webkitTransition = "height .3s linear .5s";
	
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}
	
	
