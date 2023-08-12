let bookButton = document.querySelector(".new-button");
let forms = document.querySelector(".forms-container");
let submitElement = document.querySelector(".submit-button-js");
let titleElement = document.getElementById("title");
let authorElement = document.getElementById("author");
let pagesElement = document.getElementById("pages");
let readElement = document.getElementById("read");
let cardElement = document.querySelector(".book-card-js");

forms.style.display = "none";

bookButton.addEventListener("click", () => {
  if (forms.style.display === "none") {
    forms.style.display = "block";
  } else {
    forms.style.display = "none";
  }
});

let library = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

book.prototype.getInfo = function () {
  return `"${this.title}" by: ${this.author} pages: ${this.pages} status: ${this.read}`;
};

console.log(library);

submitElement.addEventListener("click", cancelSubmit, false);

function cancelSubmit(event) {
  event.preventDefault();
}

submitElement.addEventListener("click", addBook);

function addBook() {
  const title = titleElement.value;
  const author = authorElement.value;
  const pages = pagesElement.value;
  const read = readElement.value;
  if (title !== " " && author !== " ") {
    const newBook = new book(title, author, pages, read);
    library.push(newBook);
    console.log(library);
    displayBooks();
  } else {
    titleElement.placeholder = "Please fill form";
  }
}

function displayBooks() {
  cardElement.innerHTML = "";
  library.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<p> ${book.getInfo()} </p> <button class="delete-button" data-index="${index}">Remove</button> <button class="read-button" data-index="${index}">Read?</button>`;
    cardElement.appendChild(card);
  });
}

cardElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-button")) {
    const index = e.target.getAttribute("data-index");
    removeBook(index);
  } else if (e.target.classList.contains("read-button")) {
    const index = e.target.getAttribute("data-index");
    toggleRead(index);
  }
});

function removeBook(index) {
  library.splice(index, 1);
  displayBooks();
}

function toggleRead(index) {
  library[index].read = library[index].read === "Read" ? "Unread" : "Read";
  displayBooks();
}
