import { btcPrices, ethPrices } from './price_data.js';
import { displayBTCLogGraph, displayInvestmentGraph, displayProfitGraph } from './graph.js';
import { calculateInvestment } from './strategies.js';

const btcLogChartEl = document.getElementById('btcLogChart');
const investmentChartEl = document.getElementById('investmentChart');
const profitChartEl = document.getElementById('profitChart');
let btcLogChart = null;
let investmentChart = null;
let profitChart = null;

let currentStartYear = 2020;
let currentStartMonth = 1;
let currentPrices = btcPrices;

function updateInvestmentChart(monthsInterval) {
    if (investmentChart) {
        investmentChart.destroy();
        investmentChart = null;
    }
    if (profitChart) {
        profitChart.destroy();
        profitChart = null;
    }
    
    const results = calculateInvestment(currentPrices, currentStartYear, currentStartMonth, monthsInterval);
    investmentChart = displayInvestmentGraph(investmentChartEl, results);
    profitChart = displayProfitGraph(profitChartEl, results);
}

function updateBTCLogChart(prices) {
    if (btcLogChart) {
        btcLogChart.destroy();
        btcLogChart = null;
    }
    btcLogChart = displayBTCLogGraph(btcLogChartEl, prices);
}

updateBTCLogChart(btcPrices);

document.getElementById('btc').addEventListener('click', () => {
    currentPrices = btcPrices;
    updateBTCLogChart(btcPrices);
    updateInvestmentChart(1); // Default to monthly when changing asset
});

document.getElementById('eth').addEventListener('click', () => {
    currentPrices = ethPrices;
    updateBTCLogChart(ethPrices);
    updateInvestmentChart(1); // Default to monthly when changing asset
});

document.getElementById('monthly').addEventListener('click', () => updateInvestmentChart(1));
document.getElementById('quarterly').addEventListener('click', () => updateInvestmentChart(3));
document.getElementById('halfyear').addEventListener('click', () => updateInvestmentChart(6));
document.getElementById('yearly').addEventListener('click', () => updateInvestmentChart(12));

document.getElementById('decreaseDate').addEventListener('click', () => {
    currentStartMonth -= 6;
    while (currentStartMonth < 1) {
        currentStartMonth += 12;
        currentStartYear--;
    }
    updateInvestmentChart(1); // Default to monthly when changing date
});

document.getElementById('increaseDate').addEventListener('click', () => {
    currentStartMonth += 6;
    while (currentStartMonth > 12) {
        currentStartMonth -= 12;
        currentStartYear++;
    }
    updateInvestmentChart(1); // Default to monthly when changing date
});


