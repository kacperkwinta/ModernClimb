"use strict";

function fingerTest() {
  let waga = document.getElementById("waga").value;
  let ciezar = document.getElementById("dowieszony-ciezar").value;

  let wynik = (Number(waga) + Number(ciezar)) / waga;
  console.log(wynik);

  // WYNIK DLA BOULDER
  if (wynik >= 1 && wynik <= 1.1) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 6B ";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.1 && wynik <= 1.15) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 6B+";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.16 && wynik <= 1.3) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 6C";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.3 && wynik <= 1.36) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 6C+";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.36 && wynik <= 1.4) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 7A";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.41 && wynik <= 1.45) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 7A+";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.48 && wynik <= 1.51) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 7B";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.52 && wynik <= 1.59) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 7B+";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.6 && wynik <= 1.7) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 7C";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.71 && wynik <= 1.8) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 7C+";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.81 && wynik <= 1.9) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 8A";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 1.91 && wynik <= 2) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 8A+";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 2.01 && wynik <= 2.1) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 8B";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 2.11 && wynik <= 2.2) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 8B+";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 2.21 && wynik <= 2.29) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 8C";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  } else if (wynik >= 2.3 && wynik <= 2.35) {
    document.getElementById("wynik-boulder").innerHTML = "Boulder 8C+";
    document.getElementById("wynik-boulder").style.padding = "1rem";
  }

  // WYNIK DLA LINY
  if (wynik >= 1 && wynik <= 1.05) {
    document.getElementById("wynik-lina").innerHTML = "Lina 6b+";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.06 && wynik <= 1.1) {
    document.getElementById("wynik-lina").innerHTML = "Lina 6c";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.1 && wynik <= 1.16) {
    document.getElementById("wynik-lina").innerHTML = "Lina 6c+";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.17 && wynik <= 1.25) {
    document.getElementById("wynik-lina").innerHTML = "Lina 7a";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.26 && wynik <= 1.3) {
    document.getElementById("wynik-lina").innerHTML = "Lina 7a+";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.3 && wynik <= 1.36) {
    document.getElementById("wynik-lina").innerHTML = "Lina 7b";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.36 && wynik <= 1.4) {
    document.getElementById("wynik-lina").innerHTML = "Lina 7c";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.41 && wynik <= 1.45) {
    document.getElementById("wynik-lina").innerHTML = "Lina 7c+";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.48 && wynik <= 1.51) {
    document.getElementById("wynik-lina").innerHTML = "Lina 8a";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.52 && wynik <= 1.59) {
    document.getElementById("wynik-lina").innerHTML = "Lina 8a+";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.6 && wynik <= 1.7) {
    document.getElementById("wynik-lina").innerHTML = "Lina 8b";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.71 && wynik <= 1.8) {
    document.getElementById("wynik-lina").innerHTML = "Lina 8b+";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.81 && wynik <= 1.9) {
    document.getElementById("wynik-lina").innerHTML = "Lina 8c";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.91 && wynik <= 1.95) {
    document.getElementById("wynik-lina").innerHTML = "Lina 8c+";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 1.96 && wynik <= 2.05) {
    document.getElementById("wynik-lina").innerHTML = "Lina 9a";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 2.06 && wynik <= 2.15) {
    document.getElementById("wynik-lina").innerHTML = "Lina 9a+";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 2.16 && wynik <= 2.2) {
    document.getElementById("wynik-lina").innerHTML = "Lina 9b";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 2.2 && wynik <= 2.29) {
    document.getElementById("wynik-lina").innerHTML = "Lina 9b+";
    document.getElementById("wynik-lina").style.padding = "1rem";
  } else if (wynik >= 2.3 && wynik <= 2.35) {
    document.getElementById("wynik-lina").innerHTML = "Lina 9c";
    document.getElementById("wynik-lina").style.padding = "1rem";
  }

  // PROMO CODE
  if (document.getElementById("waga").value.length == 0) {
  } else {
    document.getElementById("promo").innerHTML =
      "Twój kod rabatowy w wysokości 10% na każdy nasz plan treningowy: <em>FINGERTEST</em>";
  }
}
