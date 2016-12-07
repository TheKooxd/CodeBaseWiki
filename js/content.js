var js = {
	header:"JavaScript",
	text:"JavaScript is high-level language which means it can do complicated stuff with only one command. This is result of it being also interpreted language so there is 'translator' that decodes javascript code to more computer friendly assembly and <a href='?page=cpp'>C</a> code. The most striking fact of JavaScript to beginner might be the asynchronous execution. That means that JavaScript engine doesn't read code from top to bottom as most languages but rather finds the easiest way to go. For example if program is something like this: <p><code>var functionResponse = getValue()<br>console.log(functionResponse)</code><p> To understand what is going on here let's take a closer look at this code:<br><code>var functionResponse</code>: Creates new <i>Variable</i> and names it 'functionResponse'.<br><code>= getValue()</code>: The '=' sign indicates that we're saving some value to variable that we just created, in this case the response from 'getValue()'-function.<br><code>console.log(functionResponse)</code>: This is JavaScript engine code that prints the value of the variable we created on the first line.<p> So if you are used to something like <a href='?page=cpp'>C++</a> or Python you would think that the execution result would be something that the function getValue() declares, right? Wrong. In this we need to assume that getValue() is long function so that the JavaScript engine things that it's much more efficient to start executing the function and then keep going and print the variable even thought the variable doesn't have value! So the response will be <code>undefined</code> which is JavaScript's way to say that the variable has not value. <p> Here is were the <i>callback</i> function comes in. Callback-function is possible because JavaScript is object-oriented and can use functions as variables. That means that in last example we could just say<p><code>console.log(getValue())</code><p> which would work just fine and not print out <code>undefined</code>. Some times you want to save that to variable and print it out. Then you use callback function. Like so: <p> <code> getValue(function(functionResponse){<br>console.log(functionResponse);<br>});</code><p> Also getValue() must have these two things:<p><code>function getValue(callback){<br>.....<br>(Lots of code...)<br>callback(result)});</code><p> On the first line of the getValue() function decoration we say that funcion has one argument, <i>callback</i>. On the last line of the function we call this <i> callback </i> and pass the result of the function to it. This triggers a callback call to the first callback-example and it renames the <i>callback</i> to <i>functionResponse</i> and then prints it. So it waits for the callback from the function. It's saying 'Hey, do this and when you're done, let me know, I'll wait here'.<p><p>Links to example projects:<br>-<a href='https://github.com/TheKooxd/knetdbweb'>KNET WEB INTERFACE</a>",
	picture:"../Projekti/assets/images/js-logo.png",
	fullname:"JavaScript",
	age:"May 23, 1995; 21 years old",
	paradigm:"scripting, object-oriented, functional",
	designer:"Brendan Eich",
	devs:"Netscape Communications Corporation, Mozilla Foundation, Ecma International",
	lsr:"ECMAScript 2016/June 17, 2016",
	sidebox:true
};

var index = {
	header:"CodeBaseWiki",
	text:"This page has been developed to serve as prove that I know how to use HTML. Despite to HTML side of things, this page also uses heavily basic <a href='?page=js'>JavaScript</a> and few libaries associated with it. This system is also developed as openly as possible to allow further modifications and uses as normal wiki platform. All the pages are dynamically developed to allow easy control of the content. Please read readme for further information.<p>You can access readme by changing this part of the URL: <p><code>.../Projekti/index.html?page=index</code><p> To this: <p> <code> .../Projekti/index.html?page=readme </code>",
	picture:"",
	sidebox:"",
	sidebox:false
};

var err = {
	header:"ERROR 404",
	text:"The page you requested doesn't exist, please check your URL!",
	picture:"",
	sidebox:"",
	sidebox:false
};

var cpp = {
	header:"C++ / C",
	text:"This article focuses on C++ but also mentiones the it's little brother C. C++ is considered as the 'old faithfull' of all programming languages. That's because languages like assembly aren't any more used in everyday programming. In many cases C++ is used as port to assembly language and that way to hardware. For example <a href='?page=js'>JavaScript</a>, Java and Python are all based on C++. These languages use in-fly translation engine that converts the high-level language to lower-level C++ code that the computer can understand. That's why you need to install Java and Python runtimes so your computer can translate these commands. So in the way you're aways using C++ when coding. <p> Then there's the real use cases of this language. For example Microsoft Windows, some part's of the Linux-core and most game engines are coded in C++. There is two reasons for this. First, C++ is much more powerfull because you have more control over it and it executes straight to the processor. Secondly GPU APIs, for example DirectX, are coded using C++, so it's logical to use same language for comapatibility reasons. <p> C++ code is object-oriented, but it uses something called structures. This means you can't just say <code>car.name = 'volvo'</code> but you need to declare that the car variable is obejct and what values it has. This makes language much more efficient but slows down the development progress.",
	picture:"../Projekti/assets/images/cpp.png",
	fullname:"C++",
	age:"1983; age 33",
	paradigm:"procedural, functional, object-oriented",
	designer:"Bjarne Stroustrup",
	devs:"Too maany D:",
	lsr:"ISO/IEC 24882:2014 / 2014",
	sidebox:true
};

var html = {
	header:"HTML",
	text:"Even thought HTML is not considered as programming language, it is one of part of the Holy Trinity of Web Development: <a href='?page=js'>JavaScript</a>, CSS and HTML. HTML is many times used as empty canvas that CSS and <a href='?page=js'>JavaScript</a> manipulate. For example, this page has only one HTML-document. You can see what the template looks like if you're using Google Chrome by clicking the little exclamation mark left from the URL and set JavaScript to 'Blocked by default'. When you reload you will see the empty template because the <a href='?page=js'>JavaScript</a> can't render data to the page. <p> This is used because HTML is static language. For example this wiki is designed to be dynamic so you can add new wiki pages easily. For example in the URL you have this part: <p> <code>?page=html</code> <p> If you change what reads after '=' sign you will render new page. This is usefull because you can just add new objects to JavaScript and this template will provide the data in nice way to the end-user. So you could thing that the HTML code is like your foundations in house. You need them and if they're done correctly it's much more easy to add something like the walls, roof and windows. These pretty-easily changable items represent <a href='?page=js'>JavaScipt</a>, because they're easy to change but it might affect other parts of the house. Then there's furniture, which is CSS. This is easily moved and changed, like CSS is quick way to change look of the page. ",
	picture:"../Projekti/assets/images/HTML.png",
	fullname:"HyperText Markup Language",
	age:"1993; 23 years old",
	paradigm:"none/tag-based",
	designer:"n/a",
	devs:"W3C & WHATWG",
	lsr:"5.0 / 2014",
	sidebox:true
};

var readme = {
	header:"Readme",
	text:"=[INSTALLATION]=<p>To make sure that the page loads correctly, make sure that directory tree is same as following:<p>|Projekti<br>│   index.html<br>│   README.txt<br>│<br>├───assets<br>│   └───images<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;header.jpg<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cpp.png<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;favicon.png<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML.png<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;js-logo.png<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logo.png<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nimetön.png<br>│<br>├───css<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default.css<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bootsrap.min.css<br>│<br>└───js<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content.js<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lodash.min.js<br><p>Also rember to make sure that your browser supports javascript.<p>=[MANIPULATING CONTENT]= <p>If you would like to edit content of the pages, you can manipulate objects in '/js/content.js'. On top of the page are objects containing the page data. List below describes what the variables do. Also creation of new objects is possible. You can render these new pages by manipulating page parameter (e.g. index.html?page=VARIABLE NAME). To make it more easy to access, you can add new nav-element to index.html. Remeber also to update content.js's updateNav() function.<p>header: Text heading for the page.<br>text: basic text block to be used as plain wiki text<br>picture: path to the picture to be used on top of the side-box<br>fullname: Contains full name of the programming language<br>age: Contains age of the language<br>paradigm: Contains paraadigm of the language<br>designer: designer(s) of the language<br>devs: developers, usually compants<br>lsr: last stable release of the program.<br>sidebox: boolen value (true or false) to determine if the sidebox is rendered<br><p> =[TODO]=<p>-Reading objects from a file which would make backups and live editing from the web page possible.<br>-With NodeJS server to setup comment engine that the wiki pages could be commented on.<br>-Diffrent languages -> Easy to do because of the variable based rendering.<br>-Easy to add pages with page generator (Requires NodeJS)<p>=[LINKS TO SOURCE]=<p>=[LINK TO SOURCE]=<p><a href='../Projekti/js/content.js'>content.js</a><br><a href='../Projekti/css/default.css'>default.css</a><br>",
	picture:"",
	fullname:"",
	age:"",
	paradigm:"",
	designer:"",
	devs:"",
	lsr:"",
	sidebox:false
};

var divArray = ["content-header", "content-text", "content-picture", "content-fullName", "content-age", "content-paradigm", "content-designer", "content-devs", "content-lsr", "sidebox"];

function updateNav (type) {
	document.getElementById("list-index").className = "nav";
	document.getElementById("list-js").className = "nav";
	document.getElementById("list-cpp").className = "nav";
	document.getElementById("list-html").className = "nav";
	document.getElementById("list-" + type).className = "nav active";
}

function render (type) {
	var par = new Object();
	if(window.location.href.substring(window.location.href.indexOf("Projekti/") + 8) == "/index.html") {
		par.page = "index";

	}
	else {
		par = window.location.href.substring(window.location.href.indexOf("?") + 1);
		par = JSON.parse('{"' + decodeURI(par.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
	}
	var container = this[par.page];
	if(container == undefined) {
		container = err;
	}
	var dataArr = _.values(container);
	for(var i = 0; i < divArray.length; i++) {
		if(dataArr[i] == undefined) {
			dataArr[i] = " ";
		}
		if(divArray[i] == "content-picture") {
			document.getElementById(divArray[i]).src = dataArr[i];
		}
		if(divArray[i] == "sidebox") {
			if(dataArr[i] == true) {
				document.getElementById("side-div").style = "display:inline";
			}
		}
		else {
			document.getElementById(divArray[i]).innerHTML = dataArr[i];
		}
	}
	updateNav(par.page);
}

function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}