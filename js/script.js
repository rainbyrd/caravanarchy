// flexFont = function () {
//     var divs = document.getElementsByClassName("b");
//     for(var i = 0; i < divs.length; i++) {
//         var relFontsize = divs[i].offsetWidth*0.05;
//         divs[i].style.fontSize = relFontsize+'px';
//     }
// };
//
// window.onload = function(event) {
//     flexFont();
// };
// window.onresize = function(event) {
//     flexFont();
// };


$(document).ready(function(){
  $("#homebutton").click(function(){
    $("#overlay").animate({
      top: '-300px'
    }, 4000, function() {
  });
  });
  $("#homebutton").click(function(){
    $("#myTopnav").animate({
      height: "toggle"
    }, 1000, function() {
  });
  });
  $("#homebutton").click(function(){
    $("#name").animate({
      visibility: "toggle"
    }, 3000, function() {
  });
  });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$('.carousel').carousel({
  interval: 2000
})
});
