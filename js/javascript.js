//Background color changer
function color_change(color) {
  $('#body').removeClass().addClass(color); //backgroung color change

  //remove class from all buttons
  $('#white').removeClass();
  $('#blue').removeClass();
  $('#black').removeClass();
  $('#red').removeClass();
  $('#green').removeClass();

  //add class selected to selected color
  if (color == "white") {
    $('#'+color).removeClass().addClass("color_selected_white");
  }else{
    $('#'+color).removeClass().addClass("color_selected");
  }

}

//add or remove life form counter
function life_change(m){
  var num = $("#life").text();
  if (m == "+"){num++;}
  else{num--;}
  $("#life").text(num);
}

function life_reset(){
  var a = confirm("Are you really sure you want to reset the life counter?");
  if (a == true) {
    $("#life").text("20");
  }
}

function roll_dice(n){
  var dice_number = Math.floor(Math.random() * n)+1;
  alert(n+"D: "+dice_number);
}
