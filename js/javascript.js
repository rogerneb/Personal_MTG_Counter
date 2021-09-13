//Background color changer
function color_change(color) {
  $('#body').removeClass().addClass(color);
}

//add or reove life form counter
function life_change(m){
  var num = $("#life").text();
  if (m == "+"){num++;}
  else{num--;}
  $("#life").text(num);
}


function life_reset(){
  $("#life").text("20");
}
