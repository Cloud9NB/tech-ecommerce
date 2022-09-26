export const capitalizeCategoryName = category => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export const totalAfterTax = (price, quantity) => {
  const beforeTax = price * quantity;
  const pst = Math.round(beforeTax * 0.07 * 100) / 100;
  const gst = Math.round(beforeTax * 0.05 * 100) / 100;
  const afterTax = Number((beforeTax + pst + gst).toFixed(2));

  return afterTax;
};
