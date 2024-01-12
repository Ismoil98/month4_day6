// Array1
// let Level2 = []
// function getLevel2(n) {
//     for (let i=0; i<n; i++){
//         Level2[i]=Math.pow(2,i+1)
//     }
//     return Level2
// }
// let i = 5
// let x = getLevel2(i)
// console.log(x)



// Array2
// let n = 5
// let A = 2
// let B = 3
// let Arr = []
// Arr[0] = A
// Arr[1] = B
// let S=A+B
// for (let i=2; i<n; i++){
//     Arr[i] = S
//     S += Arr[i]
// }
// console.log(Arr);



// Array3
// let n = +prompt('n=')
// let Arr = []
// for (let i=0; i<n; i++) {
//     Arr[i]=+prompt(`${i} element:`)
// }
// console.log(Arr);
// console.log(Arr.reverse());



// Array4
// let Arr = [4, 9, 7, 8, 6, 5]
// let s = 0
// for (let i=0; i<Arr.length; i++) {
//     // console.log(i);
//     if (Arr[i] % 2 == 1) {
//         console.log(Arr[i]);
//         s++
//     }
// }
// console.log(`Toq elementlar soni ${s}`);



// Array5



// Array6
// let n = +prompt('n=')
// let Arr = []
// for (let i=0; i<n; i++) {
//     Arr[i] = +prompt()
// }
// console.log(Arr);
// for (let i=0; i<=n; i+=2) {
//     console.log(Arr[i]);
// }



// Array7
// let n = +prompt('n=')
// let Arr = []
// for (let i=0; i<n; i++) {
//     Arr[i] = +prompt()
// }
// console.log(Arr);
// let newArr = Arr.reverse()
// for (let i=0; i<=n; i+=2) {
//     console.log(newArr[i]);
// }




// Array8
// let n = +prompt('n=')
// let Arr = []
// for (let i=0; i<n; i++) {
//     Arr[i] = +prompt()
// }
// console.log(Arr);
// for (let i=0; i<=n; i+=2) {
//     console.log(Arr[i]);
// }
// for (let i=1; i<=n; i+=2) {
//     console.log(Arr[i]);
// }


// Array9
// let n = +prompt('n=')
// let Arr = []
// for (let i=0; i<n; i++) {
//     Arr[i] = +prompt()
// }
// console.log(Arr);
// for (let i=0; i<=n; i+=2) {
//     console.log(Arr[i]);
// }
// let newArr = Arr.reverse()
// for (let i=1; i<=n; i+=2) {
//     console.log(newArr[i]);
// }



// Array10
function displayArrayElements(arr) {
    let n = arr.length()
    
}

let result = displayArrayElements(90, 91, 92, 93, 94, 95, 96, 97, 98, 99)

// Array11
// let N = +prompt('N=')
// let K = +prompt('K=')
// let L = +prompt('L=')
// let s = 0
// let arr = []
// function rangeOutSumm(N, K, L) {
//     for (let i=0; i<N; i++) {
//         arr[i]=+prompt(`${i+1}-array qiymati:`)
//     }
//     console.log(arr);
//     console.log(`K=${K}`);
//     console.log(`L=${L}`);
//     arr.splice(K,L)
//     for (i of arr) {
//         s+=i
//     }
//     console.log(`Yeg'indi: ${s}`);
// }
// rangeOutSumm(N, K, L);



// Array12
// let arr = [10, false, "", "Abdulaziz", null]
// let arrTr = []
// let arrFl =[]
// for (let i=0; i<=arr.length-1; i++) {
//     if (arr[i]) {
//         arrTr.push(arr[i])
//     } else {
//         arrFl.push(arr[i])
//     }
// }
// console.log(arr);
// console.log(arrTr);
// console.log(arrFl);



// Array13
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// let min = arr[0];
// for (let i=2; i<n; i+=2) {
//     if(min>arr[i]) {
//         min = arr[i]
//     }
// }
// console.log(min);



// Array14
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// let max = arr[1];
// for (let i=3; i<n; i+=2) {
//     if(max<arr[i]) {
//         max = arr[i]
//     }
// }
// console.log(max);



// Array15
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// let max
// for (let i=1; i<n-1; i++) {
//     if (arr[i-1]<max && max>arr[i+1]) {
//         max = arr[i]
//     }
// }
// console.log(max);



// Array16
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// let R = +prompt()
// console.log(arr);
// for(let i=0; i<n; i++) {
//     if((arr[i] == R-1) || (arr[i] == R+1)) {
//         console.log(arr[i]);
//     }
// }



// Array17 
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// let max2 = arr[0] + arr[1]
// for (let i=2; i<n; i++) {
//     if ((arr[i-1]+arr[i]) > max2) {
//         max2 = arr[i-1]+arr[i]
//     }
// }
// console.log(max2);



// Array18
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// for(let i=0; i<n; i++) {
//     for(let j=i+1; j<n; j++) {
//         if(arr[i]==arr[j]) {
//             console.log(arr[i], `indeksi ${i}`);
//             console.log(arr[j], `indeksi ${j}`);
//         }
//     }
// }



// Array19



// Array20
// let n = +prompt('n=')
// let arrA = []
// for (let i=0; i<n; i++) {
//     arrA[i] = +prompt(`${i}-element`)
// }
// console.log(arrA);
// let arrB = []
// for (x of arrA) {
//     if (x % 2 == 0) {
//         arrB.push(x)
//     }
// }
// console.log(arrB);



// Array21
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// let k = +prompt('k=')
// for (let i=0; i<n; i++) {
//     arr[i] = arr[i] * k;
// }
// console.log(arr);



// Array22
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// let arrA = arr.splice(n/2, n)
// let arrB = arrA.concat(arr)
// console.log(arrB);



// Array23
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// let arrNew = arr.reverse()
// for (let i=0; i<n; i++) {
//     arr[i]=arrNew[i]
// }
// console.log(arrNew);



// Array24
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// let max = arr[0]
// let min = arr[0]
// for (let i=1; i<n; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
//     if(min > arr[i]) {
//         min = arr[i]
//     }
// }
// let start1 = arr.indexOf(min)
// let end1 = arr.lastIndexOf(max)
// let x = arr.fill(0, start1, end1)
// console.log(x);
// console.log(arr);



// Array25



// Array29 
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// function getElementsOneTime(arr) {
//     let arrNew = []
//     let s=1;
//     for (let i=0; i<n; i++) {
//         for(let j=i+1; j<n; j++) {
//             if(arr[i]==arr[j]) {
//                 s++
//             }
//         }
//         if(s == 1) {
//             arrNew.push(arr[i])
//         }
//     }
//     return arrNew
// }
// let x = getElementsOneTime(arr)
// console.log(x);

// Array30 
// let n = +prompt('n=')
// let arr = []
// for (let i=0; i<n; i++) {
//     arr[i] = +prompt(`${i}-element`)
// }
// console.log(arr);
// let k = +prompt('k=')
// function searchAllElements(arr, k) {
//     let ArrInn = []
//     for (let i=0; i<n; i++) {
//         if (arr[i]==k) {
//             ArrInn.push(i)
//         }
//     }
//     return ArrInn
// }
// let x = searchAllElements(arr, k)
// console.log(x);


alert("Salom USTOZ")