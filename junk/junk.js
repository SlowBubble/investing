function displayBTCPrices() {
    const appDiv = document.getElementById('app');
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    const headers = ['Year', 'Month', 'Price (USD)'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    btcPrices.forEach(priceData => {
        const row = document.createElement('tr');
        Object.values(priceData).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    appDiv.appendChild(table);
}
