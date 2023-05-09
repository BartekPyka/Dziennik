const form = document.querySelector("form");
const inputData = document.getElementById("data");
const inputDzial = document.getElementById("dzial");
const inputOpiekun = document.querySelector('input[name="opiekun"]:checked');
const inputSprawozdanie = document.getElementById("sprawozdanie");
const inputLiczba_godz = document.getElementById("liczba_godz");
const inputRealizacja = document.getElementById("realizacja");
const inputOpanowanie = document.getElementById("opanowanie");
const display = document.querySelector("#displayDziennik");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = inputData.value;
  const dzial = inputDzial.value;
  const opiekun = inputOpiekun.value;
  const sprawozdanie = inputSprawozdanie.value;
  const liczba_godz = inputLiczba_godz.value;
  const realizacja = inputRealizacja.value;
  const opanowanie = inputOpanowanie.value;

  const displayContent = `
  <fieldset>
  <legend>Dane</legend>
  <p>Dzien: <strong><font color="#fff">${data}</font></strong>.</p>
  <p>Opracowany temat: <strong><font color="#fff">${dzial}</font></strong>.</p>
  <p>Opiekun: <strong><font color="#fff">${opiekun}</font></strong>.</p>
  <p>Liczba godzin: <strong><font color="#fff">${liczba_godz}</font></strong>.</p>
  <p>Realizacja: <strong><font color="#fff>${realizacja}</font></strong>.</p>
  <p>Ocena: <strong><font color="#fff">${opanowanie}</font></strong>.</p>
  <p>Sprawozdanie: <strong><font color="#fff">${sprawozdanie}</font></strong>.</p>
  </fieldset>
  `;
  display.innerHTML = displayContent;
});
