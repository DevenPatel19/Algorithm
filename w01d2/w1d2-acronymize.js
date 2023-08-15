

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";


function acronymize(str) {
    var arr = str.split(" ");
    var newStr = "";

    for (var i = 0; i < arr.length; i++){
        if (arr[i].length > 0) {
            // Edge Case: Checks for spaces in string
            newStr += arr[i][0].toUpperCase();
        }
    }
    return newStr;

}
// console.log(acronymize(str1));
// console.log(acronymize(str2));
// console.log(acronymize(str3));
// console.log(acronymize(str4));

function acronymize2(str) {
    var newStr = "";
    newStr += str[0].toUpperCase();
    for (var i = 0; i < str.length; i++){
        if (str[i] == " ") {
            newStr += str[i + 1].toUpperCase();
        }
    }
    // Edge Case
    var finalStr = "";
    for(var i = 0; i < newStr.length; i++){
        if (newStr[i] != " ") {
            finalStr += newStr[i];
        }
    }
    return finalStr
}

console.log(acronymize2(str1));
console.log(acronymize2(str2));
console.log(acronymize2(str3));
console.log(acronymize2(str4));