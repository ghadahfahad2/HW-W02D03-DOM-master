document.body.style.fontFamily="Arial, sans-serif";
document.getElementById('nickname').innerHTML = 'Ghadah almugren';
document.getElementById('favorite').innerHTML = 'horse';
document.getElementById('hometown').innerHTML = 'KSA';





  
let addClassName = document.getElementsByTagName('li')
 for (let i = 0 ; i<=addClassName.length-1;i++) { 
    addClassName[i].className = 'listitem';
    addClassName[i].style.color = 'rebeccapurple';
 }


    
    let profilePicture=document.querySelector('.profilePicture')
    let myPic = document.createElement('img');

    myPic.src = 'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg';
    profilePicture.appendChild(myPic);


    let heading=document.createElement('h1')
    let fevBook=document.querySelector('.favoriteBooks')
    heading.innerText='My Book List';
    fevBook.appendChild(heading)




    var books = [
      {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false
      },
      {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true
      },
      {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true
      },
      {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true
      }
    ];

    for (let i = 0; i <= books.length-1; i++) {
      let book = document.createElement('p');
      let bookDet = document.createTextNode(books[i].title + ' by ' + books[i].author);
      book.appendChild(bookDet);
      document.body.appendChild(book);
    }
    










