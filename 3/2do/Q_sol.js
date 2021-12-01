function Queue()
{
    this.LinkedQ= new Linked()
    this.enqueue=enqueue
    this.first=first
    this.dequeue=dequeue
    this.front=front
    this.back=back
    this.toString=toString
    this.empty=empty
}
function Linked()
{
    this.head=head
    this.next=null  
}

function enqueue(element)
{
    if(this.first=null)
    {
        this.first= new Linked(element)
    }
    else
    {
        current=this.first
        while(current.next)
        {
            current=current.next
        }
        current.next=new Linked(element)
    }
    this.LinkedQ.push(element)
}
function dequeue()
{
    this.LinkedQ.shift()
}
function front()
{
    this.LinkedQ
}

function back(element)
{
    this.LinkedQ.push(element)
}
function ToString(element)
{
    this.LinkedQ.push(element)
}