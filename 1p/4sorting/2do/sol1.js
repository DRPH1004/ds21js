var start = new Date().getTime();

const bubbleSort = arr => {
    const l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
      }
    }
  
    return arr;
  };
  
  var arr = [];
  for (var i = 0; i < 10000; ++i) {
    arr[i] = Math.floor(Math.random() * 101);
  }
  
  const result = bubbleSort(arr);
  console.log(result);

  var stop = new Date().getTime();
  var elapsed = stop - start; 
  console.log("The elapsed time was: " + elapsed +" milliseconds.");

