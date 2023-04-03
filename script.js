const url = 'https://makeup-api.herokuapp.com/api/v1/products.json';


    
    async function fetchproducts(url){
        let products = document.querySelector('.product-container');
        try{
            let data = await fetch(url);
            let response = await data.json()
            for(let i = 110; i<150;i++){
                let description = response[i].description;
                let name = response[i].name
                products.innerHTML += `
                <div class = "product">
                       <img src = "${response[i].image_link}" alt = ""  class="product-img">
                 <div class="product-content">
                       <h2 class="brand">Brand : ${response[i].brand}</h2>
                       <h2 class="product-name">Name : ${name.length>18? name.substring(0,18).concat('...'):name}</h2>
                       <h4 class="product-category">Category : ${response[i].category}</h4>
                       <p class="product-description">${description.length>20 ? description.substring(0,50).concat('...more'):description}</p>
                    <div class="product-price-container">
                           <h3 class="product-price">$${response[i].price}</h3>
                           <a href="#!" data-productId="${response[i].id}" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                    </div>
                  </div>   
               </div>
                `;
            }
        }catch(err){
            console.log(err)
        }
    
    } 
fetchproducts(url);

// Get references to the search input and button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add an event listener to the button to filter the list on click
searchButton.addEventListener('click', () => {
  // Get the user's search query from the input field
  const searchQuery = searchInput.value.toLowerCase();
  
  // Get all the elements to filter
  const elementsToFilter = document.querySelectorAll('.product');
  
  // Loop through each element and check if its text content matches the search query
  elementsToFilter.forEach(element => {
    const elementText = element.textContent.toLowerCase();
    if (elementText.includes(searchQuery)) {
      // If the text content matches, show the element
      element.style.display = 'block';
    } else {
      // If the text content does not match, hide the element
      element.style.display = 'none';
    }
  });
});

