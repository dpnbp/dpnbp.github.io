//navMenu.js
//create navigation menu to be used on all subpages

var navMenu = document.createElement("ul");
navMenu.className = "navMenu";

var navItem = document.createElement("li");
navItem.className = "navItem";

var navLink = document.createElement("a");
navLink.className = "navLink";

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

var nav = document.getElementById("nav");
nav.appendChild(navMenu);

