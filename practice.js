//////////////////PROBLEM 1////////////////////

/* 
  create a class called `Instrument` that has the following properties that need to be set
  by the constructor in the following order: 
  name: String that is the name of the instrument
  price: initialized by a value passed in to the constructor

  The class should also have the following methods:
  play: method that returns the following string: '<instrument name> is making noise'

  Example of Instrument class being used: new Instrument('Piano', 2000)
*/

class Instrument{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  play(){
    return `${this.name} is making noise`
  }
}

const piano = new Instrument('Piano' ,2000)
console.log(piano.play())

//////////////////PROBLEM 2////////////////////

/* 
  create a class called `Guitar` that extends the Instrument class that you just made and has the following properties initialized by the constructor:
  name: initialized by a value passed in to the constructor and passed to the super constructor
  price: initialized by a value passed in to the constructor and passed to the super constructor
  strings: initialized by a value passed in to the constructor
  isElectric: initialized by a value passed in to the constructor
  bodyWood: initialized by a value passed in to the constructor


  The class should override the play method from the Instrument class and return the following string: '<instrument name> is shredding'

  Example of Guitar class being used: new Guitar('Guitar', 2000, 6, true, 'Mahogany')
*/

class Guitar extends Instrument {
  constructor(name, price, strings, isElectric, bodyWood){
    super(name, price)
    this.strings = strings
    this.isElectric = isElectric
    this.bodyWood = bodyWood
  }

  play(){
    return `${this.name} is shredding` 
  }
}

const guitar = new Guitar("Guitar", 2000, 6, true, "Mahogany")
console.log(guitar.play())

//////////////////PROBLEM 3////////////////////

/* 
  create a class called `Shape` that has the following properties initialized by the constructor:
  sides: initialized by a value passed in to the constructor

  This class should have a static method called `isValidShape` that takes in an object (preferably a shape object) and returns true if the shape has at 
  least 3 sides and false if it doesn't

  Example of Shape class being used: new Shape(6)
  Example of isValidShape method being used: Shape.isValidShape(new Shape(6)) should return true
  Example of isValidShape method being used: Shape.isValidShape({sides: 2}) should return false
*/

class Shape {
  constructor(sides){
    this.sides = sides
  }
  static isValidShape(shape){
    if (shape.sides >= 3){
      return true;
    }
    return false;
  }
}

//////////////////PROBLEM 4////////////////////

/*
  create a class called `Employee` that has the following properties initialized by the constructor:
  name: initialized by a value passed in to the constructor
  manager: which should be an employee object passed in to the constructor or null if no manager was passed in

  Example of Employee class being used: const derek = new Employee('Derek')
  Example of Employee class being used: const marty = new Employee('Marty', derek)
*/

class Employee {
  constructor(name, manager = null) {
    this.name = name;
    this.manager = manager;
  }

  
}
const derek = new Employee('Derek')
const marty = new Employee('Mary', derek)
//////////////////PROBLEM 5////////////////////

/*
  Create a class called `FormField` that has the following properties initialized by the constructor:
  label: initialized by a value passed in to the constructor
  type: initialized by a value passed in to the constructor
  value: initialized as an empty string

  This class should have a method called `updateValue` that takes in a value and updates the value property of the form field

  Example of FormField class being used: const usernameFormField = new FormField('Username', 'text')
*/

class FormField{
  constructor(label, type, value = '') {
    this.label = label;
    this.type = type;
    this.value = value;
  }
  
  updateValue(newValue){
    return this.value = newValue
  }

}

//////////////////PROBLEM 6////////////////////

/*
  Create a class called `Form` that has the following properties initialized by the constructor:
  fields: which is an object with the following properties: { [fieldName]: FormField } that is created by passing in an array of FormField 
  objects to the constructor

  This class should have a method called `updateField` that takes in two values, a fieldName and a value. The updateField method should update the 
  value of the corresponding FormField object by the calling
  the updateValue method on the FormField object.

  This class should also have a method called values that returns an object with the following properties: { [fieldName]: value } derived from the 
  FormField objects on the fields property

  Example of Form class being used: const form = new Form([new FormField('username', 'text'), new FormField('password', 'password')])
  console.log(form.fields) // { username: FormField, password: FormField }
  form.updateField('username', 'derek')
  console.log(form.values) // { username: 'derek', password: '' }
*/

class Form {
  constructor(fields){
    this.fields = {}
    fields.forEach((currentItem) => {
      this.fields[currentItem.label] = currentItem;
    })
  }

  updateField(fieldName, value){
      this.fields[fieldName].updateValue(value)
  }
  
  values(){
    const newObj = {};
    for(const property in this.fields){
      newObj[property] = this.fields[property].value
      console.log(property)
      console.log(this.fields[property])
      console.log(this.fields)
    }
    return newObj
  }
}


const newForm = new Form([new FormField('username', 'text'), new FormField('password', 'password')])
newForm.updateField('username', 'John')
newForm.values()