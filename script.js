let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let totalCostElement = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let addbtn = document.querySelectorAll('.add-cart');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Item 1',
        image: "images/img1.jpg",
        price: 10,

    },
    {
        id: 2,
        name: 'Item 2',
        image: "images/img2.jpg",
        price: 5,

    },
    {
        id: 3,
        name: 'Item 3',
        image: "images/img3.jpg",
        price: 11,

    },
    {
        id: 4,
        name: 'Item 4',
        image: "images/img4.jpg",
        price: 8,

    },
    {
        id: 5,
        name: 'Item 5',
        image: "images/img5.jpeg",
        price: 15,

    },
    {
        id: 6,
        name: 'Item 6',
        image: "images/img6.jpg",
        price: 7,

    }
]


function itemMenu() {

    products.forEach((product, index) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${product.image}">
            <div class="title">${product.name}</div>
            <div class="price">$${product.price.toLocaleString()}</div>
            <button onclick="addToCart(${index})" class="add-cart addbtn" index = '${index}'>Add Cart</button>
            `;
        list.appendChild(newDiv);
    })
    updateCart()
}

function updateCart() {
    let carts = []
    let total = 0;

    if (localStorage.getItem('CART_ITEMS') !== null) {
        carts = JSON.parse(localStorage.getItem('CART_ITEMS'))
    }
    let quantityElem = document.getElementById('quantity')
    quantityElem.innerHTML = `${carts.length}`

    listCard.innerHTML = ''
    carts.forEach((item, index) => {
        total += item.price;
        let li = document.createElement('li');
        li.innerHTML = `
                <div><img src="${item.image}"/></div>
                <div>${item.name}</div>
                <div>$${item.price}</div>
                <div>
                    <button onclick="changeQuantity(${index}, ${(item.quantity) - 1})">-</button>
                    <div class="count">${item.quantity}</div>
                    <button onclick="changeQuantity(${index}, ${item.quantity + 1})">+</button>
                    <i class="fa fa-trash" aria-hidden="true" onclick ="remove(${index})"></i>
                </div>
                
                `;
        listCard.appendChild(li);
    })
    totalCostElement.innerHTML = `Total: $${total}`;
}

itemMenu();



function addToCart(index) {

    let carts = []

    if (localStorage.getItem('CART_ITEMS') !== null) {
        carts = JSON.parse(localStorage.getItem('CART_ITEMS'))
    }

    let product = products[index]
    let cartIndex = -1;
    for(let i=0; i < carts.length; i++){
        let cart = carts[i]
        if(cart.id == product.id){
            cartIndex = i;
            break;
        }
    }
    if (cartIndex == -1) {
        carts.push(product)
        
    } else {
        carts[cartIndex].quantity += 1
    }
    product.quantity = 1
    product.unitPrice = product.price;

    localStorage.setItem('CART_ITEMS', JSON.stringify(carts));
    updateCart()
    
    // let findIndex = carts.findIndex((cart) => cart.id == product.id) // if equal return cart index

}

function changeQuantity(index, quantity) {
    let carts = JSON.parse(localStorage.getItem('CART_ITEMS'))
    if (quantity == 0) {
        
        // carts.splice(index, 1)
        // delete carts[index];
    } else {
        
        // console.log(product)
        carts[index].quantity = quantity;
        carts[index].price = quantity * carts[index].unitPrice;
    }
    localStorage.setItem('CART_ITEMS', JSON.stringify(carts))
    updateCart();
}

function remove(index){
    let carts = JSON.parse(localStorage.getItem('CART_ITEMS'))
    carts.splice(index, 1)

    localStorage.setItem('CART_ITEMS', JSON.stringify(carts));
    updateCart();


}

