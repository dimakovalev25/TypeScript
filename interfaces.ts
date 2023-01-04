// ts-node interfaces.ts

// type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };
// интерфейсы
// похожи на типы
// венгерская нотация!  IConfig

interface IConfig {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
}

interface IRole {
    role: boolean
}

interface IConfigWithRole extends IConfig, IRole {
    test: string
}

const serverConfig: IConfigWithRole = {
    protocol: 'http',
    port: 3000,
    role: false,
    test: 'foo',
}
//
// console.log(serverConfig);


//индексные свойства-------------------------------------------------
interface Styles {
    [key: string]: string
}

const styles: Styles = {
    pos: 'absolute',
    left: '50px',
}

let a: string = 'dd';


//необязательное свойство знаком ?
//readonly
// interface User {
//     readonly login: string;
//     password: string;
//     age?: number;
//     // age: number | undefined;
// }
//
// const user: User = {
//     login: 'g44',
//     password: 'kfygfrkygfr'
// }
//
// function sendUser(obj: User, age?: number) {
//     console.log(age?.toFixed())
// }

// user.login = 'f';



//readonly------------------------------------------------------------------
// const basicPorts: readonly number[] = [3000, 3001];
// const basicPorts: number[] = [3000, 3001];
// basicPorts[0] = 5;
// basicPorts.push(4);


// Enum ------------------------------------------------------------------------

enum Direction {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM
}

function frame (elem: string, dir: Direction): void{

}
// frame('id', Direction.RIGHT)




// Unknown ----------------------------------------------------------------------

// let smth: any;
// smth = 'str';
// let data: string[] = smth;
// data.find(e => e)

// let smt: unknown;
// smt = 'str';
// let dat: string[] = smt;
// dat.find(e => e)

const user = '{"name": "Jo", "email": "jo@example.com"}';

function safeParse(s:string):unknown {
    return JSON.parse(s)
}

const data = safeParse(user);
// console.log(data);


function fData(data: unknown):void {
    if (typeof data === "string"){
        console.log(data.toUpperCase())
    } else if (typeof  data === 'object' && data) {
        console.log(data)
    } else {
        console.error('ERROR!')
    }
}
const use = "ss";

// fData(data);
// fData(use);



