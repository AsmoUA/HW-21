const car = {
    model: 'X',
    year: 2020,
    color: 'white',
    signal() {
        alert('fa! fa!')
    }
}

car.color = 'black';

console.log(car);

car.type = 'electric';

console.log(car);

car.signal();


const salaries = {
    fronted: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
        alert('We must pay salary on Tuesday!');
    },
    total() {
        let sum = 0;
        for (const key in salaries) {
            if (Number(this[key])) {
                sum += this[key];
            }
         
        }
        
        console.log(sum);
    }      
}

salaries.total();



function Perscomp (brend, system, cost) {
    this.brand = brend;
    this.system = system;
    this.cost = cost;
    this[Symbol.toPrimitive] = function(hint) {
        switch (hint) {
            case 'string':
                return this.brand;
            case 'number':
                return this.cost;
            case 'default':
                return this.brand + ' ' + this.system + ' ' + this.cost + ' // ';
        }
    }
}

const dell = new Perscomp('Dell', 'windows', 800);
const apple = new Perscomp('Apple', 'MAC OS', 1700);

console.log(dell);
console.log(apple);


console.log(String(dell));
console.log(+apple);
console.log(apple + dell);
























// ЦЕ ЛЕКЦІЯ
// let users = {
//    mike: {
//         id: 1,
//         age: 18,
//         status: 'read and write',
//     },
//     nikola: {
//         id: 2,
//         age: 25,
//         status: 'read only',
//     }
// }
// console.log(users.mike.age);// 18

// let user = {
//     name: 'Mike',
//     age: 18,
//     status: 'read only',
// }
// let key = prompt('What do you want to know about user', 'age');
// alert(user[key]);// 18

// let user = {
//         name: 'Mike',
//         age: 18,
//         status: 'read only',
//         'login name': 'MK_18',
//     }
// console.log(user['login name'],
//             user.age) //MK_18

// let additionalProperty = prompt('Add property to user', 'rank');
// let user = {
//         name: 'Mike',
//         age: 18,
//         status: 'read only',
//         'login name': 'MK_18',
//         [additionalProperty]: '1',
//     }
// alert(user.rank);//1

// let salaries = {
//     fronted: 12000,
//     backend: 10000,
//     designer: 8000,
//     dayPay(){
//         alert('We must pay salary on Tuesday!');
//     },
// }
// salaries.dayPay(); // We must pay salary on Tuesday!

// function Pet(type, name, color){

//     this.type = type;
//     this.name = name;
//     this.color = color;

// }
// let dog = new Pet('dog', 'Cooper', 'black');
// let cat = new Pet('cat', 'Ashley', 'white');
// let parrot = new Pet('parrot', 'Polly', 'green');
// console.log(dog);//Cooper
// console.log(cat);//cat
// console.log(parrot);//green

// function User(name, rating){
//     this.name = name;
//     this.rating  = rating;
// }
// let user_1 = new User('Mike', 25);
// let user_2 = new User('Nikola', 36);

// let group = {};
// group[user_1] = user_1 + user_2;
// console.log(group);


// function User(name, rating) {
//     this.name = name;
//     this.rating  = rating;
//     this[Symbol.toPrimitive] = function (hint){
//         console.log(hint); // 2*default, string, 2*number, number, number, string
//         switch(hint){
//             case 'string':
//                 return this.name
//             case 'number':
//                 return this.rating
//             case 'default':
//                 return this.name + '_' + this.rating + ' '
//         }
//     }
// }
// let user_1 = new User('Mike', 25);
// let user_2 = new User('Nikola', 36);
// let group = {};
// group[user_1] = user_1 + user_2;
// console.log(group);// {Mike: 'Mike_25 Nikola_36 '}
// console.log(user_2 - user_1); // 11
// console.log(+user_2 + +user_1); // 61
// console.log(String(user_2)); // Nikola

// let user = {
//     nik: "Mike_25",
//     age: 25,
//     [Symbol.toPrimitive]: function(hint) {
//         switch(hint){
//             case 'string':
//                 return this.nik
//             case 'number':
//                 return this.age
//         }
//     }
// }
// let city = {};
// city[user] = "New York";
// console.log(city); // undefined
