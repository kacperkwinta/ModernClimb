(() => {
	const button = document.querySelector(".js-navigation-mobile");
	const menu = document.querySelector(".js-navigation-list");

	const toggleClass = () => {
		menu.classList.toggle("navigation-list--open");
	};

	button.addEventListener("click", toggleClass);
	menu.addEventListener("click", toggleClass);
})();
