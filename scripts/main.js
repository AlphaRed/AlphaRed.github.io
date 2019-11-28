let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc == 'images/a58.gif') {
		myImage.setAttribute('src', 'images/a59.gif');
	} else {
		myImage.setAttribute('src', 'images/a58.gif');
	}
}