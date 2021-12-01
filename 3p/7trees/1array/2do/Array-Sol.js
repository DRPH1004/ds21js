class Node
{
    constructor(data,left=null, right=null)
    {
        this.data=data
        this.left=left
        this.right=right
    }
}
let array=[]
let base=0
let base1=0
let base2=0

function Add(data)
{
    node=new Node(data)
    if(array[base]==undefined)
    {
        array[base]=(node)
    }
    else
    {
        base1++
        if(base1==1)
        {
            base2++
            (array[base].left)=(node)
            array[base2]=(node)
        }
        if(base1==2)
        {
            (array[base].right)=(node)
            base2++
            (array[base2])=(node)
            base1=0
            base++
        }
    }
}
Add(8)
Add(7)
Add(9)
Add(4)
Add(2)
Add(0)
console.log(array)
