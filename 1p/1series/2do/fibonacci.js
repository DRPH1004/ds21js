function printFibonacciNumbers(n)
{
    var f1 = 0, f2 = 1, i;
 
    if (n < 1)
        return;
    console.log(f1 + " ");
    for (i = 1; i < n; i++) {
        console.log(f2 + " ");
        var next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
}
 
// Driver Code

console.log(printFibonacciNumbers(7));
