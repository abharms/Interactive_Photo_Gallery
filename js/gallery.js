var $overlay = $('<div id="overlay"></div>');
var $links = $('.images a');
var $image = $('<img>');
var $leftArrow = $('<a href="#" class="leftArrow"><i class="fa fa-angle-left" aria-hidden="true"></i>');
var $rightArrow = $('<a href="#" class="rightArrow"><i class="fa fa-angle-right" aria-hidden="true"></i>');
var $caption = $('<p id="caption"></p>');
var currentIndex;
var $input = $('#inputText');
var $photos = $('.images a').children("img");

//filter search results in real time by image's alt text
$($input).keyup(function(){
    $($photos).each(function(){
        if($(this).attr("alt").indexOf($input.val()) > -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});


$('body').append($overlay);

$overlay.append($image);
 //render the nav arrows
 $overlay.append($leftArrow);
 $overlay.append($rightArrow);


//add overlay when user clicks on any photo
$($links).click(function(e){
	e.preventDefault();
    renderImage($(this));
    currentIndex = $links.index($(this));
    $overlay.show();
 });


//hide overlay when clicked anywhere except nav arrows
$($overlay).click(function(){
	$overlay.hide();
})

$($leftArrow).click(function(e){
	e.stopPropagation();
	var image = $(".images a").eq(--currentIndex);
    renderImage(image);
});

$($rightArrow).click(function(e){
	e.stopPropagation();
	var image = $('.images a').eq(++currentIndex)
	renderImage(image);

});


function renderImage($link) {
	//grab href value of large image and store into imageLocation variable
	var imageLocation = $link.attr("href");
	//grab alt attribute of children of clicked thumbnail and save to captionText variable
	var captionText = $link.children("img").attr("alt");
   	//render the clicked image
    $image.attr("src", imageLocation);
   //append caption div to overlay
    $overlay.append($caption);
    //set caption div text
    $caption.text(captionText);

    //hide right arrow when last photo is rendered
    if(currentIndex >= $links.length - 1) {
    	$rightArrow.hide();
    } else {
    	$rightArrow.show();
    }
    //hide left arrow when first photo is rendered
    if(currentIndex <= 0) {
    	$leftArrow.hide();
    } else {
    	$leftArrow.show();
    }
  }  


