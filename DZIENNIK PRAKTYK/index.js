const form = document.querySelector("form");
const inputImie = document.querySelector("#imie");
const inputKlasa = document.querySelector("#klasa");
const inputMiejsceP = document.querySelector("#miejsceP");
const inputRok = document.querySelector("#rok");
const inputRozp = document.querySelector("#rozp");
const inputZak = document.querySelector("#zak");
const display = document.querySelector("#displayIndex");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const imie = inputImie.value;
  const klasa = inputKlasa.value;
  const miejsceP = inputMiejsceP.value;
  const rok = inputRok.value;
  const rozp = inputRozp.value;
  const zak = inputZak.value;
  const displayContent = `
    <fieldset>
        <legend>Dane Ucznia i Praktyk</legend>
        <p>Imie i Nazwisko: <strong><font color="#fff">${imie}</font></strong></p>
        <p>Klasa: <strong><font color="#fff">${klasa}</font></strong></p>
        <p>Miejsce Praktyki: <strong><font color="#fff">${miejsceP}</font></strong></p>
        <p>Rok Szkolny: <strong><font color="#fff">${rok}</font></strong></p>
        <p>Data Rozpoczęcia: <strong><font color="#fff">${rozp}</font></strong></p>
        <p>Data Zakończenia: <strong><font color="#fff">${zak}</font></strong></p>
    </fieldset>
  `;
  display.innerHTML = displayContent;
});
