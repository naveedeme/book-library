class Book {
    constructor(title, author, pages, publish, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publish = publish;
        this.read = read;
    }
}
let books = [];
function addBooks(title, author, pages, publish, read) {
    let book = new Book(title, author, pages, publish, read);
    books.push(book);
    return books;
}
 function defaultBooks() {
    if (books.length === 0) {
        addBooks("My Book", "Naveed", 286, 1989, "Read");
        addBooks("My New Book", "Ahmed", 346, 2012, "Not Read");
        addBooks("Latest Book", "Ali", 362, 1987, "Not Read");
    }
    displayBooks(books);
}

defaultBooks(); 


function displayBooks(books) {

for(let i=0; i<books.length; i++) {

    let container = document.createElement("div");
    container.classList.add("container");

    let bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    let book = document.createElement("div");
    book.classList.add("book");
    
    bookContainer.appendChild(book);
    
    let pages1 = document.createElement("p");
    pages1.classList.add("pages");
    
    let title1 = document.createElement("p");
    title1.classList.add("title");
    
    let author1 = document.createElement("p");
    author1.classList.add("author");
    
    let publish1 = document.createElement("p");
    publish1.classList.add("publish");
    
    book.appendChild(pages1);
    book.appendChild(title1);
    book.appendChild(author1);
    book.appendChild(publish1);
    
    pages1.textContent = `${books[i].pages}`;
    title1.textContent = `${books[i].title}`;
    author1.textContent = `${books[i].author}`;
    publish1.textContent = `${books[i].publish}`;

    let statusContainer = document.createElement("div");
    statusContainer.classList.add("reading-status");

    let statusPara = document.createElement("p");
    statusPara.classList.add("status");
    statusPara.textContent = `${books[i].read}`;

    statusContainer.appendChild(statusPara);

    let btnsContainer = document.createElement("div");
    btnsContainer.classList.add("btns-container");

    let readbtn = document.createElement("button");
    readbtn.classList.add("read");
    readbtn.classList.add("button-83");
    if(`${books[i].read}` == "Read") {
        readbtn.textContent = "Not Read ?"
    }
    else {
        readbtn.textContent = "Read ?"
    }

    let removebtn = document.createElement("button");
    removebtn.classList.add("remove");
    removebtn.classList.add("button-83");
    removebtn.textContent = "Remove";
    
    btnsContainer.appendChild(readbtn);
    btnsContainer.appendChild(removebtn);

    container.appendChild(bookContainer);
    container.appendChild(statusContainer);
    container.appendChild(btnsContainer)


    let shelf = document.querySelector(".shelf");

    shelf.appendChild(container);

    document.body.appendChild(shelf);

    readbtn.addEventListener("click", ()=> {
        if(readbtn.textContent == "Read ?") {
            readBook(books[i]);
            statusPara.textContent = `${books[i].read}`;
            readbtn.textContent = "Not Read ?";
        }
        else {
            unReadBook(books[i]);
            statusPara.textContent = `${books[i].read}`;
            readbtn.textContent = "Read ?";
        }
    });

    removebtn.addEventListener("click", ()=> {
        shelf.replaceChildren();
        displayBooks(removeBook(books[i]));
    });

}
}

function removeBook(book) {
    let index = books.indexOf(book);
    books.splice(index, 1);
    return books;
}

function readBook(book) {
    let index = books.indexOf(book);
    books[index].read = "Read";
    return books;
}

function unReadBook(book) {
    let index = books.indexOf(book);
    books[index].read = "Not Read";
    return books;
}



let add = document.querySelector(".add");
add.addEventListener("click", createForm);

function createForm() {
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.textContent = "Add Book";
    fieldset.appendChild(legend);
    fieldset.classList.add("fieldset");

    let form = document.createElement("form");
    form.classList.add("form-container");
    fieldset.appendChild(form);

    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("placeholder", "Title");
    title.setAttribute("required", "required");
    title.setAttribute("id", "title");

    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title: ";

    let titleContainer = document.createElement("div");
    titleContainer.classList.add("input-container");
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(title);

    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.textContent = "Author: ";

    let author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("placeholder", "Author");
    author.setAttribute("required", "required");
    author.setAttribute("id", "author");

    let authorContainer = document.createElement("div");
    authorContainer.classList.add("input-container");
    authorContainer.appendChild(authorLabel);
    authorContainer.appendChild(author);
    
    let pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.textContent = "Pages: ";

    let pages = document.createElement("input");
    pages.setAttribute("type", "number");
    pages.setAttribute("placeholder", "Pages");
    pages.setAttribute("required", "required");
    pages.setAttribute("id", "pages");

    let pagesContainer = document.createElement("div");
    pagesContainer.classList.add("input-container");
    pagesContainer.appendChild(pagesLabel);
    pagesContainer.appendChild(pages);
    
    let publishLabel = document.createElement("label");
    publishLabel.setAttribute("for", "publish");
    publishLabel.textContent = "Publish Year: ";

    let publish = document.createElement("input");
    publish.setAttribute("type", "number");
    publish.setAttribute("placeholder", `Year (1000 - ${new Date().getFullYear()})`);
    publish.setAttribute("required", "required");
    publish.setAttribute("id", "publish");

    let publishContainer = document.createElement("div");
    publishContainer.classList.add("input-container");
    publishContainer.appendChild(publishLabel);
    publishContainer.appendChild(publish);

    let read = document.createElement("select");
    read.classList.add("select");
    read.setAttribute("id", "read");

    let readLabel = document.createElement("label");
    readLabel.setAttribute("for", "read");
    readLabel.textContent = "Reading Status: ";

    let readContainer = document.createElement("div");
    readContainer.classList.add("input-container");
    readContainer.appendChild(readLabel);
    readContainer.appendChild(read);

    let option1 = document.createElement("option")
    option1.setAttribute("value", "Read");
    option1.textContent = "Read";
    option1.setAttribute("required", "required");

    let option2 = document.createElement("option")
    option2.setAttribute("value", "Not Read");
    option2.textContent = "Not Read";
    option2.setAttribute("required", "required");

    read.appendChild(option1);
    read.appendChild(option2);

    let inputContainer = document.createElement("div");
    inputContainer.classList.add("inputs-container");
    inputContainer.appendChild(titleContainer);
    inputContainer.appendChild(authorContainer);
    inputContainer.appendChild(pagesContainer);
    inputContainer.appendChild(publishContainer);
    inputContainer.appendChild(readContainer);

    let submit = document.createElement("button");
    submit.classList.add("submit");
    submit.classList.add("button-70");
    submit.setAttribute("type", "submit");
    submit.textContent = "Submit";

    let cancel = document.createElement("button");
    cancel.classList.add("cancel");
    cancel.classList.add("button-70");
    cancel.setAttribute("type", "cancel");
    cancel.textContent = "Cancel";

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(submit);
    buttonContainer.appendChild(cancel);

    form.appendChild(inputContainer);
    form.appendChild(buttonContainer);

    let fieldsetContainer = document.createElement("div");
    fieldsetContainer.classList.add("fieldset-container");
    fieldsetContainer.appendChild(fieldset);

    let overlayContainer = document.createElement("div");
    overlayContainer.classList.add("overlay-container");
    overlayContainer.appendChild(fieldsetContainer);

    let popUpContainer = document.querySelector(".popUpContainer")
    popUpContainer.appendChild(overlayContainer);

    cancel.addEventListener("click", () => {
        popUpContainer.removeChild(overlayContainer);
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (title.value === "" || author.value === "" || pages.value === "" || publish.value === "" || read.value === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (pages.value <= 0) {
            alert("Pages must be a positive number.");
            return;
        }
        
        let currentYear = new Date().getFullYear();

        if (publish.value < 1000 || publish.value > currentYear) {
            alert(`Publish year must be a four-digit number between 1000 and ${currentYear}.`);
            return;
        }
        
        addBooks(title.value, author.value, pages.value, publish.value, read.value);
        popUpContainer.removeChild(overlayContainer);

        let shelf = document.querySelector(".shelf");
        shelf.replaceChildren();
        displayBooks(books);
    });

}


