$(document).ready(function(){

  $("button").click(function(event){
    event.preventDefault();
    var userInput = $(".userInput").val();

    console.log(userInput) ;
    var inputSplit = userInput.split(" ");
    console.log(inputSplit);

    var bigWords = [];
    inputSplit.forEach(function(word){
      if (word.length >= 3){
        bigWords.push(word);
      };
    });
    console.log(bigWords);
    var bigRev = bigWords.reverse();
    console.log(bigRev);
    var bigString = bigRev.toString();
    console.log(bigString);
    var final = "";
    bigRev.forEach(function(word){
      final += word + " ";
    });
    console.log(final);
  });
});
