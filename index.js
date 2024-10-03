const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-rGczFtWdUvpmrj5gSB1qUKxT'}
  };
  
  let allCoins = []; //store fetched data

  //fetch and display
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1', options)
    .then(response => response.json())
    .then(data => {
        allCoins = data; //storing for later use
        displayCoins(data);// renders cards
        populateCryptoSelect(data);//populate dropdown
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    //Display function
    function displayCoins(coins) {
        const cryptoContainer = document.getElementById('crypto-container');
        cryptoContainer.innerHTML = '';

        const fragment = document.createDocumentFragment();
        
        coins.forEach(coin => {
            // Create card & append
            const card = document.createElement('div');
            card.className = 'card mb-3';
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
    
            const title = document.createElement('h5');
            title.className = 'card-title';
            title.innerText = `${coin.name} (${coin.symbol.toUpperCase()})`;
    
            const price = document.createElement('p');
            price.className = 'card-text';
            price.innerText = `Current Price: $${coin.current_price}`;
    
            const change = document.createElement('p');
            change.className = 'card-text';
            change.innerText = `24h Change: ${coin.price_change_percentage_24h}%`;

            // Parent-Child-Sibling navigation example
            console.log(cardBody.firstChild);
            console.log(cardBody.lastChild);
    
            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(change);
            card.appendChild(cardBody);

            fragment.appendChild(card);
        });
        cryptoContainer.appendChild(fragment);
    }

    // Populate the dropdown for the converter
    function populateCryptoSelect(coins) {
        const cryptoSelect = document.getElementById('crypto-select');
        cryptoSelect.innerHTML = ''; // Clear previous options

        coins.forEach(coin => {
            // Populate dropdown with coin options
            const option = document.createElement('option');
            option.value = coin.current_price;
            option.text = `${coin.name} (${coin.symbol.toUpperCase()})`;
            cryptoSelect.appendChild(option);
        });
    }

    //Search Funtionality to filter cards
    document.getElementById('search').addEventListener('input', function (e) {
        const searchValue = e.target.value.toLowerCase();
        const cryptoCards = document.querySelectorAll('.card');
    
        cryptoCards.forEach(card => {
            const coinName = card.querySelector('.card-title').textContent.toLowerCase();
            if (coinName.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Event listener for the converter form
    document.getElementById('converter').addEventListener('submit', function (e) {
        e.preventDefault();
        const amount = document.getElementById('amount').value;
        const cryptoPrice = document.getElementById('crypto-select').value;

        // Check for empty or invalid inputs
        if (amount <= 0 || isNaN(amount)) {
            showCustomError('Please enter a valid amount greater than zero.');
            return;
        }

        // Conversion logic
        const result = amount * cryptoPrice;
        document.getElementById('conversion-result').textContent = `Converted Value: $${result.toFixed(2)}`;
        document.getElementById('conversion-result').style.color = 'green';
    });

    // Show custom error
    function showCustomError(message) {
        const conversionResult = document.getElementById('conversion-result');
        conversionResult.textContent = message;
        conversionResult.style.color = 'red';
    }

    console.log(`Window width: ${window.innerWidth}`);
    console.log(`User's language: ${navigator.language}`);



