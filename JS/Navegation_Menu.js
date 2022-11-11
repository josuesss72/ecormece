

function initHide(bxX,navMenu,ulMenu) {

	bxX.addEventListener('click', function(){
		navMenu.classList.remove('nav_menu_show')
	})

	ulMenu.addEventListener('click', (e) => {
		navMenu.classList.remove('nav_menu_show', e.target.classList.contains('aItem'))
	})
}

export {
	initHide
}