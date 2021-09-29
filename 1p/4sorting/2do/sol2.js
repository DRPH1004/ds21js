var start = new Date().getTime();

  var arr = [];
  
  for (var i = 0; i < 10000; ++i) {
    arr[i] = Math.floor(Math.random() * 101);
  }
  

  for(var i=0; i < arr.length; i++){
    var minimo = i;
      for(var j=i+1; j < arr.length; j++){
          if (arr[minimo]>arr[j]){
              minimo=j;
          }

      }

    var temp = arr[i];
    arr[i]=arr[minimo];
    arr[minimo]=temp;
  }

console.log(arr);

var stop = new Date().getTime();
  var elapsed = stop - start; 
  console.log("The elapsed time was: " + elapsed +" milliseconds.");


