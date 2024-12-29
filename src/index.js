import { btcPrices } from './price_data.js';

function displayBTCGraph() {
    const ctx = document.getElementById('btcChart');
    
    const labels = btcPrices.map(price => `${price.year}-${price.month}`);
    const prices = btcPrices.map(price => price.price);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Bitcoin Price (USD)',
                data: prices,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Price (USD)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                }
            }
        }
    });
}

function displayBTCLogGraph() {
    const ctx = document.getElementById('btcLogChart');
    
    const labels = btcPrices.map(price => `${price.year}-${price.month}`);
    const prices = btcPrices.map(price => price.price);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Bitcoin Price (USD) - Log Scale',
                data: prices,
                borderColor: 'rgb(192, 75, 75)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Price (USD) - Log Scale'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                }
            }
        }
    });
}

displayBTCGraph();
displayBTCLogGraph();


