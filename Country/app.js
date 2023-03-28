

const loadCourtrie = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
const displayCountries = countries =>{
    // console.log(countries);
    const countriesCOntainer = document.getElementById('all-countries');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = 
        `
            <h2>Name: ${country.name.common}</h2>
            <p>Capital: ${country.capital? country.capital[0]: 'No Capital'}</p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
            `
            countriesCOntainer.appendChild(countryDiv);
    });

    
}
const loadCountryDetails = code=>{
    console.log('DetailsComming Soon', code);
    const url = `https://restcountries.com/v3.1/alpha/${code}`   
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showcountryDetails(data[0]));
}
const showcountryDetails = country =>{
    const detailsContainer = document.getElementById('country-detail');
    console.log(country.flags.png);
    detailsContainer.innerHTML =     `
    <h2>Country Details</h2>
        <h3>Name: ${country.name.common}</h3>
        <p>Capital</p>
        <img src="${country.flags.png}" alt="">
    `
}


loadCourtrie();