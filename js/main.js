const version = 'v1.0.0';
const developer = 'me';
const start_year = 2025;
var curr_year = new Date().getFullYear();

window.addEventListener('load', functionInit, true);

function functionInit() {
	makeFooter(developer, version, start_year);
}

function includeHTML() {
	var z, i, elmnt, file, xhttp;
	z = document.getElementsByTagName('*');
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		file = elmnt.getAttribute('include-html');
		if (file) {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) { elmnt.innerHTML = this.responseText; }
					if (this.status == 404) { elmnt.innerHTML = 'Page not found.'; }
					elmnt.removeAttribute('include-html');
					includeHTML();
				}
			}
			xhttp.open('GET', file, true);
			xhttp.send();
			return;
		}
	}
}

function makeFooter(developer, version, start_year) {
	if (start_year != curr_year) {
		$('#copyright').html('<span>&copy; ' + start_year + '-' + curr_year + ' | ' + developer + '</span>');
	} else {
		$('#copyright').html('<span>&copy;' + start_year + ' | ' + developer + '</span>');
	}
	$('#version').html('<span>' + version + '</span>');
}
