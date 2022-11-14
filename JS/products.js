


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

export {
	printProducts
}