//
// tringular numbers
//

/*
var triangular = function (value) {
    var abs = Math.abs(value);
    return ((abs / 2) * (abs + 1)) * (abs / value) || 0;
}

// Testing code.
var testTriangular = function () {
    var testTriangularValue = function (arg, value, id) {
        console.log(triangular(arg) === value ? "Test " + id + " passed." : "Test " + id + " failed.");
    }

    
    console.log(testTriangularValue(3, 6, 1));
    console.log(testTriangularValue(-3, -6, 2));
    console.log(testTriangularValue(0, 0, 3));
    console.log(testTriangularValue(4, 10, 4));
    console.log(testTriangularValue("hello", 0, 5));
    
}

*/
function drawTriangle(t){

    for (let i=1; i<= t; i++)
    {
    
        for (let j=1; j<=i; j++)
        {
            console.log(j+" ");
        }
    
        console.log("\n");
    }
    
    }
    let t = 5 ;
    drawTriangle(t)


