

function initBarShow(bxGridMenu, navMenu, icon_bag, cart){

	bxGridMenu.addEventListener('click', function(){
		navMenu.classList.toggle('nav_menu_show')
	})

	icon_bag.addEventListener('click', () => {
		cart.classList.toggle('cartShow')
	})

}

export {
	initBarShow,
}