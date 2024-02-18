using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BST
{
    internal class BST
    {
        Node<int> Head;

        public void AddNode(int nodeValue)
        {
            if (Head == null)
            {
                Node<int> newNode = new Node<int>(nodeValue);
                Head = newNode;
                return;
            }
            AddNode(nodeValue, Head);
        }
        public void AddNode(int nodeValue, Node<int> currentNode = null)
        {
            Node<int> newNode = new Node<int>(nodeValue);

            if (newNode.Value < currentNode.Value)
            {
                if (currentNode.Left == null)
                {
                    currentNode.Left = newNode;
                    return;
                }
                AddNode(nodeValue, currentNode.Left);
            }

            if (newNode.Value > currentNode.Value)
            {
                if (currentNode.Right == null)
                {
                    currentNode.Right = newNode;
                    return;
                }
                AddNode(nodeValue, currentNode.Right);
            }
        }

        public int DeleteNode(int nodeValue, Node<int> currentNode = null)
        {
            if (currentNode == null)
            {
                currentNode = Head;
            }

            if (nodeValue < currentNode.Value)
            {
                if (currentNode.Left.Value == nodeValue)
                {
                    Node<int> nodeToDelete = currentNode.Left;

                    if (nodeToDelete.Left == null && nodeToDelete.Right == null)
                    {
                        currentNode.Left = null;
                    }
                    if (nodeToDelete.Left == null || nodeToDelete.Right == null)
                    {
                        var childNode = nodeToDelete.Left;
                        if (childNode == null) { childNode = nodeToDelete.Right; }

                        nodeToDelete.Right = null;
                        nodeToDelete.Left = null;

                        currentNode.Left = childNode;
                    }
                }
                return DeleteNode(nodeValue, currentNode.Left);
            }

            if (nodeValue > currentNode.Value)
            {
                if (currentNode.Right.Value == nodeValue) { }
                return DeleteNode(nodeValue, currentNode.Right);
            }
            return currentNode.Value;
        }

        //private Node<int> FindParent(int targetValue, Node<int> currentNode)
        //{

        //}
    }

    class Node<T>
    {
        public T Value;
        public Node<T> Left;
        public Node<T> Right;

        public Node(T Value) { }
    }
}
