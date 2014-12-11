// JavaScript Document

/*room 515*/
document.getElementById("one").onclick= 
	function(){
		one();
	}
	
function one(){
	document.getElementById("one").style.backgroundImage = "url(img/515_H.jpg)";
	document.getElementById("onePopUp").style.width = "400px";
	document.getElementById("onePopUp").style.height = "400px";
	document.getElementById("onePopUp").style.opacity = "1";
	document.getElementById("onePopUp").style.zIndex = "50";
	
	document.getElementById("onePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("onePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[0].onclick= 
	function(){
		onePop();
	}
	
document.getElementsByTagName("a")[1].onclick= 
	function(){
		onePopClose();
	}
	
function onePopClose(){
	document.getElementById("one").style.backgroundImage = "url(img/515.jpg)";
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
	
	document.getElementById("leftArrow").style.width = "680px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("oneArrowB").style.opacity = "1";
	document.getElementById("oneArrowB").style.height = "26px";
	
	document.getElementById("oneArrowA").style.opacity = "1";
	document.getElementById("oneArrowA").style.width = "20px";
	
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
	document.getElementById("two").style.backgroundImage = "url(img/514_H.jpg)";
	document.getElementById("twoPopUp").style.width = "400px";
	document.getElementById("twoPopUp").style.height = "400px";
	document.getElementById("twoPopUp").style.opacity = "1";
	document.getElementById("twoPopUp").style.zIndex = "50";
	
	document.getElementById("twoPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("twoPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[2].onclick= 
	function(){
		twoPop();
	}
	
document.getElementsByTagName("a")[3].onclick= 
	function(){
		twoPopClose();
	}
	
function twoPopClose(){
	document.getElementById("two").style.backgroundImage = "url(img/514.jpg)";
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
	
	document.getElementById("leftArrow").style.width = "680px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("twoArrow").style.opacity = "1";
	document.getElementById("twoArrow").style.height = "34px";
	
	document.getElementById("twoArrow").style.transition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	document.getElementById("twoArrow").style.webkitTransition = "height .3s ease-out .5s,opacity .3s ease-out .5s";
	
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
	document.getElementById("three").style.backgroundImage = "url(img/513_H.jpg)";
	document.getElementById("threePopUp").style.width = "400px";
	document.getElementById("threePopUp").style.height = "400px";
	document.getElementById("threePopUp").style.opacity = "1";
	document.getElementById("threePopUp").style.zIndex = "50";
	
	document.getElementById("threePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("threePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[4].onclick= 
	function(){
		threePop();
	}
	
document.getElementsByTagName("a")[5].onclick= 
	function(){
		threePopClose();
	}
	
function threePopClose(){
	document.getElementById("three").style.backgroundImage = "url(img/513.jpg)";
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
	document.getElementById("four").style.backgroundImage = "url(img/511_H.jpg)";
	document.getElementById("fourPopUp").style.width = "400px";
	document.getElementById("fourPopUp").style.height = "400px";
	document.getElementById("fourPopUp").style.opacity = "1";
	document.getElementById("fourPopUp").style.zIndex = "50";
	
	document.getElementById("fourPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fourPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[6].onclick= 
	function(){
		fourPop();
	}
	
document.getElementsByTagName("a")[7].onclick= 
	function(){
		fourPopClose();
	}
	
function fourPopClose(){
	document.getElementById("four").style.backgroundImage = "url(img/511.jpg)";
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
	document.getElementById("five").style.backgroundImage = "url(img/509_H.jpg)";
	document.getElementById("fivePopUp").style.width = "400px";
	document.getElementById("fivePopUp").style.height = "400px";
	document.getElementById("fivePopUp").style.opacity = "1";
	document.getElementById("fivePopUp").style.zIndex = "50";
	
	document.getElementById("fivePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("fivePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[8].onclick= 
	function(){
		fivePop();
	}
	
document.getElementsByTagName("a")[9].onclick= 
	function(){
		fivePopClose();
	}
	
function fivePopClose(){
	document.getElementById("five").style.backgroundImage = "url(img/509.jpg)";
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
	document.getElementById("six").style.backgroundImage = "url(img/507_H.jpg)";
	document.getElementById("sixPopUp").style.width = "400px";
	document.getElementById("sixPopUp").style.height = "400px";
	document.getElementById("sixPopUp").style.opacity = "1";
	document.getElementById("sixPopUp").style.zIndex = "50";
	
	document.getElementById("sixPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("sixPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[10].onclick= 
	function(){
		sixPop();
	}
	
document.getElementsByTagName("a")[11].onclick= 
	function(){
		sixPopClose();
	}
	
function sixPopClose(){
	document.getElementById("six").style.backgroundImage = "url(img/507.jpg)";
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
	document.getElementById("seven").style.backgroundImage = "url(img/506_H.jpg)";
	document.getElementById("sevenPopUp").style.width = "400px";
	document.getElementById("sevenPopUp").style.height = "400px";
	document.getElementById("sevenPopUp").style.opacity = "1";
	document.getElementById("sevenPopUp").style.zIndex = "50";
	
	document.getElementById("sevenPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("sevenPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[12].onclick= 
	function(){
		sevenPop();
	}
	
document.getElementsByTagName("a")[13].onclick= 
	function(){
		sevenPopClose();
	}
	
function sevenPopClose(){
	document.getElementById("seven").style.backgroundImage = "url(img/506.jpg)";
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
	document.getElementById("eight").style.backgroundImage = "url(img/505_H.jpg)";
	document.getElementById("eightPopUp").style.width = "400px";
	document.getElementById("eightPopUp").style.height = "400px";
	document.getElementById("eightPopUp").style.opacity = "1";
	document.getElementById("eightPopUp").style.zIndex = "50";
	
	document.getElementById("eightPopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("eightPopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[14].onclick= 
	function(){
		eightPop();
	}
	
document.getElementsByTagName("a")[15].onclick= 
	function(){
		eightPopClose();
	}
	
function eightPopClose(){
	document.getElementById("eight").style.backgroundImage = "url(img/505.jpg)";
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
	
	document.getElementById("sevenArrow").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("sevenArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("eightArrow").style.transition = "height .3s linear .5s,opacity .3s linear .9s";
	document.getElementById("eightArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .9s";
	
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
	document.getElementById("nine").style.backgroundImage = "url(img/516_H.jpg)";
	document.getElementById("ninePopUp").style.width = "400px";
	document.getElementById("ninePopUp").style.height = "400px";
	document.getElementById("ninePopUp").style.opacity = "1";
	document.getElementById("ninePopUp").style.zIndex = "50";
	
	document.getElementById("ninePopUp").style.transition = "scale 1s ease-out, opacity 1s";
	document.getElementById("ninePopUp").style.webkitTransition = "width 1s ease-out, opacity 1s";
}
	
document.getElementsByTagName("a")[16].onclick= 
	function(){
		ninePop();
	}
	
document.getElementsByTagName("a")[17].onclick= 
	function(){
		ninePopClose();
	}
	
function ninePopClose(){
	document.getElementById("nine").style.backgroundImage = "url(img/516.jpg)";
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
	
	document.getElementById("leftArrow").style.width = "680px";
	document.getElementById("leftArrow").style.opacity = "1";
	document.getElementById("nineArrowB").style.opacity = "1";
	document.getElementById("nineArrowB").style.height = "90px";
	document.getElementById("nineArrow").style.opacity = "1";
	document.getElementById("nineArrow").style.width = "15px";
	
	document.getElementById("nineArrowB").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("nineArrowB").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
	document.getElementById("nineArrow").style.transition = "height .3s linear .5s,opacity .3s linear .9s";
	document.getElementById("nineArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .9s";
	
	document.getElementById("leftArrow").style.transition = "width .5s linear, opacity .5s";
	document.getElementById("leftArrow").style.webkitTransition = "width .5s linear, opacity .5s";	
	
	document.getElementById("restart").style.opacity = "1";
	document.getElementById("restart").style.zIndex = "50";
	document.getElementById("restart").style.transition = "opacity 1s 1s ease";
	document.getElementById("restart").style.webkitTransition = "opacity 1s 1s ease";
}
	
/*restart function*/
document.getElementsByClassName("done")[0].onclick = 
	function(){
		restart();
	}
	
function restart(){
	//restart
	document.getElementById("restart").style.opacity = "0";
	document.getElementById("restart").style.zIndex ="0";
	
	//left/right arrow restarts
	document.getElementById("rightArrow").style.width = "0px";
	document.getElementById("rightArrow").style.opacity = "0";
	document.getElementById("leftArrow").style.width = "0px";
	document.getElementById("leftArrow").style.opacity = "0";
	
	//room 515
	document.getElementById("one").style.backgroundImage = "url(img/515.jpg)";
	document.getElementById("oneArrowB").style.opacity = "1";
	document.getElementById("oneArrowB").style.height = "0px";
	document.getElementById("oneArrowA").style.opacity = "1";
	document.getElementById("oneArrowA").style.width = "0px";
	document.getElementById("oneArrowA").style.transition = "width 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("oneArrowA").style.webkitTransition = "width 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("oneArrowB").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("oneArrowB").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	
	//room 514
	document.getElementById("two").style.backgroundImage = "url(img/514.jpg)";
	document.getElementById("twoArrow").style.opacity = "0";
	document.getElementById("twoArrow").style.height = "0px";
	document.getElementById("twoArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("twoArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//513
	document.getElementById("three").style.backgroundImage = "url(img/513.jpg)";
	document.getElementById("threeArrow").style.opacity = "0";
	document.getElementById("threeArrow").style.height = "0px";
	document.getElementById("threeArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("threeArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//511
	document.getElementById("four").style.backgroundImage = "url(img/511.jpg)";
	document.getElementById("fourArrow").style.opacity = "0";
	document.getElementById("fourArrow").style.height = "0px";
	document.getElementById("fourArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("fourArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//509
	document.getElementById("five").style.backgroundImage = "url(img/509.jpg)";
	document.getElementById("fiveArrow").style.opacity = "1";
	document.getElementById("fiveArrow").style.height = "0px";
	document.getElementById("fiveArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("fiveArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//507
	document.getElementById("six").style.backgroundImage = "url(img/507.jpg)";
	document.getElementById("sixArrow").style.opacity = "1";
	document.getElementById("sixArrow").style.height = "0px";
	document.getElementById("sixArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("sixArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//506
	document.getElementById("seven").style.backgroundImage = "url(img/506.jpg)";
	document.getElementById("sevenArrow").style.opacity = "1";
	document.getElementById("sevenArrow").style.height = "0px";
	document.getElementById("sevenArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("sevenArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//505
	document.getElementById("eight").style.backgroundImage = "url(img/505.jpg)";
	document.getElementById("eightArrow").style.opacity = "1";
	document.getElementById("eightArrow").style.height = "0px";
	document.getElementById("eightArrow").style.transition = "height 0s linear 0s,opacity 0s ease-out 0s";
	document.getElementById("eightArrow").style.webkitTransition = "height 0s linear 0s,opacity 0s ease-out 0s";
	
	//516
	document.getElementById("nine").style.backgroundImage = "url(img/516.jpg)";
	document.getElementById("nineArrow").style.opacity = "1";
	document.getElementById("nineArrow").style.width = "0px";
	document.getElementById("nineArrow").style.transition = "height .3s linear .5s,opacity .3s linear .9s";
	document.getElementById("nineArrow").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .9s";
	document.getElementById("nineArrowB").style.opacity = "1";
	document.getElementById("nineArrowB").style.height = "0px";
	document.getElementById("nineArrowB").style.transition = "height .3s linear .5s,opacity .3s linear .5s";
	document.getElementById("nineArrowB").style.webkitTransition = "height .3s linear .5s,opacity .3s linear .5s";
	
}
	
