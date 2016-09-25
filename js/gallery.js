$(function(){
    var $overlay = $('<div id="overlay"></div>');
    var $links = $('.images a');
    var $leftArrow = $('<a href="#" class="leftArrow"><i class="fa fa-angle-left" aria-hidden="true"></i>');
    var $rightArrow = $('<a href="#" class="rightArrow"><i class="fa fa-angle-right" aria-hidden="true"></i>');
    var $image = $('<img>');
    
    handlers.filterSearchResults();
    handlers.appendItems($overlay, $image, $leftArrow, $rightArrow);
    handlers.renderImageOnClick($links, $leftArrow, $rightArrow, $image, $overlay);
    handlers.hideOverlay($overlay);
});




var handlers = {
    filterSearchResults: function() {
        var $input = $('#inputText');
        var $photos = $('.images a').children("img");
        //filter search results in real time by image's alt text
        $($input).keyup(function(){
            $($photos).each(function(){
                if($(this).attr("alt").indexOf($input.val().) > -1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    },
    appendItems: function($overlay, $image, $leftArrow, $rightArrow) {
        //append $overlay to body
        $('body').append($overlay);
        //append $image to $overlay
        $overlay.append($image);

         //render the nav arrows
        $overlay.append($leftArrow);
        $overlay.append($rightArrow);
    },
    renderImageOnClick: function($links, $leftArrow, $rightArrow, $image, $overlay) {
        //add overlay when user clicks on any photo
        $($links).click(function(e){
            e.preventDefault();
            view.renderImage($(this), $image, $overlay);
            var currentIndex = $links.index($(this));
            $overlay.show();

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
            //scroll to previous image
            $($leftArrow).click(function(e){
                e.stopPropagation();
                var $decreaseCurrentIndexImage = $(".images a").eq(--currentIndex);
                view.renderImage($decreaseCurrentIndexImage, $image, $overlay);
            });
            //scroll to next image
            $($rightArrow).click(function(e){
                e.stopPropagation();
                var $increaseCurrentIndexImage = $('.images a').eq(++currentIndex)
                view.renderImage($increaseCurrentIndexImage, $image, $overlay);
            });
        });
    },
    hideOverlay: function($overlay) {
        //hide overlay when clicked anywhere except nav arrows
        $($overlay).click(function(){
            $overlay.hide();
        })
    }
};



var view = {
    renderImage: function($link, $image, $overlay) {
        //grab href value of large image and store into imageLocation variable
        var $imageLocation = $link.attr("href");
        //grab alt attribute of children of clicked thumbnail and save to captionText variable
        var $captionText = $link.children("img").attr("alt");
        var $caption = $('#caption');
        
        //append $caption to $overlay
        if($caption.length === 0){
            $caption = $('<p id="caption"></p>');
            $overlay.append($caption);
        }

        //render the clicked image
        $image.attr("src", $imageLocation);
       //append caption div to overlay
        
        //set caption div text
        $caption.text($captionText);

      },
}


















 


