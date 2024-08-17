const respostaCorreta = "Parabéns";
const respostaInput = document.getElementById("");
const confirmarButton = document.getElementById("feito");

confirmarButton.addEventListener("click", () => {
  if (respostaInput.value.toLowerCase() === respostaCorreta) {
// Liberar acesso ao Enigma 2
    const enigma2Button = document.querySelector("button.enigma:nth-child(2)");
    enigma2Button.disabled = false;
  } else {
    alert("nuh uh!");
  }
});