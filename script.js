fetch("https://www.cc.puv.fi/~hmh/fed/fedApi/bikes/")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => showBikes(data))
  .catch(error => console.error("Virhe:", error));

function showBikes(bikes) {
  const container = document.getElementById("bikes");
  container.innerHTML = "";

  bikes.forEach(bike => {
    const bikeDiv = document.createElement("div");
    bikeDiv.classList.add("bike");

    const cleanModel = bike.model
      .replace('testi', '')
      .replace('-', '')
      .trim();

    bikeDiv.innerHTML = `
      <h2>${cleanModel}</h2>
      <p><strong>Manufacturer:</strong> ${bike.manuf}</p>
      <p><strong>Gears:</strong> ${bike.gear} (${bike.gear_manuf})</p>
      <p><strong>Size:</strong> ${bike.size}</p>
      <p>${bike.details}</p>
      <img src="${bike.img_url}" alt="${cleanModel}">
    `;

    container.appendChild(bikeDiv);
  });
}