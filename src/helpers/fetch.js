export const fetchFromArrayOfUrls = urls =>
  Promise.all(urls.map(url => fetch(url).then(res => res.json())));

export const fetchFromUrl = url => fetch(url).then(res => res.json());
