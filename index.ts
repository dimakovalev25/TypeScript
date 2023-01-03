// ts-node index.ts

const userData = {
    isData: true,
    age: 40,
    name: 'John',
}

function Brt(isData: boolean, age: number, name: string): string {
    if(isData === true) {
        return `Congratulations ${name} `
    } else {
        return `Sorry bro!`
    }
}

// const  Brtrr = (isData: boolean, age: number, name: string): string => {
//     if(isData === true) {
//         return `Congratulations ${name} `
//     } else {
//         return `Sorry bro!`
//     }
// }
//
// Brt(userData.isData, userData.age,'s' );

//
// const testtt: null = null;
// const testtt1: any = null;
// const testtt2: string = 'null';
// // const testtt3: number = 5;
// const testtt3: number = null;
//

//типизация объектов! засовываем в функцию----------------------------------------------------

const userDt = {
    isData: true,
    age: 40,
    name: 'John',
    mess: {
        error: 'error4'
    }
}

function Brtz(data: {
    isData: boolean,
    age: number,
    name: string
    mess:{error: string}

}): string {
    if (data.isData) {
        return `Congratulations ${data.name.toUpperCase()}!!`
    } else {
        return `Sorry bro!`
    }
}

// Brtz(userData);
// console.log(Brtz(userData));


//типизация массивов!--------------------------------------------------------


const dep: string[] = ['dev', 'design', 'mark'];
const department = dep[0];
const rep = dep.filter((d: string) => d !== 'dev');
// console.log(rep)

const num: number[] = [9, 2, 10];
const summ: number = num.reduce((e: number, z: number) => e + z, -21)
// console.log(summ)

const n: any[] = [1, 2, 'f'];
//массив массивов матрица
const number: number[][] = [[1, 2], [1]];
// dep.push(1);
dep.push('f');
// console.log(dep);



//hw
// const electricityUserData = {
//     readings: 95,
//     units: "kWt",
//     mode: "double",
// };
//
// const waterUserData = {
//     readings: 3,
//     units: "m3",
// };
//
// const elRate = 0.45;
// const wRate = 2;
//
// const monthPayments = [0, 0]; // [electricity, water]
//
// const calculatePayments = (elData, wData, elRate, wRate) => {
//     if (elData.mode === "double" && elData.readings < 50) {
//         monthPayments[0] = elData.readings * elRate * 0.7;
//     } else {
//         monthPayments[0] = elData.readings * elRate;
//     }
//
//     monthPayments[1] = wData.readings * wRate;
// };
//
// calculatePayments(electricityUserData, waterUserData, elRate, wRate);
//
// const sendInvoice = (monthPayments, electricityUserData, waterUserData) => {
//     const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${monthPayments[0]}€
//
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${monthPayments[1]}€`;
//
//     return text;
// };

//tuple кортежи!-------------------------------------------------------------

const userTuple: [boolean, number, string] = [true, 33, 'Jo'];

const rez: string[] = userTuple.map((t) => `${t} - data`)
// console.log(rez)

// userTuple[0] = 5;
// userTuple[5];
userTuple.push(60);
// console.log(userTuple)

const tuple: [boolean, number] = [true, 5];
const uple: [boolean, ...number[]] = [true, 5];
tuple[0] = false;
uple[2] = 5;
uple[3] = 5;
uple.push(6);
// console.log(uple);




//union--------------------------------------------------------------
const mess: string | number = 5;
const me: string[] | number[] = ['a'];
me.push('ff');
const mee: string[] | number[] = [5, 6];
mee.push(5);

function f(msg: string | number) {
    // console.log('g');
    // console.log(4)
}

f(55);

function met(msg: string | number): void{
    console.log(msg+'a');
}
// met('e')
// met(typeof 7)



//narrowing
//сужение типов---------------------------------------------

function ff(msg: string | number) {
    if (typeof msg === 'string') {
        console.log(msg.toUpperCase())
    } else {
        console.log(msg.toExponential())
    }
}
// ff(55);
// ff('sss');

function fff(msg: string[] | number) {
    if (Array.isArray(msg)) {
        msg.push('ff');
    } else {
        console.log(msg)
    }
}

const printe = (a: number | string, b: number) => {
    if(a === b) {
        console.log(a, b)
    }
}
const printe2 = (a: number[] | string) => {
    console.log(a.slice(0, 3))
}

const check = (r: {sys: number} | {user: number}):void =>{
    if ('sys' in r ) {
        console.log(r.sys);
    } else {
        console.log(r.user);
    }
}

function logH (x: string | Date) {
    if (x instanceof Date) {
        // console.log(x.getDate())
    }
}



//literal types----------------------------------------------------------


let user: 'key' = 'key';
// user = 'fg';
user = 'key';


let msg: 'hello' = 'hello';
msg='hello';
// msg='g';

function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
    console.log(`start on ${protocol}://${port}`)
    return 'Server started'
}
startServer('http', 3000);



//literal types
// делаем типа объекты в которые закидываем

type Animationw = 'ease' | 'ease-out' | 'ease-in';
function createD (
    id: Animationw = 'ease',
    name: string,
    dur: number,


): void {
    // console.log('e')
}


