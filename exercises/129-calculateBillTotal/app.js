function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let totalSolo = preTaxAndTipAmount
    let impuestos = totalSolo * 0.095
    let propina = totalSolo * 0.15
    let totalFinal = impuestos + propina + totalSolo
    return totalFinal

}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
