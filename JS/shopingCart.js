

function initCloseCart(bxX_ShoppingCart, cart) {

	bxX_ShoppingCart.addEventListener('click', () => {
		cart.classList.remove('cartShow')
	})

}

function print(productsBag, bag){

	let html = ``
	// console.log(productsBag)
	let arrayProductsBag = Object.values(productsBag)

	arrayProductsBag.forEach( function({name, id, img, alt, precio, amount, stock, subtotal}) {
		html += `<article class='container_article_product'>
					<div class='inBag'>
						<img class='imgProductBag' src="${img}" alt="${alt}">
						<div class='box_paragraph_bag'>
							<h3>${name}</h3>
							<p class='stock'>Stock: ${stock} |<span class='colorRedText'>$${precio}</span></p>
							<p class='colorRedText'>Subtotal: <span>$${subtotal}</span></p>
							<div class='box_btn_product_bag'>
								<button id='${id}'class='btn_style_bag btn_subtract'>-</button>
								<p class='amount'>${amount} units</p>
								<button id='${id}'class='btn_style_bag btn_addBag'>+</button>
								<i class="bx bx-trash-alt delete" id='${id}'></i>
							</div>
						</div>
					</div>
				</article>`
	});

	bag.innerHTML = html
}

	
function printProductsCart(objProducts, productsBag, e){

	const productsID = Number(e.target.id)
	let currentProduct = objProducts.find((i) => i.id === productsID)
	
	if(productsBag[currentProduct.id]){
		productsBag[currentProduct.id].amount++
	}else {
		productsBag[currentProduct.id] = currentProduct
		productsBag[currentProduct.id].amount = 1
		productsBag[currentProduct.id].subtotal = productsBag[currentProduct.id].precio
	}
}


export {
	initCloseCart,
	printProductsCart,
	print
}