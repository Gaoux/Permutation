let submit = document.querySelector(".perm-n__button");
let permState = document.querySelector(".perm-n");
let sp = document.querySelector(".result-state__number");
let S = document.querySelector(".result-state__S");
let lst = document.querySelector(".perms__lst");
// let Sdigits = document.querySelector(".result-state__S-digits");
let resultState = document.querySelector(".result-state");

submit.addEventListener("click", () => {
  if (ninput.value != "") {
    let n = ninput.value;
    sp.innerText = n;
    if (n > -1) {
      permState.style.display = "none";
      resultState.style.display = "flex";
      let aux = findPermutations(String(n));
      let array = [];
      for (let i = 0; i < aux.length; i++)
        if (aux[i].charAt(0) != "0") array.push(aux[i]);
      lst.innerText = array;
      S.innerText = array.length;
      console.log(array);
    } else alert("Number must be positive");
  } else alert("Type a number first");
});

let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return string;
  }

  let permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) != i) continue;

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }

  return permutationsArray;
};
