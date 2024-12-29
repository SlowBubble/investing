export function displayBTCLogGraph(ctx, priceData) {
    const labels = priceData.map(price => `${price.year}-${price.month}`);
    const prices = priceData.map(price => price.price);

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

export function displayInvestmentGraph(ctx, investmentData) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: investmentData.map(data => `${data.year}-${data.month}`),
            datasets: [{
                label: 'Portfolio Value (USD)',
                data: investmentData.map(data => data.totalUsd),
                borderColor: 'rgb(75, 192, 75)',
                tension: 0.1
            },
            {
                label: 'Cost Basis (USD)',
                data: investmentData.map(data => data.costBasis),
                borderColor: 'rgb(75, 75, 192)',
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
                        text: 'Value (USD)'
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

export function displayProfitGraph(ctx, investmentData) {
    const profitPercentages = investmentData.map(data => 
        ((data.totalUsd - data.costBasis) / data.costBasis) * 100
    );

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: investmentData.map(data => `${data.year}-${data.month}`),
            datasets: [{
                label: 'Profit/Loss (%)',
                data: profitPercentages,
                borderColor: 'rgb(255, 159, 64)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Profit/Loss (%)'
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
