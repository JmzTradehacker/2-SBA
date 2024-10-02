const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-rGczFtWdUvpmrj5gSB1qUKxT'}
  };
  
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1', options)
    .then(response => response.json())
    .then(data => {
        let cryptoContainer = document.getElementById('crypto-container');
        data.forEach(coin => { 
            cryptoContainer.innerHTML += `
            <div class="card mb-3">
                <div class="card-body">
                <h5 class="card-title">${coin.name} (${coin.symbol.toUpperCase()})</h5>
                <p class="card-text">Current Price: $${coin.current_price}</p>
                <p class="card-text">24h Change: ${coin.price_change_percentage_24h}%</p>
                </div>
            </div>
            `;
        });
    })
    .catch(error => console.error('Error fetching data:', error));