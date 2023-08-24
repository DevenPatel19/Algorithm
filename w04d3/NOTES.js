// what is recursion?
// A function that calls itself

function doStuff(){
    console.log("hello");
    return "hi"
    doStuff()
}

// would cause infinite loop and leads to stack overflow error

// The three laws of Recursion






///////////////////////////////////////////////////

// every for loop and while loop you can write recursively and vice versa

// 5 -> 4 -> 3 -> 2 -> 1 -> 0
// 3 -> 2 -> 1 -> 0
// 1 -> 0

function fun(n){
    // 1. base case
    if (n >= 0) {
        fun(n-1)
        console.log(n)
    }
}

fun(5)