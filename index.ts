// ts-node index.ts

const userData = {
    isData: true,
    age: 40,
    name: 'John',
}

// function Brt(isData: boolean, age: number, name: string): string {
//     if(isData === true) {
//         return `Congratulations ${name} `
//     } else {
//         return `Sorry bro!`
//     }
// }

//типизация объектов!

function Brtz(data: {
    isData: boolean,
    age: number,
    name: string

}): string {
    if (data.isData) {
        return `Congratulations ${data.name.toUpperCase()}!!`
    } else {
        return `Sorry bro!`
    }
}

// Brtz(userData);
// console.log(Brtz(userData));


//типизация массивов!


const dep: string[] = ['dev', 'design', 'mark'];
const num: number[] = [1, 2];
const n: any[] = [1, 2,'f'];
//массив массивов матрица
const number: number[][] = [[1, 2],[1]];
// dep.push(1);
dep.push('f');
console.log(dep);


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




const electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};

const waterUserData = {
    readings: 3,
    units: "m3",
};

const elRate = 0.45;
const wRate = 2;

const monthPayments = [0, 0]; // [electricity, water]

const calculatePayments = (elData, wData, elRate, wRate) => {
    if (elData.mode === "double" && elData.readings < 50) {
        monthPayments[0] = elData.readings * elRate * 0.7;
    } else {
        monthPayments[0] = elData.readings * elRate;
    }

    monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (monthPayments, electricityUserData, waterUserData) => {
    const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

    return text;
};
