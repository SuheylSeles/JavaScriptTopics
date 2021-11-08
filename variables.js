// var

var album;
console.log(album);

album = "Arsız Gönül"
console.log(album);

// scope; uygulamamızda ki değişkenlerin ve fonksiyonların nerelerde erişilebilir, nerelerde erişilemez olduklarını belirler.

// global scope özellikli değişkenler, fonksiyon içerisinden de erişilebilir durumdadırlar.

var sayHi = "Hello";

function greet(){
    console.log(sayHi);
}

greet();

// function scope; 

/**

function getAlbumDate(){
    var albumDate = new Date();

    function modifyAlbumDate(){
     return albumDate.toDateString;
    }

    return modifyAlbumDate();
}

getAlbumDate();
console.log(albumDate);

*/

/**

function foodPrices(prices, addValue){
    var newPriceList = [];

    for(var i=0; i<prices.length; i++){
        var finalPrice = prices[i] + addValue;
        newPriceList.push(finalPrice);
    }

    console.log(i);

    console.log(finalPrice);

    return newPriceList;
}

const result = foodPrices([13,26,34],42);
console.log(result);

*/

/**
 var vs let arasındaki fark; var function scope özelliği taşırken, let block scope özelliği taşımaktadır.
 Yani let ile oluşturulan bir değişken sadece oluşturulduğu yerdeki süslü parantezler içerisinde erişilebilirdir ve dışarısında kullanılamaz.
 */

 function foodPrices(prices, addValue){
    var newPriceList = [];
    //let newPriceList = [];   ReferenceError: i is not defined hatası alırız. 
    //Bunu almamızın sebebi let keyword’ü block scope özellikli olmasıdır.

    for(var i=0; i<prices.length; i++){
        var finalPrice = prices[i] + addValue;
        newPriceList.push(finalPrice);
    }

    console.log(i);

    console.log(finalPrice);

    return newPriceList;
}

const result = foodPrices([13,26,34],42);
console.log(result);

// tekrar tanımlama ve güncelleme durumu

var greeter = "Hey sen!";
//var greeter = "Evet, sana diyorum.."
greeter = "Evet, sana diyorum.."
console.log(greeter);

// let ile tanımlanan bir değişkeni tekrar tanımlayamayız ancak değerini güncelleyebiliriz.

let saySomething = "Merhaba";
//let saySomething = "Selam";
saySomething = "Selam";

console.log(saySomething);

// hoisting

/**
 * Js'de, bir değişkeni önce kullanıp, daha sonra tanımlayabiliriz.
 * Yazdığımız kod derlenmeden önce değişken ve fonksiyon tanımlamaları scope’un başına alınır. 
 */

greeter = "Selamun aleyküm";
console.log(greeter);
//var greeter;
//let greeter;      greeter is not defined
//const greeter;    missing initializer in const declaration

// let vs const
// const ile oluşturulan değişkene, daha sonrasında tekrar değer ataması yapılamaz.

/**
let name = "Süheyl";
const handle = "SELEŞ";
name = "Süheyl SELEŞ"

handle = "@suheylseles" TypeError: Assignment to constant variable.
*/

/**
 * let ile oluşturduğumuz bir değişkene daha sonrasında yeni bir değer atayabiliriz, 
 * ancak const ile oluşturulan değişkene yeni bir değer tekrar atanamaz.
 * Bu durum immutable(Değişmez) olarakta tanımlanmaktadır. const’un ne gibi durumlarda immutable ne gibi durumlarda mutable olduğuna bir bakalım.
 */

/**
const person = {
    name: "Süheyl SELEŞ"
}
person.name = "S. Süheyl SELEŞ"
person = {} TypeError: Assignment to constant variable.
*/

// Dikkat Edilmesi Gereken Durumlar

// 1- Bir block scope içerisinde var keyword’ü ile tanımlanan bir değişkenin scope dışına sızma durumu bulunmaktadır,
// bu da istenmeyen durumlara yol açabilir.

var bodyWeight = 42;
if(bodyWeight > 34){
    var water = 1.3;
    console.log("For body weight of ${bodyWeight}kg, you should drink water at least ${water}litre");
}

console.log(water);

// 2-Let ve const block scope özellikli oldukları için herhangi bir şekilde scope dışında kullanılamazlar.

/**
const bodyWeight2 = 42;
if(bodyWeight2 > 34){
    const water2 = 1.3;
    console.log("For body weight of ${bodyWeight2}kg, you should drink water at least ${water2}litre");
}

console.log(water2); ReferenceError: water2 is not defined
*/

// 3- Global olarak tanımlanan bir değişkeni; fonksiyon içerisinde tekrar tanımlayıp yeni bir değer atamak, 
// globalde bulunan değişkenin değerinin de değişmesine sebep olabilir.

var greeter2 = "Merhaba";
var times = 34;

if(times>13){
    var greeter = "Merhabana, merhaba.."
}

console.log(greeter);

// 4-let ve const block scope özellikte oldukları için, greeting, yer aldığı scope’a göre farklı değer gösterir.

let greeting = "Hey, Selam";
if(true){
    let greeting = "Heyy, Selammm";
    console.log(greeting);
}

console.log(greeting);

// ÖZET OLARAK

/**
 * 1-var function scope özelliği taşımaktadır. let ve const block scope özelliklidir.
 * 2-Oluşturulan değişken önce kullanılıp daha sonra var keyword’ü ile tanımlanırsa herhangi bir hata oluşmaz(Hoisting).
 * let ve const için bu durum geçerli değildir.
 * 3-let ve const ile oluşturduğunuz değişkenlere değer atadığımızda, const ile oluşturduğunuz değişken’e tekrar atama yapamayız, 
 * ancak let değişkenine yeni bir değer ataması yapabilirsiniz.
 */

/**
var user1 = "Fatih Sultan Mehmed";
var id1 = 1453;
var message = "Ya ben İstanbul'u alırım, Ya da İstanbul beni!";
console.log(user1);
console.log(id1);
console.log(message);
console.log("***********************************************");

let user2 = "Süheyl"
let id2 = 42;
let message2 = "Bilgisayar Mühendisi"
console.log(user2);
console.log(id2);
console.log(message2);
*/
