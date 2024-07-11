window.addEventListener("load", function () {
	this.document.getElementById("defaultOpen").click();
	shootingStar();
	stars()
});

window.addEventListener("resize", function () {
	console.log(this.window.innerWidth);
	if (this.window.innerWidth <= 1200) {
		this.document.body.style.width = '100%';
	} else {
		this.document.body.style.width = '60%';
	}
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
}

function stars() {
	for(var i = 0 ; i < 500 ; i++) {
		var x = Math.random() * screen.width
		var y = Math.random() * screen.width;
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
	star.src = 'assets/Starry_night_star_640x360_once.gif';
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