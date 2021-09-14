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
    //change dices (in white background wee need black dices)
    $('#dice4').attr("src","img/dice/4_black.png");
    $('#dice6').attr("src","img/dice/6_black.png");
    $('#dice8').attr("src","img/dice/8_black.png");
    $('#dice10').attr("src","img/dice/10_black.png");
    $('#dice12').attr("src","img/dice/12_black.png");
    $('#dice20').attr("src","img/dice/20_black.png");
  }else{
    $('#'+color).removeClass().addClass("color_selected");
    //change dices (in none white background wee need white dices)
    $('#dice4').attr("src","img/dice/4.png");
    $('#dice6').attr("src","img/dice/6.png");
    $('#dice8').attr("src","img/dice/8.png");
    $('#dice10').attr("src","img/dice/10.png");
    $('#dice12').attr("src","img/dice/12.png");
    $('#dice20').attr("src","img/dice/20.png");
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
