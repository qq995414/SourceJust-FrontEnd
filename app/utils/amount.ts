export function formatAmount(amount: number | string) {
  const res = '$' + String(amount).replace(/(?=(\B\d{3})+$)/g, ',');
  return res[1] === '$' ? res.slice(1) : res;
}
