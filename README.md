Cryptocurrency Price Tracker and Converter

This project is a simple Cryptocurrency Price Tracker and Converter web application. It allows users to view the current prices of popular cryptocurrencies, search for specific cryptocurrencies, and convert a specific amount of any cryptocurrency into USD.

Features

Cryptocurrency Price Tracker: Displays a list of cryptocurrencies along with their current prices and 24-hour percentage change.
Search Functionality: Users can search for a specific cryptocurrency by name or symbol.
Crypto Converter: Converts a given number of cryptocurrency units into USD.
Responsive Design: Uses Bootstrap 5 for styling and ensures that the layout is responsive on different screen sizes.
Real-Time Data: Data is fetched from the CoinGecko API, providing real-time prices for cryptocurrencies.
Validation: Includes form validation (both HTML-based and custom JavaScript-based) to ensure valid input from users.

Technologies Used

HTML5: For the structure of the webpage.
CSS3 & Bootstrap 5: For styling and layout responsiveness.
JavaScript (ES6): For interactivity, data fetching, and form validation.
CoinGecko API: For real-time cryptocurrency data.

Installation and Setup

To run this project on your local machine:

Clone the repository:
In bash type:
git clone https://github.com/your-username/crypto-price-tracker.git

Navigate to the project directory:
In bash type:
cd crypto-price-tracker

Open index.html in your browser: Simply double-click the index.html file to open it in your default browser, or use a live server if using a development environment (e.g., VSCode Live Server).

How to Use

The homepage displays the top 10 cryptocurrencies by market cap, showing their current price and 24-hour price change.

Use the search bar to filter cryptocurrencies by name or symbol.

Enter the number of coins you want to convert in the input field.

Select a cryptocurrency from the dropdown.
Click "Convert" to see the equivalent value in USD.

Future Improvements
Add more cryptocurrency conversion options (e.g., between cryptocurrencies instead of just converting to USD).
Add historical data with charts to track cryptocurrency price trends over time.
Implement caching to reduce the number of API requests.