const getScroll = function() {
	if (window.pageYOffset !== undefined) {
		return [window.pageXOffset, window.pageYOffset];
	} else {
		var sx, sy, d = document,
			r = d.documentElement,
			b = d.body;
		sx = r.scrollLeft || b.scrollLeft || 0;
		sy = r.scrollTop || b.scrollTop || 0;
		return [sx, sy];
	}
}

window.addEventListener('scroll', function() {
	let elem = document.getElementsByClassName('header')[0];
	this.console.log(getScroll()[1])
	if (getScroll()[1] >= 150) {
		if (elem) elem.classList.add('header_background-alpha');
	} else {
		if (elem) elem.classList.remove('header_background-alpha');
	}
});