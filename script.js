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
        div.setAttribute('data-id', book.id)
        header.textContent=`Name: ${book.name}`;
        author.textContent=`Author: ${book.author}`;
        pages.textContent =`No. of pages: ${book.pages}`;
        readStatus.textContent=`Read Status: ${book.readStatus}`;
}
const content=document.querySelector(".contents");
function displayBooks(){
    const contentList =document.querySelectorAll(".contents");
    const contentarr = Array.from(contentList);
    for (let i=0;i<myLibrary.length;i++){
        if (contentarr.includes(myLibrary[i])){
            return "already in Library";
        }
        addCards(myLibrary[i]);
    }   
}
const addBook = document.querySelector("#addBook");
const dialog = document.querySelector("#addBookDialog")
addBook.addEventListener("click",()=>{dialog.showModal()})
const closeDialog = document.querySelector("#close");
closeDialog.addEventListener("click",()=>{dialog.close()})
const submit = document.querySelector("button[type='submit']");
submit.addEventListener("click",function(event){
    const bookName = document.querySelector("#book-name");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    console.log(bookName.value);
    const nameRequiredDiv = document.querySelector("#name-form-row div");
    
    const authorRequiredDiv = document.querySelector("#author-form-row div");
    if((author.value.trim()==="" || author.value===null)&&(bookName.value.trim()==="" || bookName.value===null)){
        authorRequiredDiv.textContent="required";
        nameRequiredDiv.textContent="required";
        event.preventDefault();
        return;
    }
    else if(bookName.value.trim()==="" || bookName.value===null){
        nameRequiredDiv.textContent="required";
        authorRequiredDiv.textContent=''
        event.preventDefault();
        return;
    }
    else if(author.value.trim()==="" || author.value===null){
        authorRequiredDiv.textContent="required";
        nameRequiredDiv.textContent=''
        event.preventDefault();
        return;
    }else{
        if(authorRequiredDiv){authorRequiredDiv.textContent=''};
        if(nameRequiredDiv){nameRequiredDiv.textContent=''};
    }

    if(pages.value.trim()==="" || pages.value===null) {pages.value=0};
    const readStatus = document.querySelector("input[name='readStatus']:checked");
    addBookToLibrary(bookName.value,author.value,parseInt(pages.value),readStatus.value);
    addCards(myLibrary[myLibrary.length-1]);
})
dialog.addEventListener("close",function(){
    const bookName = document.querySelector("#book-name");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    let arr = [bookName,author,pages];
    for(let i=0;i<arr.length;i++){
        arr[i].value = "";
    }
})
displayBooks();