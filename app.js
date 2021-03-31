// Write javascript here

var pics = [
	"images/cat1.jpg",
	"images/cat2.jpg",
	"images/cat3.jpg",
	"images/cat4.jpg",
	"images/cat5.jpg",
	"images/cat6.jpg",

]
// Selecting a button
var btn = document.querySelector("button");
// selecting an image
var img = document.querySelector("img");
var counter = 1;
// on click function it checks for the count of images
btn.addEventListener("click", function(){
	if(counter === 6){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});