window.addEventListener('load', function() {
	var h = document.getElementById('hello')
		, colors = ['red','blue','orange','green','pink']
		, i = 0;

	function setColor() {
		h.style.color = colors[i];
		i += 1;

		if (i > 4) {
			i = 0;
		}

		setTimeout(setColor, 1000);
	}

	setColor();
})