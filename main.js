var shooting_star = true;
var show_cursor = true;
var play_visualizer = true;

window.addEventListener("load", function () {
	if (this.document.getElementById('tabs_enable')) {
		if ('tab' in this.sessionStorage) {
			this.document.getElementById(this.sessionStorage.getItem('tab')).click();
		} else {
			this.document.getElementById('TabHome').click()
		}
	}
	if (this.window.innerWidth <= 1200) {
		this.document.body.style.width = '100%';
	} else {
		this.document.body.style.width = '60%';
	}

	var canvas = this.document.getElementById('canvas');
	canvas.width = this.window.innerWidth - 100;
	canvas.height = this.window.innerHeight - 100;

	if (this.document.getElementsByTagName('shooting-star').length >= 1) {
		shootingStar();
	}
	stars();
});

window.addEventListener("resize", function () {
	if (this.window.innerWidth <= 1200) {
		this.document.body.style.width = '100%';
	} else {
		this.document.body.style.width = '60%';
	}

	var canvas = this.document.getElementById('canvas');
	canvas.width = this.window.innerWidth - 100;
	canvas.height = this.window.innerHeight - 100;

	stars();
})

// document.getElementById('audio').addEventListener("onpause", function () {
// 	play_visualizer = false;
// });

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

	transition(tabName);

	sessionStorage.setItem('tab', 'Tab' + tabName);
}

function transition(to) {
	switch (to) {
		case 'Home':
			document.getElementById('planet').style.left = '0';

			var station = document.getElementById('station');
			station.style.right = '-1330pt';
			station.style.top = '0';
			station.style.transform = 'rotate(-10deg)';
			station.style.width = '1024px';

			var computer = document.getElementById('computer');
			computer.style.left = '1000pt';
			computer.style.top = '600pt';
			computer.style.transform = 'rotate(-20deg)';
			computer.style.width = '512px';

			document.getElementById('stars').style.left = '0';

			document.getElementById('canvas').style.opacity = '0';

			shooting_star = true;

			break;
		case 'Projects':
			document.getElementById('planet').style.left = '-670pt';

			var station = document.getElementById('station');
			station.style.right = '0pt';
			station.style.top = '0';
			station.style.transform = 'rotate(0deg)';
			station.style.width = '1024px';

			var computer = document.getElementById('computer');
			computer.style.left = '330pt';
			computer.style.top = '750pt';
			computer.style.transform = 'rotate(45deg)';
			computer.style.width = '512px';

			document.getElementById('stars').style.left = '-200px'

			document.getElementById('canvas').style.opacity = '0';

			shooting_star = true;

			break;
		case 'Blog':
			document.getElementById('planet').style.left = '-1340pt';

			var station = document.getElementById('station');
			station.style.right = '0';
			station.style.top = '-1000pt'
			station.style.transform = 'rotate(0deg)';
			station.style.width = '2048px';

			var computer = document.getElementById('computer');
			computer.style.left = '100pt';
			computer.style.top = '100pt';
			computer.style.transform = 'rotate(0deg)';
			computer.style.width = '1024px';

			document.getElementById('stars').style.left = '-250px';

			document.getElementById('canvas').style.opacity = '0';

			shooting_star = false;

			break;
		case 'Music':
			document.getElementById('planet').style.left = '-1340pt';

			var station = document.getElementById('station');
			station.style.right = '0';
			station.style.top = '-1000pt'
			station.style.transform = 'rotate(0deg)';
			station.style.width = '2048px';

			var computer = document.getElementById('computer');
			computer.style.left = '-175pt';
			computer.style.top = '-175pt';
			computer.style.transform = 'rotate(0deg)';
			computer.style.width = (window.innerWidth + 500).toString().concat('px');

			document.getElementById('stars').style.left = '-250px';

			document.getElementById('canvas').style.opacity = '1';

			shooting_star = false;

			break;
	}
}

function stars() {
	var stars = document.getElementsByClassName('star');
	while (stars[0]) {
		stars[0].remove();
	}

	for (var i = 0; i < ((window.innerHeight * window.innerWidth) / 4000); i++) {
		var x = Math.random() * (window.innerWidth + 250);
		var y = Math.random() * window.innerHeight;
		var star = document.createElement('div');
		star.className = 'star';
		star.style.left = x + 'px';
		star.style.top = y + 'px';
		star.style.opacity = Math.random()
		document.getElementById('stars').appendChild(star);
	}
}

function shootingStar() {
	if (shooting_star == true) {
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
	}
	setTimeout(shootingStar, Math.random() * 10000);
}

function despawnShootingStar() {
	document.getElementById('shooting-star').remove();
}

function sortBlog(by) {
	fetch("blog.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			var blogContainer = document.getElementById("Blog");
			var sortedBlogs = data
			switch (by) {
				case "date":
					
					break;
			
				default:
					break;
			}
		})
		.then(function (err) {
			console.log(err);
		});
}

/* *
 * audio visualizer with html5 audio element
 *
 * v0.1.0
 *
 * licenced under the MIT license
 *
 * credit: https://github.com/wayou/
 * modified: https://github.com/DynamicGoose/
 */
function visualizer(tag) {
	if (!play_visualizer) {
		play_visualizer = true;
		return;
	}
	var audio = document.getElementById(tag);
	var ctx = new AudioContext();
	var analyser = ctx.createAnalyser();
	var audioSrc = ctx.createMediaElementSource(audio);
	// we have to connect the MediaElementSource with the analyser
	audioSrc.connect(analyser);
	analyser.connect(ctx.destination);
	// we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
	// analyser.fftSize = 64;
	// frequencyBinCount tells you how many values you'll receive from the analyser
	var frequencyData = new Uint8Array(analyser.frequencyBinCount);

	// we're ready to receive some data!
	var canvas = document.getElementById('canvas'),
		cwidth = canvas.width,
		cheight = canvas.height - 2,
		meterWidth = (cwidth - 192) / 24, //width of the meters in the spectrum
		gap = 8 //gap between meters
	style = '#0f0',
		meterNum = 24, //count of the meters
		YPositionArray = []; //store the vertical position of hte caps for the preivous frame
	ctx = canvas.getContext('2d');
	// loop
	function renderFrame() {
		var array = new Uint8Array(analyser.frequencyBinCount);
		analyser.getByteFrequencyData(array);
		var step = Math.round((array.length / 2) / meterNum); //sample limited data from the total array
		ctx.clearRect(0, 0, cwidth, cheight);
		for (var i = 0; i < meterNum; i++) {
			var value = array[i * step];
			if (YPositionArray.length < Math.round(meterNum)) {
				YPositionArray.push(value);
			};
			ctx.fillStyle = style;
			if (value < YPositionArray[i]) {
				ctx.fillRect(i * (meterWidth + gap), cheight - (--YPositionArray[i]), meterWidth, cheight);
			} else {
				ctx.fillRect(i * (meterWidth + gap), cheight - value, meterWidth, cheight);
				YPositionArray[i] = value;
			};
		}
		requestAnimationFrame(renderFrame);
	}
	renderFrame();
	// audio.play();
};
