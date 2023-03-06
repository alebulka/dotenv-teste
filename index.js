require('dotenv').config()

const foo = process.env.FOO;
const bar = process.env.BAR;
const foobar = process.env.FOOBAR;
const escaped_dollar_sign = process.env.ESCAPED_DOLLAR_SIGN;

console.log(foo);
console.log(bar);
console.log(foobar);
console.log(escaped_dollar_sign);
