
function loadContent(ref) {
	document.getElementById('output_div').innerHTML = '<iframe src=\'' + ref + '\' frameborder=\'0\' width=\'1500\' height=\'700px\'></iframe>';
}

function loadInfo(inf){
	let textMessage =' menu has been selected.';
	document.getElementById('output_div').innerHTML = inf + textMessage;
}

function clock() {
	let currentDate = new Date();
	let month_num = currentDate.getMonth()
	let day = currentDate.getDate();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	month=new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
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
	date = month[month_num] +" " + day + ", "  + " " + currentDate.getFullYear();
	time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("currentDate").innerHTML = date;
	document.getElementById("currentTime").innerHTML = time;
	setTimeout("clock()", 1000);
}