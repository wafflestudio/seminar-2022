/**
 * @param price {number}
 * @returns {string}
 */
export function formatPrice(price) {
  if (isNaN(price)) return "";
  const priceStr = price.toString().replaceAll(",", "");
  const slices = [];
  if (priceStr.length % 3 !== 0)
    slices.push(priceStr.slice(0, priceStr.length % 3));
  for (let i = priceStr.length % 3; i < priceStr.length; i += 3)
    slices.push(priceStr.slice(i, i + 3));
  console.log(price, "=>", slices.join(","));
  return slices.join(",");
}

/**
 * @param price {string}
 * @returns {number}
 */
export function priceToNum(price) {
  console.log(price, "=>", Number(price.replaceAll(",", "")));
  return Number(price.replaceAll(",", ""));
}
