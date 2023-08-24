function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesMoment = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesMoment.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let ParisElement = document.querySelector("#paris");
  let ParisDate = ParisElement.querySelector(".date");
  let ParisTime = ParisElement.querySelector(".time");
  let ParisMoment = moment().tz("Europe/Paris");

  ParisDate.innerHTML = ParisMoment.format("MMMM Do YYYY");
  ParisTime.innerHTML = ParisMoment.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
  `;
}

let citySelection = document.querySelector("#city-selection");

citySelection.addEventListener("change", updateCity);
