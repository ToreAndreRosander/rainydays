
// API key, secret and url
const apiKey = "ck_3144b80646ee1c321ffdb089765b5754e8933ab5";
const apiSecret = "cs_6bc4eb5fd34d98e8825e715f9bf8e3e7d7c0cbb5";
const apiURL = "https://rosander.no/rainydays-backend/wp-json/wc/v3/";

// Generate star rating
function getStars(stars) {
    let result = "";
    var starsRounded = Math.round(stars);

    for (let i = 0; i < 5; i++) {
        if(i < starsRounded) {
            result += `<span class="material-icons">star</span>`;
        } else {
            result += `<span class="material-icons">star_border</span>`;
        }
    }
    return result;
}

// Function to call API and display the featured products, accepts maxProducts parameter to limit results
async function getSelectedProducts(maxProducts) {

    const resultContainer = document.getElementById("selected-gear");
    const api = apiURL + "products?featured=true&consumer_key=" + apiKey + "&consumer_secret=" + apiSecret;

    try {
        const response = await fetch(api);
        const data = await response.json();
        const apiResponse = data;

        resultContainer.innerHTML = "";

        for (let i = 0; i < apiResponse.length; i++) {
            if (i === maxProducts) {
                break;
            }



            resultContainer.innerHTML += `
            <a href="./productdetails.html?id=${apiResponse[i].id}" class="product-card">

            <img class="product-image" alt="${apiResponse[i].images[0].alt}" src="${apiResponse[i].images[0].src}">

            <div class="star-container">
            ` + getStars(apiResponse[i].average_rating) + `
            </div>

            <p>${apiResponse[i].name}</p>
            <h3>${apiResponse[i].price},- kr</h3>
        </a>`;
        }

    } catch (error) {
        resultContainer.innerHTML = "Sorry, an error occurred!";
    }

}

// Function to call API and display the new products, accepts maxProducts parameter to limit results
async function getNewProducts(maxProducts) {

    const resultContainer = document.getElementById("new-products");
    const api = apiURL + "products?consumer_key=" + apiKey + "&consumer_secret=" + apiSecret;

    try {
        const response = await fetch(api);
        const data = await response.json();
        const apiResponse = data;

        // Sort the array by date_created
        apiResponse.sort(function (a, b) {
            return a.date_created - b.date_created;
        });

        resultContainer.innerHTML = "";

        for (let i = 0; i < apiResponse.length; i++) {
            if (i === maxProducts) {
                break;
            }

            resultContainer.innerHTML += `
            <a href="./productdetails.html?id=${apiResponse[i].id}" class="product-card">
            <img class="product-image" alt="${apiResponse[i].images[0].alt}" src="${apiResponse[i].images[0].src}">

            <div class="star-container">
            ` + getStars(apiResponse[i].average_rating) + `
            </div>

            <p>${apiResponse[i].name}</p>
            <h3>${apiResponse[i].price},- kr</h3>
        </a>`;
        }

    } catch (error) {
        resultContainer.innerHTML = "Sorry, an error occurred!";
    }

}

// Retrieve and display the product details, checks for the ID parameter in the URL
async function getProductDetails() {

    const urlString = window.location.search;
    const urlParams = new URLSearchParams(urlString);
    const idParameter = urlParams.get('id');

    // Chek if the product id is set in the url
    if(idParameter) {

        let apiURL = "https://rosander.no/rainydays-backend/wp-json/wc/v3/products/" + idParameter + "/?consumer_key=" + apiKey + "&consumer_secret=" + apiSecret;
        let resultContainer = document.getElementById("prod-description");
        let galleryContainer = document.getElementById("prod-gallery");
        let imageContainer = document.getElementById("prod-main-image");
        let descriptionContainer = document.getElementById("prod-description");
        let priceContainer = document.getElementById("prod-price");
        let priceContainerTotal = document.getElementById("total4");
        let shortDescriptionContainer = document.getElementById("prod-short-description");
        let nameContainer = document.getElementById("prod-name");

        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            const apiResponse = data;
            
            nameContainer.innerHTML = apiResponse.name;
            descriptionContainer.innerHTML = apiResponse.description;
            priceContainer.innerHTML = `<span id="price4">${apiResponse.price}</span>,- NOK`;
            priceContainerTotal.innerHTML = apiResponse.price;
            shortDescriptionContainer.innerHTML = apiResponse.short_description;
            imageContainer.innerHTML = `<img class="product-image" id="main-image" alt="${apiResponse.images[0].alt}" src="${apiResponse.images[0].src}">`;
            descriptionContainer.innerHTML = apiResponse.description;

            for (let i = 0; i < apiResponse.images.length; i++) {
                galleryContainer.innerHTML += `<img src="${apiResponse.images[i].src}" alt="${apiResponse.images[i].alt}" onclick="changeimage(this)">`;
            }

        } catch (error) {
            resultContainer.innerHTML = "Sorry, an error occurred!";
        }
    } else {
        window.location.href="./index.html";
    }

}

// List all products in a category
async function getCategory() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idParameter = urlParams.get('id')

    // Chek if the category id is set in the url
    if(idParameter) {
        
        let catApiURL = "https://rosander.no/rainydays-backend/wp-json/wc/v3/products/?category=" + idParameter + "&consumer_key=" + apiKey + "&consumer_secret=" + apiSecret;
        let productCard = document.getElementById("cat-products");
        // let categoryName = document.getElementById("cat-name");

        try {
            const response = await fetch(catApiURL);
            const data = await response.json();
            const apiResponse = data;
            
            // categoryName.innerHTML = apiResponse.name;

            for (let i = 0; i < apiResponse.length; i++) {
                productCard.innerHTML += `<section class="product-card-detailed">

                <a href="./productdetails.html?id=${apiResponse[i].id}"><img class="pl-img" alt="${apiResponse[i].images[0].alt}" src="${apiResponse[i].images[0].src}"></a>
                <div class="pcd-center">
                    <div class="pcd-title"><a href="./productdetails.html?id=${apiResponse[i].id}" class="clear-link"><h3 class="text-dark text-narrow">${apiResponse[i].name}</h3></a>
                        <h3 class="text-dark text-narrow">Price: ${apiResponse[i].price},-</h3>
                    </div>

                    <div class="pcd-row">
                        <span class="pcd-row-btn">
                            <p class="text-dark"><span class="material-icons text-dark">favorite_border</span> Favorite</p>
                        </span>
                        <span class="pcd-row-btn">
                            <p class="text-dark"><span class="material-icons text-dark">sync_alt</span> Compare</p>
                        </span>

                        <div class="star-container">
                        ` + getStars(apiResponse[i].average_rating) + `
                        </div>
                    </div>

                    <span class="text-dark">${apiResponse[i].short_description}
                    </span>

                    <div class="pcd-bottom">
                        <a href="./productdetails.html?id=${apiResponse[i].id}" class="button">Details</a>
                        <a href="./shoppingcart.html?id=${apiResponse[i].id}" class="button">Add to cart</a>
                    </div>
                </div>
            </section>`;
            }

        } catch (error) {
            productCard.innerHTML = "Sorry, an error occurred!";
        }
    } else {
        window.location.href="./index.html";
    }

}