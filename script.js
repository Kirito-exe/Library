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
const content=document.querySelector(".contents");
function displayBooks(){
    for (let i=0;i<myLibrary.length;i++){
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
        header.textContent=`Name: ${myLibrary[i].name}`;
        author.textContent=`Author: ${myLibrary[i].author}`;
        pages.textContent =`No. of pages: ${myLibrary[i].pages}`;
        readStatus.textContent=`Read Status: ${myLibrary[i].readStatus}`;
    }
}