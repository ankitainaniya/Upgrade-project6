function EditSaveClicked()
{
    let variable1 = document.getElementById("edit-save");
    let UpdateHeading = document.getElementById("blogTitleNew") ;
    let UpdatePara = document.getElementById("blogBody") ;
    if(variable1.textContent.includes('Edit'))
    {
        variable1.innerHTML = 'Save &#x1f4be;' ;
        UpdateHeading.setAttribute('contenteditable' , "true") ;
        UpdatePara.setAttribute('contenteditable' , 'true') ;
        UpdateHeading.style.border = '1px black solid' ;
        UpdatePara.style.border = '1px black solid' ;
    }
    else if(variable1.textContent.includes('Save'))
    {
        variable1.innerHTML = 'Edit &#x270D;'
        UpdateHeading.setAttribute('contenteditable' , "false") ;
        UpdatePara.setAttribute('contenteditable' , 'false') ;
        UpdateHeading.style.border = '';
        UpdatePara.style.border = '' ;
        UpdateHeading.innerHTML= "Updated "+UpdateHeading.innerHTML
    }
    
}
let likes = 0 ;
function incLikes()
{   likes = likes + 1 ;
    console.log(likes) ;
    let ContentChange = document.getElementById('like-number-update') ;
   if(likes === 1)
   {
       ContentChange.innerHTML = `${likes} person likes this` ;
   }
   else
   {
    ContentChange.innerHTML =`${likes} people have like this !` ;
   }
}

function AddComment()
{
   var CommentToAdd = document.getElementById("text-area");
   console.log(CommentToAdd.value);
  if(CommentToAdd.value==""){
     alert("Please Add Comment");
  }else{

     var commentList = document.getElementById("commentList") ;
     

     var node = document.createElement("tr");
     var textnode = document.createTextNode(CommentToAdd.value);
     node.appendChild(textnode);
      document.getElementById("commentList").appendChild(node);
      CommentToAdd.value="";
  }
	
}

function getParam()
{

	var title="";
	var username=""
	var body="";
   var blogTitle = document.getElementById("blogTitleNew");
   var blogBody = document.getElementById("blogBody");
    var blogUsername = document.getElementById("blogUsername");
    var url = location.search;
    console.log(url);
    var postNo = parseInt(url.split("&")[0].split("=")[1].replace("%20", " "));
    console.log(postNo);
     switch(postNo)
	{
		case 1:
			title="&#039let&#039 me be a &#039const&#039(ant), not a &#039var&#039(iable)!";
			username="Srishti Gupta";
 			body="Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.";
 			break;
  
		case 2:
			title="What is linting and how can it save you time? ";
			username="Colby Fayock";
 			body="One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.";
 			break;
  		case 3:
			title="How to Get More Views on Your Tech Blog";
			username="Yazeed Bzadough";
 			body=" you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.";
 			break;
  		case 4:
			title="How to write easily describable code";
			username="Cedd Burge";
 			body="When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.";
 			break;
  		case 5:
			title="Everything you should know about ‘module’ & ‘require’ in Node.js";
			username="Srishti Gupta";
 			body="Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz.";
 			break;
  
 	}
 console.log(username);
blogUsername.innerHTML=username;
blogTitle.innerHTML=title;
 blogBody.innerHTML=body;
}


