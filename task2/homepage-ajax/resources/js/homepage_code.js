let items = document.getElementsByClassName("sub_menu_item");

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", loadContent);
}

function loadContent() {
	let page = ""
	switch (this.id) {
		case 'Boeing':
			page = 'resources/pages/page1/boeing.html';
			loadPage(page);
			break;
		case 'Airbus':
			page = 'resources/pages/page2/airbus.html';
			loadPage(page);
			break;
		case 'Sukhoi':
			page = 'resources/pages/page3/sukhoi.html';
			loadPage(page);
			break;
		default:
			loadInfo(this.id);
			break;
	}
}

function loadPage(page) {
	document.getElementById('output_div').innerHTML = "Page loading...";
	let request = new XMLHttpRequest();
	if (!request) {
		console.log('Unable to create XMLHTTP instance');
		return false;
	}
	request.open("GET", page, true);
	request.send();
	request.onreadystatechange = function () {
		if (request.readyState == XMLHttpRequest.DONE) {
			document.getElementById('output_div').innerHTML = "";
			if (request.status == 200) {
				document.getElementById('output_div').innerHTML = request.responseText;
			}
		}
	}
}

function loadInfo(id) {
	let textMessage = ' menu has been selected.';
	document.getElementById('output_div').innerHTML = id + textMessage;
}

function clock() {
	let currentDate = new Date();
	let month_num = currentDate.getMonth()
	let day = currentDate.getDate();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	month = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	if (day <= 9) {
		day = "0" + day;
	}
	if (hours <= 9) {
		hours = "0" + hours;
	}
	if (minutes <= 9) {
		minutes = "0" + minutes;
	}
	if (seconds <= 9) {
		seconds = "0" + seconds;
	}
	date = month[month_num] + " " + day + ", " + " " + currentDate.getFullYear();
	time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("currentDate").innerHTML = date;
	document.getElementById("currentTime").innerHTML = time;
	setTimeout("clock()", 1000);
}