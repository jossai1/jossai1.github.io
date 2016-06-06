var main = function()
{
   //Start with a $( ) to tell the computer we're using jQuery
   //To use CSS to select the class 'icon-menu', we type in '.icon-menu'.
$('.icon-menu').click(function(){
//move the menu 0px to the left,  make this happen over 200 milliseconds.
$('.menu').animate({
left: '0px'
}, 200);

$('body').animate({
left: '285px'
},200);

});

$('.icon-close').click(function(){

$('.menu').animate({
left: '-285px'
}, 200);

$('body').animate({
left: '0px'
},200);

});

};

$(document).ready(main)
