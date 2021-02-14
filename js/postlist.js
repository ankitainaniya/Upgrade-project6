function del( post) {
    // Fetch the modal
    var modal = document.getElementById("del");
    // Display the modal to the user
    modal.style.display = "block";
  
    // Hides the modal if user clicks else where on the display
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
  
    }
   
    var yes = document.getElementById("yes-btn");
    var no= document.getElementById("no-btn");
    yes.onclick = function() {
   	alert("yes");
        post.style.display ="none";
   	modal.style.display = "none";
    }
    no.onclick = function() {
  	 alert("no");
 	 modal.style.display = "none";
    }
 }


