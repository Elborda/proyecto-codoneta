let clavePersonal = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
let requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": clavePersonal,
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
  redirect: "follow",
};

const fixtures = document.getElementById('fixture');
const ol = document.createElement('ol');

//fetch("https://v3.football.api-sports.io/fixtures?live=all", requestOptions)
fetch("datos.json")
    .then((res) => res.json())
    .then((data) => {
        let cantidadResponse = data.response.length;
        console.log(data, cantidadResponse);
        
        for(let i = 0; i < cantidadResponse; i++){
            let fixtureReferee = data.response[i].fixture.referee;
            let fixtureDate = data.response[i].fixture.date; 
            let fixtureTimeZone = data.response[i].fixture.timezone;
            let fixtureVenueName = data.response[i].fixture.venue.name; 
            let fixtureVenueCity = data.response[i].fixture.venue.city;
            let leagueName = data.response[i].league.name; 
            let leagueCountry = data.response[i].league.country;
            let teamsHomeName = data.response[i].teams.home.name;
            let teamsAwayName = data.response[i].teams.away.name;
            let goalsHome = data.response[i].goals.home;
            let goalsAway = data.response[i].goals.away;
            const li = document.createElement('li');
            li.innerHTML = `<h3>
                            Liga: ${leagueName}<br>
                            País: ${leagueCountry}<br>
                            Estadio: ${fixtureVenueName}<br>
                            Ciudad: ${fixtureVenueCity}<br>
                            Local: ${teamsHomeName} - Goles: ${goalsHome}<br>
                            Visitante: ${teamsAwayName} - Goles: ${goalsAway}<br>
                            Árbitro: ${fixtureReferee}<br>
                            Fecha y Hora: ${fixtureDate} ${fixtureTimeZone}<br>
                            </h3>`;
            ol.appendChild(li);
        }
    })
  .catch((error) => console.log("error", error));

fixtures.appendChild(ol);
