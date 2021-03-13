const API = new Promise( (resolve, reject) =>{
    fetch('https://randomuser.me/api/?results=25')
    .then((response) => response.json())
    .then((response) => { resolve (response.results) })
});

export default API;