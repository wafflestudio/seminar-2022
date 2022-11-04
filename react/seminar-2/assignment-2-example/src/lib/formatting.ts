export function formatPrice(price: number): string {
  if (isNaN(price)) return "";
  const priceStr = price.toString().replaceAll(",", "");
  const slices = [];
  if (priceStr.length % 3 !== 0)
    slices.push(priceStr.slice(0, priceStr.length % 3));
  for (let i = priceStr.length % 3; i < priceStr.length; i += 3)
    slices.push(priceStr.slice(i, i + 3));
  return slices.join(",");
}

export function priceToNum(price: string): number | null {
  const n = Number(price.replaceAll(",", ""));
  if (isNaN(n)) return null;
  if (n < 0) return null;
  if (n > 1000000) return null;
  return n;
}

export function nanToNull(n: number): number | null {
  return isNaN(n) ? null : n;
}

export function emptyToU(s: string): string | undefined {
  return s === "" ? undefined : s;
}

export function uToEmpty(s?: string): string {
  return s ?? "";
}
