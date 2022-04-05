const products = [
    {
        id: 1,
        title: 'Osaka Entry Tee Superdry 12',
        price: 123,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis massa nec velit commodo lobortis. Quisque diam lacus, tincidunt vitae eros porta, sagittis rhoncus est. Quisque sed justo a erat lobortis gravida.',
        categories: ['Men', 'T-shirt'],
        tags: ['man', 'white', 't-shirt'],
        images: [
            'https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_1-629x800.jpeg',
            'https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_2-629x800.jpeg',
            'https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_3-629x800.jpeg'
        ]
    },
    {
        id: 2,
        title: 'SS Crew California Sub River Island',
        price: 123,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis massa nec velit commodo lobortis. Quisque diam lacus, tincidunt vitae eros porta, sagittis rhoncus est. Quisque sed justo a erat lobortis gravida.',
        categories: ['Men', 'T-shirt'],
        tags: ['man', 'white', 't-shirt'],
        images: [
            'https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/271174-0066_1-510x649.jpeg',
        ]
    }
]
const showQuikView = (id) => {
    const targetProduct = products.find((product) => product.id === id)
    const body = document.querySelector('body');
    body.innerHTML += createProductPopup(targetProduct)
}

const createProductPopup = (product) => {
    let popupImages = '';
    product.images.forEach(image => {
        popupImages += `<img src=${image} />`
    })

    return `
    <div id="productPopUp">
        <div class="container">
            <div class="popup_wrapper">
                <div class='popup_image'>
                    ${popupImages}
                </div>
                <div class='popup_details'>
                    <h2>${product.title}</h2>
                    <h4>${product.price}</h4>
                    <p>${product.desc}</p>
                    <div class="add_to_cart">
                        <div clas="product_quantity_box">
                            <button class="decrease_quantity">-</button>
                            <input type="number" class="product_quantity" />
                            <button class="increase_quantity">+</button>
                        </div>
                        <button class="add_to_cart_button">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

const createProduct = (product) => {
    let imagesHtml = '';
    product.images.forEach((image) => {
        imagesHtml += `<img src=${image} />`
    })
    return `
        <div class="product">
            <div class="product_image">
                ${imagesHtml}
                <button onclick="showQuikView(${product.id})">quick view</button>
            </div>
            <div class="product_details">
                <span class="product_category">${product.categories[0]}</span>
                <h2 class="product_title">${product.title}</h2>
                <h4 class="product_price">$${product.price}</h4>
            </div>
        </div>
    `
}

const productWraper = document.querySelector('.products_wrapper');
let result = ''
products.forEach(product => {
    result += createProduct(product)
});
productWraper.innerHTML = result;