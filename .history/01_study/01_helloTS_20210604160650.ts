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

//number类型
let A: number = 6;
let B: number = 0xf00d;
let C: number = 0b1010;

//字符串类型
let D: string = '你好';
let E: string = 'bugdr';
let F: string = '学习TypeScript';

//boolean类型
let G: boolean = true;
let H: boolean = false;

//字面量，可以声明范围的类型
let I: 1 | 2 | 3;
let J: '我是' | 'bugdr';

//any类型
let K: any;
K = 'bugdr';
K = 123;

//unknown类型
let L: unknown = 123;
L = 'bugdr';

//void类型
let M: void = undefined;

//
function Me(message: string): never {
    throw new Error(message);
  }

//对象
let object: object = {};

//数组
let N: string[] = ["123","bugdr","你好"];
let O: Array<number> = [1, 2, 3];

//固定长度的数组
//[类型,类型,类型],长度可控制
let x: [string, number];
x = ["bugdr", 123]; 

//枚举，
enum Color {
    Red,
    Green,
    Blue,
  }
  let d: Color = Color.Green;
  
