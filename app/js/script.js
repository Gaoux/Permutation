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
      let array = findPermutations(String(n));
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

  let permutationsArray_wo0 = [];
  for (let i = 0; i < permutationsArray.length; i++) {
    if (permutationsArray[i][0] != 0)
      permutationsArray_wo0.push(permutationsArray[i]);
  }

  return permutationsArray_wo0;
};
