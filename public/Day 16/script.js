const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}<>?";

lengthEl.addEventListener("input", () => {
  lengthValue.textContent = lengthEl.value;
  updateStrength();
});

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (!passwordEl.value) return;
  navigator.clipboard.writeText(passwordEl.value);
  copyBtn.textContent = "✅";
  setTimeout(() => copyBtn.textContent = "📋", 1000);
});

function generatePassword() {
  let chars = "";
  if (uppercaseEl.checked) chars += UPPER;
  if (lowercaseEl.checked) chars += LOWER;
  if (numbersEl.checked) chars += NUMBERS;
  if (symbolsEl.checked) chars += SYMBOLS;

  if (chars === "") {
    alert("Select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < lengthEl.value; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordEl.value = password;
  updateStrength();
}

function updateStrength() {
  let strength = 0;
  if (uppercaseEl.checked) strength++;
  if (lowercaseEl.checked) strength++;
  if (numbersEl.checked) strength++;
  if (symbolsEl.checked) strength++;
  if (lengthEl.value >= 12) strength++;

  if (strength <= 2) {
    strengthBar.style.background = "#e53e3e";
    strengthText.textContent = "Weak";
  } else if (strength <= 4) {
    strengthBar.style.background = "#ecc94b";
    strengthText.textContent = "Medium";
  } else {
    strengthBar.style.background = "#48bb78";
    strengthText.textContent = "Strong";
  }
}
