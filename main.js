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
// max = 0
// for (let i=1; i<n; i++) {
//     if (arr[i-1]>max && max<arr[i+1]) {
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



