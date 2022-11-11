


function printProducts(gridProducts, objProducts){
  
	let html = ''

	objProducts.forEach(({name, id, img, alt, precio, stock}) => {
		html += `<article class="target" id='${id}'>
				<div class="box_img">
					<img class="img_swtshirt" src="${img}" alt="${alt}">
				</div>
				<button class="btn_add_car" id="${id}">+</button>
				<div class="Precio">
					<h3>$${precio} <span>| Stock: ${stock}</span></h3>
					<p>${name}</p>
				</div>
			</article>`
			
	})
		
	gridProducts.innerHTML = html

}


// function navegationProducts([showAll, hoodies, shirts, sweatshirts], [hoodie, shirt, sweatshirt], gridProducts, containerSweatshirt){

// 	if(screen.width <= 500 && screen.height <= 920){

// 		showAll.addEventListener('click', () => {

// 			containerSweatshirt.style = ''
// 			gridProducts.style = ''
// 			hoodie.style = ''
// 			if(hoodie.classList.contains('fadeShow') || hoodie.classList.contains('ocultarShirt')){
// 				hoodie.classList.remove('ocultarShirt')
// 				hoodie.classList.remove('fadeShow')
// 			}
// 			shirt.style = ''
// 			if(shirt.classList.contains('fadeShow') || shirt.classList.contains('ocultarShirt')){
// 				shirt.classList.remove('ocultarShirt')
// 				shirt.classList.remove('fadeShow')
// 			}
// 			sweatshirt.style = ''
// 			if(sweatshirt.classList.contains('fadeShow') || sweatshirt.classList.contains('ocultarShirt')){
// 				sweatshirt.classList.remove('ocultarShirt')
// 				sweatshirt.classList.remove('fadeShow')
// 			}

		
// 		})

// 		hoodies.addEventListener('click', () => {

// 			hoodie.style = null
			
// 			shirt.classList.remove('fadeShow')
// 			sweatshirt.classList.remove('fadeShow')

// 			if(hoodie.classList.contains('ocultarShirt')) {

// 				hoodie.classList.remove('ocultarShirt')
// 				hoodie.classList.add('fadeShow')

// 				shirt.classList.remove('fadeShow')

// 			}
			
// 			shirt.classList.add('ocultarShirt')
// 			sweatshirt.classList.add('ocultarShirt')
// 			setTimeout(() => {
// 				shirt.style = 'display: none; position: absolute;'
// 				shirt.classList.add('target')
// 				sweatshirt.style = 'display: none; position: absolute;'
// 				sweatshirt.classList.add('target')

// 				containerSweatshirt.style.height = '50%'
// 				containerSweatshirt.style.transition = 'height 0.2s'
// 				gridProducts.style.bottom = '220px'
// 			}, 200)

// 		})

// 		shirts.addEventListener('click', () => {

			
// 			hoodie.classList.remove('fadeShow')
// 			sweatshirt.classList.remove('fadeShow')

// 			if(shirt.classList.contains('ocultarShirt')) {

// 				shirt.classList.remove('ocultarShirt')
// 				shirt.classList.add('target')
// 				shirt.classList.add('fadeShow')

// 			}

// 			hoodie.classList.add('ocultarShirt')
// 			sweatshirt.classList.add('ocultarShirt')
// 			setTimeout(() => {
// 				hoodie.style = 'display: none; position: absolute;'
// 				sweatshirt.style = 'display: none; position: absolute;'

// 				shirt.style = 'position: absolute;'

// 				containerSweatshirt.style.height = '50%'
// 				containerSweatshirt.style.transition = 'height 0.2s'
// 				gridProducts.style.bottom = '220px'
// 			}, 200)

// 		})
// 		sweatshirts.addEventListener('click', () => {
			
// 			shirt.classList.remove('fadeShow')
// 			hoodie.classList.remove('fadeShow')

// 			if(sweatshirt.classList.contains('ocultarShirt')){
// 				sweatshirt.classList.remove('ocultarShirt')
// 				sweatshirt.classList.add('fadeShow')
// 			}

// 			hoodie.classList.add('ocultarShirt')
// 			shirt.classList.add('ocultarShirt')

// 			setTimeout(() => {
// 				hoodie.style = 'display: none; position: absolute;'
// 				shirt.style = 'display: none; position: absolute;'
// 				sweatshirt.style = 'position: absolute;'

// 				containerSweatshirt.style.height = '50%'
// 				containerSweatshirt.style.transition = 'height 0.2s'
// 				gridProducts.style.bottom = '220px'
// 			}, 200)
// 		})
// 	}

// }

export {
	printProducts
}