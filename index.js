const addDays = require("date-fns/addDays");
let days = 20;
const add = (days) => {
  const result = addDays(new Date(2020, 22, 10), days);
  let date = result.getDate();
  let month = result.getMonth() + 1;
  let year = result.getFullYear();
  let res = `${date}-${month}-${year}`;
  return res;
};
module.exports = add;
console.log(add(days));
