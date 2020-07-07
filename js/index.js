let oReq = new XMLHttpRequest();
let form = document.querySelector('.form');
let input = document.querySelector('#data');

form.addEventListener('submit', function(event){
  event.preventDefault();
  oReq.open('GET', `https://api.nasa.gov/planetary/apod?api_key=4aCgrQiswA81Mfaa3PslbnTq3goBgmcpaG4kTQSw&hd=true&date=${input.value}`);
  oReq.send();
});

function dataFormatada(value){
  return value.date.split("-").reverse().join(" ");
}

oReq.open('GET',`https://api.nasa.gov/planetary/apod?api_key=4aCgrQiswA81Mfaa3PslbnTq3goBgmcpaG4kTQSw&hd=true`);
oReq.onload = function() {
  //mandar 'recebe' para uma funçaão
  let recebe = JSON.parse(oReq.responseText);
  console.log(recebe);

  let data = document.querySelector(".data");
  data.textContent = dataFormatada(recebe); 

  let legenda = document.querySelector(".legenda");
  legenda.textContent = recebe.title;

  let img = document.querySelector(".img");
  let video = document.querySelector(".video");

  if(recebe.media_type === "image"){
    img.classList.remove("oculto");
    video.classList.add("oculto");
    img.src = recebe.url
  }else{
    video.classList.remove("oculto");
    img.classList.add("oculto");
    video.src = recebe.url;
  }

  let copyright = document.querySelector(".copyright");
  if(recebe.copyright != undefined){
    copyright.textContent = "Image Credit & Copyright: "
    + recebe.copyright;
  }else{
    copyright.textContent = "";
  }

  let explanacao = document.querySelector(".explanacao");
  explanacao.textContent = recebe.explanation;

}
oReq.send();





