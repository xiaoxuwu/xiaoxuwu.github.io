/* code for determining active */
var isBioSelected = document.URL.search("bio") != -1 ? 'class = selected' : '';
var isPortSelected = document.URL.search("portfolio") != -1 ? 'class = selected' : '';
var isContactSelected = document.URL.search("contact") != -1 ? 'class = selected' : '';
var isHomeSelected = (isBioSelected + isPortSelected + isContactSelected).length == 0 ? 'class = selected' : '';

/* main nav */
document.getElementById("NavMenu").innerHTML =
'<button class="cn-button" id="cn-button">Menu</button>' +
'<div class="cn-wrapper" id="cn-wrapper">' +
	'<ul>' +
		'<li><a ' + isHomeSelected + ' href="/"><span>Home</span></a></li>' +
		'<li><a ' + isBioSelected +' href="/bio"><span>Bio</span></a></li>' +
		'<li><a ' + isPortSelected + ' href="/portfolio"><span>Portfolio</span></a></li>' +
		'<li><a ' + isContactSelected + ' href="/contact"><span>Contact</span></a></li>' +
	'</ul>' +
'</div>' +
'<div id="cn-overlay" class="cn-overlay"></div>';

/* Oher Effects Below */
(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');

	//open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
	function openNav(){
		open = true;
	    button.innerHTML = "Close";
	    classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
	}
	function closeNav(){
		open = false;
		button.innerHTML = "Menu";
		classie.remove(overlay, 'on-overlay');
		classie.remove(wrapper, 'opened-nav');
	}
	document.addEventListener('click', closeNav);

})();
