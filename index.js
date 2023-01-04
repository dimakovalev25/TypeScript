// ts-node index.ts
var userData = {
    isData: true,
    age: 40,
    name: 'John'
};
function Brt(isData, age, name) {
    if (isData === true) {
        return "Congratulations ".concat(name, " ");
    }
    else {
        return "Sorry bro!";
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
var userDt = {
    isData: true,
    age: 40,
    name: 'John',
    mess: {
        error: 'error4'
    }
};
function Brtz(data) {
    if (data.isData) {
        return "Congratulations ".concat(data.name.toUpperCase(), "!!");
    }
    else {
        return "Sorry bro!";
    }
}
// Brtz(userData);
// console.log(Brtz(userData));
//типизация массивов!--------------------------------------------------------
var dep = ['dev', 'design', 'mark'];
var department = dep[0];
var rep = dep.filter(function (d) { return d !== 'dev'; });
// console.log(rep)
var num = [9, 2, 10];
var summ = num.reduce(function (e, z) { return e + z; }, -21);
// console.log(summ)
var n = [1, 2, 'f'];
//массив массивов матрица
var number = [[1, 2], [1]];
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
var userTuple = [true, 33, 'Jo'];
var rez = userTuple.map(function (t) { return "".concat(t, " - data"); });
// console.log(rez)
// userTuple[0] = 5;
// userTuple[5];
userTuple.push(60);
// console.log(userTuple)
var tuple = [true, 5];
var uple = [true, 5];
tuple[0] = false;
uple[2] = 5;
uple[3] = 5;
uple.push(6);
// console.log(uple);
//union--------------------------------------------------------------
var mess = 5;
var me = ['a'];
me.push('ff');
var mee = [5, 6];
mee.push(5);
function f(msg) {
    // console.log('g');
    // console.log(4)
}
f(55);
function met(msg) {
    console.log(msg + 'a');
}
// met('e')
// met(typeof 7)
//narrowing
//сужение типов---------------------------------------------
function ff(msg) {
    if (typeof msg === 'string') {
        console.log(msg.toUpperCase());
    }
    else {
        console.log(msg.toExponential());
    }
}
// ff(55);
// ff('sss');
function fff(msg) {
    if (Array.isArray(msg)) {
        msg.push('ff');
    }
    else {
        console.log(msg);
    }
}
var printe = function (a, b) {
    if (a === b) {
        console.log(a, b);
    }
};
var printe2 = function (a) {
    console.log(a.slice(0, 3));
};
var check = function (r) {
    if ('sys' in r) {
        console.log(r.sys);
    }
    else {
        // console.log(r.user);
    }
};
function logH(x) {
    if (x instanceof Date) {
        // console.log(x.getDate())
    }
}
//literal types----------------------------------------------------------
// let user: 'key' = 'key';
// // user = 'fg';
// user = 'key';
var msg = 'hello';
msg = 'hello';
// msg='g';
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        // console.log(`start on ${protocol}://${port}`)
    }
    else {
        console.error('Server not started');
    }
    return "Server started";
}
startServer('http', 3000);
//literal types
// делаем типа объекты в которые закидываем
// type Animationw = 'ease' | 'ease-out' | 'ease-in';
//
// function createD(
//     id: Animationw = 'ease',
//     name: string,
//     dur: number,
// ): void {
//     // console.log('e')
// }
function createAnimation(id, animName, timingFunc, duration) {
    // console.log(`${animName} ${timingFunc} ${duration}`)
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
    //     console.log(`${animName} ${timingFunc} ${duration}`)
    //     elem.style.animation = `${animName} ${timingFunc} ${duration}`;
    // }
}
function createAnimat(id, timingFunc) {
    // console.log(` ${id} - ${timingFunc} `);
}
createAnimat(5, 'ease');
// Объектные литералы и аннотации функций
// и оператор пересечения!
// type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };
// type Role = { role: string };
// type ConfigWithRole = Config & Role;
//
//
// const mainConfig: ConfigWithRole = {
//     role: 'admin',
//     protocol: 'http',
//     port: 3000,
// }
// console.log(mainConfig)
// const serverConfig: Config = {
//     protocol: 'http',
//     port: 3000,
// }
// const backConfig: Config = {
//     protocol: 'https',
//     port: 3001
// }
