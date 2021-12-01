class Node 
{
    constructor (value) 
    {
      this.value = value
      this.right = null
      this.left = null
    }
  }
  class Tree 
  {
    constructor () 
    {
      this.root = null
    }

    isEmpty () 
    {
      return this.root === null
    }

    add (value) 
    {
      if (this.isEmpty()) 
      {
        this.root = new Node(value)
        return
      }
  
      var aux = this.root
  
      while (aux) 
      {
        if (value < aux.value) 
        {
          if (aux.left) 
          {
            aux = aux.left
          } 
          else 
          {
            aux.left = new Node(value)
            return
          }
        } 
        else 
        { 
          if (aux.right) 
          {
            aux = aux.right
          } 
          else 
          {
            aux.right = new Node(value)
            return
          }
        }
      }
    }
  
     Print (value, node = this.root) 
     {
      if (!node) 
      {
        this.root = new Node(value)
        return
      }
  
      if (value < node.value) 
      {
        if (node.left) 
        {
          return this.Print(value, node.left)
        }
        node.left = new Node(value)
        return
      } else { 
        if (node.right) 
        {
          return this.Print(value, node.right)
        }
        node.right = new Node(value)
        return
      }
    }

    inOrder (node = this.root) 
    {
      if (!node) 
      {
        return
      }
      this.inOrder(node.left)
      console.log(node.value)
      this.inOrder(node.right)
    }

    preOrder (node = this.root) 
    {
      if (!node) 
      {
        return
      }
      console.log(node.value)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }

    postOrder (node = this.root) 
    {
      if (!node) 
      {
        return
      }
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.value)
    }
  }
  
  var tree = new Tree()
  var array = [5,2,3,-4,12,9,21,19,25]
  
  for (var i = 0; i < arr.length; i++) 
  {
    t.Print(array[i])
  }
  console.log()
  console.log("InOrder")
  tree.inOrder()
  console.log("PreOrder")
  tree.preOrder()
  console.log("PostOrder")
  tree.postOrder()
