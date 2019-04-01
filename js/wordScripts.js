$(document).ready(function(){

  $("button").click(function(event){
    event.preventDefault();
    var userInput = $(".multi-line").val();
  });
  console.log(userInput) ;


})
