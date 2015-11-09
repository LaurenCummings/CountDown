/* $(document).ready(function() {
	setCount();
	setInterval(function(){subOne();}, 1000);
	
	$('#countBox').click(function(){
		setCount();
	});
});

function setCount(){
	document.getElementById("counter").innerHTML = 10;
}

function subOne(){
	var countVal = document.getElementById("counter").innerHTML;
	document.getElementById("counter").innerHTML = countVal - 1;
} */

//specify number of counters to add to the page
var numCounters = 15;

//create counter fragment for HTML
function create(htmlStr) {
	var frag = document.createDocumentFragment(),
		temp = document.createElement('div');
	temp.innerHTML = htmlStr;
	while (temp.firstChild) {
		frag.appendChild(temp.firstChild);
	}
	return frag;
}

for (i = 0; i < numCounters; i++) {
	id = 'box' + i;
	str = '<div class="box" id="' + id + '"></div>';
	var fragment = create(str);
	document.body.appendChild(fragment);
}



var box = function(elem) {
	var counter = createCounter(),
		count;
	
	elem.appendChild(counter);	
	
	//Initialize Count
	reset();
	
	//Count down by 1 every second
	var startCount = setInterval(function(){countDown()}, 1000);
	
	var checkZero = setInterval(function(){atZero()}, 1000);	
	
	//Reset the counter when the box is clicked
	$(elem).click(function(){
		reset();
	});
	
	function createCounter() {
		return document.createElement("span");
	}

	function reset() {
		count = 10;
		render();
	}
	
	function render() {
		counter.innerHTML = count;
	}
	
	function countDown() {
		count -= 1;
		render();
	}
	
	function atZero(){
		if (count <= 0) {
			alert("YOU LOSE!");
			stop();
/* 			clearInterval(countDown);
			clearInterval(checkZero); */
		}
	}
	
	function stop(){
		clearInterval(startCount);
		clearInterval(checkZero);
	}
};

//add countdown function to counters
for (i = 0; i < numCounters; i++) {
	id = 'box' + i;
	elem = document.getElementById(id);
	counter = new box(elem);
}

/* var elem1 = document.getElementById("box1");
var box1 = new box(elem1);

var elem2 = document.getElementById("box2");
var box2 = new box(elem2);

var elem3 = document.getElementById("box3");
var box3 = new box(elem3); */
