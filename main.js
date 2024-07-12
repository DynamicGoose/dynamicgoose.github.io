window.addEventListener("load", function () {
	if (this.document.getElementById('tabs_enable')) {
		if ('tab' in this.sessionStorage) {
			this.document.getElementById(this.sessionStorage.getItem('tab')).click();
		} else {
			this.document.getElementById('TabHome').click()
		}
	}
	if (this.document.getElementById('blog')) {
		openBlog(this.sessionStorage.getItem('blog'));
	}
	if (this.window.innerWidth <= 1200) {
		this.document.body.style.width = '100%';
	} else {
		this.document.body.style.width = '60%';
	}

	shootingStar();
	stars();
});

window.addEventListener("resize", function () {
	if (this.window.innerWidth <= 1200) {
		this.document.body.style.width = '100%';
	} else {
		this.document.body.style.width = '60%';
	}

	stars();
})

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
	sessionStorage.setItem('tab', 'Tab' + tabName);
}

function stars() {
	var stars = document.getElementsByClassName('star');
	while (stars[0]) {
		stars[0].remove();
	}

	for (var i = 0; i < ((window.innerHeight * window.innerWidth) / 4000); i++) {
		var x = Math.random() * window.innerWidth;
		var y = Math.random() * window.innerHeight;
		var star = document.createElement('div');
		star.className = 'star';
		star.style.left = x + 'px';
		star.style.top = y + 'px';
		star.style.opacity = Math.random()
		document.body.appendChild(star);
	}
}

function shootingStar() {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	var star_div = document.createElement('div');
	star_div.className = 'shooting-star';
	star_div.id = 'shooting-star'
	star_div.style.left = x + 'px';
	star_div.style.top = y + 'px';

	var star = document.createElement('img');
	star.src = '/assets/Starry_night_star_640x360_once.gif';
	star.style.width = '300px';
	if (Math.random() < 0.5) {
		star.style.transform = 'scaleX(-1)';
	}

	star_div.appendChild(star);
	document.body.appendChild(star_div);
	setTimeout(despawnShootingStar, 700);
	setTimeout(shootingStar, Math.random() * 10000)
}

function despawnShootingStar() {
	document.getElementById('shooting-star').remove();
}

function setBlog(path) {
	sessionStorage.setItem('blog', path);
	location.href = 'blog.html'
}

function openBlog(path) {
	fetch(path).then( response => response.text() ).then( text => document.getElementById('blogpost').innerHTML = text);
}