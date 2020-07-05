let urlDaApi = 'https://api.nasa.gov/planetary/apod?api_key=4aCgrQiswA81Mfaa3PslbnTq3goBgmcpaG4kTQSw'

let form = document.querySelector('.form');
let input = document.querySelector('#data');
let body = document.querySelector('body');

form.addEventListener('submit', function(event){
  event.preventDefault();
  let reqMedia = new XMLHttpRequest();
  urlDaApi = urlDaApi+`&date=${input.value}`;
  reqMedia.open('GET', urlDaApi);
  reqMedia.onload = () => {
    let req = JSON.parse(reqMedia.responseText);
    let img = document.createElement('img');
    img.src = req.url;
    body.appendChild(img);    
  }
  
  reqMedia.send();
});


