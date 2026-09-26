const myLibrary=[];
function Book(id,name,author,pages,readStatus){
    if(!new.target){
        console.log("define with new")
        return;
    }
    this.id=id;
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.readStatus=readStatus;
}
function addBookToLibrary(name,author,pages,readStatus){
    let rndmid = crypto.randomUUID();
    let book = new Book(rndmid,name,author,pages,readStatus);
    myLibrary.push(book);
    return "done";
}
function addCards(book){
    const div = document.createElement("div");
        const header = document.createElement("h3");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const readStatus = document.createElement("div");
        content.appendChild(div);
        div.setAttribute("class","card");
        div.appendChild(header);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(readStatus);
        header.textContent=`Name: ${book.name}`;
        author.textContent=`Author: ${book.author}`;
        pages.textContent =`No. of pages: ${book.pages}`;
        readStatus.textContent=`Read Status: ${book.readStatus}`;
}
const content=document.querySelector(".contents");
function displayBooks(){
    for (let i=0;i<myLibrary.length;i++){
        addCards(myLibrary[i]);
    }   
}
const addBook = document.querySelector("#addBook");
const dialog = document.querySelector("#addBookDialog")
addBook.addEventListener("click",()=>{dialog.showModal()})
const closeDialog = document.querySelector("#close");
closeDialog.addEventListener("click",()=>{dialog.close()})
const submit = document.querySelector("button[type='submit']");
submit.addEventListener("click",function(){
    const bookName = document.querySelector("#book-name");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const readStatus = document.querySelector("input[name='readStatus']:checked");
    addBookToLibrary(bookName.value,author.value,parseInt(pages.value),readStatus.value);
    addCards(myLibrary[myLibrary.length-1]);
})