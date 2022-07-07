"use strict";

function fingerTest() {
  let waga = document.getElementById("waga").value;
  let ciezar = document.getElementById("dowieszony-ciezar").value;
  let wynik = (waga / ciezar) * 100;
  document.getElementById("wynik").innerHTML = "Twój wynik to: " + wynik;
  console.log(wynik);
}
