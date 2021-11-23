function Queue()
{
    this.DataStore=[]
    this.enqueue=enqueue
    this.dequeue=dequeue
    this.front=front
    this.back=back
    this.toString=toString
    this.empty=empty
}
function enqueue(element)
{
    return this.DataStore.push(element)
}
function dequeue()
{
    return this.DataStore.shift()
}
function front()
{
    return this.DataStore[0]
}
function back()
{
    return this.DataStore[this.DataStore.length - 1]
}
function toString()
{
    var retStr=""
    for (var i=0;i<this.DataStore.length;i++)
    {
        retStr+=this.DataStore[i]+"\n"
    }
    return retStr
}
function empty()
{
    if(this.DataStore.length==0)
    {
        return true
    }
    else
    {
        return false
    }
}
//Program Testing
var qtest=new Queue()
qtest.enqueue("Creel, Chihuahua")
qtest.enqueue("Bernal, Querétaro")
qtest.enqueue("Pátzcuaro, Michoacán")
console.log(qtest.toString())
qtest.dequeue()
console.log(qtest.toString())
console.log("Front of Queue: "+qtest.front())
console.log("Back of Queue: "+qtest.back())
