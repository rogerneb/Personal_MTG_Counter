var fadetime = 450; //milliseconds fade in dices
var zoomtime = 50; //miliseconds zoom in counters
var zoomlvl = 0.3; //zoom level in counters. min 0(no zoom), max 1


$(document).ready(function() {
  var year = new Date().getFullYear();
  $("#year").html(year);
  
  //select a random color when loading page
  var colors_list =["white", "blue", "grey", "red", "green", "pink",
  "yellow", "darkred", "gray", "darkblue", "black", "darkgreen", "purple", "orange",
  "gradient1", "gradient2", "gradient3", "gradient4", "gradient5", "gradient6", "gradient7"
  ];
  
  var r = Math.floor(Math.random() * 20); //generate random number
  color_change(colors_list[r]);
});

//Background color changer
function color_change(color) {
  $('#counter-app').removeClass().addClass(color); //backgroung color change

  //remove class from all buttons
  var colors_list =["white", "blue", "grey", "red", "green", "pink",
  "yellow", "darkred", "gray", "darkblue", "black", "darkgreen", "purple", "orange",
  "gradient1", "gradient2", "gradient3", "gradient4", "gradient5", "gradient6", "gradient7"
  ];

  for (n=0; n<colors_list.length; n++) {
    $('#'+colors_list[n]).removeClass();
  }

  //add class selected to selected color
  if (color == "white") {
    $('#'+color).removeClass().addClass("color_selected_white");
    //white color needs black dices
    $('#dice4').attr("src","img/dice/4_black.png");
    $('#dice6').attr("src","img/dice/6_black.png");
    $('#dice8').attr("src","img/dice/8_black.png");
    $('#dice10').attr("src","img/dice/10_black.png");
    $('#dice12').attr("src","img/dice/12_black.png");
    $('#dice20').attr("src","img/dice/20_black.png");
  }else{
    $('#'+color).removeClass().addClass("color_selected");
    //other colors needs white dices
    $('#dice4').attr("src","img/dice/4.png");
    $('#dice6').attr("src","img/dice/6.png");
    $('#dice8').attr("src","img/dice/8.png");
    $('#dice10').attr("src","img/dice/10.png");
    $('#dice12').attr("src","img/dice/12.png");
    $('#dice20').attr("src","img/dice/20.png");
  }
}

//show and hide color selector
function hide_colors(){
 $("#arrow").text("▼");
 $("#arrow").attr("onclick", "show_colors()");
 $('#color_container').removeClass().addClass("color_container_hide")
}

function show_colors(){
 $("#arrow").text("▲");
 $("#arrow").attr("onclick", "hide_colors()");
 $('#color_container').removeClass().addClass("color_container_show")
}

//Add or remove life form counter
function counter_change(n, type) {
  $("#"+type).text(num);
  var num = $("#"+type).text();
  if (n == "+"){num++;}
  else{num--;}

  $("#"+type).animate({ 'zoom': 1-zoomlvl }, zoomtime); //zoom animation out
  $("#"+type).text(num); //change number
  $("#"+type).animate({ 'zoom': 1 }, zoomtime); //zoom animation in
}

/*RESET COUNTERS*/
function counter_reset() {
  $('#reset_confirm').removeClass(); //show reset confirm
}

function reset_yes(){ //when reset...
  //reset counters
  $("#life").text("20");
  $("#life_1p").text("20");
  $("#life_2p").text("20");
  $("#poison").text("0");
  $("#energy").text("0");
  $("#other").text("0");
  dices = [4, 6, 8, 10, 12, 20]; //dices list

  //reset dices
  if ($("#white").attr("class") == "color_selected_white") {//white color needs black dices
    for (n=0; n < dices.length; n++) {
      $('#d'+dices[n]).html("<img id=dice"+dices[n]+" src=img/dice/"+dices[n]+"_black.png alt="+n+"D onclick=roll_dice("+dices[n]+")>");
    }
  }else{ //other colors need white dices
    for (n=0; n < dices.length; n++) {
      $('#d'+dices[n]).html("<img id=dice"+dices[n]+" src=img/dice/"+dices[n]+".png alt="+n+"D onclick=roll_dice("+dices[n]+")>");
    }
  }

  //reset commander counters
  for (n=1; n<=6; n++){
    $("#commander_life_"+n+"p").text("40");
  }

  //back to top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  $('#reset_confirm').removeClass().addClass("invisible"); //hide reset message
}

function reset_no(){ //when canceled...
  //back to top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  $('#reset_confirm').removeClass().addClass("invisible");//hide reset message
}

//ROLL DICES
function roll_dice(n) {
  if (n==10) { //D10 0-9
    m=0;
  }else{
    m=1;
  }
  var dice_number = Math.floor(Math.random() * n)+m; //create random number between 1 and dice max (n)
  $("#d"+n).fadeOut(fadetime) //Fade out
  setTimeout(function () { //delayed code
    $('#d'+n).html("<span onclick=restore_dice("+n+")>"+dice_number+"</span>"); //put the result number
  }, fadetime)
  $("#d"+n).fadeIn(fadetime) //Fade In
}

//RESTORE DICES
function restore_dice(n) { //restore the image of dice
  $("#d"+n).fadeOut(fadetime) //Fade out
  setTimeout(function () { //delayed code
    if ($("#white").attr("class") == "color_selected_white") { //if selected color for interface is white, then put black dices
      $('#d'+n).html("<img id=dice"+n+" src=img/dice/"+n+"_black.png alt="+n+"D onclick=roll_dice("+n+")>");
    }else{ //if not, put white
      $('#d'+n).html("<img id=dice"+n+" src=img/dice/"+n+".png alt="+n+"D onclick=roll_dice("+n+")>");
    }
  }, fadetime)
  $("#d"+n).fadeIn(fadetime) //Fade In
}

//change mode 1p 2p or 6p
function mode_1p(){
  $('#twoplayers_container').addClass("invisible"); //hide two players mode
  $('#oneplayers_container').removeClass(); //show one player mode
  $('#oc').removeClass(); //show other counters
  $('#commander-container').addClass("invisible"); //hide commander
  $('#1p_mode').removeClass("not_selected"); //select 1pmode
  $('#2p_mode').addClass("not_selected"); //unselect 2pmode
  $('#6p_mode').addClass("not_selected"); //unselect 2pmode
  //go to top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function mode_2p(){
  $('#oneplayers_container').addClass("invisible"); //hide one player mode
  $('#twoplayers_container').removeClass(); //show to players mode
  $('#oc').removeClass(); //show other counters
  $('#commander-container').addClass("invisible"); //hide commander
  $('#1p_mode').addClass("not_selected"); //select 1pmode
  $('#2p_mode').removeClass("not_selected"); //unselect 2pmode
  $('#6p_mode').addClass("not_selected"); //unselect 2pmode
  //go to top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function mode_6p(){
  $('#oneplayers_container').addClass("invisible"); //hide one player mode
  $('#twoplayers_container').addClass("invisible"); //hide two player mode
  $('#oc').addClass("invisible"); //hide other counters
  $('#commander-container').removeClass(); //show commander
  $('#1p_mode').addClass("not_selected"); //select 1pmode
  $('#2p_mode').addClass("not_selected"); //unselect 2pmode
  $('#6p_mode').removeClass("not_selected"); //unselect 2pmode
  //go to top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 
}

//go to library
function go_to_library(){
  $('#counter-app').addClass("invisible"); //hide counter
  $('#library-app').removeClass(); //show library
  $("body").addClass("library-app-body"); //add specific class for body in library mode
  //back to top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//go to counter
function go_to_counter(){
  $('#library-app').addClass("invisible"); //hide library
  $('#counter-app').removeClass("invisible"); //show counter
  $("body").removeClass("library-app-body"); //remove specific library class for body in counter mode
  //back to top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*Lock mobile screen playing a fake video*/
function lock_screen(){
  video = document.getElementById("video");
  if (video.paused) {
    video.play(); //when video is played screen NOT turn off.
  }else{
    video.pause();//when video is not played screen turn off.
  }
}
