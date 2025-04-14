

// // home btn 
// let homeBtn = document.getElementById("home-btn");
// homeBtn.onclick = () => window.location.href = './shop.html';
// -----------------









// let cartLink = document.getElementById("cart-link")
// cartLink.addEventListener("click", () => {
//     if (cartLink.classList.contains("active")) {
//         cartLink.classList.remove("active")
//     } else {
        
//         cartLink.classList.add("active")
//     }
// })
// // // ===============================================
// // // shop plates
let productShop = fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        productShop = data;
        console.log(productShop);
        showProductsInShopPage(); 
    })

// ======showProductsInShopPage==============================
function showProductsInShopPage() {
    let cards = document.querySelector(".cards");
    productShop.forEach((dataItem) => {
        
        let cardItem = document.createElement("a");
        cardItem.href = `./product_page.html?id=${dataItem.id}`;
        cardItem.classList.add("product-item");
        cardItem.innerHTML= `
                    <div class="product-card">
                        <div class="item-div">
                            <img src="${dataItem.image}" alt="product-img" class="product-image">
                        </div>
                        <div class="text-div">
                            <h3 class="product-name"> ${dataItem.name}</h3>
                            <span class="product-price"> ${dataItem.price}</span>

                        </div>
                    </div> 
        `
        cards.appendChild(cardItem);

        // ----------------------
       
})
    
}



// // ------------------------------------------------------
// // products
let vases = document.querySelector(".related-cat-cards-vases")
let plates = document.querySelector(".related-cat-cards-plates")
let mugs = document.querySelector(".related-cat-cards-mugs")


let productData = null;
fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        productData = data; // global
        showSingleProductData(); // now safe to call
    });

function showSingleProductData() {
    let singleProductDiv = document.querySelector(".single-product");
    let urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get("id");
    let thisProduct;
    // show products data
    for (let i = 0; i < productData.length; i++) {
        thisProduct = productData.filter((e) => {
            if (e.id == productId) {
                return e.id
            }
        }
        );
        //if has id = productId
        singleProductDiv.querySelector(".product-image img").src = thisProduct[i].image;
        singleProductDiv.querySelector(".product-name").innerHTML = thisProduct[i].name;
        singleProductDiv.querySelector(".product-price").innerHTML = thisProduct[i].price;
        singleProductDiv.querySelector(".product-detail").innerHTML = thisProduct[i].detail;
        singleProductDiv.querySelector(".cat-name").innerHTML = thisProduct[i].category;
        singleProductDiv.querySelector(".track-number").innerHTML = thisProduct[i].TrackNumber;
        // ==============================================
        

        if (thisProduct[i].category == "Vases") {
            console.log("-------> " + thisProduct[i].category);
            vases.classList.add("active")
            showRelatedCategoryVases();
        }else if (thisProduct[i].category == "Plates") {
            console.log("-------> " + thisProduct[i].category);
            plates.classList.add("active")
            showRelatedCategoryPlates();
        } else {
            if (thisProduct[i].category == "Mugs") {
            console.log("-------> " + thisProduct[i].category);
            mugs.classList.add("active")
            showRelatedCategoryMugs();
        }
        }
        break;
    };
}
// ---------------categories
let cat1 = null;
let cat2 = null;
let cat3 = null;
fetch('./data.json').then((response) => response.json()).then((catData) => {
    cat1 = catData;
    console.log(cat1)
    
    if (vases.classList.contains("active")) {
        showRelatedCategoryVases();
    }
    
})
fetch('./data.json').then((response) => response.json()).then((catData) => {
    cat2 = catData;
    console.log(cat2)
    
    if (plates.classList.contains("active")) {
        showRelatedCategoryPlates();
    }
    
})
fetch('./data.json').then((response) => response.json()).then((catData) => {
    cat3 = catData;
    console.log(cat3)
    if (mugs.classList.contains("active")) {
    showRelatedCategoryMugs();
    }
})
// ===========================
// vases
function showRelatedCategoryVases() {
    let relatedCat = document.getElementById("related-cat-cards-vases")
    cat1.filter((dataItem) => {
        for (let i = 0; i < cat1.length; i++) {
            if (dataItem.category == "Vases") {
                console.log(dataItem.category)
                
                let cardItem = document.createElement("a");
                cardItem.href = `./product_page.html?id=${dataItem.id}`;
                cardItem.classList.add("product-item");
                cardItem.innerHTML = `
                            <div class="product-card">
                                <div class="item-div">
                                    <img src="${dataItem.image}" alt="product-img" class="product-image">
                                </div>
                                <div class="text-div">
                                    <h3 class="product-name"> ${dataItem.name}</h3>
                                    <span class="product-price"> ${dataItem.price}</span>

                                </div>
                            </div> 
                `
                relatedCat.appendChild(cardItem);
        
            }
            break;
            
        }

    })
   
}
// ==============================================
// plates
function showRelatedCategoryPlates() {
    let relatedCat = document.querySelector(".related-cat-cards-plates")
    cat2.filter((dataItem) => {
        for (let i = 0; i < cat2.length; i++) {
            if (dataItem.category == "Plates") {
                console.log(dataItem.category)
                
                let cardItem = document.createElement("a");
                cardItem.href = `./product_page.html?id=${dataItem.id}`;
                cardItem.classList.add("product-item");
                cardItem.innerHTML = `
                            <div class="product-card">
                                <div class="item-div">
                                    <img src="${dataItem.image}" alt="product-img" class="product-image">
                                </div>
                                <div class="text-div">
                                    <h3 class="product-name"> ${dataItem.name}</h3>
                                    <span class="product-price"> ${dataItem.price}</span>

                                </div>
                            </div> 
                `
                relatedCat.appendChild(cardItem);
        
            }
            break;
            
        }

    })
}

// ===========================================
// mugs
function showRelatedCategoryMugs() {
    let relatedCat = document.querySelector(".related-cat-cards-mugs")
     cat3.filter((e) => {
        for (let i = 0; i < cat3.length; i++) {
            if (e.category == "Mugs") {
                console.log(e.category)
                
        let cardItem = document.createElement("a");
        cardItem.href = `./product_page.html?id=${e.id}`;
        cardItem.className = "product-item";

        let productCard = document.createElement("div");
        productCard.className = "product-card";
        
        let itemDev = document.createElement("div")
        itemDev.className = "item-div";
        
        

        let cardImg = document.createElement("img");
        cardImg.src = e.image;
        cardImg.title = "product-image";

        let textDiv = document.createElement("div")
        textDiv.className = "text-div";

        let cardName = document.createElement("h3")
        cardName.className = "product-name";
        cardName.textContent = e.name;

        let cardPrice = document.createElement("span")
        cardPrice.className = "product-price";
        cardPrice.textContent = e.price;


        
        productCard.appendChild(cardImg)
        textDiv.appendChild(cardName)
        textDiv.appendChild(cardPrice)
        productCard.appendChild(textDiv)
        cardItem.appendChild(productCard)
        relatedCat.appendChild(cardItem);
        
            }
            break;
            
        }

    })
   
}
