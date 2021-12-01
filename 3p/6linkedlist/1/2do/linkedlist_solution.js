class Node
{
    constructor(element)
    {
        this.data=element
        this.next=null
    }
}

var head
function Add(element)
{
    var node= new Node(element)
    node.next=head
    head=node
}
function Contains(head,v)
{
    if(head==null)
    {
        return false
    }
    if(head.data==v)
    {
        return true
    }
    return Contains(head.next,v)
}
Add(44)
Add(78)
Add(98)
Add(12)
Add(4)
Add(147)
Contains(head,14)
