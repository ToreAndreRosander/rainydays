function getFeaturedProducts() {

}

// API key and url
const apiKey = "ck_3144b80646ee1c321ffdb089765b5754e8933ab5";
const apiSecret = "cs_6bc4eb5fd34d98e8825e715f9bf8e3e7d7c0cbb5";
const apiURL = "https://rosander.no/rainydays-backend/wp-json/wc/v3/products?category=16&consumer_key=" + apiKey + "&consumer_secret=" + apiSecret;

// Function to call API and display the desired results
async function getSelectedProducts() {
    const resultContainer = document.getElementById("selected-gear");

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const apiResponse = data;

        for (let i = 0; i < apiResponse.length; i++) {
            if (i === 4) {
                break;
            }
        
            resultContainer.innerHTML += `
            <a href="./productdetails.html" class="product-card">

            <img alt="${apiResponse[i].images[0].alt}" src="${apiResponse[i].images[0].src}">

            <div class="star-container">
                <span class="material-icons">star</span>
                <span class="material-icons">star</span>
                <span class="material-icons">star</span>
                <span class="material-icons">star</span>
                <span class="material-icons">star</span>
            </div>

            <p>${apiResponse[i].name}</p>
            <h3>${apiResponse[i].price}</h3>
        </a>`;
        }

    } catch (error) {
        resultContainer.innerHTML = "Sorry, an error occurred!";
    }
    
}


// Added delay to show the loading indicator
setTimeout(getSelectedProducts, 2000);