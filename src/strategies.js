export function calculateMonthlyInvestment(btcPrices, startYear, startMonth) {
    const monthlyInvestment = 1000;
    let totalBtc = 0;
    let totalUsdInvested = 0;
    
    const filteredPrices = btcPrices.filter(price => 
        (price.year > startYear) || 
        (price.year === startYear && price.month >= startMonth)
    );
    
    return filteredPrices.map(priceData => {
        const btcBought = monthlyInvestment / priceData.price;
        totalBtc += btcBought;
        totalUsdInvested += monthlyInvestment;
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
