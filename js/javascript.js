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
function life_change(m) {
  var num = $("#life").text();
  if (m == "+"){num++;}
  else{num--;}
  $("#life").text(num);
}

function life_reset() {
  var a = confirm("Are you really sure you want to reset the life counter?");
  if (a == true) {
    $("#life").text("20");
  }
}

function roll_dice(n) {
  var dice_number = Math.floor(Math.random() * n)+1; //create random number between 1 and dice max (n)
  $('#d'+n).html("<span onclick=restore_dice("+n+")>"+dice_number+"</span>");
}

function restore_dice(n) { //restore the image of dice
  $('#d'+n).html("<img id=dice"+n+" src=img/dice/"+n+".png alt="+n+"D onclick=roll_dice("+n+")>");
  if ($("#white").attr("class") == "color_selected_white") { //if selected color for interface is white, then put black dices
    $('#d'+n).html("<img id=dice"+n+" src=img/dice/"+n+"_black.png alt="+n+"D onclick=roll_dice("+n+")>");
  }else{ //if not, put black dices
    $('#d'+n).html("<img id=dice"+n+" src=img/dice/"+n+".png alt="+n+"D onclick=roll_dice("+n+")>");
  }
}
