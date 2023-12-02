//console.log("This is Book Library");

function Book(name, author ,year){
    this.name=name;
    this.author=author;
    this.year=year;
}

function Display(){


}

Display.prototype.add = function(){
    console.log("adding to UI");
    
}


Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}



let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e)
{
    e.preventDefault();

    console.log("successfuly submited");
    
    let name =document.getElementById('bookName').value;
    let author =document.getElementById('author').value;
    let year =document.getElementById('year').value;
    let book= new Book(name, author, year);
    if (!name || !author || isNaN(year)) {
        alert('Please enter valid book details.');
        return;
      }
   // console.log(book);

    var bookElement = document.createElement('div');
    bookElement.className = 'list-group-item d-flex justify-content-between align-items-center';
    bookElement.innerHTML = `<strong>${name}</strong> by ${author}, Year: ${year}`;

    var deleteButton = document.createElement("button");
    deleteButton.className='remove';
    deleteButton.innerHTML="Remove";
    deleteButton.onclick=function()
{
    bookList.removeChild(bookElement);
};
bookElement.appendChild(deleteButton);

document.getElementById('bookList').appendChild(bookElement);
document.getElementById('name').value=' ';
document.getElementById('author').value=' ';
document.getElementById('year').value=' ';

    let display = new Display();
    display.add(book);
    display.clear();
    
     
}


