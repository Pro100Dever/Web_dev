const displayBtn = document.querySelector(".display-btn");
const form = document.querySelector(".form");
const restChuck = document.querySelector("#chuck-rest");
const catImg = document.querySelector(".catImg");

let status = false

displayBtn.addEventListener('click', () => {
    if (!status) {
        form.style.display = 'block';
        status = true
        displayBtn.innerHTML = 'Hide form'
    } else {
        form.style.display = 'none';
        status = false
        displayBtn.innerHTML = 'Display form'
    }
})

async function fetchCatAPI() {
  const url = `https://api.thecatapi.com/v1/images/search`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Cat API URL is not found");
    }
    const data = await res.json();
    return data[0].url;
  } catch (error) {
    console.error(error);
  }
}

async function fetchChuckAPI() {
  const url = `https://api.chucknorris.io/jokes/random`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Kanye url is not found");
    }
    const data = await res.json();
    return data.value;
  } catch (error) {
    console.error(error);
  }
}

async function renderForm() {
    const catUrl = await fetchCatAPI()
    const chuckQuote = await fetchChuckAPI()

    if(restChuck) {
        restChuck.innerHTML = `${chuckQuote}`
    } else {
        console.error("Something is wrong with p element");
    }
    
    if(catImg) {
        catImg.setAttribute('src', catUrl)
    } else {
        console.error("Something is wrong with img element");
    }
    

}

renderForm()