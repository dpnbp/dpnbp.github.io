var picIndex = 0;
choosePic(picIndex);

document.getElementById("picRight").addEventListener("click", rightClick);
document.getElementById("picLeft").addEventListener("click", leftClick);

var picSelectors = document.getElementsByClassName("picSelect");

for(let i = 0; i<picSelectors.length; i++){
	picSelectors[i].addEventListener("click", function (event){
		picIndex = i;
		choosePic(picIndex);
	});
}


function choosePic(index) {
	var picBG = document.getElementById("picBG");
	var pic = document.getElementById("pic");
	var picCaption = document.getElementById("picCaption");
	var picSelects = document.getElementsByClassName("picSelect");

	for(let i=0; i<picSelects.length; i++){
		if (index == i){
			picSelects[i].className = "picSelect picActive";
		}
		else{
			picSelects[i].className = "picSelect";
		}
	}

	switch(index) {
		case 0:
			picBG.style.backgroundImage = "url('img/a.png')";
			pic.src = "img/a.png";
			picCaption.textContent = "This is me!"
		break;

		case 1:
			picBG.style.backgroundImage = "url('img/b.png')";
			pic.src = "img/b.png";
			picCaption.textContent = "Pic#2 (Photo by Romina veliz on Unsplash)"
		break;

		case 2:
			picBG.style.backgroundImage = "url('img/c.png')";
			pic.src = "img/c.png";
			picCaption.textContent = "Pic#3 (Photo by Krys Amon on Unsplash)"
		break;

		case 3:
			picBG.style.backgroundImage = "url('img/d.png')";
			pic.src = "img/d.png";
			picCaption.textContent = "Pic#4 (Photo by maximalfocus on Unsplash)"
		break;

		default:
			picBG.style.backgroundImage = "url('img/a.png')";
			pic.src = "img/a.png";
			picCaption.textContent = "Error: Index Out of Range"

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