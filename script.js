const products = [
    {
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
        title: 'SS Crew California Sub River Island',
        price: 123,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis massa nec velit commodo lobortis. Quisque diam lacus, tincidunt vitae eros porta, sagittis rhoncus est. Quisque sed justo a erat lobortis gravida.',
        categories: ['Men', 'T-shirt'],
        tags: ['man', 'white', 't-shirt'],
        images: [
            'https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/271174-0066_1-510x649.jpeg',
            'https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_2-629x800.jpeg',
            'https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_3-629x800.jpeg'
        ]
    }
]

const createProduct = (product) => {
    let imagesHtml = '';
    product.images.forEach((image) => {
        imagesHtml += `<img src=${image} />`
    })
    return `
        <div class="product">
            <div class="product_image">
                ${imagesHtml}
                <button>quick view</button>
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