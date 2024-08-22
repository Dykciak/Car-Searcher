let inputSearch;
let allLi;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	inputSearch = document.querySelector(".search");
	allLi = document.querySelectorAll("li");
};

const prepareDOMEvents = () => {
	inputSearch.addEventListener("keyup", searchCar);
};

const searchCar = (e) => {
	if (inputSearch.value !== "") {
		const text = e.target.value.toLowerCase();
		console.log(text);
		allLi.forEach((el) => {
			if (el.textContent.toLowerCase().indexOf(text) !== -1) {
				el.style.display = "block";
			} else {
				el.style.display = "none";
			}
		});
	} else {
		console.log("musisz coś wpisać");
	}
};

document.addEventListener("DOMContentLoaded", main);
