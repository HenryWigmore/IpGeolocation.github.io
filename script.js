
const key = '840a5ffa50936f06351349b9811386b8';

async function fetchIP() {
    var ip = document.getElementById('iP').value;
    const response = await fetch("http://api.ipstack.com/" + ip + "?access_key=" + key);
    const jsonData = await response.json();
    console.log(jsonData);
    document.getElementById('continent').innerText = jsonData.continent_name;
    document.getElementById('country').innerText = jsonData.country_name;
    document.getElementById('city').innerText = jsonData.city;
    document.getElementById('zipcode').innerText= jsonData.zip;
    document.getElementById('lat').innerText= jsonData.latitude;
    document.getElementById('long').innerText= jsonData.longitude;
}

document.getElementById()

