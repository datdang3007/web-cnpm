import productsDB from '../json/products.json' assert {type: 'json'};

const productCard = document.querySelector(".product-card");
const modalWrapper = document.querySelector(".modal-wrapper")

const cards = document.querySelector(".cards");
const menu1 = document.querySelector("#menu1")
const menu2 = document.querySelector("#menu2")
const menu3 = document.querySelector("#menu3")
const menu4 = document.querySelector("#menu4")

menu1.addEventListener("click", function(e) {
    renderCards(productsDB, 1)
})
menu2.addEventListener("click", function(e) {
    renderCards(productsDB, 2)
})
menu3.addEventListener("click", function(e) {
    renderCards(productsDB, 3)
})
menu4.addEventListener("click", function(e) {
    renderCards(productsDB, 4)
})

renderCards(productsDB)

function renderCards(list, menu) {
    let listString = ""
    if (menu) {
        for (const todo of list) {
            if (todo.menu == menu) {
                listString += `
                <div class="card" data-menu="${todo.menu}">
                    <div class="card-content">
                        <div class="img">
                            <img src=${todo.image} alt="">
                        </div>
                        <span class="name-price">${todo.name}: ${todo.price}$</span>
                        <div class="stepper-input">
                            <a class="decrement" href="#">–</a>
                            <input type="number" class="quantity" value="1">
                            <a class="increment" href="#">+</a>
                        </div>
                        <button><span id="btnAddToCart">ADD TO CART</span></button>
                    </div>
                </div>
            `
            }
        }
    } else {
        for (const todo of list) {
            listString += `
                <div class="card" data-menu="${todo.menu}">
                    <div class="card-content">
                        <div class="img">
                            <img src=${todo.image} alt="">
                        </div>
                        <div class="details">
                            <div class="name-price">
                                <span class="name">${todo.name}</span>
                                <span class="price">${todo.price}$</span>
                            </div>
                            <button><span id="btnAddToCart"><i class="fa-solid fa-cart-shopping"></i></span></button>
                        </div>
                    </div>
                </div>
            `
        }
    }
    cards.innerHTML = listString
    productEvent()
}

function productEvent() {
    const card = document.querySelectorAll(".card");
    card.forEach(element => {
        const image = element.querySelector("img")

        image.addEventListener("click", function(e) {
            e.preventDefault()
            modalWrapper.classList.add("active");
            const quickView = document.querySelector(".quick-view")
            const idx = productsDB.findIndex(val => val.image === image.src)
            quickView.innerHTML = `
                <div class="quickview-image">
                    <img src=${productsDB[idx].image} alt=${productsDB[idx].name}>
                </div>
                <div class="quickview-details">
                    <span class="product-name">${productsDB[idx].name}</span>
                    <span class="product-price">${productsDB[idx].price} $</span>
                </div>
            `
            const modal = document.querySelector(".modal-wrapper")
            modal.addEventListener("click", function(e) {
                if(e.target === modal) {
                    modalWrapper.classList.remove("active");
                }
            })
            const btnClose = document.querySelector(".close")
            btnClose.addEventListener("click", function(event) {
                event.preventDefault()
                modalWrapper.classList.remove("active");
            })
        })
    })
}