$(document).ready(function(){

  $("button").click(function(event){
    var userInput = $(".multi-line").val();
    console.log(userInput) ;
  });

  // function noSpace(list) {
  //   var i = 0;
  //   var newArr = list.map(function(item){
  //     if (item === "") {
  //       i++;
  //       return;
  //     } else {
  //       return item;
  //     }
  //   });
  //   newArr.splice(0,i);
  //
  //   return newArr;
  // };
  //
  // var testArray = ["", "one", "two", "three"];
  // $("#button").click(function(event){
  //   event.preventDefault();
  //   var listText = $(".multi-line").val();
  //   // console.log(listText);
  //   var listSplit = listText.split("\n");
  //   console.log(listSplit);
  //   var listAlpha = listSplit.sort();
  //   console.log(listAlpha);
  //
  //
  //   var listCap = listAlpha.map(function(item){
  //     return item.toUpperCase();
  //   });
  //   var finalList = noSpace(listCap);
  //   console.log(listCap);
  //
  //
  //   finalList.forEach(function(item){
  //     $("#list").append("<li>" + item + "</li>");
  //   });
  // });

  // console.log(noSpace(testArray));
});
