//定义一个变量a，并且设置其类型为number
let a;
//给a赋值
a = 10;
a = 30;
// //当变量的类型声明之后，不可以通过赋值的形式将不同类型的值赋给该变量
// a = 'bugdr'
//给一个变量赋值为boolean类型，ts默认将这个变量的类型声明为boolean类型，
let b = false;
b = true;
// //报错
// b = 123
let z;
//sum(a: number,b: number)a和b都声明了类型为number，函数的返回值为number类型
function sum(a, b) {
    return a + b;
}
//number类型
let A = 6;
let B = 0xf00d;
let C = 0b1010;
//字符串类型
let D = '你好';
let E = 'bugdr';
let F = '学习TypeScript';
//boolean类型
let G = true;
let H = false;
//字面量，可以声明范围的类型
let I;
let J;
//any类型
let K;
K = 'bugdr';
K = 123;
//unknown类型
let L = 123;
L = 'bugdr';
//void类型
let M = undefined;
//
function Me(message) {
    throw new Error(message);
}
//对象
let object = {};
//数组
let N = ["123", "bugdr", "你好"];
let O = [1, 2, 3];
//固定长度的数组
//[类型,类型,类型],长度可控制
let x;
x = ["bugdr", 123];
//枚举，定义枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let d = Color.Green;
