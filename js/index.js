var signup_modal = document.getElementById("signup_modal");
var top_button_1 = document.getElementById("top_button_1");
var close_span = document.getElementsByClassName("close")[0];

top_button_1.onclick = function() {
  signup_modal.style.display = "block";
}
close_span.onclick = function() {
  signup_modal.style.display = "none";
}


var signin_modal = document.getElementById("signin_modal");
var top_button_2 = document.getElementById("top_button_2");
var close_span_1 = document.getElementsByClassName("close")[1];

top_button_2.onclick = function() {
  signin_modal.style.display = "block";
}
close_span_1.onclick = function() {
  signin_modal.style.display = "none";
}

var linking_href= document.getElementById("linking");
linking_href.onclick= function(){
  signin_modal.style.display = "none";
  signup_modal.style.display = "block";
}

var create_Post_button= document.getElementById("create_Post_button");
var close_span_2 = document.getElementsByClassName("close")[2];
create_Post_button.onclick= function(){
  create_post_model.style.display = "block";
}
close_span_2.onclick = function() {
  create_post_model.style.display = "none";
}
