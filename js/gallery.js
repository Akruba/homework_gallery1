/* Name this external file gallery.js */

function upDate(previewPic) {
  // Log to confirm the event
  console.log("upDate function triggered");
  console.log("Preview pic alt: " + previewPic.alt + ", src: " + previewPic.src);
  
  // Get the div with the id "image"
  var imageDiv = document.getElementById("image");
  
  // Update background preview image
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  
  // Update the text of the preview image
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  // Log to confirm the triggering
  console.log("unDo function triggered");
  
  var imageDiv = document.getElementById("image");
  
  // Revert the background image 
  imageDiv.style.backgroundImage = "url('')";
  
  // Revert the text 
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
