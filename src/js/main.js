import Option from "./components/Option";
// https://dog.ceo/api/breeds/list/all
// https://dog.ceo/api/breed/affenpinscher/images/random

//  dom targeting
const BASE_URL = `https://dog.ceo/api/`;
const imgEl = document.querySelector("img");
const dataBreedList = document.querySelector("#data-breed-list");

//  async function getData(){
//     const res=await fetch(`https://dog.ceo/api/breed/affenpinscher/images/random`);
//     const data=await res.json();
//     console.log(data.message);
//     imgEl.src=data.message;
// }
// getData();

// MARK: fetch
async function getDogsList() {
  try {
    const res = await fetch(`${BASE_URL}breeds/list/all`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    localStorage.setItem('dogsList', JSON.stringify(data.message)); // Save data to local storage
    return data.message;
  } catch (err) {
    console.error("Error Occurred:", err);
    const savedData = localStorage.getItem('dogsList'); // Retrieve saved data from local storage
    return savedData ? JSON.parse(savedData) : null; // Return saved data or null if not available
  }
}
  //    return fetch(`${BASE_URL}breeds/list/all`)
  //     .then((res) => res.json())
  //     .then((data) =>data.message)
  //     .catch((err) => console.error("error", err))
  //     ;

//
async function getDogsImg(breed) {
  try {
    const res = await fetch(`${BASE_URL}breed/${breed}/images/random`);
    const data = await res.json();
    return data.message;
  } catch (err) {
    console.error("Error Occured");
  }

  //   return fetch(`${BASE_URL}breed/${breed}/images/random`)
  //     .then((res) => res.json())
  //     .then((data) => data.message);
}

async function renderSelect() {
  const dogList = await getDogsList();
  const fragment=document.createDocumentFragment();
  Object.keys(dogList).forEach((dogName) => {
    fragment.appendChild(Option(dogName));
  });
  dataBreedList.append(fragment);
  //   getDogsList().then((breedList) => {
  //     for (let breed in breedList) {
  //       dataBreedList.appendChild(Option(breed));
  //     }
}

// const option=document.createElement("option")
// option.textContent="some data"
// option.value="some value"
// dataBreedList.appendChild(option);
renderSelect();

async function renderImage(breed) {
imgEl.src=`gify.gif`
  const dogImg = await getDogsImg(breed);
  imgEl.src = dogImg;
  imgEl.alt=breed;
  //   getDogsImg(breed).then((data) => {
  //     imgEl.src = data;
  //   });
}



dataBreedList.addEventListener("change", async(e) => {
  const currValue=e.target.value;
  renderImage(currValue);
});
document.addEventListener("DOMContentLoaded",()=>{
  renderSelect();
})
