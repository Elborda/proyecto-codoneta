const fixtures = document.getElementById("fixture");
const ol = document.createElement("ol");
fetch("datos.json")
  .then((res) => res.json())
  .then((data) => {
    data.response.map((value) => {
      const li = document.createElement("li");
      li.innerHTML = `<h3>
                    Liga: ${value.league.name}<br>
                    Pais: ${value.league.country}<br>
                    <h3/>`;
      ol.appendChild(li);
    });
  });
