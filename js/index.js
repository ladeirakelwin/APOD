let oReq = new XMLHttpRequest();

oReq.open('GET','https://api.nasa.gov/planetary/apod?api_key=4aCgrQiswA81Mfaa3PslbnTq3goBgmcpaG4kTQSw');
oReq.onload = function() {
  //mandar 'recebe' para uma funçaão
  let recebe = JSON.parse(oReq.responseText);
  console.log(recebe);

  let data = document.querySelector(".data");
  data.textContent = recebe.date.split("-").reverse().join("-");

  let legenda = document.querySelector(".legenda");
  legenda.textContent = recebe.title;

  let url = document.querySelector(".url");
  url.src = recebe.url;

  let copyright = document.querySelector(".copyright");
  copyright.textContent = "Image Credit & Copyright: "
  + recebe.copyright;

  let explanacao = document.querySelector(".explanacao");
  explanacao.textContent = recebe.explanation;

}
oReq.send();





