/*global document, window, event */

var scroll = function(element) {
 	var scrolling = null;
 	var inc = 1;
 	var wait = 50;
 	var getYpos = function() {
  		var ypos = element.offsetTop;
  		var thisNode = element;
  		while (thisNode.offsetParent &&  (thisNode.offsetParent != document.body)) {
  		 	thisNode = thisNode.offsetParent;
  			ypos += thisNode.offsetTop;
 		}
 		return ypos;
 	};

 	var doScroll = function() {
  		var y = parseInt(getYpos(),10);
  		y=y-inc;
  		y=y+"px";
  		element.style.top = y;
  		scrolling = window.setTimeout(doScroll,wait);
 	};

 	var toggleScrolling = function() {
  		if (scrolling) {
   			window.clearTimeout(scrolling);
   			scrolling = null;
  		} else {
   			doScroll();
  		}
 	};

 	element.onclick = toggleScrolling;

// 'keys' code adapted S5 (http://www.meyerweb.com/eric/tools/s5/)
//	which was in turn adapted from MozPoint (http://mozpoint.mozdev.org/)

	 var keys = function(key) {
 	 	if (!key) {
  	 		key = event;
 	 	 	key.which = key.keyCode;
 		 }
		switch (key.which) {
 			case 221:	// ]
 			 	if (scrolling) {
 				  	inc++;
 			 	}
		 	break;
			 case 219:	// [
 			  if (scrolling && inc>1) {
	  				 inc--;
				  }
			 break;
			 case 10:	// return
			 case 13:	// enter
			  	toggleScrolling();
			 break;
		}
		  return false;
	 };
	 document.onkeyup = keys;
};

var init = function() {
 	if (document.getElementById && document.getElementById("speech")) {
		  scroll(document.getElementById("speech"));
 	}
};

window.onload = init;
