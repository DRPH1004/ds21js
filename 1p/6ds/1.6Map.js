function inicio(){
    t0 = performance.now();
}
function final(){
    t1 =  performance.now();
}
var i,j,ti,tt=0;
const map = new Map();
for(j=0; j<7; j++){
    inicio();
    for(i=0; i<100000; i++){
        map.set(i,"Name"+(Math.random()*10000).toFixed(0));
    }
    final()
    ti = t1-t0;
    tt = tt+ti;
}

console.log(map);

console.log(tt/7);
