/*
Scenario:
You are tasked with designing a library management system. The library lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each type has unique properties and behaviors. For example:
    ● Books have an author and a genre.
    ● DVDs have a director and duration.
    ● Magazines have an issueNumber and publisher.

Tasks
Step 1: Create a Base Class
    ○ Define a class LibraryItem to represent shared properties (title, id, isAvailable) and methods (e.g., checkOut() and returnItem()).

Step 2: Extend the Base Class
    ○ Create child classes Book, DVD, and Magazine that inherit from LibraryItem.
    ○ Add unique properties and methods for each child class:
        ■ Book: Add properties like author and genre.
        ■ DVD: Add properties like director and duration.
        ■ Magazine: Add properties like issueNumber and publisher.

Step 3: Instantiate Objects
    ○ Create instances of each class and test the shared and unique methods.

Step 4: Test the Inheritance
    ○ Use inherited methods like checkOut() and returnItem() to manage the availability of items.
    ○ Test accessing and displaying unique properties of each child class.
*/

class LibraryItem  {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }
    checkout () {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log (`${this.title} has been checked out.`);
        } else {
            console.log (`${this.title} is unavailable.`);
        }
    }
    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log (`${this.title} has been returned.`);
        } else {
            console.log (`${this.title} is still available.`);
        } 
    };
    getDetails(){
        return `ID: ${this.id} | Title: ${this.title} | Status: ${this.isAvailable ? "Available" :  "Checked Out"}`;
    }
}

class Book extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id );
        this.author = author;
        this.genre = genre;
    }
    getDetails(){
        return `${super.getDetails()} | Author ${this.author} | Genre: ${this.genre}`;
    }
}

class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id );
        this.director = director;
        this.duration = duration;
    }
    getDetails(){
        return `${super.getDetails()} | Director: ${this.director} | Duration: ${this.duration}`;
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
    getDetails(){
        return `${super.getDetails()} | Issue #: ${this.issueNumber} | Publisher: ${this.publisher}`;
    }
}

let myBook = new Book("1984", 1, "George Orwell", "non-fiction");
let myDVD = new DVD ("Hercules", 2, "Disney", 130);
let myMagazine = new Magazine ("Times", 3, 5, "New York");

console.log("Available Items:");
console.log(myBook.getDetails());
console.log(myDVD.getDetails());
console.log(myMagazine.getDetails());

console.log("\n Megan is checking out:");
myBook.checkout();
myDVD.checkout();

console.log("\n Caroline attempts to checkout")
myBook.checkout(); //checking out an already out book

console.log("\n Updated Details");
console.log(myBook.getDetails());
console.log(myDVD.getDetails());
console.log(myMagazine.getDetails());

console.log("\n Megan returns the book");
myBook.returnItem();
console.log(myBook.getDetails());