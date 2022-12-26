const calculateSalesTax = (salesData, taxRate) => {
  let result = {};
  for (const item of salesData){
    if (!result[item.name]) {
      result[item.name] = {
        'totalSales': item.sales.reduce((a, b) => a + b, 0),
        'totalTax': item.sales.map(x => x * salesTaxRates[item.province]).reduce((a, b) => a + b, 0)
      }
    } else {
      result[item.name].totalSales += item.sales.reduce((a, b) => a + b, 0);
      result[item.name].totalTax += item.sales.map(x => x * salesTaxRates[item.province]).reduce((a, b) => a + b, 0);
    }
  }
}

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

calculateSalesTax(companySalesData, salesTaxRates);