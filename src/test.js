const lg = console.log;


let arr1 = [1,2,3];

let arr3 = arr1;
let arr2 = [...arr1];


lg(arr1 == arr3);

lg(arr1 == arr2);

let arr4 = ['johsy','mincj','love'];

arr4.map((val,i) => {
    lg(`${i}번째 값은 ${val} 이다`);
})