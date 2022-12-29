// ts-node index.ts
// let yData: boolean = true;
// let numData: number = 5;
// const namesData: string = 'ivan';

// function logY(y: boolean, num: number, names: string): void {
//     if (y) {
//         console.log(`${names.toUpperCase()}: ${num + 1}`);
//     }
// }
//
// logY(yData, numData, namesData)
//
// function t(name: string, num: number): string {
//     return name;
// }

// const currRate: string = "1.05";
// // const currRate: number = 1.05;
//
// const fetchCurr = (response: string): number => {
//     const data: number = JSON.parse(response);
//     return data;
// };
//
// function transferEurToUsd(available: boolean, amount: number, commission: number): void {
//     if (available) {
//         // let res: number = fetchCurr(currRate) * amount * commission;
//         let res: number = fetchCurr(currRate) * amount * commission;
//         console.log(res);
//         // Или запись в элемент на странице вместо консоли
//     } else {
//         console.log("Сейчас обмен недоступен");
//     }
// }

// transferEurToUsd(true, 500, 1.05);

let id: symbol = Symbol('id');

const data = {
    [id]: 1
}
console.log(data);