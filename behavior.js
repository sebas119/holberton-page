document.addEventListener("DOMContentLoaded", function(event) {

	var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.className = "";
	thumbnailElement.addEventListener("click", function() {
		if (thumbnailElement.className == "") {
			thumbnailElement.className == "big";
		}
	});
});


