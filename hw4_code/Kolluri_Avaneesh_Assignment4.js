// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
   var username = document.getElementById("formUsername").value;
   var caption = document.getElementById("formCaption").value;
   var img = document.getElementById("formImg").value;
   addNewPost(username,caption,fileLocations[img]);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   // Create a span for the user
   // Create image element
   // Create overlay element
   // Add all child elements (order matters)
   // Add event listeners to post
   // Add post element to post list

   var div1 = document.createElement("div");
   var spanEl = document.createElement("span");
   var src_img = document.createElement("img");
   var div2 = document.createElement("div");

   div1.className = "post";
   div2.className = "postOverlay";

   src_img.src = imgLocation;
   src_img.alt = caption;

   spanEl.appendChild(document.createTextNode(username));
   
   div2.appendChild(document.createTextNode(caption));
   div1.append(spanEl);
   div1.append(src_img);
   div1.append(div2);
   div1.addEventListener('mouseover',() => {
      div2.style.opacity = '1';
   });
   div1.addEventListener('mouseleave',() => {
      div2.style.opacity = '0';
   });
   document.getElementById('postList').appendChild(div1)
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};