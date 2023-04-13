let clavePersonal = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
let requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key":  clavePersonal,
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
  redirect: "follow",
};

const fixtures = document.getElementById('fixture');
const ol = document.createElement('ol');

//fetch("https://v3.football.api-sports.io/fixtures?live=all", requestOptions)
fetch('datos.json')
    .then((res) => res.json())
    .then((data) => {
        let cantidadResponse = data.response.length;
        console.log(data, cantidadResponse);
        for(let i = 0; i < cantidadResponse; i++){ 
            const li = document.createElement('li');
            li.innerHTML = `<h3>
                Liga: ${data.response[i].league.name}<br>
                País: ${data.response[i].league.country}<br>
                Estadio: ${data.response[i].fixture.venue.name}<br>
                Ciudad: ${data.response[i].fixture.venue.city}<br>
                Local: ${data.response[i].teams.home.name} 
                      - Goles: ${data.response[i].goals.home}<br>
                Visitante: ${data.response[i].teams.away.name} 
                      - Goles: ${data.response[i].goals.away}<br>
                Árbitro: ${data.response[i].fixture.referee}<br>
                Fecha y Hora: ${data.response[i].fixture.date} 
                              ${data.response[i].fixture.timezone}<br>
                </h3>`;
            ol.appendChild(li);
        }
    })
  .catch((error) => console.log("error", error));
fixtures.appendChild(ol);
