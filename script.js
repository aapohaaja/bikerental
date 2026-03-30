fetch("https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/")
  .then(response => response.json())
  .then(data => showBikes(data))
  .catch(error => console.error("Virhe:", error));

function showBikes(bikes) {
  const container = document.getElementById("bikes");

  bikes.forEach(bike => {
    const bikeDiv = document.createElement("div");
    bikeDiv.classList.add("bike");

    bikeDiv.innerHTML = `
      <h2>${bike.model}</h2>
      <p><strong>Valmistaja:</strong> ${bike.manuf}</p>
      <p><strong>Vaihteet:</strong> ${bike.gear} (${bike.gear_manuf})</p>
      <p><strong>Koko:</strong> ${bike.size}</p>
      <p>${bike.details}</p>
      <img src="${bike.img_url}" alt="${bike.model}">
    `;

    container.appendChild(bikeDiv);
  });
}