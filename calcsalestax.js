
function calculateSalesTax(salesData, taxRates) {

  var totalTaxes = {};
  companySalesData.forEach(function(data){
    data.sales.forEach(function(sale){
      var tax = sale * taxRates[data.province];
      if (totalTaxes.hasOwnProperty(data.name)){
        totalTaxes[data.name].totalTax += tax;
        totalTaxes[data.name].totalSales += sale;
      } else {
        totalTaxes[data.name] = { totalSales: sale, totalTax: tax};
      }
    });
  });
  console.log(totalTaxes);
}



var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
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
