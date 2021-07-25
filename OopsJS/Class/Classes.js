// creating class
class Mobile {
    constructor(name, color) {
        this.name= name;
        this.color= color;
    }
    calling(){
        console.log("Calling to nanna");
    }
    setName(newName){
        this.name= newName;
    }
}

// creating objects by using class
let Nokia = new Mobile("Nokia6.1", "White");
let Samsung = new Mobile("M32", "Blue")

// getting/setting the properties
console.log(Nokia.color)
console.log(Nokia.name)
Nokia.calling();