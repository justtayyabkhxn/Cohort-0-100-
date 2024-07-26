const z = require("zod");

const checkNum = z.number();
const checkStr = z.string();
const checkArray = z.array();
const checkArrayNum = z.array(z.number());
const checkArrayArray = z.array(z.object());
const checkArrayStr = z.array(z.string());

const name = "Tayyab";
const pin = 7267;
const kidneys = [1, 2];
const arrarr = [[24, 32], [39, 45]];
const friends = ["Anas", "Rayyan"];

const fn = (obj, schema) => {
    const response = schema.safeParse(obj);
    if (response.success) console.log(obj + " gives a true");
    else console.log(obj+" gives error");
}
fn(name, checkStr);
fn(pin, checkStr);
fn(arrarr,checkArrayArray);
fn(kidneys,checkArrayNum);