$(document).ready(function(){
  $("#triangle").submit(function(event){
    event.preventDefault();

    const sideOne = parseInt($("input#side1").val());
    const sideTwo = parseInt($("input#side2").val());
    const sideThree = parseInt($("input#side3").val());

    $("p").hide();

    if ((sideOne + sideTwo) <= sideThree || (sideOne + sideThree) <= sideTwo || (sideThree + sideTwo) <= sideOne) {
      $("#jack").show();
    } else {
      if (sideOne === sideTwo && sideTwo === sideThree && sideOne === sideThree) {
        $("#equil").show();       
      } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
        $("#isos").show();
      } else if (sideOne !== sideTwo && sideTwo !== sideThree && sideOne !== sideThree) {
        $("#scal").show();
      } 
    }
    });
});