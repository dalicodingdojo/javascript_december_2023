//  class ? blueprint template to create objects

// Attributes

// Methods

/*
class Book :
    // constructor
    def __init__(self, title):
        self.title = title 
bookOjb = Book("Book Title")

class HistoryBook (Book) :

*/ 

class Book {
    // CONSTRUCTOR
    constructor(title, pages, author, publishYear = 2023){
        // Attributes
        this.title = title
        this.pages  = pages
        this.author = author
        this.publishYear = publishYear
    }
}

const book = new Book("Book Title", 500, "John");
const bookTwo = new Book("Book Title 2 ", 900, "Johnny", 1998);
// console.log(book);
// console.log(bookTwo);

class Car {
    // CONSTRUCTOR
    constructor(manufacturer, model,power, color){
        // ATTRIBUTES
        this.manufacturer = manufacturer
        this.model = model
        this.power = power
        this.color = color || "Blue"
        this.miles = 0
        this.isOn = false
    }
    // METHODS
    drive() {
        this.isOn = true
        this.miles += 30
        console.log(`${this.manufacturer} ${this.model} has driven ${this.miles}`);
        return this
    }
    shutDown(){
        this.isOn = false
        return this
    }
}

const carOne = new Car("Honda", "V6", "100")
// console.log(carOne);
// carOne.drive().drive().drive().shutDown()
// console.log(carOne);

//  4 Pillars of OOP 
/*
Encapsulation
Inheritance
Polymorphism
Abstraction 
*/ 

class Tesla extends Car {
    constructor( model, power, color){
        super("Tesla", model, power,color)
        this.autopilot = true
    }
}

const modelX = new Tesla("X", 250,'gray')
console.log(modelX);
modelX.drive().drive()
console.log(modelX);
modelX.shutDown()
console.log(modelX);
