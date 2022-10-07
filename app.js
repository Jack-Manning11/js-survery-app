const yesButton = document.querySelector('#yesButton');
const noButton = document.querySelector('#noButton');

yesButton.addEventListener('click', postYes => {
    sessionStorage.setItem("answer", "yes");
});

noButton.addEventListener('click', postNo => {
    sessionStorage.setItem("answer", "no");
});

