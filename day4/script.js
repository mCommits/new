/* let a = new String("Heelo")
let b = "Heelo"

if (a == b) {
  console.log(
    "YEs"
  )
} else {
  console.log("No")
} */


/* const obj = {
  "name": "shad",
} */

/* console.log(obj);
document.write(obj);
const str = JSON.stringify(obj);
console.log(str)

document.write(str); */
/* obj.age = 21;
const str = JSON.stringify(obj);
console.log(str) */




//Array


/* let arr = [];
console.log(arr)

arr.push(23);

console.log(arr)


arr = [2, 4, 5, 4, 4, 4];
console.log(arr)

arr.sort();
arr[10] = 2;

console.log(arr)
console.log(typeof (arr)) */



/* const ob = {
  "name": "shadman",
  "lname": "ahmed",
} */

/*

const arr = [1, 24, 4, 4, 4];

console.log(Array.isArray(arr)) */


/* function checkIfObject(obj) {
  return (Array.isArray(obj));
}

let res = checkIfObject([1, 3, 3, 3]);
if (res == true) console.log("It is an array")
else console.log("Not an array") */



/* const jsonmaker = JSON.stringify(ob);
console.log(jsonmaker)
document.write(jsonmaker)
let arr2 = [1, 3, 4, 5]
const x = {
  "name": "shadman",
  age: 22,
} */
/* arr2.forEach(element => {
  console.log(
    element
  )

});
*/
/* x.forEach(element => {
  console.log(element)
}); */

/* let arr2 = [1, 2, 2, 4, 5, 6, , 3]
const x = {
  "name": "shadma",
  age: 12,
}
for (let i of arr2) {
  console.log(i)
}

for (let i in x) {
  console.log(i)
} */




//DOM 

//ye ek api hai jo js provide karta hai html and css modify karne ke liye 


/* console.log(
  window
)
*/


/* const res = document.getElementById('ht1')
console.log(res) */



/* const res = document.querySelectorAll('h3.c1')
const res2 = document.querySelectorAll('div>h3')
console.log(res)
console.log(res2) */




/* const res = document.getElementById("ht1")
res['innerHTML'] = "PEWMEWDEW";

const res2 = document.getElementsByTagName("div")


res2[0].innerText = "Heelo world"
res2[0].innerHTML = "<h1>Heelo world</h1>"
console.log(res2)




*/





const ne = document.createElement("h3")
ne.innerText = "Konichiwa MF"
document.body.appendChild(ne)
const firrstDiv = document.getElementById("ht2")
console.log(firrstDiv)
firrstDiv.appendChild(ne);
