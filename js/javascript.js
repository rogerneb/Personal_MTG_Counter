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
function counter_change(n, type) {
  var num = $("#"+type).text();
  if (n == "+"){num++;}
  else{num--;}
  $("#"+type).text(num);
}

function counter_reset() {
  var a = confirm("Are you really sure you want to reset all counters?");
  if (a == true) {
    $("#life").text("20");
    $("#poison").text("0");
    $("#energy").text("0");
    $("#other").text("0");

    //back to top
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}

//function roll dice
function roll_dice(n) {
  if (n==10) { //D10 0-9
    m=0;
  }else{
    m=1;
  }
  var dice_number = Math.floor(Math.random() * n)+m; //create random number between 1 and dice max (n)
  $('#d'+n).html("<span onclick=restore_dice("+n+")>"+dice_number+"</span>"); //put the result number

}

function restore_dice(n) { //restore the image of dice
  $('#d'+n).html("<img id=dice"+n+" src=img/dice/"+n+".png alt="+n+"D onclick=roll_dice("+n+")>");
  if ($("#white").attr("class") == "color_selected_white") { //if selected color for interface is white, then put black dices
    $('#d'+n).html("<img id=dice"+n+" src=img/dice/"+n+"_black.png alt="+n+"D onclick=roll_dice("+n+")>");
  }else{ //if not, put black
    $('#d'+n).html("<img id=dice"+n+" src=img/dice/"+n+".png alt="+n+"D onclick=roll_dice("+n+")>");
  }
}


/*Lock mobile screen playing a fake video*/
function lock_screen(){
  video = document.getElementById("video");
  if (video.paused) {
    video.play();
    alert("The screen will not turn off");
  }else{
    video.pause();
    alert("The screen will turn off");
  }
}
