let campoTexto = document.querySelectorAll(".text");
let passos = document.querySelector(".numero-passos");
let opcao = document.querySelector("#escolha");
let selecionar = opcao.options;
let numeroscifra = [];
let numerossomadoscifra = [];
let exibircifra = [];
let alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
alfabeto[32] = " ";
alfabeto[33] = "!";
alfabeto[35] = "#";
alfabeto[36] = "$";
alfabeto[37] = "%";
alfabeto[38] = "&";
alfabeto[42] = "*";
alfabeto[45] = "-";
alfabeto[43] = "+";
alfabeto[61] = "=";
alfabeto[60] = "<";
alfabeto[62] = ">";
let complete = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "q",
  "q",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let alfabetoM = [
  ...complete,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function cod() {
  if (selecionar[1].selected == true) {
    let texto = campoTexto[0].value;
    let qpassos = passos.value;
    let qpassos1 = parseInt(qpassos);
    for (let i = 0; i < texto.length; i++) {
      numeroscifra.push(texto.charCodeAt(i));
    }
    for (let j in numeroscifra) {
      if (numeroscifra[j] >= 97) {
        numerossomadoscifra.push((numeroscifra[j] - 97 + qpassos1) % 26);
      } else if (numeroscifra[j] >= 65 && numeroscifra[j] <= 90) {
        numerossomadoscifra.push(((numeroscifra[j] - 65 + qpassos1) % 26) + 26);
      } else if (numeroscifra[j] >= 30 && numeroscifra[j] <= 64) {
        numerossomadoscifra.push(numeroscifra[j]);
      }
    }
    for (let f = 0; f < numerossomadoscifra.length; f++) {
      if (numeroscifra[f] >= 96) {
        exibircifra.push(alfabeto[numerossomadoscifra[f]]);
      } else if (numeroscifra[f] >= 65) {
        exibircifra.push(alfabetoM[numerossomadoscifra[f]]);
      } else if (numeroscifra[f] <= 64) {
        exibircifra.push(alfabeto[numeroscifra[f]]);
      }
    }
    campoTexto[1].setAttribute("value", exibircifra.join(""));
    exibircifra.splice(0, exibircifra.length);
    numerossomadoscifra.splice(0, numerossomadoscifra.length);
    numeroscifra.splice(0, numeroscifra.length);
  } else if (selecionar[0].selected == true) {
    let texto = campoTexto[0].value;
    let resultado = btoa(texto);
    campoTexto[1].setAttribute("value", resultado);
  }
}
function deco() {
  let texto = campoTexto[0].value;
  let qpassos = passos.value;
  let qpassos1 = parseInt(qpassos);
  for (let i = 0; i < texto.length; i++) {
    numeroscifra.push(texto.charCodeAt(i));
  }
  for (let j in numeroscifra) {
    if (numeroscifra[j] >= 97) {
      numerossomadoscifra.push((numeroscifra[j] - 97 + 26 - qpassos1) % 26);
    } else if (numeroscifra[j] >= 65 && numeroscifra[j] <= 90) {
      numerossomadoscifra.push(
        ((numeroscifra[j] - 65 + 26 - qpassos1) % 26) + 26
      );
    } else if (numeroscifra[j] >= 30 && numeroscifra[j] <= 64) {
      numerossomadoscifra.push(numeroscifra[j]);
    }
  }
  for (let f = 0; f < numerossomadoscifra.length; f++) {
    if (numeroscifra[f] >= 96) {
      exibircifra.push(alfabeto[numerossomadoscifra[f]]);
    } else if (numeroscifra[f] >= 65) {
      exibircifra.push(alfabetoM[numerossomadoscifra[f]]);
    } else if (numeroscifra[f] <= 64) {
      exibircifra.push(alfabeto[numeroscifra[f]]);
    }
  }
  campoTexto[1].setAttribute("value", exibircifra.join(""));
  exibircifra.splice(0, exibircifra.length);
  numerossomadoscifra.splice(0, numerossomadoscifra.length);
  numeroscifra.splice(0, numeroscifra.length);
}
function limpar() {
  seila();
}
function seila() {
  campoTexto[1].setAttribute("value", "");
}
let pop = document.querySelector("section");
function sobrecifra() {
  pop.classList.remove("sumir");
  pop.classList.add("aparecer");
  document.querySelector(".corpo").classList.add("sumir")
  document.querySelector(".exibirtexto").innerHTML = "É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes.Por exemplo, com uma troca de três posições, A seria substituído por D, B se tornaria E, e assim por diante."
}
function sobrebase64() {
  pop.classList.remove("sumir");
  pop.classList.add("aparecer");
  document.querySelector(".corpo").classList.add("sumir")
  document.querySelector(".exibirtexto").innerHTML = "Base 64 é um algoritmo computacional que usa como base 64 caracteres, sendo o alfabeto A-Z e a-z mas os numerais de 0 a 9 e os símbolos /, + e ="
}
function fechar() {
  pop.classList.remove("aparecer");
  pop.classList.add("sumir");
  document.querySelector(".corpo").classList.remove("sumir")
}
