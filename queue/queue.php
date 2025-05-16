<?php

use Dom\Node as DomNode;

class Node{

    public $value;
    public $next;
    public $prev;

    function __construct(string $value)
    {
        $this->value = $value;
        $this->next = null;
        $this->prev = null;
    }
}

class Queue{

    private ?Node $head;
    private ?Node $tail;

    function __construct()
    {
        $this->head = null;
        $this->tail = null;    
    }

    public function enqueue(string $val){
        $node = new Node($val);

        if ($this->head == null) {
            $this->head = $node;
            return;
        }
        elseif ($this->head && $this->tail == null) {
            $this->tail = $node;
            $this->head->next = $this->tail;
            $this->tail->prev = $this->head;
            return;
        }
        else {
            $node->prev = $this->tail;
            $this->tail->next = $node;
            $this->tail = $node;
        }
    }
    
    
    public function dequeue(string $needle):string{
        $out = "";

        return $out;
    }

    public function printQueue(){

        $currentNode = $this->head;
        
        while($currentNode){
        
            echo $currentNode->value . '->';
            $currentNode = $currentNode->next;
        }
    }
}

$queue = new Queue();

$queue->enqueue('foo');
$queue->enqueue('bar');
$queue->enqueue('foobar');
$queue->enqueue('eggs');
$queue->enqueue('spam');

$queue->printQueue();