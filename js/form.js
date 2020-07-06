let urlDaApi = 'https://api.nasa.gov/planetary/apod?api_key=4aCgrQiswA81Mfaa3PslbnTq3goBgmcpaG4kTQSw'

let form = document.querySelector('.form');
let input = document.querySelector('#data');
let poteImg = document.querySelector('.poteImg');

form.addEventListener('submit', function(event){
  event.preventDefault();
  let reqMedia = new XMLHttpRequest();

  atualizaUrl(`&date=${input.value}`);
  reqMedia.open('GET', urlDaApi);
  reqMedia.onload = () => {
    let req = JSON.parse(reqMedia.responseText);
    let img = document.createElement('img');
    img.src = req.hdurl;
    img.classList.add('img');
    poteImg.appendChild(img);  
    console.log(urlDaApi)  
  }
  
  reqMedia.send();
});

function atualizaUrl(url){
  urlDaApi = urlDaApi + url;
}