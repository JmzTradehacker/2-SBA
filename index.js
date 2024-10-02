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

    document.getElementById('search').addEventListener('input', function(e) {
        let sValue = e.target.value.toLowerCase();
        let cryptoCards = document.querySelectorAll('.card')

        cryptoCards.forEach(card => {
            let coinName = card.querySelector('.card-title').textContent.toLowerCase();
            if (coinName.includes(sValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })
    });

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1')
    .then(response => response.json())
    .then(data => {
        let cryptoSelect = document.getElementById('crypto-select');
        data.forEach(coin => {
            let option = document.createElement('option');
            option.value = coin.current_price;
            option.text = `${coin.name} (${coin.symbol.toUpperCase()})`;
            cryptoSelect.appendChild(option);
      });

      document.getElementById('converter').addEventListener('submit', function(e) {
        e.preventDefault();
        let amount = document.getElementById('amount').value;
        let cryptoPrice = document.getElementById('crypto-select').value;
        let result = amount * cryptoPrice;
        document.getElementById('conversion-result').textContent = `Converted Value: $${result.toFixed(2)}`;
      });
      
    });
    

