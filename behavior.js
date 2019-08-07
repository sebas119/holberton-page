document.addEventListener("DOMContentLoaded", function(event) {

	var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.className = "small";
	thumbnailElement.addEventListener("click", function() {		
		if (thumbnailElement.className == "small") {			
			thumbnailElement.className = "big";
		}else {
			thumbnailElement.className = "small";
		}
	});	
});


