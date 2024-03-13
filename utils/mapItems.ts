function mapItems(items: string[]) {
  return items.map((value, i) => ({ key: i.toString(), value }));
}

export default mapItems;
