const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
}
const displayQuote = quote =>{
    const blockQuote = document.getElementById('quote');
    blockQuote.innerHTML = quote.quote; 
    
    
}
loadQuote();

const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displyaUser(data));
}
const displyaUser = user =>{
    console.log(user);
    const name = document.getElementById('name');
    name.innerHTML = user.results[0].name.first + ' ' + user.results[0].name.last ;
    const genderTag = document.getElementById('gender');
    const phone = document.getElementById('cell');
    phone.innerHTML = user.results[0].cell;
    
    const Email = document.getElementById('email');
    Email.innerHTML = user.results[0].email;
    const image = document.getElementById('img');
    image.innerHTML = user.results[0].picture.large;

    genderTag.innerHTML = user.results[0].gender;
    console.log(user.results[0].picture.large)
}
loadUser();

