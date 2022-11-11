
import {printProducts} from './products.js'
import {initHide} from './Navegation_Menu.js'
import {initCloseCart, printProductsCart, print} from './shopingCart.js'
import {initBarShow} from './bar.js'




window.addEventListener('load', function() {

	const loader = document.querySelector('.loader')
	setTimeout(() => {
		loader.style = 'display: none;'
	}, 3000)	
	const objProducts = [
		{name: 'Hoodies', id: 1, img: 'img/featured1.png', alt: 'featured1', precio: 14.00, stock: 10},
		{name: 'Shirts', id: 2, img: 'img/featured2.png', alt: 'featured2', precio: 24.00, stock: 15},
		{name: 'sweatshirts', id: 3, img: 'img/featured3.png', alt: 'featured3', precio: 24.00, stock: 19}
	]
	let productsBag = {}
	
	const bxGridMenu = document.querySelector('.bx-grid-alt')
	const navMenu = document.querySelector('.nav_menu')
	const bxX = document.querySelector('.cart__close')
	const navShirt = document.querySelectorAll('.item')
	const gridProducts = document.querySelector('.grid_products')
	const containerSweatshirt = document.querySelector('.Sweatshirt')
	const textHome = document.getElementById('textHome')
	const textProducts = document.getElementById('textProducts')
	const ulMenu = document.querySelector('.menu')
	const bxX_ShoppingCart = document.getElementById('cart-close')
	const icon_bag = document.getElementById('icon_car')
	const cart = document.querySelector('.cart')
	
	



	initBarShow(bxGridMenu, navMenu, icon_bag, cart)
	initHide(bxX, navMenu, ulMenu)
	initCloseCart(bxX_ShoppingCart, cart)

	printProducts(gridProducts, objProducts)

	const bag = document.getElementById('bag')
	const commodity = document.querySelectorAll('.target')

	const boxEmpty = document.querySelector('.box_empty')
	const cartCount = document.getElementById('cart-count')
	let count = 0

	commodity.forEach( function(e) {
		if(Number(e.id) === 1) e.classList.add('hdies')
		if(Number(e.id) === 2) e.classList.add('sirt')
		if(Number(e.id) === 3) e.classList.add('swshirt')
	});
	
	mixitup(".grid_products", {
		selectors: {
			target: '.target'
		},
		animation: {
			duration: 300
		}
	}).filter('all')
	// navegationProducts(navShirt, commodity, gridProducts, containerSweatshirt)

	gridProducts.addEventListener('click', (e) => {

		
		if(e.target.classList.contains('btn_add_car')){

			count++

			boxEmpty.style = 'display: none'
			printProductsCart(objProducts, productsBag, e)

			print(productsBag, bag)
			cartCount.textContent = `${count}`

		}
		
	})

	bag.addEventListener('click', (e) => {

		if(e.target.classList.contains('btn_subtract')){

			const productID = Number(e.target.id)

			productsBag[productID].amount === 1 
			? (delete productsBag[productID] , count = 0)
			: (
				productsBag[productID].amount-- , 
				count-- , 
				productsBag[productID].subtotal-= productsBag[productID].precio
			)

			cartCount.textContent = `${count}`

			if(Object.entries(productsBag).length === 0) {
				boxEmpty.style = ''
			}
		}
		if (e.target.classList.contains('btn_addBag')) {

			const productID = Number(e.target.id)

			productsBag[productID].amount < productsBag[productID].stock
			? (productsBag[productID].amount++ , count++ , productsBag[productID].subtotal+= productsBag[productID].precio)
			: cartCount.textContent = `${count}`
		}
		if(e.target.classList.contains('delete')){

			const productID = Number(e.target.id)

			count -= productsBag[productID].amount
			cartCount.textContent = `${count}`
			delete productsBag[productID]

			if(Object.entries(productsBag).length === 0) {
				boxEmpty.style = ''
			}
		}

		print(productsBag, bag)
	})
	


	window.addEventListener('scroll', () => {
		const bar = document.querySelector('.bar')
		bar.classList.toggle('scroll_Bar', window.scrollY > 0)
		textHome.classList.toggle('colorFirst', window.scrollY === 0)
		textProducts.classList.toggle('colorFirst', window.scrollY > 700)

	})


})