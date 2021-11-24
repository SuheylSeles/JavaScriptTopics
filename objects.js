
let person = {
    name: 'Süheyl',
    surname: "SELEŞ",
    sex: 'Man',
    job: "'Computer Engineer'",
    age: 28,
    abilities: {
        DataScience : 80,
        WebProgramming: 60,
    },
    greet: function() {console.log("S.A")} 

};

console.log(person);

console.log("************************************");

console.log(person["sex"]);

console.log("************************************");

console.log(person.abilities);

console.log("************************************");

console.log(person.abilities.DataScience);

console.log(person.abilities.WebProgramming);

console.log("************************************");

person.greet();

console.log("************************************");

const person2 = {
    name2: 'İlhan',
    surname2: "PALUT",
    sex2: "Man",
    job: "Football Coach",
    greet2: function() { console.log('Anadolu Kartalı, KONYASPOR!'); }
};

person.name2;

//person.greet2();

console.log("************************************");

let number = '23.32';
let result = parseInt(number);

console.log(result); // 23

console.log("************************************");

// creating an object
let student = { };

// adding a property
student.name = 'John';

// adding a method
student.greet = function() {
    console.log('hello');
}

// accessing a method
student.greet(); // hello

console.log("************************************");

// this
//Aynı nesnenin bir yönteminden bir nesnenin özelliğine erişmek için this anahtar sözcüğünü kullanmanız gerekir. Bir örnek düşünelim.

const employee = {
    name3: 'İbrahim',
    age3: 30,

    // accessing name property by using this.name
    greet: function() {
        let surname3 = "ALTINOLUK";
        console.log('The name is' + ' ' + this.name3 + ' ' +surname3); 
    }
};

employee.greet();

console.log("************************************");

const person3 = {
    name4: 'John',
    surname4: "Champion",
    age: 69
};

console.log(typeof person3);

console.log(person3.name4);

console.log("************************************");

function Person(){
    this.name = 'Süheyl',
    this.surname = "SELEŞ",
    this.age = 28,

    this.greet = function(){
        console.log('hello');
    }
}

const person4 = new Person();
const person5 = new Person();

console.log(person4.name);
console.log(person5.name);

console.log("************************************");

function Person2(person_name, person_age, person_gender){
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function(){
        return ('Hi' + ' ' + this.name);
    }
}

const person6 = new Person2('Ahmet', 33, 'male');
const person7 = new Person2('Hatice', 31, 'female');

console.log(person6.name);
console.log(person7.name);

console.log("************************************");

let person8 = {
    name: 'Süheyl',
    surname: "SELEŞ",
}

function Person3 (){
    this.name = 'Süheyl'
}

let person9 = new Person3();
let person10 = new Person3();

// get - özellik değerini almak için bir alıcı yöntemi tanımlamak için
// set - özellik değerini ayarlamak için bir ayarlayıcı yöntemi tanımlamak için

const student2 = {
    firstName: 'Paşa',
    get getName(){
        return this.firstName;
    }
};

console.log(student2.firstName);
console.log(student2.getName);
//console.log(student2.getName());

console.log("************************************");

const student3 = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student3.firstName); // Monica

// change(set) object property using a setter
student3.changeName = 'Sarah';

console.log(student3.firstName); // Sarah

console.log("************************************");

const student4 = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student4, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student4, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student4.firstName); // Monica

// changing the property value
student4.changeName = 'Sarah';

console.log(student4.firstName); // Sarah

console.log("************************************");

function Person4 () {
    this.name = 'John',
    this.age = 23
}

const person11 = new Person4();

// checking the prototype value
console.log(Person4.prototype); // { ... }

console.log("************************************");

// constructor function
function Person5 () {
    this.name = 'Natasha',
    this.age = 25
}

// creating objects
const person12 = new Person5();
const person13 = new Person5();

// adding property to constructor function
Person5.prototype.gender = 'female';

// prototype value of Person
console.log(Person5.prototype);

// inheriting the property from prototype
console.log(person12.gender);
console.log(person13.gender);

console.log("************************************");

function Person6 () {
    this.name = 'Kel Mahmut'
}

// adding a prototype
Person6.prototype.age = 69;

// creating object
const person14 = new Person6();

// accessing prototype property
console.log(person14.__proto__);   // { age: 24 }

