// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// //

// function user (id, name, surname, email, phone){
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone}
//
//
// let user1 = {id:'1',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// let user2 = {id:'2', name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// let user3 = {id:'3', name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// let user4 = {id:'4', name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// let user5 = {id:'5', name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// let user6 = {id:'6', name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// let user7 = {id:'7', name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// let user8 = {id:'8', name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// let user9 = {id:'9', name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// let user10 = {id:'10', name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789'};
// const arrUsers = [];
// arrUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// console.log(arrUsers);


// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти
// з парними id (filter)

// let filter = arrUsers.filter(value => value.id%2===0);
// console.log(filter);

// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log (arrUsers.sort((a, b) => (b.id - a.id)));


// //
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле
// є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//        this.id = id;
//        this.name = name;
//        this.surname = surname;
//        this.email = email;
//        this.phone = phone;
//        this.order = order;
//     }
// }

// const arrClients = [];
//
// let Client1 = {id:'1',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Shampoo','Spaghetti','Macaronis']};
// let Client2 = {id:'2',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Toothpaste','Shampoo']};
// let Client3 = {id:'3',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Jeans', 'Skirt','Sweater','Costume', 'Dress','Blouse','Soap', 'Toothpaste','Shampoo','Spaghetti','Macaronis','Sandwich']};
// let Client4 = {id:'4',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Costume', 'Dress','Blouse','Soap', 'Toothpaste']};
// let Client5 = {id:'5',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Dress','Blouse','Soap', 'Toothpaste','Shampoo']};
// let Client6 = {id:'6',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Blouse','Soap', 'Toothpaste','Shampoo','Spaghetti','Macaronis','Sandwich']};
// let Client7 = {id:'7',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Skirt','Sweater','Costume', 'Dress']};
// let Client8 = {id:'8',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Dress','Blouse','Soap', 'Toothpaste','Shampoo','Spaghetti','Macaronis','Sandwich']};
// let Client9 = {id:'9',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Toothpaste','Shampoo','Spaghetti']};
// let Client10 = {id:'10',name:'Vasya',surname:'Petrov',email:'Petrov@gmail.com',phone:'123456789',
//     order:['Jeans', 'Skirt','Sweater']};
//
// arrClients.push(Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10);
// console.log(arrClients);

// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі
// order по зростанню. (sort)

// console.log (arrClients.sort((a, b) => (a.order.length - b.order.length)));

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model, virobnik, rikVipusku, maxShvidkist, Vdviguna)
//  {
// this.model=model;
// this.virobnik=virobnik;
// this.rikVipusku=rikVipusku;
// this.maxShvidkist=maxShvidkist;
// this.Vdviguna=Vdviguna



// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// this.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxShvidkist} на годину`);
// }


// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// this.info= function () {
//   console.log(`Модель:${this.model},виробник:${this.virobnik}, рік випуску:${this.rikVipusku},
//   максимальна швидкість:${this.maxShvidkist}, об'єм двигуна:${this.Vdviguna}`)
// }


// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення
// newSpeed

// this.increaseMaxSpeed= function (newSpeed) {
//     this.maxShvidkist+=newSpeed;
// }

// // -- changeYear (newValue) - змінює рік випуску на значення newValue

// this.changeYear= function (newValue) {
//     this.rikVipusku=newValue;
// }

// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
// поточний об'єкт car
//     this.addDriver= function (driver)
//     {
//         this.driver=driver;
//     }
//
// }
//
// let car = new Car('Mersedes', 'Germany','2013', 135, '1.0');
// console.log(car);
// car.drive();
// car.info();
// car.changeYear('2015');
// car.info();
// car.increaseMaxSpeed(20);
// car.info();
// car.addDriver({ name:'Anna', age:'39', cat:'B'});
// car.info();
// console.log(car);

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення
// newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його
// в поточний об'єкт car

// class Car {
//     constructor(model, virobnik, rikVipusku, maxShvidkist, Vdviguna) {
//         this.model=model;
//         this.virobnik=virobnik;
//         this.rikVipusku=rikVipusku;
//         this.maxShvidkist=maxShvidkist;
//         this.Vdviguna=Vdviguna
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxShvidkist} на годину`);
//     }
//     info(){
//         for (const carkey in this) {
//             if (typeof this [carkey]!=='function'){
//
//         console.log(`${carkey}--${this[carkey]}`);
//     }}}
//     increaseMaxSpeed (newSpeed){
//         this.maxShvidkist += newSpeed;
//     }
//     changeYear (newValue){
//         this.year=newValue;
//     }
//     addDriver (driver){
//         this.driver=driver;
//     }
// }
// const car= new Car('Mersedes', 'Germany','2013', 135, '1.0');
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2015);
// car.addDriver({name:'Anna', age:'39', cat:'B'});
// console.log(car);

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив
// з 10 попелюшок.

class Sinderella {
    constructor(name, age, FootSize) {
        this.name=name;
        this.age=age;
        this.FootSize=FootSize
    }}
    let arrSinderellas = [];

    let Sinderella1 = {name:'Violet',age:'21',FootSize: 37};
    let Sinderella2 = {name:'Alla',age:'22',FootSize: 38};
    let Sinderella3 = {name:'Alina',age:'23',FootSize: 37};
    let Sinderella4 = {name:'Elena',age:'24',FootSize: 36};
    let Sinderella5 = {name:'Tanya',age:'25',FootSize: 38};
    let Sinderella6 = {name:'Inna',age:'26',FootSize: 37};
    let Sinderella7 = {name:'Ira',age:'24',FootSize: 38};
    let Sinderella8 = {name:'Luda',age:'21',FootSize: 35};
    let Sinderella9 = {name:'Zina',age:'22',FootSize: 37};
    let Sinderella10 = {name:'Nastya',age:'23',FootSize: 38};

    arrSinderellas.push(Sinderella1, Sinderella2, Sinderella3, Sinderella4, Sinderella5, Sinderella6,
                        Sinderella7, Sinderella8, Sinderella9, Sinderella10);
console.log(arrSinderellas);
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він
// знайшов.

class Prnc {
    constructor(name, age, slipper) {
        this.name=name;
        this.age=age;
        this.slipper=slipper
    }}

const prnc = new Prnc('Karl','27',36);


console.log(prnc);
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const findSinderellas=(arr, boy)=>{
    for (const item of arr){
       // console.log(item.name);
        if (item.FootSize===boy.slipper){
            console.log(`My Sinderella is ${item.name}`);
        }
    }
}

findSinderellas(arrSinderellas,prnc);


// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного
// колбеку
let find = arrSinderellas.find(value => value.FootSize===prnc.slipper);
console.log(find);