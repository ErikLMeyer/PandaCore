var months = ["January", "February", "March", "April", "May", "June", "July",
 "August", "September", "October", "November", "December"];
var views = ["Monthly", "Weekly", "Daily"];
var startYear = 2021;
var endYear = 2099;
var month = 0;
var year = 0;

function genMonths() {
	for (var i = 0; i < months.length; i++) {
		var doc = document.createElement("div");
		doc.innerHTML = months[i];
		doc.classList.add("dropdown-item");
		
		doc.onclick = (function () {
			var selectedMonth = i;
			return function () {
				month = selectedMonth;
				document.getElementById("curMonth").innerHTML = months[month];
				genDays();
				return month;
			}
		})();

		document.getElementById("months").appendChild(doc);
	}
}

function genYears() {
	document.getElementById("years").innerHTML = "";

	for (var i = startYear; i <= endYear; i++) {
		var doc = document.createElement("div");
		doc.innerHTML = i;
		doc.classList.add("dropdown-item");

		doc.onclick = (function () {
			var selectedYear = i;
			return function () {
				year = selectedYear;
				document.getElementById("curYear").innerHTML = year;
				genDays();
				return year;
			}
		})();

		document.getElementById("years").appendChild(doc);
	}
}							

// TODO: edit function to display only week of current day
// Possible TODO: add arrows to go forward, backward a week
function genDays() {
	document.getElementById("calendarDays").innerHTML = "";

	var tmpDate = new Date(year, month, 0);
	var num = daysInMonth(month, year);
	var dayofweek = tmpDate.getDay();       // find where to start calendar day of week

	for (var i = 0; i <= dayofweek; i++) {
		var d = document.createElement("div");
		d.classList.add("day");
		d.classList.add("blank");
		document.getElementById("calendarDays").appendChild(d);
	}

	for (var i = 0; i < num; i++) {
		var tmp = i + 1;
		var d = document.createElement("div");
		d.id = "calendarday_" + i;
		d.className = "day";
		d.innerHTML = tmp;

		document.getElementById("calendarDays").appendChild(d);
	}

	var clear = document.createElement("div");
	clear.className = "clear";
	document.getElementById("calendarDays").appendChild(clear);
}

function daysInMonth(month, year) {
	var d = new Date(year, month+1, 0);
	return d.getDate();
}

function genViews() {
	for (var i = 0; i < views.length; i++) {
		var doc = document.createElement("div");
		doc.innerHTML = views[i];
		doc.classList.add("dropdown-item");
		
		doc.onclick = (function () {
			var selectedView = i;
			return function () {
				view = selectedView;
				document.getElementById("curView").innerHTML = views[view];
				// gen new view on click -- make functions for this
				// if select monthly genMonths
				// if select weekly, genWeeks
				// if select daily, genDays
				return view;
			}
		})();
		
		document.getElementById("views").appendChild(doc);
	}
}
		
window.addEventListener('load', function () {
	var date = new Date();
	month = date.getMonth();
	year = date.getFullYear();
	view = views[0];
	document.getElementById("curMonth").innerHTML = months[month];
	document.getElementById("curYear").innerHTML = year;
	document.getElementById("curView").innerHTML = view;
	genMonths();
	genYears();
	genDays();
	genViews();
});