const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const titleEl = document.querySelector(".title");
const btnEl = document.querySelector(".btn");
const audioEl = document.querySelector(".audio");
const TEL = [
    "+998 90 999 77 81",
    "+998 99 190 84 50",
    "+998 90 007 70 77",
    "+998 94 115 11 58",
    "+998 93 163 16 21",
    "+998 95 009 13 50",
    "+998 94 441 41 88",
    "+998 93 880 05 71",
    "+998 99 418 50 35",
    "+998 88 727 31 11",
    "+998 91 683 10 60",
    "+998 97 392 08 22",
    "+998 99 396 71 72",
    "+998 93 693 41 43",
    "+998 90 149 46 43",
];

const addBtn = document.querySelector(".add-btn");
const showListBtn = document.querySelector(".show-list-btn");
const hideListBtn = document.querySelector(".hide-list-btn");
const numberList = document.querySelector(".number-list");


addBtn.addEventListener("click", () => {
    const newNumber = prompt("Yangi raqamni kiriting (+998 XX XXX XX XX):");
    if (newNumber && newNumber.startsWith("+998")) {
        TEL.push(newNumber);
        alert("Raqam muvaffaqiyatli qo'shildi!");
    } else {
        alert("Iltimos, raqamni to'g'ri formatda kiriting.");
    }
});


showListBtn.addEventListener("click", () => {
    numberList.innerHTML = TEL.map((num) => `<li>${num}</li>`).join("");
    numberList.style.display = "block";
    showListBtn.style.display = "none";
    hideListBtn.style.display = "block";
});


hideListBtn.addEventListener("click", () => {
    numberList.style.display = "none";
    showListBtn.style.display = "block";
    hideListBtn.style.display = "none";
});


function randomTel() {
    btnEl.setAttribute("disabled", true);
    const interval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * TEL.length);
        titleEl.textContent = TEL[randomNumber];
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        btnEl.removeAttribute("disabled");
        // remove
        TEL.splice(TEL.indexOf(titleEl.textContent), 1);
        audioEl.play();
    }, 3000);
}

btnEl.addEventListener("click", randomTel);