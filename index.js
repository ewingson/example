//definition
function example(string)
{
//type-check
    if (typeof string !== "string") throw new TypeError("@ewingson/example wants a string!");
//initialization
    var newString = "";
//backwards-for-loop
    for (var i = string.length - 1; i >= 0; i--)
    {
//add character 
        newString += string[i];
    }
//return value
  return newString;
};
module.exports = example;
