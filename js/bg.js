const backgroundItems = document.querySelectorAll('.tbg');

if (backgroundItems.length > 0) {
	for (let index = 0; index < backgroundItems.length; index++) {
		const backgroundItem = backgroundItems[index];
		const itemsrc = backgroundItem.src;
		const closediv = backgroundItem.closest('div')

		backgroundItem.style.display = "none";
		closediv.style.backgroundImage = "url(" + itemsrc + ")";
	}
}