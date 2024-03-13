const filterAndSort = (text: string, asc: boolean, array: string[]) => {
  return array.filter((v: string, i: number) => text.length === 0 || v.includes(text)).sort(asc ? (a, b) => (a > b ? 1 : a < b ? -1 : 0) : (a, b) => (b > a ? 1 : b < a ? -1 : 0));
};

export default filterAndSort;
