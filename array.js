// let a=[1,2,3,4,5];
// let b=["a","b","c","d"];
// let d=["third array"];
//array methods
// console.log(a.join(" , "));
// console.log(b.join(" , "));


//pop method
// console.log(a.pop());
// console.log(a.join("*"));


//push method
// a.push("akash"));
// console.log(a.push("x"));  // new array length is also printed 
// console.log(a.join("*"));


//shifting elements
// a.shift();
// console.log(a.join(" * "));
// a.unshift(1);
// console.log(a.join(" $ "));
// console.log(a.unshift(0));   // new array length is also printed
// console.log(a.join(" & "));



// changing elements
// a[2]="changed element";
// a[a.length]= "add extra element";
// console.log(a.join(" * "));




// Delete elements
// delete a[1];
// console.log(a.join(" * "));


//splicing  an array
// console.log(a.splice(2,1,6,7,));
// a.splice(0,1); //using splice to remove elements
// console.log(a.join(" * "));


//merging arrays

// let c = a.concat(b,d);
// console.log(c.join(" * "));


//slicing an array
// let x = a.slice(2);
// let y = a.slice(0,4);
// console.log(y.join(" * "));


//array methods to string
// console.log(a.toString());




// 1.map
// 2.filter
// 3.forEach
// 4.find
// 5.includes
// 6.sort

// map
// console.log(a.map(Math.sqrt)); //square root of every element in an array 

// let newArray = a.map(A); // multiply every element in an array using map
// function A(num){
//     return num*10;
// }
// console.log(newArray.join(" * "));

// let person = [
//     {first: "akash",last:"G"},{first: "avinash",last:"G"}
// ];
// let name = person.map(B);
// function B(item){
// }


//filter and map
// let a=[-1,-2,-3,-4,0,1,2,3,4,5];
// const item = a
//     .filter( n => n>0)
//     .map(m => ({increased_number: m+10}))
//     .filter(n => n.increased_number<14)
//     .map(x => x.increased_number*10)

// console.log(item);





    