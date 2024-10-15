// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all
import Option from "./components/Option";
const BASE_URL = `https://dog.ceo/api/`;
const imageEl = document.querySelector("img");
const breedListEl = document.querySelector("#data-breed-list");

function getDogsList() {
  return fetch(`${BASE_URL}breeds/list/all`)
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((err) => console.error(err));
}
getDogsList();

function getDogImage() {
  fetch (`${BASE_URL}breed`)
}

function renderSelect() {
  getDogsList().then((breedList) => {
    for (let breed in breedList) {
      const option = document.createElement("option");
        option.textContent =breed;
        breedListEl.appendChild(Option(breed))
    }
  });
//   const option = document.createElement("option");
//   option.textContent = "some data";
//   option.value = "some value";
//   breedLi.appendChild(option);
}
renderSelect();

function renderImage() {}
