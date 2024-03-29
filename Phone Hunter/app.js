
const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
    
}
const displayPhones = (phones, dataLimit) => {
    
    const phonesContainer = document.getElementById('phone-contaner');
    // Clean previsou search 
    phonesContainer.textContent = '';
    //Dispaly 20 phone only 
    const showall = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0, 10);
        showall.classList.remove('d-none');
    }
    else{
        showall.classList.add('d-none');
    }


    const noPhone = document.getElementById('no-found-message');
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');

        phoneDiv.innerHTML =
            `
            <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni minima cumque iure dolores dolorem totam sint nam facere vero nemo?</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</Button>
                
            </div>
            </div>
       `
        phonesContainer.appendChild(phoneDiv);
    })

    toggleSpinner(false);
}
const processSearch = (dataLimit) =>{
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value; 
    loadPhones(searchText, dataLimit);
    console.log(searchText);
}
document.getElementById('btn-search').addEventListener('click', function(){
    processSearch(10);
})

document.getElementById('search-field').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        processSearch(10);
    }
})

const toggleSpinner = isLoading =>{
    const loaderSction = document.getElementById('loader');
    if(isLoading){
        loaderSction.classList.remove('d-none');
    }
    else{
        loaderSction.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch();
})

const loadPhoneDetails = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
    
}

const displayPhoneDetails = phone => {
    const modalTitle = document.getElementById('phoneDetailsModalLabel');
    modalTitle.innerText = phone.name;

    const phoneDetails = document.getElementById('phone-Details');
    console.log(phone.releaseData);
    phoneDetails.innerHTML = 
    `
        <p> Release Date: ${phone.releaseData ? phone.releaseData : 'No Release Data'} </p>
        <p>Other: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information'} </p>
        <p> Storage : ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage'}
    `
}

loadPhones('apple');