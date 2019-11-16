//navMenu.js
//create navigation menu to be used on all subpages

var navMenu = document.createElement("ul");


document.body.appendChild(navMenu);
navMenu.className = "navMenu";
//navMenu.setAttribute("style", "overflow: hidden; .position: fixed; top: 0; padding: 0; margin: 0; width: 100%;")

var navItem = document.createElement("li");
navItem.className = "navItem";
//navItem.setAttribute("style", "width: 25%; background: #16a085; padding: 0; text-align: center; list-style-type: none;")

var navLink = document.createElement("a");
navLink.className = "navLink";
//navLink.setAttribute("style", "float: left; line-height: 50px; width: 100%; color: #f1c40f; background-color: black; margin: auto; text-decoration: none; ext-align: middle; font-size: 200%;")

navItem.appendChild(navLink);

navLink.textContent = "home";
navLink.href = "index.html";
navMenu.appendChild(navItem.cloneNode(true));
navLink.firstChild.textContent = "blog";
navLink.href = "blog.html";
navMenu.appendChild(navItem.cloneNode(true));
navLink.firstChild.textContent = "about";
navLink.href = "about.html";
navMenu.appendChild(navItem.cloneNode(true));
navLink.firstChild.textContent = "contact";
navLink.href = "contact.html";
navMenu.appendChild(navItem.cloneNode(true));

var c = navMenu.children
for (var i = 0; i<c.length; i++){
	if (document.title.includes(c[i].firstChild.textContent)){
		c[i].firstChild.className = "navLink navActive";
		c[i].firstChild.removeAttribute("href");
	}
}




