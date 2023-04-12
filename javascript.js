let requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "905e3043d6398961618327125035787e",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
  redirect: "follow",
};

fetch("https://v3.football.api-sports.io/fixtures?live=all", requestOptions)
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log("error", error));
