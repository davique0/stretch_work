const calculateSalesTax = (salesData, taxRate) => {
  //given an object with company name, provinces and an array of sales it should return an object with company name, total sales and total taxes, tax rate taken from and object with rates per province

  let result = {};
  for (const item of salesData){
    for (const key in item) {
      console.log(key)
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