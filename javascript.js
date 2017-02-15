var imagecount = 1; //starting image/slide
var total = 3; //total number of images/slides

function currentSlide(x){
    imagecount = x;
    //if that active slide number is greater than total number of slides, set to first slide
    if(imagecount > total){imagecount=1;}
    //if that active slide number is less than 1 set to image total this is used for the prev and next buttons
    if(imagecount < 1){imagecount=total;}
    //grab all of your elements with the class .slide
    var Image = document.getElementsByClassName('slide');
    //now for every slide
    for (i = 0; i < Image.length; i++) {
        //make the display as none
        Image[i].style.display = "none";
    }
    //grab all your image slider dots
    var dots = document.getElementsByClassName("dot");
     for (i = 0; i < dots.length; i++) {
         //change every dot's class from active to nothing
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //make the current slide visible
    Image[imagecount-1].style.display = "block";
    //make the active dot active
    dots[imagecount-1].className += " active";
    //these numbers -1 because in the array you create the #1 is actually 0
}
//make the next/prev buttons work
function slide(x){
    imagecount = imagecount+=x;
    //if that active slide number is greater than total number of slides, set to first slide
    if(imagecount > total){imagecount=1;}
    //if that active slide number is less than 1 set to image total this is used for the prev and next buttons
    if(imagecount < 1){imagecount=total;}
    //grab all of your elements with the class .slide
    var Image = document.getElementsByClassName('slide');
    //now for every slide
    for (i = 0; i < Image.length; i++) {
        //make the display as none
        Image[i].style.display = "none";
    }
    //grab all your image slider dots
    var dots = document.getElementsByClassName("dot");
     for (i = 0; i < dots.length; i++) {
         //change every dot's class from active to nothing
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //make the current slide visible
    Image[imagecount-1].style.display = "block";
    //make the active dot active
    dots[imagecount-1].className += " active";
}
//autoplay the thing
window.setInterval(function slideA(x){
    //add to the imagecount to change active slide number
    imagecount = imagecount+1;
    //if that active slide number is greater than total number of slides, set to first slide
    if(imagecount > total){imagecount=1;}
    //if that active slide number is less than 1 set to image total this is used for the prev and next buttons
    if(imagecount < 1){imagecount=total;}
    //grab all of your elements with the class .slide
    var Image = document.getElementsByClassName('slide');
    //now for every slide
    for (i = 0; i < Image.length; i++) {
        //make the display as none
        Image[i].style.display = "none";
    }
    //grab all your image slider dots
    var dots = document.getElementsByClassName("dot");
     for (i = 0; i < dots.length; i++) {
         //change every dot's class from active to nothing
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //make the current slide visible
    Image[imagecount-1].style.display = "block";
    //make the active dot active
    dots[imagecount-1].className += " active";
},5000//change slide every 5 seconds
);