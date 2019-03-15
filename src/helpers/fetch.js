import { handleErrors } from "./errors.js";

export const fetchFromArrayOfUrls = urls =>
  Promise.all(
    urls.map(url =>
      fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .catch(error => console.log(error))
    )
  );

export const fetchFromUrl = url =>
  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .catch(error => console.log(error));
