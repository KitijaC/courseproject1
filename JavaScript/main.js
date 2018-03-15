// var number = 1; //integer - vesels skaitlis
// var decimal = 3.145; //float - decimalais skaitlis
// var text = 'some text here'; //string - texts
// var bool = true; //boolian - state = true or false
// var nothing = null; //nav vertibas
// var arr = [
//     'zaz',
//     'vaz',
//     'gaz',
//     'uvaz',
//     1.56,
//     false,
//     123,
// ]; //array - masivs,saraksts
//  var person = {
//     name: 'John',
//     surname: 'Beun',
//     age: '34',
//  }; //object
 
//  var people = [
//     {    
//     name: 'John',
//      surname: 'Beun',
//      age: '34',
//     },
//     {    
//         name: 'Jason',
//          surname: 'Beun',
//          age: '18',
//     },
//     {    
//         name: 'Alice',
//          surname: 'Beun',
//          age: '29',
//     },
 
//  ];
//  console.log(people);
// console.log("Hello world");

// var name = 'Peteris';
// console.log(name);
// name = 'Annina';
// console.log(name);

// console.log(1 + 1);

// console.log(1 - 1);

// console.log(10 / 0);

// var number = 10;
// var number2 = 2;
// console.log(number2/number);

// console.log(3 % 2);


// var name = 'Jonny';
// var otherName = 'Annie';

// if (name != otherName) {
//     console.log('yay');
// } else {
//     console.log('boo');
// }

// var number = 1;
// if (number == 1) {
//     console.log('yay 1');
// }


// var number = 2;

// switch (number) {
//     case 1:
//         console.log('yay 1');
//         break;
//     case 2:
//         console.log('yay 2');
//         break;
//     case 3:
//         console.log('yay 3');
//         break;
//      default:
//         console.log('boo');
//         break;
// }

// var number = 1;
// var otherNuber = 2;
// if (number == 1 && otherNuber == 2) {
//     console.log('yay');
// } else {
//     console.log('boo');
// }

// var number = 1;
// if (number == 1)
//     console.log('foo')
//     console.log('foo 2')

// console.log(foo);
// var foo = 123;

// function calculateVAT(price, vat) {
//     var vatNumber = (vat / 100) + 1;
//     var priceWithVAT = price * vatNumber;
//     return priceWithVAT;
// }

// console.log(calculateVAT(3.14, 10));

// var shouldRun = 0;
// while (shouldRun < 10) {
//     console.log('yay we are in the loop' + shouldRun);
//     shouldRun++;
// }

// var shouldRun = 0;
// do {
//     console.log('yay we are in the loop' + shouldRun);
//     shouldRun++;
// } while(shouldRun > 10);


// for (var index = 0; index < cars.leinght; index++) {
//     console.log('yay im in a loop, current car: ' = cars[index])
// }

// for (var index = 0; index < 20;index++) {
//     if (index % 2 == 0 ) {
//         console.log(index); 
//     }
    
// }

// // MD. uzrakstit ciklu, kura mes skaitam no 1-50 un:
// // 1. Ja skaitlis dalas ar 2 (bez atlikuma), 
// //     tad izvadam 'foo'
// // 2. Ja skaitlis dalas ar 3 (bez atlikuma), 
// //     tad izvadam 'bar'
// // 3. Ja skaitlis dalas ar 5 (bez atlikuma), 
// //     tad izvadam 'baz'
// // 4. Ja nav pieejams neviens no augsamenetajiem, 
// //     tad izvadam index number




for (var index = 0; index <= 50; index++) {
    if (index % 2 == 0) {
        console.log('foo');
    } else if (index % 3 == 0) {
        console.log('bar');
    } else if (index % 5 == 0){
        console.log('baz'); }
    // } else  {
    //     console.log(index);
    // }
    
}




