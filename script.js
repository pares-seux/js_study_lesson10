const body = document.querySelector("body");
const advertise = document.querySelector(".adv");
const booksList = document.querySelectorAll(".book");
let bookTitle = booksList[4].querySelector("a");
const secondBookChapters = booksList[0].querySelectorAll("li");
const fifthBookChapters = booksList[5].querySelectorAll("li");
const sixthBookChapters = booksList[2].querySelectorAll("li");
let newChapter = sixthBookChapters[8].cloneNode(true);

body.style.backgroundImage = 'url("/image/you-dont-know-js.jpg")';

advertise.remove();
booksList[0].before(booksList[1]);
booksList[5].after(booksList[2]);
booksList[4].after(booksList[3]);

bookTitle.remove();
bookTitle.textContent = bookTitle.textContent.replace("Пропопипы", "Прототипы");
booksList[4].querySelector("h2").append(bookTitle);

secondBookChapters[10].before(secondBookChapters[2]);
secondBookChapters[3].after(secondBookChapters[6]);
secondBookChapters[6].after(secondBookChapters[8]);

fifthBookChapters[1].after(fifthBookChapters[9]);
fifthBookChapters[4].after(fifthBookChapters[2]);
fifthBookChapters[7].after(fifthBookChapters[5]);

newChapter.textContent = "Глава 8: За пределами ES6";
sixthBookChapters[8].after(newChapter);
