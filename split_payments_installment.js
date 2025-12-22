function splitPaymentsPerItem(cart, installments) {
  const result = [];

  // prepare structure for each installment
  for (let i = 0; i < installments; i++) {
    result.push({
      paymentSequenceNumber: i + 1,
      items: [],
      paymentSubTotal: 0
    });
  }

  // distribute each item's price into installments
  for (const item of cart) {
    const itemTotalCents = Math.round(item.price * 100);
    const base = Math.floor(itemTotalCents / installments);
    const remainder = itemTotalCents % installments;

    for (let i = 0; i < installments; i++) {
      const cents = base + (i < remainder ? 1 : 0);
      const value = cents / 100;

      result[i].items.push({
        productName: item.productName,
        amount: value.toFixed(2)
      });

      result[i].paymentSubTotal += value;
    }
  }

  // format totals
  for (const inst of result) {
    inst.paymentSubTotal = inst.paymentSubTotal.toFixed(2);
  }

  return result;
}
