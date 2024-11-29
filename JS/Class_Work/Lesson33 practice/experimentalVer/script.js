const displayBtn = document.querySelector(".display-btn");
const form = document.querySelector(".form");
const restChuck = document.querySelector("#chuck-rest");
const catImg = document.querySelector(".catImg");
const sbmBtn = document.getElementById("sbm-btn");

let status = false;

displayBtn.addEventListener("click", () => {
  if (!status) {
    form.style.display = "block";
    status = true;
    displayBtn.innerHTML = "Hide form";
  } else {
    form.style.display = "none";
    status = false;
    displayBtn.innerHTML = "Display form";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target["name"].value;
  const phone = e.target["phone"].value;
  const email = e.target["email"].value;
  const company = e.target["company"].value;

  const div = document.createElement('div')
  document.body.append(div)
  div.innerHTML = `    
    <h3>Username: ${name}</h3>
    <p>Phone: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Company: ${company}</p>`
  form.reset()
});

class FetchAPI {
  constructor() {
    this.catUrl = null;
    this.chuckQuote = null;
  }

  async fetchCatAPI() {
    const url = `https://api.thecatapi.com/v1/images/search`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Cat API URL is not found");
      }
      const data = await res.json();
      this.catUrl = data[0].url;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchChuckAPI() {
    const url = `https://api.chucknorris.io/jokes/random`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Kanye url is not found");
      }
      const data = await res.json();
      this.chuckQuote = data.value;
    } catch (error) {
      console.error(error);
    }
  }
}

class Render extends FetchAPI {
  async renderForm() {
    if (restChuck) {
      restChuck.innerHTML = `${this.chuckQuote}`;
    } else {
      console.error("Something is wrong with p element");
    }

    if (catImg) {
      catImg.setAttribute("src", this.catUrl);
    } else {
      console.error("Something is wrong with img element");
    }
  }
}

(async () => {
  const renderFormCat = new Render();
  await renderFormCat.fetchCatAPI();
  await renderFormCat.fetchChuckAPI();
  console.log(renderFormCat.catUrl, renderFormCat.chuckQuote);
  renderFormCat.renderForm();
})();
