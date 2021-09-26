//
// tringular numbers
//
function fibonacci(num){
     var a = 1, e = 0, temp;

     while (num >= 0){
         temp = a;
         a = a + e;
         e = temp;
         num--;
     }


     return e;
}

fibonacci
