<?php

class Node 
{
    public int $value;
    public ?Node $left = null;
    public ?Node $right= null;

    public function __construct(int $value)
    {
        $this->value = $value;
    }
}

class BST 
{
    public ?Node $head = null;

    public function addNode(int $value, ?Node $currentNode = null): void
    {
        if ($this->head == null)
        {
            $this->head = new Node($value);
            return;
        } 

        if( $currentNode == null){
            $currentNode = $this->head;
        } 

        if ( $value > $currentNode->value )
        {
            if( $currentNode->right == null) $currentNode->right = new Node($value);
            
            else $this->addNode($value, $currentNode->right);
        } 
        elseif ( $value < $currentNode->value)
        {
            if( $currentNode->left == null ) $currentNode->left = new Node($value);

            else $this->addNode($value, $currentNode->left);
        }
    }

    public function removeNode(int $val, ?Node $currentNode = null): void
    {
        if($currentNode == null) $currentNode = $this->head;

        if ( $currentNode->right->value == $val ){
            $nodeLeft = $currentNode->right->left;
            $nodeRight = $currentNode->right->right;
        
            if( $nodeLeft == null )
            {
                $currentNode->right = $nodeRight;
            }
            elseif ( $nodeRight == null)
            {
                $currentNode->right = $nodeLeft;
            }
            else 
            {

            }
        }
        elseif( $currentNode->left->value == $val ){
            $nodeLeft = $currentNode->left->left;
            $nodeRight = $currentNode->left->right;
        
            if( $nodeLeft == null )
            {

            }
            elseif ( $nodeRight == null)
            {

            }
            else 
            {

            }
        }

        if( $val > $currentNode->value )
        {
            $this->removeNode($val, $currentNode->right);
        }
        elseif ($val < $currentNode->value)
        {
            $this->removeNode($val, $currentNode->left);
        } 
        else 
        {
            $nodeLeft = $currentNode->left;
            $nodeRight = $currentNode->right;
        
            if( $nodeLeft == null )
            {

            }
            elseif ( $nodeRight == null)
            {

            }
            else 
            {

            }
        }
    }

    public function inOrder(?Node $currentNode = null): void
    {
        if($currentNode == null)
        {
            $currentNode = $this->head;
        }
        if($currentNode->left)
        {
            $this->inOrder($currentNode->left);
        }
        echo $currentNode->value . "\n";

        if($currentNode->right) $this->inOrder($currentNode->right);
    }
}


$bst = new BST();

$bst->addNode(4);
$bst->addNode(8);
$bst->addNode(3);
$bst->addNode(10);
$bst->addNode(11);
$bst->addNode(1);

// echo $bst->head->value;
// echo $bst->head->right->value;

$bst->inOrder();