const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "><?-=~|}{][@#$%^&*()_+";

const allChar = upperCase + lowerCase + numbers + symbols;
const pwdGenerated = document.querySelector("#inputText");
const generatedBtn = document.querySelector("#generateBtn");

// generatedBtn.addEventListener("click", () => {
//   let pwdLength = 12;
//   let newPwd = [];
//   for (let i = 0; i < pwdLength; i++) {
//     newPwd.push(allChar[Math.floor(Math.random() * allChar.length)]);
//   }
//   let generatedPwd = newPwd.toString();
//   pwdGenerated.value = generatedPwd.replace(/,/g, "");
// });

generatedBtn.addEventListener("click", () => {
  let pwdLength = 12;
  let newPwd = "";
  for (let i = 0; i < pwdLength; i++) {
    newPwd += allChar.charAt([Math.floor(Math.random() * allChar.length)]);
  }

  pwdGenerated.value = newPwd;
});

function copyPwd() {
  pwdGenerated.select();
  document.execCommand("copy");
}
