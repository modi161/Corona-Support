const totalCases = document.querySelector(".total-cases"),
  totalDeaths = document.querySelector(".deaths"),
  totalRecoverd = document.querySelector(".recoverd"),
  newCases = document.querySelector("#new-cases"),
  newDeaths = document.querySelector("#new-deaths"),
  newRecoverd = document.querySelector("#new-recoverd");

fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((data) => {
    totalCases.innerHTML = `${data.Global.TotalConfirmed}`;
    totalDeaths.innerHTML = `${data.Global.TotalDeaths}`;
    totalRecoverd.innerHTML = `${data.Global.TotalRecovered}`;

    newCases.innerHTML = `new:${data.Global.NewConfirmed}`;
    newDeaths.innerHTML = `new:${data.Global.NewDeaths}`;
    newRecoverd.innerHTML = `new:${data.Global.NewRecovered}`;
  });

const lists = document.querySelectorAll("nav ul li a");

lists.forEach((list) => {
  list.addEventListener("click", function () {
    document.getElementById("nav").checked = false;
  });
});
