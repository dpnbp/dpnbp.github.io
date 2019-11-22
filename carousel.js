var picIndex = 0;
choosePic(picIndex);

document.getElementById("picRight").addEventListener("click", rightClick);
document.getElementById("picLeft").addEventListener("click", leftClick);

function choosePic(index) {
	var picBG = document.getElementById("picBG");
	var pic = document.getElementById("pic");
	var picCaption = document.getElementById("picCaption");
	switch(index) {
		case 0:
			picBG.style.backgroundImage = "url('a.png')";
			pic.src = "a.png";
			picCaption.textContent = "This is me!"
		break;

		case 1:
			picBG.style.backgroundImage = "url('b.png')";
			pic.src = "b.png";
			picCaption.textContent = "Picture #2 (source - mixedinkey.com)"
		break;

		case 2:
			picBG.style.backgroundImage = "url('c.png')";
			pic.src = "c.png";
			picCaption.textContent = "Picture #3 (source - mixedinkey.com)"
		break;

		case 3:
			picBG.style.backgroundImage = "url('d.png')";
			pic.src = "d.png";
			picCaption.textContent = "Picture #4 (source - mixedinkey.com)"
		break;

		default:
			picBG.style.backgroundImage = "url('A.jpg')";
			pic.src = "A.jpg";

	}
}

function rightClick(event){
	if (picIndex == 3){
		picIndex = 0;
	}
	else {
		picIndex++;
	}

	choosePic(picIndex);
}

function leftClick(event){
	if (picIndex == 0){
		picIndex = 3;
	}
	else {
		picIndex--;
	}

	choosePic(picIndex);
}