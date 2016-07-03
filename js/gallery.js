
var $overlay = $('<div id="overlay"></div>');
var $imageContainer = $('<div class="imageContainer"></div>')
var $caption = $('<p id="caption"></p>');
var $image = $("<img>");
var $leftArrow = $('<a href="#" class="leftArrow" onclick="prev(); return false;"><i class="fa fa-angle-left" aria-hidden="true"></i>');
var $rightArrow = $('<a href="#" class="rightArrow" onclick="next(); return false;"><i class="fa fa-angle-right" aria-hidden="true"></i>');

//Add image container to overlay
$overlay.append($imageContainer);

//Add image to overlay
$imageContainer.append($image);

//Add navigation arrows to overlay
$imageContainer.append($leftArrow);
$imageContainer.append($rightArrow);

//Add caption to image
$overlay.append($caption);
//add overlay
$("body").append($overlay);


//capture click event on a link to an image
$(".images a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");

	$image.attr("src", imageLocation);
	$overlay.show();

	//get child's alt attribute and set caption
	var $captionText = $(this).children("img").attr("alt");
	$caption.text($captionText);
});


$overlay.click(function(){
	$overlay.hide();
})

$(".leftArrow").bind("click", function(e){
	e.stopPropagation();
});

$(".rightArrow").bind("click", function(e){
	e.stopPropagation();
});	

function next() {
	$($image).each(function(){
		$(this).hide();
		$($caption).hide();
		$($image).next();
	})

}


