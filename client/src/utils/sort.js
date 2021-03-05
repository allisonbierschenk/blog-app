const compareKeys = (key) => (a, b) => {
  if (a[key].toLowerCase() < b[key].toLowerCase()) {
    return -1;
  }
  if (a[key].toLowerCase() > b[key].toLowerCase()) {
    return 1;
  }
  return 0;
};

export const AZTitle = (arr) => arr.sort(compareKeys("title"));
export const ZATitle = (arr) => arr.sort(compareKeys("title")).reverse();
export const AZAuthor = (arr) => arr.sort(compareKeys("author"));
export const ZAAuthor = (arr) => arr.sort(compareKeys("author")).reverse();
