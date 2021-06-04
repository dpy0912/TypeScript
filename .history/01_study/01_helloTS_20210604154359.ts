//定义一个变量a，并且设置其类型为number
let a: number;

//给a赋值
a = 10;
a = 30;

// //当变量的类型声明之后，不可以通过赋值的形式将不同类型的值赋给该变量
// a = 'bugdr'

//给一个变量赋值为Boolean类型，ts默认将这个变量的类型声明为Boolean类型，
let b = false;

b = true
// //报错
// b = 123

let z: number;

//sum(a: number,b: number)a和b都声明了类型为number，函数的返回值为number类型
function sum(a: number,b: number): number{
    return a + b;
}

let A: number = 6;
let B: number = 0xf00d;
let C: number = 0b1010;


let D: string = '你好';
let E: string = 'bugdr';
let F: string = '学习TypeScript';

let G: boolean = true;
let H: boolean = false;

let I: 1 | 2 | 3;
let J: '我是' | 'bugdr';