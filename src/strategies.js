export function calculateInvestment(btcPrices, startYear, startMonth, monthsInterval) {
    const monthlyInvestment = 1000;
    let totalBtc = 0;
    let totalUsdInvested = 0;
    
    const filteredPrices = btcPrices.filter(price => 
        (price.year > startYear) || 
        (price.year === startYear && price.month >= startMonth)
    ).filter((price, index) => index % monthsInterval === 0);
    
    return filteredPrices.map(priceData => {
        const investment = monthlyInvestment * monthsInterval;
        const btcBought = investment / priceData.price;
        totalBtc += btcBought;
        totalUsdInvested += investment;
        const totalUsd = totalBtc * priceData.price;
        
        return {
            year: priceData.year,
            month: priceData.month,
            costBasis: totalUsdInvested,
            totalUsd: totalUsd,
            totalBtc: totalBtc
        };
    });
}
