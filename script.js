const countryComponent = (country) =>
  `<div class="country">
  <h2>${country.name}</h2>
  <h4>population: ${country.pop}</h4>
  <h5>area: ${country.area}</h5>
  <h3>languages: ${country.lang.join(" ")}</h3>
  </div>`;


const init = async () => {
  const rootElement = document.querySelector("#root");

  const countriesData = await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  );
const countries = countriesData.map(countryData => {
  return{
    name: countryData.name.common,
    pop: countryData.population,
    area: countryData.area,
    lang: countryData.languages ? Object.keys(countryData.languages).map(lang => countryData.languages[lang]) : []

  }
});

  //console.log(countries);
 // countriesData.map((country) => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)));
  countries.map((country) => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)));
};

init();
