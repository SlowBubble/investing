import { btcPrices } from './price_data.js';
import { displayBTCLogGraph, displayInvestmentGraph, displayProfitGraph } from './graph.js';
import { calculateMonthlyInvestment } from './strategies.js';

const btcLogChart = document.getElementById('btcLogChart');
const investmentChartEl = document.getElementById('investmentChart');
const profitChartEl = document.getElementById('profitChart');
let investmentChart = null;
let profitChart = null;

let currentStartYear = 2020;
let currentStartMonth = 1;

function updateInvestmentChart() {
    if (investmentChart) {
        investmentChart.destroy();
        investmentChart = null;
    }
    if (profitChart) {
        profitChart.destroy();
        profitChart = null;
    }
    
    const monthlyResults = calculateMonthlyInvestment(btcPrices, currentStartYear, currentStartMonth);
    investmentChart = displayInvestmentGraph(investmentChartEl, monthlyResults);
    profitChart = displayProfitGraph(profitChartEl, monthlyResults);
}

displayBTCLogGraph(btcLogChart, btcPrices);

document.getElementById('monthly').addEventListener('click', updateInvestmentChart);

document.getElementById('decreaseDate').addEventListener('click', () => {
    currentStartMonth -= 6;
    while (currentStartMonth < 1) {
        currentStartMonth += 12;
        currentStartYear--;
    }
    updateInvestmentChart();
});

document.getElementById('increaseDate').addEventListener('click', () => {
    currentStartMonth += 6;
    while (currentStartMonth > 12) {
        currentStartMonth -= 12;
        currentStartYear++;
    }
    updateInvestmentChart();
});


