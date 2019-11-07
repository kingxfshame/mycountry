const api_host = `http://restcountries.eu/rest/v2/name/eesti`;
const flag_id = document.querySelector('#flag');

window.addEventListener('load',() => {
    fetch(api_host).then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data[0])
        flag_id.src= data[0].flag;
    })
});